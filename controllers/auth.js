const { response } = require("express");
const bcryptjs = require('bcryptjs');
const Usuario = require("../models/usuario");
const { generarJWT } = require("../helpers/generar-jwt");
const { googleVerify } = require("../helpers/google-verify");

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

const googleSignin = async(req, res = response) =>{

    const {id_token} = req.body;
    try {


    const {correo, nombre, img} = await googleVerify(id_token);
    
    // validar correo
    let usuario = await Usuario.findOne({correo});

    if (!usuario){
        //Crear usuario
        const data = {
            nombre,
            correo,
            password: ':P',
            img,
            google: true
        };

        usuario = new Usuario(data);
        await usuario.save();
    }

    // Si el usuario en DB
    if (!usuario.estado){
        return res.status(401).json({
            msg: 'Hable con el administrador, usuario bloqueado'
        });


    }

    const token = await generarJWT(usuario.id);

    res.json({
        usuario,
        token
    })

    }catch(error){
        res.status(400).json({
            msg: 'Token de Google no reconocido',
            googleUser
        })
    }
}

module.exports = {
    login,
    googleSignin
}