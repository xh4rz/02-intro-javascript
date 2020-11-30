// Funciones en JS
// const saludar = function (nombre) {
//     return `Hola, ${nombre}`;
// }

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
}

const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola Mundo`;

// console.log(saludar('Harold'))
console.log(saludar2('Harold'));
console.log(saludar3('Yesid'));
console.log(saludar4());

const getUser = () => ({
    uid: 'ABCD123',
    username: 'El_papi1502'
});

const user = getUser();
console.log(user);

// Tarea
// 1. Transformen una función de flecha
// 2. Tiene que retornar un objeto implícito
// 3. Pruebas

const getUsuarioActivo = (nombre) => ({
    uid: 'ABC567',
    username: nombre
});

const usuarioActivo = getUsuarioActivo('Fernando');
console.log(usuarioActivo);