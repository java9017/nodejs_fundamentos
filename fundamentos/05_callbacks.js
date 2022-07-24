// setTimeout(() => {
//     console.log('Hello world!!');
// }, 1000);

const getUsuarioByID = (id, callback) => {
    const usuario = {
        id, 
        nombre: 'Jose David'
    };

    setTimeout(() => {
        callback(usuario);
    }, 1500);
}

/** usuario - {id, nombre} (Desestructuracion) **/
getUsuarioByID(10, ({id, nombre}) => {
    console.log( id );
    console.log( nombre.toUpperCase() );
});