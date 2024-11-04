const express = require('express');
const router = express.Router()

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


router.get('/articulos', (req, res) =>{
    res.render('articulos', {titulo: 'Articulos', articulos: articulos})
})