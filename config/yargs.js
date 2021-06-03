const argv = require('yargs')
.option('b', {
    alias: 'base',
    type: 'number',
    demandOption: true
})
.check((argv, options) => {
    if (isNaN(argv.b)){
        throw 'La base tiene que ser un número';
    }
    return true;
})
.option('l',{
    alias: 'listar',
    type: 'boolean',
    demandOption: false,
    default: false
})
.option('h', {
    alias: 'hasta',
    type: 'number',
    default: 10
})
.argv;

module.exports = argv;