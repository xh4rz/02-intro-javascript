// Desestructuración
// Asignación Desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

// const {nombre,edad,clave} = persona;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

const usContext = ({nombre, edad, clave, rango = 'Capitán'}) => {

    // console.log(nombre,edad,rango);

    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: -17.3232
        }
    }
}

const {nombreClave, anios, latlng: {lat, lng}} = usContext(persona);

console.log(nombreClave, anios);
console.log(lat,lng);