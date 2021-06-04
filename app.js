
const colors = require('colors');

const {
    inquireMenu, 
    inquirerMenu,
    leerInput,
    pausa} = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');
console.clear();

const main = async() => {
    console.log('Hola mundo');
    
            const tareas = new Tareas();
    let opt = '';
    do {
        

        // tareas._listado[tarea.id] = tarea;

        // console.log(tareas);
        // console.log(tarea);

        opt = await inquirerMenu();

       switch(opt) {
           case '1':
               const desc = await leerInput('Descripcion: ');
               tareas.crearTarea(desc);
               //crear opcion
            break;

            case '2':
                console.log(tareas.listadoArr[0]);
            break;
       }

       await pausa();

    } while(opt !== '0'){
        
    }

}



main();