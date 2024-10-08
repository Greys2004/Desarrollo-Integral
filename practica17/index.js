const http = require('http');
const fs = require('fs');
const PUERTO = 3000;

const server = http.createServer((req, res) => {

    res.setHeader('Content-Type','text/html ');
    //Simple Router
    let ruta = './views';
    switch (req.url) {
        case '/':
            ruta += '/index.html';
            res.statusCode = 200;
            break;
        case '/about':
            ruta += '/about.html';
            res.statusCode = 200;
            break;
        case '/productos':
            ruta += '/productos.html';
            res.statusCode = 200;
            break;
        case '/servicios':
            ruta += '/servicios.html';
            res.statusCode = 200;
            break;
        case '/contacto':
            ruta += '/contacto.html';
            res.statusCode = 200;
            break;
        default:
            ruta += '/404.html';
            res.statusCode = 404;
            break;
    }

    fs.readFile( ruta, (err, data) => {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end('404 Not Found');
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(`
            <!DOCTYPE html>
            <html lang="es">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Sitio Web Elegante</title>
                <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600&family=Poppins:wght@300;500&display=swap" rel="stylesheet">
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
                <style>
                    body {
                        background-color: #f4f4f9;
                        font-family: 'Poppins', sans-serif;
                        color: #333;
                    }
                    .navbar {
                        background-color: #2c3e50; /* Un tono oscuro, elegante */
                        border-bottom: 2px solid #d4af37; /* Dorado elegante */
                    }
                    .navbar-brand {
                        font-family: 'Playfair Display', serif;
                        font-weight: 600;
                        color: #d4af37 !important;
                        font-size: 1.8rem;
                    }
                    .nav-link {
                        color: #ecf0f1 !important; /* Color claro para los enlaces */
                        transition: color 0.3s ease;
                        font-weight: 500;
                    }
                    .nav-link:hover {
                        color: #d4af37 !important; /* Dorado elegante al hacer hover */
                    }
                    .container {
                        margin-top: 50px;
                        padding: 40px;
                        border-radius: 12px;
                        background: #ffffff;
                        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1); /* Sombra suave y elegante */
                    }
                    h1, h2 {
                        font-family: 'Playfair Display', serif;
                        color: #2c3e50;
                    }
                    p {
                        font-size: 1.1rem;
                        line-height: 1.7;
                        color: #555;
                    }
                    footer {
                        margin-top: 40px;
                        text-align: center;
                        padding: 20px;
                        background-color: #2c3e50;
                        color: white;
                        font-family: 'Poppins', sans-serif;
                    }
                    button, a.nav-link {
                        transition: background-color 0.3s ease, color 0.3s ease;
                    }
                    button {
                        background-color: #d4af37;
                        border: none;
                        padding: 10px 20px;
                        border-radius: 5px;
                        color: white;
                        font-size: 1rem;
                        font-weight: 500;
                    }
                    button:hover {
                        background-color: #c19e29;
                    }
                </style>
            </head>
            <body>
                <nav class="navbar navbar-expand-lg">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="/">Mi sitio</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link ${req.url === '/' ? 'active' : ''}" href="/">Inicio</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link ${req.url === '/about' ? 'active' : ''}" href="/about">Acerca</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link ${req.url === '/productos' ? 'active' : ''}" href="/productos">Productos</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link ${req.url === '/servicios' ? 'active' : ''}" href="/servicios">Servicios</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link ${req.url === '/contacto' ? 'active' : ''}" href="/contacto">Contacto</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
        `);
        res.write(data);
        res.write(`
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
            </body>
            </html>
        `);
        return res.end();
    });
});

server.listen(PUERTO, () => {
    console.log('Servidor en el puerto 3000');
});

//Reto
// De esta practica16 hacer un sitio 100% funcional
// usando BootStrap5 y de CSS
// Debe tener un menu de navegación con las opciones
// Inicio, Acerca de, Productos, Servicios y Contacto