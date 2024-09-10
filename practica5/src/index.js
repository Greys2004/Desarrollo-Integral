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
//Herencia
class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }
    mover(distancia = 0) {
        //template string
        console.log(`${this.nombre} se movio ${distancia}m.`);
    }
    hacerSonido(sonido = 'Sin sonido') {
        console.log(`${this.nombre} hace ${sonido}`);
    }
}
let animal1 = new Animal('Grillo');
animal1.mover(5);
animal1.hacerSonido('cri cri');
class Perro extends Animal {
    constructor(nombre) {
        super(nombre);
    }
    mover(distancia = 5) {
        console.log('Caminando y corriendo');
        super.mover(distancia);
    }
    hacerSonido(sonido = 'Ladrido') {
        console.log(`${this.nombre} hace ${sonido}`);
    }
}
const perro1 = new Perro('Firulais');
perro1.mover(10);
perro1.hacerSonido('Guau Guau');
class Serpiente extends Animal {
    constructor(nombre) {
        super(nombre);
    }
    mover(distancia = 1) {
        console.log('Reptando');
        super.mover(distancia);
    }
    hacerSonido(sonido = 'Siseo') {
        console.log(`${this.nombre} hace ${sonido}`);
    }
}
const serpiente1 = new Serpiente('Cobra');
serpiente1.mover(2);
serpiente1.hacerSonido('Siseo');
console.log('---------------------------------------------------------');
//Reto crear al menos 5 clases que van a usar en un proyecto de una tienda en linea
//Clase= Productos, Usuario, Carrito, MetodoDePago
//3 propiedades en cada clase con getters y setters
//1 metodo o funcion por clase
//Constructor
console.log('-------------------------PRODUCTOS--------------------------------');
class Producto {
    constructor(nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
    getNombre() {
        return this.nombre;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    getPrecio() {
        return this.precio;
    }
    setPrecio(precio) {
        this.precio = precio;
    }
    getStock() {
        return this.stock;
    }
    setStock(stock) {
        this.stock = stock;
    }
    reducirStock(cantidad) {
        if (this.stock >= cantidad) {
            this.stock -= cantidad;
            console.log(`${cantidad} unidades han sido removidas del stock. Stock actual: ${this.stock}`);
        }
        else {
            console.log('Stock insuficiente');
        }
    }
}
let producto1 = new Producto('Coca cola', 20, 200);
let producto2 = new Producto('Pepsi', 10, 200);
console.log('Nombre: ' + producto1.getNombre());
console.log('Precio: ' + producto1.getPrecio());
console.log('Stock: ' + producto1.getStock());
producto1.reducirStock(25);
console.log('Stock actual después de reducción: ' + producto1.getStock());
console.log('-------------------------USUARIO--------------------------------');
class Usuario {
    constructor(nombre, correo, contrasena) {
        this.nombre = nombre;
        this.correo = correo;
        this.contrasena = contrasena;
    }
    getNombre() {
        return this.nombre;
    }
    setNombre(nombre) {
        this.nombre = nombre;
    }
    getCorreo() {
        return this.correo;
    }
    setCorreo(correo) {
        this.correo = correo;
    }
    getContrasena() {
        return this.contrasena;
    }
    setContrasena(contrasena) {
        this.contrasena = contrasena;
    }
    cambiarContrasena(nuevaContrasena) {
        this.contrasena = nuevaContrasena;
        console.log(`Se cambió la contraseña de ${this.nombre} a ${nuevaContrasena}`);
    }
}
let usuario1 = new Usuario('Payton', 'Payton@gmail.com', 'Payton123');
console.log('Nombre: ' + usuario1.getNombre());
console.log('Correo: ' + usuario1.getCorreo());
console.log('Contraseña: ' + usuario1.getContrasena());
usuario1.cambiarContrasena('nuevapayton123456');
console.log('-------------------------CARRITO--------------------------------');
class Carrito {
    constructor(usuario) {
        this.productos = [];
        this.total = 0;
        this.usuario = usuario;
    }
    getProductos() {
        return this.productos;
    }
    getTotal() {
        return this.total;
    }
    agregarProducto(producto, cantidad) {
        this.productos.push(producto);
        this.total += producto.getPrecio() * cantidad;
    }
    getUsuario() {
        return this.usuario;
    }
    setUsuario(usuario) {
        this.usuario = usuario;
    }
    vaciarCarrito() {
        this.productos = [];
        this.total = 0;
    }
}
let carrito1 = new Carrito('Greys');
carrito1.agregarProducto(producto1, 2);
carrito1.agregarProducto(producto2, 5);
carrito1.agregarProducto(producto1, 7);
console.log("Total del carrito: $" + carrito1.getTotal());
console.log("Productos en el carrito: ", carrito1.getProductos());
console.log("Usuario que realizó el pedido: ", carrito1.getUsuario());
carrito1.vaciarCarrito();
console.log("Carrito vacío. Total:", carrito1.getTotal());
console.log('-------------------------METODO DE PAGO--------------------------------');
class MetodoDePago {
    constructor(tipo, numeroTarjeta, fechaExpiracion) {
        this.tipo = tipo;
        this.numeroTarjeta = numeroTarjeta;
        this.fechaExpiracion = fechaExpiracion;
    }
    getTipo() {
        return this.tipo;
    }
    setTipo(tipo) {
        this.tipo = tipo;
    }
    getNumeroTarjeta() {
        return this.numeroTarjeta;
    }
    setNumeroTarjeta(numeroTarjeta) {
        this.numeroTarjeta = numeroTarjeta;
    }
    getFechaExpiracion() {
        return this.fechaExpiracion;
    }
    setFechaExpiracion(fechaExpiracion) {
        this.fechaExpiracion = fechaExpiracion;
    }
    realizarPago(monto) {
        console.log(`Pago de ${monto} realizado con ${this.tipo}`);
    }
}
let tarjeta1 = new MetodoDePago('Creidto', '123456789', '12/31');
console.log('Tipo de tarjeta: ' + tarjeta1.getTipo());
console.log('Tipo de tarjeta: ' + tarjeta1.getNumeroTarjeta());
console.log('Tipo de tarjeta: ' + tarjeta1.getFechaExpiracion());
tarjeta1.realizarPago(500);
console.log('-------------------------DIRECCION--------------------------------');
class Direccion {
    constructor(calle, ciudad, codigoPostal) {
        this.calle = calle;
        this.ciudad = ciudad;
        this.codigoPostal = codigoPostal;
    }
    getCalle() {
        return this.calle;
    }
    setCalle(calle) {
        this.calle = calle;
    }
    getCiudad() {
        return this.ciudad;
    }
    setCiudad(ciudad) {
        this.ciudad = ciudad;
    }
    getCodigoPostal() {
        return this.ciudad;
    }
    setCodigoPostal(ciudad) {
        this.ciudad = ciudad;
    }
    mostrarDireccionCompleta() {
        return `${this.calle}, ${this.ciudad}, ${this.codigoPostal}`;
    }
}
let direccion1 = new Direccion('Brianza 232', 'Leon', '24354');
console.log('Calle: ' + direccion1.getCalle());
console.log('Ciudad: ' + direccion1.getCiudad());
console.log('Codigo Postal: ' + direccion1.getCodigoPostal());
console.log('Direccion Completa: ' + direccion1.mostrarDireccionCompleta());
console.log('-------------------------DIRECCION DE ENVIO--------------------------------');
class DireccionEnvio extends Direccion {
    constructor(calle, ciudad, codigoPostal, pais) {
        super(calle, ciudad, codigoPostal);
        this.pais = pais;
    }
    getPais() {
        return this.pais;
    }
    setPais(pais) {
        this.pais = pais;
    }
    mostrarDireccionCompleta() {
        return `${this.calle}, ${this.ciudad}, ${this.codigoPostal}, ${this.pais}`;
    }
    esInternacional(paisLocal = 'Mexico') {
        if (this.pais !== paisLocal) {
            console.log(`La dirección es internacional. País de envío: ${this.pais}, País local: ${paisLocal}`);
            return true;
        }
        else {
            console.log(`La dirección es local. País de envío: ${this.pais}`);
            return false;
        }
    }
}
let direccionEnvio1 = new DireccionEnvio("Avenida Principal 456", "gran ciudad", "67890", "España");
console.log('Calle: ' + direccionEnvio1.getCalle());
console.log('Ciudad: ' + direccionEnvio1.getCiudad());
console.log('Codigo Postal: ' + direccionEnvio1.getCodigoPostal());
console.log(direccionEnvio1.mostrarDireccionCompleta());
console.log(direccionEnvio1.esInternacional());
