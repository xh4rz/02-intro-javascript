const nombre = 'Harold';
const apellido = 'Gonzalez';

// const nombreCompleto = nombre+ ' ' +apellido;

const nombreCompleto = `${nombre} ${apellido}`;

console.log(nombreCompleto);


function getSaludo() {
    return 'Hola Mundo';
}

console.log(`Este es un texto: ${getSaludo()}`);


function getSaludo2(nombre){
    return 'Hola '+ nombre;
}

console.log(`Este es un texto: ${getSaludo2(nombre)}`);