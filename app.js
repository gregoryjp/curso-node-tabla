
// const { argv } = require('process');

const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors= require('colors');

                
                
                
                // const[, , arg3='base=5'] = process.argv;
                // const[, base=5] = arg3.split('=');
                
                
                
                console.clear();
                // console.log(argv);
                console.log('base: yargs',argv.base);
                // console.log(process.argv);
                
                crearArchivo(argv.b,argv.l,argv.h)
                .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'Creado'.yellow))
                .catch(err => console.log(err));


                




// const base = 6;
