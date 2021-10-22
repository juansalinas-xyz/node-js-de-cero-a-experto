const deapool = {
    nombre : 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    //edad: 50,
    getNombre () {
        return `${this.nombre} ${this.apellido} ${this.poder}`
    }
}

/*
console.log(deapool.getNombre());
const nombre =  deapool.nombre;
const apellido = deapool.apellido;
const poder = deapool.poder;
*/
// const {nombre, apellido, poder, edad = 0} = deapool;
// console.log(nombre, apellido, poder, edad);

function imprimeHeroe({nombre, apellido, poder, edad = 0}){

    console.log(nombre, apellido, poder, edad);

}

imprimeHeroe(deapool);

// Desestructuracion de arreglos
const heroes = ['Deadpool', 'Superman', 'Batman'];

const [, , h3] =  heroes;

console.log(h3);