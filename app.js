const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');
// const [,,arg3 = 'base=6'] = process.argv;
// const [, base = 5] = arg3.split('=');


console.log(argv);

// console.log(base);

// // const base = 5;

crearArchivo(argv.b, argv.l, argv.h) 
.then((e) => console.log(e .rainbow))
.catch(() => console.log('Errores'.rainbow));