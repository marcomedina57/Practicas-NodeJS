const {response, request} = require('express');
const bcryptjs = require('bcryptjs');

const Usuario = require('../models/usuario');

const usuariosGet =  async(req = request, res = response) => {

    // const {q, apikey, page = 1, limit = 10} = req.query;
    const {limite = 5, desde = 0} = req.query;
    
    const resp = await Promise.all([
        Usuario.countDocuments(),
        Usuario.find({estado: true})
        .skip(Number(desde))
        .limit(Number(limite))

    ])


            res.json({
               resp
            })
        };

const usuariosPut = async(req, res = response) => {

    const {id} = req.params;
    const {_id, password, google, correo, ...resto} = req.body;

    // TODO validar contra base de datos
    if(password){
          //Encriptar la contraseña
          const salt = bcryptjs.genSaltSync();
          resto.password = bcryptjs.hashSync(password, salt);
    }

    const usuario = await Usuario.findByIdAndUpdate(id, resto);

            res.json({
                msg: 'put API',
                usuario
            })
        }

const usuariosPost =  async(req, res) => {

            
            const {nombre, correo, password, rol} = req.body;
            const usuario = new Usuario({nombre, correo, password, rol});

            //Encriptar la contraseña
            const salt = bcryptjs.genSaltSync();
            usuario.password = bcryptjs.hashSync(password, salt);
            //Guardar en BD
            await usuario.save();

            res.json({
                msg: 'post API',
                usuario
            })
        };

const usuariosDelete = async(req, res) => {

    const {id } = req.params;
    // Fisicamente lo borramos

    // const usuario = await Usuario.findByIdAndDelete(id);

    const usuario = await Usuario.findByIdAndUpdate(id, {
        estado: false
    });

    
            res.json({
                usuario
            })
        }


module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost, 
    usuariosDelete
}

