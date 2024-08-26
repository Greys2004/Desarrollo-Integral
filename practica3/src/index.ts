let normalx:any = 'hola';
normalx = 10;
normalx = true;
let usuario:any = 20;
console.log(normalx);

let nombre:string = 'Greys';
nombre = 'Alexa';
console.log(nombre);

let value:any;
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

let miValor: unknown;
console.log("Tipo unknown", miValor);

let value1: unknown = miValor;
let value2: any = miValor;
//let value3: boolean = miValor;

const edad:number = 20;
console.log('Mi edad es:', edad);
console.log('Mi edad es:'+ edad);

const sueldo:number = 123.456;
const total:number = Number('123');  //cast
console.log('Sueldo: ', sueldo);
console.log('Total: ', total);

const personaje:string = 'Jake el perro';
const otroPersonaje:string = "Fin el humano";
const otroOtroPersonaje:string = `Princesa grumosa y ${personaje}`;
console.log(otroOtroPersonaje);

const heroe:string = "Spiderman's House";
console.log(heroe);
console.log(heroe.toUpperCase());

let vengador:any;
vengador = 'Ironman';
console.log(vengador.charAt(4).toUpperCase());
vengador = 150.55;
//Redondeo a un decimal
console.log('El redondeo de 150.55 a 1 decimal es:',vengador.toFixed(1));
console.log((vengador as number).toFixed(1));
console.log(<number>vengador.toFixed(1));

