const argv = require( 'yargs' )
        .option( 'b', {
            alias: 'base',
            type: 'number',
            demandOption: true,
            describe: 'Es el multiplicador de la tabla',
        } )
        .option( 'l', {
            alias: 'listar',
            type: 'boolean',
            default: false,
            describe: 'Muestra la tabla en consola',
        } )
        .option( 'h', {
            alias: 'hasta',
            type: 'numero',
            default: 10,
            describe: 'Define el tope de la tabla',
        } )
        .check( ( argv, options ) => {
            if( isNaN( argv.b ) ){
                throw 'La base tiene que ser un numero '
            }
            return true

        })
        .argv;


        module.exports = argv;