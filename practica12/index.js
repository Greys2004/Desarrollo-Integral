const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {    
    res.send('Hola MUNDO con EXPRESS!');
});

app.get('/productos', (req, res) => {    
    res.send('ESTOY EN PRODUCTOS!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});