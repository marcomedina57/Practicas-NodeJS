const Tarea = require("./tarea");



class Tareas {

    _listado = {};

    get listadoArr(){
        const listado = [];
        const arreglo  = Object.keys(this._listado);
        // .forEach(key => {
            
        //     // const tarea = this._listado[key];
        //     // listado.push(tarea);
        // });


        return arreglo;
    }

    constructor(){
        this._listado = {};
    }


    crearTarea(desc = ''){
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;

    }
}



module.exports = Tareas;