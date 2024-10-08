const http = require('http');

const puerto = 3000;

const server = http.createServer((req,res) => {
    //Le digo que va a entrar un html
    res.setHeader('Content-Type' , 'text/html');
    res.write('<h1>Hola practica 15</h1>')
    res.write('<ul><li>Js</li><li>Python</li><li>Java</li></ul>')
    res.write(req.url + '<br/>');
    res.end(req.method);
});

server.listen(puerto, () => {
    console.log('Servidor en el puerto 3000');
});