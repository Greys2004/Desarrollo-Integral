console.log("Hola Codespaces");

const nuevoHeroe:string = 'Spiderman';

function returnName():string {
    return nuevoHeroe;
}

const heroeNombre = returnName();
let otraVariable = returnName();
console.log(returnName());
console.log('De que tipo es:', typeof otraVariable);

//Parametro oblogatorios en funciones
const nombreCompleto = (nombre: string, apellido: string): string => {
    return `${nombre} ${apellido}`;
};

const tuNombre = nombreCompleto('Greys', 'Almanza');
console.log(tuNombre);

//Parametros opcionales en funciones,SWIFT 
const nombreCompleto2 = (nombre?: string, apellido?: string, mayusculas:boolean = false): string => {
    return `${nombre || 'No se proporciono nombre'} ${apellido || 'No se proporciono apellido'} `;
};

const tuNombre2 = nombreCompleto2('Greys2');
console.log(tuNombre2);
const tuNombre3 = nombreCompleto2();
console.log(tuNombre3);


const nombreCompleto3 = (nombre?: string, apellido?: string, mayusculas:boolean = false): string => {
    return mayusculas ? `${nombre || 'No se proporciono nombre'} ${apellido || 'No se proporciono apellido'}`.toUpperCase() : `${nombre || 'No se proporciono nombre'} ${apellido || 'No se proporciono apellido'}`;
/*     if(mayusculas) {
        return `${nombre || 'No se proporciono nombre'} ${apellido || 'No se proporciono apellido'}`.toUpperCase();
    }else{
        return `${nombre || 'No se proporciono nombre'} ${apellido || 'No se proporciono apellido'}`
    } */
};
const tuNombre4 = nombreCompleto3('Greys4', 'Almanza4', true);
console.log(tuNombre4);

//OPERADOR REST

const nombreCompleto4 = (nombre: string, ...restoApellidos: string[]): string => {
    return `${nombre} ${restoApellidos.join(' ')}`
}

const superman4 = nombreCompleto4('Clark','Kent','Oswald','Smith');
console.log(superman4);