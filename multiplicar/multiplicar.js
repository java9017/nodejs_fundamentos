// requireds
const fs = require('fs');
const colors = require('colors');

let listTable = (base, limit = 10) => {
    let data = '';

    console.log('=============================='.green);
    console.log('== '.green, `Tabla del ${base} as ${limit}` .yellow);
    console.log('=============================='.green);

    for(let i = 1; i <= limit; i++) {
        console.log('== '.green, `${base} x ${i} =  ${base * i}`);
    }
    console.log('=============================='.green);
}

let createFile = (base, limit=10) => {
    return new Promise( (resolve, reject) => {
        if (!Number(base) || base === true) {
            reject(`El valor introducido [${base}] no es un número`);
            
            return false;
        }

        let data = '';

        for (let i = 1; i <= limit; i++) {
            data += `${base} x ${i} = ${(base*i)}\n`;
        }

        fs.writeFile(`tablas/tabla-${base}-al-${limit}.txt`, data, (err) => {
            if (err)
                reject(err)
            else
                resolve(`tabla-${base}-al-${limit}.txt`.magenta);
        });
    })
}

module.exports = {
    createFile,
    listTable
}

return false;

module.export.crearArchivo = () => {
    console.log("Funcion de crear nuevo archivo");
}