const { throws } = require('assert');
const fs = require('fs');
const colors = require('colors');
const crearArchivo = async (base = 5, listar = false, h = 10) => {
    try {
        let salida, consola = '';
        for(i = 1; i <= h; i++){
            salida += `${base} x ${i} = ${base*i} \n`;
            consola += `${base} ${'x'.green} ${i} ${'='.green} ${base*i} \n`;
        }
        if(listar){
            console.log('========================='.green);
            console.log('      Tabla del: '.green, colors.blue(base));
            console.log('========================='.green); 
            console.log(consola);
        }
        fs.writeFileSync( `./salidas/tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`;   
    } catch (err) {
        throw err;
    }
}

module.exports = {
    crearArchivo
}