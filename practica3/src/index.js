"use strict";
let normalx = 'hola';
normalx = 10;
normalx = true;
let usuario = 20;
console.log(normalx);
let nombre = 'Greys';
nombre = 'Alexa';
console.log(nombre);
let value;
console.log(value);
value = true;
value = 10;
value = 'holiwis';
value = [];
value = {};
value = Math.random;
value = null;
value = undefined;
console.log(value);
let miValor;
console.log("Tipo unknown", miValor);
let value1 = miValor;
let value2 = miValor;
//let value3: boolean = miValor;
const edad = 20;
console.log('Mi edad es:', edad);
console.log('Mi edad es:' + edad);
const sueldo = 123.456;
const total = Number('123'); //cast
console.log('Sueldo: ', sueldo);
console.log('Total: ', total);
const personaje = 'Jake el perro';
const otroPersonaje = "Fin el humano";
const otroOtroPersonaje = `Princesa grumosa y ${personaje}`;
console.log(otroOtroPersonaje);
const heroe = "Spiderman's House";
console.log(heroe);
console.log(heroe.toUpperCase());
let vengador;
vengador = 'Ironman';
console.log(vengador.charAt(4).toUpperCase());
vengador = 150.55;
//Redondeo a un decimal
console.log('El redondeo de 150.55 a 1 decimal es:', vengador.toFixed(1));
console.log(vengador.toFixed(1));
console.log(vengador.toFixed(1));
let personas = ['Peter', 'Tony', 'Strange'];
console.log(personas);
console.log(personas[0]);
console.log(personas[3]);
console.log(personas[-1]);
personas.push('Jose');
console.log(personas);
let numeros = [1, 2, 3, 4, 5];
let numeros2 = [6, 7, 8, 9, 10];
numeros2.push(11);
console.log(numeros, numeros2);
document.getElementById('contenedorNumeros').innerHTML = `<h2>Números:</h2> <p>${numeros.join(', ')}</p>`;
document.getElementById('contenedorNumeros2').innerHTML = `<h2>Números 2:</h2> <p>${numeros2.join(', ')}</p>`;
let miArray = ['Payton', 20, 35, 'Pablo', 20, 'Luis', 12];
console.log(miArray);
let miArray2 = ['Hulk', 'Thor', 10, 'Dr. strange'];
console.log(miArray2);
let miArray3 = [true, 10, 'Hola', 20.5];
console.log(miArray3);
let miArray4 = []; //Arreglo vacio
console.log(miArray4);
miArray4.push(10);
miArray4.push(20);
miArray4.push(30);
console.log(miArray4);
miArray4.reverse();
console.log('Mi arreglo al reves', miArray4);
let miArray5 = [];
miArray5.push('Arcoiris');
miArray5.push(20);
miArray5.push(true);
miArray5.push('https://i.pinimg.com/474x/2f/dc/0a/2fdc0a746c99eb9a0b486ac0950c80c6.jpg');
miArray5.push('Jake');
miArray5.push(25);
miArray5.push('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR38X4moy3jvdb44PAPjx6FrPYGaQUAnwsUTw&s');
const miArray5Div = document.getElementById('miArray5');
if (miArray5Div) {
    let html = '<ul>';
    for (const item of miArray5) {
        if (typeof item === 'string' && item.startsWith('http')) {
            html += `<li><img src="${item}" alt="Imagen" style="max-width: 200px; max-height: 200px;"></li>`;
        }
        else {
            html += `<li>${item}</li>`;
        }
    }
    html += '</ul>';
    // Inserta el HTML en el elemento del DOM
    miArray5Div.innerHTML = html;
}