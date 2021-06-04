const fs = require('fs');

const guardarDB = (data) => {

    const archivo = './db/data.txt';
    fs.writeFileSync(archivo, data);
}



module.exports = {
    guardarDB
}