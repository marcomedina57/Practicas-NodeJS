const {response, request} = require('express');

const usuariosGet =  (req = request, res = response) => {

    const {q, apikey, page = 1, limit = 10} = req.query;

            res.json({
                msg: 'get API - controlador',
                q,
                page,
                limit
            })
        };

const usuariosPut = (req, res = response) => {

    const id = req.params.id;
            res.json({
                msg: 'put API',
                id
            })
        }

const usuariosPost =  (req, res) => {
            
            const {nombre, edad, sexo} = req.body;

            res.json({
                msg: 'post API',
                nombre,
                sexo
            })
        };

const usuariosDelete = (req, res) => {
            res.json({
                msg: 'delete API'
            })
        }


module.exports = {
    usuariosGet,
    usuariosPut,
    usuariosPost, 
    usuariosDelete
}

