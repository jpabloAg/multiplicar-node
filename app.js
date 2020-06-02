const { argv } = require('./config/yargs');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const colors = require('colors');

let comando = argv._[0];
switch(comando){
    case 'listar':
        console.log('Operación: listar');  
        listarTabla(argv.base, argv.limite);  
    break;

    case 'crear':
        console.log('Operación: crear');
        crearArchivo(argv.base, argv.limite)
            .then( archivo => console.log(`Archivo creado: ` + colors.magenta(`${ archivo }`)))
            .catch( err => console.log(err));
    break;

    default:
        console.log('Comando no reconocido');
    break;
}


console.log(argv);
console.log(`Base ${ argv.base }`);
console.log(`Limite ${ argv.limite }`);

//el parametro lo pasamos asi: --base=5
//console.log(process.argv);
//let argv = process.argv;
//let parametro = argv[2];
//console.log(parametro.split('='));

//let base = parametro.split('=')[1];
//console.log(base);


//crearArchivo(base)
//    .then( archivo => console.log(`Archivo creado: ${ archivo }`))
//    .catch( err => console.log(err));