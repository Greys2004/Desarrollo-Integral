"use strict";
let miVariable = 'Hola mundo';
console.log(miVariable);
const person1 = {
    firstName1: "Luis",
    lastName1: 'Perez',
    age1: 18
};
let { firstName1, lastName1 } = person1;
console.log(firstName1, ' ', lastName1);
let miNombre = "Greys";
let [a1, a2, a3, a4, a5] = miNombre;
console.log(a1, a2, a3, a4, a5);
console.log(a4);
const frutas = ["platano", "manzana", "mangos", "pera"];
let [fruta1, fruta2] = frutas;
console.log(fruta1, fruta2);
let [frutaA, , , frutaB] = frutas;
console.log(frutaA, frutaB);
class Persona {
    constructor(nombre, edad, apellidoPaterno, apellidoMaterno) {
        this.nombre = nombre;
        this.edad = edad;
        this.apellidoPaterno = apellidoPaterno;
        this.apellidoMaterno = apellidoMaterno;
    }
    getEdad() {
        return this.edad;
    }
    // void significa que no regresa nada
    setEdad(edad) {
        this.edad = edad;
    }
    getNombre() {
        return this.nombre;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    getApellidoPaterno() {
        return this.apellidoPaterno;
    }
    setApellidoPaterno(apellidoPaterno) {
        this.apellidoPaterno = apellidoPaterno;
    }
    getApellidoMaterno() {
        return this.apellidoMaterno;
    }
    setApellidoMaterno(apellidoMaterno) {
        this.apellidoPaterno = apellidoMaterno;
    }
    getNombreCompleto() {
        return this.nombre + ' ' + this.apellidoPaterno + ' ' + this.apellidoMaterno;
    }
}
const personaje1 = new Persona('Angel', 18, 'Alvarez', 'Casillas');
console.log(personaje1.nombre);
console.log(personaje1.edad);
personaje1.edad = 20;
console.log(personaje1.edad);
console.log(personaje1.getApellidoPaterno());
console.log(personaje1.getApellidoMaterno());
console.log(personaje1.getNombreCompleto());
let personaje2 = new Persona('Greys', 22, 'Almanza', 'Vega');
personaje2.setEdad(21);
console.log('Nombre: ' + personaje2.getNombre());
console.log('Edad: ' + personaje2.getEdad());
console.log('Apellido Paterno: ' + personaje2.getApellidoPaterno());
console.log('Apellido Materno: ' + personaje2.getApellidoMaterno());
console.log(personaje2.getNombreCompleto());
class UserAccount {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}
const usuarioX = new UserAccount('Imagine Dragons', 1);
console.log(usuarioX.name, usuarioX.id);
