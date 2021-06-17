const {Router} = require('express');
const { check } = require('express-validator');
const { validarCampos } = require('../middlewares/validar-campos');


const router = Router();

// /api/categorias

//Obtener las categorias - publico
router.get('/', (req, res) => {
    res.json('get');
});

//Obtener una categoria - publico
router.get('/', (req, res) => {
    res.json('get');
});
//Crear categoria - privado - con un token valido
router.post('/', (req, res) => {
    res.json('post');
});
//Actualizar - privado - cualquiera con token valido
router.put('/:id', (req, res) => {
    res.json('put');
});

//Borrar una categoria - Admin
router.delete('/:id', (req, res) => {
    res.json('delete');
});

module.exports = router;
 