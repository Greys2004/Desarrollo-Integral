const express = require('express');
const app = express();

//View engine es un motor de plantillas que permite renderizar vistas
//Usaremos el motor de plantillas EJS 
//Pra instalar EJS: npm install ejs
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    const blogs = [
        {titulo: 'Articulo 1', autor:'Diego Rojas', contenido:'lorem ipsum etc etc'},
        {titulo: 'Articulo 2', autor:'Sebastian Rojas', contenido:'lorem ipsum etc etc'},
        {titulo: 'Articulo 3', autor:'Cris Rojas', contenido:'lorem ipsum etc etc'},
        {titulo: 'Articulo 3', autor:'Carlos Rojas', contenido:'lorem ipsum etc etc'},
        {titulo: 'Articulo 3', autor:'Negro Rojas', contenido:'lorem ipsum etc etc'},
        {titulo: 'Articulo 3', autor:'Saul  Rojas', contenido:'lorem ipsum etc etc'},
        {titulo: 'Articulo 3', autor:'Diego Rojas', contenido:'lorem ipsum etc etc'},
        {titulo: 'Articulo 3', autor:'Diego Rojas', contenido:'lorem ipsum etc etc'}

    ]

    res.render('inicio', {titulo: "nuevo", blogs});
});


app.get('/nosotros', (req, res) => {
    res.sendFile(__dirname + '/views/nosotros.html');
}   );

app.get('/productos', (req, res) => {
    res.sendFile(__dirname + '/views/productos.html');
});

app.get('/contacto', (req, res) => {
    res.redirect('/nosotros');
});

// Middleware para manejar errores 404
app.use((req, res) => {
    res.status(404).sendFile(__dirname + '/views/404.html');
});

app.listen(3000, () => {
    console.log("Servidor activo en el puerto 3000")
});