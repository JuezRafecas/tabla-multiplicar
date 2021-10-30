const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');
console.clear();

//Usando variable process
//const [ , , arg3 = 'base=5'] = process.argv; //process me da las variables de la consola!!
//const [ , base = 5 ] = arg3.split('=');
//console.log(base);

//Usando argv de yargs

//console.log(process.argv);
//console.log(argv);

const base = argv.b;
crearArchivo(base, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err => console.log(err));