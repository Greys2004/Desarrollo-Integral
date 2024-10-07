//npm init
//npm install express
const express = require('express');

// constante que contenga express
const app = express();

app.get('/', (req, res) => {
    res.send('Hola Greys');
});

app.get('/productos', (req, res) => {
    res.send('Estamos en productos');
});

app.listen(3000, () => {
    console.log('Servidor corriendo en puerto 3000');
});

//nodemon es una herramienta que ayuda a desarrollar aplicaciones basadas en node.js reiniciando automáticamente la aplicación de node cuando se detectan cambios de archivo en el directorio.
//Sirve para no estar poniendo continuamente "node index.js"
//npm install nodemon