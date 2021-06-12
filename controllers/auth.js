const { response } = require("express");
const bcryptjs = require('bcryptjs');
const Usuario = require("../models/usuario");
const { generarJWT } = require("../helpers/generar-jwt");

const login = async(req, res = response) => {

    const {correo, password} = req.body;


    try {

        //Verificar si el emai lexiste
        const usuario = await Usuario.findOne({correo});

        if (!usuario){
            return res.status(400).json({
                msg: 'Usuario/Contraseña incorrecto - correo'
            })
        }

        // Si el usuario esta activo
        if (!usuario.estado){
            return res.status(400).json({
                msg: 'Usuario/Contraseña incorrecto - estado'
            })
        }

        // Verificar la contraseña
        const validPassword = bcryptjs.compareSync(password, usuario.password);
        if (!validPassword){
            return res.status(400).json({
                msg: 'Mira la contraseña esta mal sii'
            })
        }
        //Generar el JWT
        const token = await generarJWT(usuario.id);


        res.json({
            usuario,
            token
        })

    }catch(error){
        return res.status(500).json({
            msg: 'Hable con el admin sii',
            error
        })
    }

}

module.exports = {
    login
}