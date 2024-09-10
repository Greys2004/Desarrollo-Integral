let miVariable:string = 'Hola mundo';
console.log(miVariable);

const person1 = {
    firstName1: "Luis",
    lastName1: 'Perez',
    age1: 18
};
let  {firstName1,lastName1} = person1;
console.log(firstName1,' ',lastName1);

let miNombre = "Greys";
let [a1, a2, a3, a4, a5]:any = miNombre;
console.log(a1,a2,a3,a4,a5);
console.log(a4);

const frutas:string[] = ["platano","manzana", "mangos","pera"];
let [fruta1, fruta2] = frutas;
console.log(fruta1,fruta2);

let [frutaA,,,frutaB] = frutas;
console.log(frutaA,frutaB);


class Persona {
    nombre: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    edad: number;
    constructor(nombre: string, edad: number ,apellidoPaterno: string, apellidoMaterno: string) {
        this.nombre = nombre;
        this.edad = edad;
        this.apellidoPaterno = apellidoPaterno;
        this.apellidoMaterno = apellidoMaterno;
    }

    getEdad(): number {
        return this.edad;
    }

    // void significa que no regresa nada
    setEdad(edad:number) : void{
        this.edad =edad;
    }

    getNombre(): string {
        return this.nombre;
    }

    setNombre(nombre:string) : void{
        this.nombre = nombre;
    }

    getApellidoPaterno(): string {
        return this.apellidoPaterno;
    }

    setApellidoPaterno(apellidoPaterno:string) : void{
        this.apellidoPaterno = apellidoPaterno;
    }

    getApellidoMaterno(): string {
        return this.apellidoMaterno;
    }

    setApellidoMaterno(apellidoMaterno:string) : void{
        this.apellidoPaterno = apellidoMaterno;
    }

    getNombreCompleto() : any{
        return this.nombre + ' ' + this.apellidoPaterno + ' ' +this.apellidoMaterno;
    }
}

const personaje1 = new Persona('Angel',18 ,'Alvarez','Casillas');
console.log(personaje1.nombre);
console.log(personaje1.edad);
personaje1.edad = 20
console.log(personaje1.edad);
console.log(personaje1.getApellidoPaterno());
console.log(personaje1.getApellidoMaterno());
console.log(personaje1.getNombreCompleto());


let personaje2 = new Persona('Greys',22, 'Almanza', 'Vega');
personaje2.setEdad(21);
console.log('Nombre: ' + personaje2.getNombre());
console.log('Edad: ' + personaje2.getEdad());
console.log('Apellido Paterno: ' + personaje2.getApellidoPaterno());
console.log('Apellido Materno: ' + personaje2.getApellidoMaterno());
console.log(personaje2.getNombreCompleto());

//interface
interface User {
    name: string;
    id: number;
}

class UserAccount{
    name: string;
    id: number;
    constructor (name:string, id:number){
        this.name = name;
        this.id = id;
    }
}

const usuarioX: User = new UserAccount('Imagine Dragons', 1);
console.log(usuarioX.name, usuarioX.id);

//Herencia
class Animal {
    nombre: string;

    constructor (nombre:string){
        this.nombre = nombre;
    }

    mover(distancia: number = 0){
        //template string
        console.log(`${this.nombre} se movio ${distancia}m.`);
    }

    hacerSonido(sonido: string = 'Sin sonido'){
        console.log(`${this.nombre} hace ${sonido}`);
    }
}

let animal1 = new Animal ('Grillo');
animal1.mover(5);
animal1.hacerSonido('cri cri');

class Perro extends Animal {
    constructor(nombre: string){
        super (nombre);
    }

    mover(distancia: number = 5){
        console.log('Caminando y corriendo');
        super.mover(distancia);
    }

    hacerSonido(sonido = 'Ladrido') {
        console.log(`${this.nombre} hace ${sonido}`);
    }
}

const perro1 = new Perro ('Firulais');
perro1.mover(10);
perro1.hacerSonido('Guau Guau');

class Serpiente extends Animal{
    constructor(nombre: string){
        super(nombre);
    }

    mover(distancia: number = 1): void {
        console.log('Reptando');
        super.mover(distancia);
    }

    hacerSonido(sonido = 'Siseo'): void {
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
    private nombre: string;
    private precio: number;
    private stock: number;

    constructor(nombre: string, precio: number, stock: number) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public getPrecio(): number {
        return this.precio;
    }

    public setPrecio(precio: number): void {
        this.precio = precio;
    }

    public getStock(): number {
        return this.stock;
    }

    public setStock(stock: number): void {
        this.stock = stock;
    }

    public reducirStock(cantidad: number): void {
        if (this.stock >= cantidad) {
            this.stock -= cantidad;
            console.log(`${cantidad} unidades han sido removidas del stock. Stock actual: ${this.stock}`);
        } else {
            console.log('Stock insuficiente');
        }
    }
}

let producto1 = new Producto ('Coca cola',20,200);
let producto2 = new Producto ('Pepsi',10,200);
console.log('Nombre: ' + producto1.getNombre());
console.log('Precio: ' + producto1.getPrecio());
console.log('Stock: ' + producto1.getStock());
producto1.reducirStock(25); 
console.log('Stock actual después de reducción: ' + producto1.getStock());

console.log('-------------------------USUARIO--------------------------------');
class Usuario {
    private nombre: string;
    private correo: string;
    private contrasena: string;

    constructor(nombre: string, correo: string, contrasena: string) {
        this.nombre = nombre;
        this.correo = correo;
        this.contrasena = contrasena;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public getCorreo(): string {
        return this.correo;
    }

    public setCorreo(correo: string): void {
        this.correo = correo;
    }

    public getContrasena(): string {
        return this.contrasena;
    }

    public setContrasena(contrasena: string): void {
        this.contrasena = contrasena;
    }

    public cambiarContrasena(nuevaContrasena: string): void {
        this.contrasena = nuevaContrasena;
        console.log(`Se cambió la contraseña de ${this.nombre} a ${nuevaContrasena}`);
    }
}

let usuario1 = new Usuario ('Payton','Payton@gmail.com','Payton123');
console.log('Nombre: ' + usuario1.getNombre());
console.log('Correo: ' + usuario1.getCorreo());
console.log('Contraseña: ' + usuario1.getContrasena());
usuario1.cambiarContrasena('nuevapayton123456');

console.log('-------------------------CARRITO--------------------------------');
class Carrito {
    private productos: Producto[];
    private total: number;
    private usuario: string;

    constructor(usuario: string) {
        this.productos = [];
        this.total = 0;
        this.usuario = usuario;
    }

    public getProductos(): Producto[] {
        return this.productos;
    }

    public getTotal(): number {
        return this.total;
    }

    public agregarProducto(producto: Producto, cantidad: number): void {
        this.productos.push(producto);
        this.total += producto.getPrecio() * cantidad;
    }

    public getUsuario(): string {
        return this.usuario;
    }

    public setUsuario(usuario: string): void {
        this.usuario = usuario;
    }

    public vaciarCarrito(): void {
        this.productos = [];
        this.total = 0;
    }
}

let carrito1 = new Carrito ('Greys');
carrito1.agregarProducto(producto1, 2);
carrito1.agregarProducto(producto2, 5);
carrito1.agregarProducto(producto1,7);
console.log("Total del carrito: $" + carrito1.getTotal());
console.log("Productos en el carrito: ", carrito1.getProductos());
console.log("Usuario que realizó el pedido: ", carrito1.getUsuario());
carrito1.vaciarCarrito();
console.log("Carrito vacío. Total:", carrito1.getTotal());

console.log('-------------------------METODO DE PAGO--------------------------------');
class MetodoDePago {
    private tipo: string;
    private numeroTarjeta: string;
    private fechaExpiracion: string;

    constructor(tipo: string, numeroTarjeta: string, fechaExpiracion: string) {
        this.tipo = tipo;
        this.numeroTarjeta = numeroTarjeta;
        this.fechaExpiracion = fechaExpiracion;
    }

    public getTipo(): string {
        return this.tipo;
    }

    public setTipo(tipo: string): void {
        this.tipo = tipo;
    }

    public getNumeroTarjeta(): string {
        return this.numeroTarjeta;
    }

    public setNumeroTarjeta(numeroTarjeta: string): void {
        this.numeroTarjeta = numeroTarjeta;
    }

    public getFechaExpiracion(): string {
        return this.fechaExpiracion;
    }

    public setFechaExpiracion(fechaExpiracion: string): void {
        this.fechaExpiracion = fechaExpiracion;
    }

    public realizarPago(monto: number): void{
        console.log(`Pago de ${monto} realizado con ${this.tipo}`);
    }
}

let tarjeta1 = new MetodoDePago ('Creidto','123456789','12/31');
console.log('Tipo de tarjeta: ' + tarjeta1.getTipo());
console.log('Tipo de tarjeta: ' + tarjeta1.getNumeroTarjeta());
console.log('Tipo de tarjeta: ' + tarjeta1.getFechaExpiracion());
tarjeta1.realizarPago(500);

console.log('-------------------------DIRECCION--------------------------------');
class Direccion {
    protected  calle: string;
    protected  ciudad: string;
    protected  codigoPostal:string;

    constructor(calle: string, ciudad: string, codigoPostal: string){
        this.calle = calle;
        this.ciudad = ciudad;
        this.codigoPostal = codigoPostal;
    }

    public getCalle(): string {
        return this.calle;
    }

    public setCalle(calle: string) : void{
        this.calle = calle;
    }

    public getCiudad(): string {
        return this.ciudad;
    }

    public setCiudad(ciudad: string) : void{
        this.ciudad = ciudad;
    }

    public getCodigoPostal(): string {
        return this.ciudad;
    }

    public setCodigoPostal(ciudad: string) : void{
        this.ciudad = ciudad;
    }

    public mostrarDireccionCompleta(): string{
        return `${this.calle}, ${this.ciudad}, ${this.codigoPostal}`;
    }
}

let direccion1 = new Direccion ('Brianza 232','Leon','24354');
console.log('Calle: ' + direccion1.getCalle());
console.log('Ciudad: ' + direccion1.getCiudad());
console.log('Codigo Postal: ' + direccion1.getCodigoPostal());
console.log('Direccion Completa: ' + direccion1.mostrarDireccionCompleta());


console.log('-------------------------DIRECCION DE ENVIO--------------------------------');
class DireccionEnvio extends Direccion {
    private pais: string;

    constructor(calle: string, ciudad: string, codigoPostal: string, pais: string) {
        super(calle, ciudad, codigoPostal);
        this.pais = pais;
    }

    public getPais(): string {
        return this.pais;
    }

    public setPais(pais: string): void {
        this.pais = pais;
    }

    public mostrarDireccionCompleta(): string {
        return `${this.calle}, ${this.ciudad}, ${this.codigoPostal}, ${this.pais}`;
    }

    public esInternacional(paisLocal: string = 'Mexico'): boolean {
        if (this.pais !== paisLocal) {
            console.log(`La dirección es internacional. País de envío: ${this.pais}, País local: ${paisLocal}`);
            return true;
        } else {
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