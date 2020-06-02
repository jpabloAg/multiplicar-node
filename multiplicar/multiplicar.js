// requires
const fs = require('fs');//Modulo fileSystem
const colors = require('colors');

let listarTabla = (base, limite) => {

    console.log('===================='.cyan);
    console.log('Tabla de multiplicar'.green);
    console.log('===================='.cyan);
    for(let i = 1; i <= limite; i++){
        console.log(`${base}*${i} = ${base * i}`.cyan);
    }
}

let crearArchivo = (base, limite) => {
    return new Promise( (resolve, reject) => {
        if ( isNaN(base) ){
            reject(`El valor introducido ( ${ base } ) no es un número`);
            return;//reject no significa return, por eso pongo un return aca para que me saque de la funcion y no ejecutar lo de abajo y de paso mandar un mensaje de error
        }
        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${ base } * ${ i } = ${ base * i } \n`;
        }
        fs.writeFile(`./tablas/tabla-${ base }-al-${ limite }.txt`, data, (err) => {
            if (err) 
                reject(err);
            else 
                resolve(`tabla-${ base }-al-${ limite }.txt`);         
        });
    })
} 

module.exports = {
    crearArchivo,
    listarTabla
};


