//Enums

enum Color{
    Rojo = 50,
    Verde,
    Azul
}

console.log(Color.Verde);
console.log(Color.Rojo);
let color1 = Color.Rojo;
color1 = Color.Verde;
console.log('color1',color1);

enum CardinalDirection {
    North = 'Norte',
    South = 'Sur',
    East = 'Este',
    West = 'Oeste'
}

let direction: CardinalDirection = CardinalDirection.North;
console.log('Direction: ', direction);

enum StatusCode {
    Success = 200,
    NotFound = 404,
    InternalServer = 500
}

let statusCode:StatusCode = StatusCode.Success;
statusCode = StatusCode.NotFound;
console.log('StatusCode: ', statusCode);

enum Volumen{
    min = 1,
    medio = 5,
    max = 10
}

let volumen:Volumen = Volumen.medio
console.log('volumen: ', volumen);

console.log('-----------------------PROYECTO----------------');
enum EstatusDePedido {
    Pendiente = 'Pendiente',
    EnProceso = 'En Proceso',
    Enviado = 'Enviado',
    Entregado = 'Entregado',
    Cancelado = 'Cancelado'
}

function mostrarEstatus(estatus: EstatusDePedido) {
    console.log(`El estatus del pedido es: ${estatus}`);
}

const pedido1: EstatusDePedido = EstatusDePedido.Pendiente;
const pedido2: EstatusDePedido = EstatusDePedido.Enviado;

mostrarEstatus(pedido1); 
mostrarEstatus(pedido2);