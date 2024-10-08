const http = require('http');
const fs = require('fs');

const puerto = 3000;

const server = http.createServer((req,res) => {
    fs.readFile('./views/index.html', (err, data) => {
        if(err){
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end('404 Not Found');
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    })
});

server.listen(puerto, () => {
    console.log('Servidor en el puerto 3000');
});