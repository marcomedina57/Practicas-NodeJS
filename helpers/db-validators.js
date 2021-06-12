const Role = require("../models/Role");
const Usuario = require("../models/usuario");


const esRoleValido = async(rol = '') => {
    const existeRol = await Role.findOne({rol});
    if (!existeRol){
            throw new Error(`El rol ${rol} no está registado en la BD`);
    }
}

const existeEmail = async(correo = '') => {
    const existeEmail = await Usuario.findOne({correo});
    if (existeEmail){
        throw new Error(`El email ${correo} ya existe wey`);
    }
}
const existeUsuarioPorId = async(id) => {
    const existeUsuario = await Usuario.findById(id);
    if (!existeUsuario){
        throw new Error(`No mame ese no es una persona valida`);
    }
}

module.exports = {
    esRoleValido,
    existeEmail,
    existeUsuarioPorId
}