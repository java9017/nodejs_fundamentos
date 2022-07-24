console.log('Inicio del programa'); // 1

setTimeout(() => { // No bloqueante
    console.log('Primer Timeout'); // 5
}, 3000);

setTimeout(() => { // No bloqueante
    console.log('Segundo Timeout'); // 3
}, 0);

setTimeout(() => { // No bloqueante
    console.log('Tercer Timeout'); // 4
}, 0);

console.log('Fin del programa'); // 2