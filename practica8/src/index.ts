function sum (a: number, b: number): number {
    return a + b;
}

let resultado = sum(2, 3);
console.log(resultado); // 5
//Const no se puede modificar
const fSum = sum(5, 80);
console.log(fSum); // 85

//Funciones de orden superior

//Funciones arrow anonima
let sum2 = (a: number, b: number): number => a + b;

//Funcion arrow anonima
let functionAnonimaArrow = () => console.log('Hola mundo desde una fucnion anonima arrow');
functionAnonimaArrow();

//Funcion anonima
let functionAnonima = function (){
    console.log('Hola mundo');
}
functionAnonima();

//No es posible
//console.log(operation(a:number, b:number):number => a * b);

//FORMAS
const variable = (a:number, b:number):number => a + b;
const variable2 = function multi(a:number, b:number):number {return a * b};
const saludoArrow = (nombre:string): string => "Hola" + nombre;
saludoArrow("Gryes");


function saludo (nombre: string): string {
    return `Hola ${nombre}`;
}

//No retorna nada== void
function advertencia():void{
    console.log('Cuidado');
}
advertencia();

//Never no retorna nada y no tiene fin
function error(mensaje: string): never {
    let mensajeError: any = document.getElementById("mensajeError");
    mensajeError.innerHTML ="Error en la aplicacion";

    throw new Error(mensaje);
}
//error("Error en la aplicacion");

type accion = 'sumar' | 'restar' | 'multiplicar';
function operation(a:number,b:number,operacion:accion):number{
    if(operacion === 'sumar')
    {
        return a + b;
    }
    else {
        return a -b;
    }
}
console.log(operation(0, 1, 'sumar'));
console.log(operation(5, 4, 'restar'));

//Convertir en arrow funcion, ternario y en una linea
const operation2 = (a:number,b:number,operacion:accion):number => operacion === 'sumar' ? a + b : a - b;
console.log(operation2(1, 1, 'sumar'));
console.log(operation2(5, 3, 'restar'));

//Convertir en arrow funcion, ternario, en una linea y con suma,resta,multiplicacion
const operation3 = (a:number,b:number,operacion:accion):number => operacion === 'sumar' ? a + b : operacion === 'restar' ? a - b : a * b;
console.log(operation3(6, 2, 'sumar'));
console.log(operation3(10, 2, 'restar'));
console.log(operation3(2, 4, 'multiplicar'));