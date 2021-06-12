const {Router} = require('express');
const { check } = require('express-validator');
 
const {usuariosGet, usuariosPut , usuariosDelete, usuariosPost} = require('../controllers/user');
const { esRoleValido, existeEmail, existeUsuarioPorId } = require('../helpers/db-validators');
const { validarCampos } = require('../middlewares/validar-campos');

const router = Router();

 router.get('/', usuariosGet);

        router.put('/:id', [
                check('id', 'No es un ID valido').isMongoId(),
                check('id').custom(existeUsuarioPorId),
                validarCampos
        ], usuariosPut );

        router.post('/', [
                check('correo', 'El correo no es válido').isEmail(),
                check('nombre', 'El nombre es obligatorio').not().isEmpty(),
                check('password', 'El password es obligatorio y mas de 6 letras').isLength({min: 6}),
                // check('rol', 'El rol es incorrecto').isIn(['ADMIN_ROLE', 'USER_ROLE']),
                check('rol').custom(esRoleValido),
                check('correo').custom(existeEmail),
                validarCampos
        ],usuariosPost);

        router.delete('/:id', [
                check('id', 'No es un ID valido').isMongoId(),
                check('id').custom(existeUsuarioPorId),
                validarCampos
        ],usuariosDelete);


module.exports = router;