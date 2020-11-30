// import {heroes} from './data/heroes';
// import {heroes} from './data/heroes';
import { heroes } from './data/heroes';

//Find
const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);
console.log(getHeroeById(2));

//Filter
const getHeroeByOwner = (owner) => heroes.filter((heroe)=> heroe.owner === owner);
console.log(getHeroeByOwner('Marvel'));