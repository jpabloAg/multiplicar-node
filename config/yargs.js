const options = {
    base: {
        demand: true,//hacemos que el flak 'base' sea obligatorio y se deba usar siempre con el comando 'listar'
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10//asignamos el valor por defecto del flak 'limite', este flak no es obligatorio al usar el comando 'listar'
    }
}

const argv = require('yargs')
                .command('listar', 'Mensaje de ayuda: Imprime en consola la tabla de multiplicar', options)
                .command('crear', 'Mensaje de ayuda: Genera un archivo con la tabla de multiplicar', {
                    base: {
                        demand: true,
                        alias: 'b'
                    },
                    limite: {
                        alias: 'l',
                        default: 10
                    }
                })
                .help()
                .argv;

module.exports = {
    argv
}