const { createFile, listTable } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
const colors = require('colors');

let comando = argv._[0];

switch(comando) {
  case 'listar':
    listTable(argv.base, argv.limite);
    break;
  case 'crear':
    createFile(argv.base, argv.limite)
      .then(file => console.log(`Create File: ${file}`))
      .catch(err => console.log(err));
    break;
  default:
    console.log('Comando no reconocido');
    break;
}

return false;





