const fs = require('fs');

const crearArchivo = (base = 5, listar, hasta) => {

    let salida = '';

    for(let i = 1; i <= hasta; i++){
        salida += `
        ${base * i} 
        `;
    }
    return new Promise((resolve, reject) => {

        if(listar){
            resolve(salida);
        }

        try {
            fs.writeFileSync('./salida/tabla-57a.txt', salida);
            resolve('sii creado bien');
        } catch(e) {
            reject('Error');
        }
    

    })
}

module.exports = {
    crearArchivo: crearArchivo
}