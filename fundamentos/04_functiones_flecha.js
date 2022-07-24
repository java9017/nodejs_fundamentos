// function sumar (a, b = 10) {
//     return a + b;
// }

const hello = () => 'Hello World!!';
const sumar = (a, b = 10) => a + b;
const suma = (a, b = 20) => {
    return a + b;
};

console.log(sumar(5));
console.log(suma(5, 45));
console.log(hello());