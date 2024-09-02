//Tuplas

let tupla: [string,number] = ['Lucas',23];

console.log(tupla);
console.log(tupla[0]);
console.log(typeof tupla);

let ourTuple: [string,number,boolean] = ['Jaime',23,true];
console.log('Nombre: ', ourTuple[0]);
console.log('Edad: ', ourTuple[1]);

//Ternario
let casado:string = ourTuple[2] ? 'casado' : 'soltero';
console.log('Estado civil: ',casado);

let ourTuple2 : [number,boolean,string] = [25,false, 'Jose'];
ourTuple2 = [20 ,true, 'Jose'];
console.log(ourTuple2);

let ourReadonlyTuple: readonly [number,boolean, string] = [24, true,'Mario'];
//ourReadonlyTuple.push('Cadena'); //error
//orReadonlyTuple[0] = 30;
console.log(ourReadonlyTuple);
console.log('Nombre: ', ourReadonlyTuple[2]);

const graph: [x:number, y:number] = [55.2,41.3];
console.log(graph);
console.log(graph[0]);


//DESTRUCTURACION DE VARIABLES
const person = {
    firstName: "Luis",
    lastName: 'Perez',
    age: 18
};
let  {firstName,lastName,age} = person;
console.log(age);
age= 30;
console.log(firstName,lastName, age);



//RETO = GENERAR SERIE DE FIBONACCI
//Usando TS y destruccturacaion de variables hay que generar una serie de fibonacci con hasta 100 veces
//Graficar = Chart.js

function generateFibonacci(n: number): number[] {
    let fibSeries: number[] = [0, 1];

    for (let i = 2; i < n; i++) {
        const [a, b] = fibSeries.slice(-2);
        fibSeries.push(a + b);
    }

    return fibSeries;
}

const fibonacciSeries = generateFibonacci(100); 
console.log(fibonacciSeries);