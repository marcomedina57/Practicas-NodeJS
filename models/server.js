const express = require('express');
const cors = require('cors');
const { dbConnection } = require('../database/config');


class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
   
        this.paths = {
            auth: '/api/auth',
            usuarios: '/api/auth',
            categorias: '/api/categorias'
        }

        // Conectar a base de datos
        this.conectarDB();

        //Middlewares
        this.middlewares();

        this.routes();
    }

    async conectarDB(){
        await dbConnection();
    }

    middlewares(){
        // CORS
        this.app.use(cors());

        // Lectura y parseo del body
        this.app.use(express.json());

        // Directorio Publico
        this.app.use(express.static('public'));
    }

    routes(){
        this.app.use(this.paths.auth, require('../routes/auth'));
        this.app.use(this.paths.usuarios, require('../routes/user'));
        this.app.use(this.paths.categorias, require('../routes/categorias'));
    }

    listen(){
        
        this.app.listen(this.port);
    }

}


module.exports = Server;