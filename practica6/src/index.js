"use strict";
//Enums
var Color;
(function (Color) {
    Color[Color["Rojo"] = 50] = "Rojo";
    Color[Color["Verde"] = 51] = "Verde";
    Color[Color["Azul"] = 52] = "Azul";
})(Color || (Color = {}));
console.log(Color.Verde);
console.log(Color.Rojo);
let color1 = Color.Rojo;
color1 = Color.Verde;
console.log('color1', color1);
var CardinalDirection;
(function (CardinalDirection) {
    CardinalDirection["North"] = "Norte";
    CardinalDirection["South"] = "Sur";
    CardinalDirection["East"] = "Este";
    CardinalDirection["West"] = "Oeste";
})(CardinalDirection || (CardinalDirection = {}));
let direction = CardinalDirection.North;
console.log('Direction: ', direction);
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["Success"] = 200] = "Success";
    StatusCode[StatusCode["NotFound"] = 404] = "NotFound";
    StatusCode[StatusCode["InternalServer"] = 500] = "InternalServer";
})(StatusCode || (StatusCode = {}));
let statusCode = StatusCode.Success;
statusCode = StatusCode.NotFound;
console.log('StatusCode: ', statusCode);
var Volumen;
(function (Volumen) {
    Volumen[Volumen["min"] = 1] = "min";
    Volumen[Volumen["medio"] = 5] = "medio";
    Volumen[Volumen["max"] = 10] = "max";
})(Volumen || (Volumen = {}));
let volumen = Volumen.medio;
console.log('volumen: ', volumen);
console.log('-----------------------PROYECTO----------------');
var EstatusDePedido;
(function (EstatusDePedido) {
    EstatusDePedido["Pendiente"] = "Pendiente";
    EstatusDePedido["EnProceso"] = "En Proceso";
    EstatusDePedido["Enviado"] = "Enviado";
    EstatusDePedido["Entregado"] = "Entregado";
    EstatusDePedido["Cancelado"] = "Cancelado";
})(EstatusDePedido || (EstatusDePedido = {}));
function mostrarEstatus(estatus) {
    console.log(`El estatus del pedido es: ${estatus}`);
}
const pedido1 = EstatusDePedido.Pendiente;
const pedido2 = EstatusDePedido.Enviado;
mostrarEstatus(pedido1);
mostrarEstatus(pedido2);
