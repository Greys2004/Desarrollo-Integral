const fs = require('fs');
console.log(fs);

//Operador ternario
const leerArchivo = (error, data) => {
    (error) ? console.log('Error:', error) : console.log(data.toString());
};
fs.readFile('archivo.txt', leerArchivo);


const escribirArchivo = (error) => {
    if(error){
        console.log('Error:', error);
    } else {
        console.log('Se escribió correctamente');
    }
};
fs.writeFile('nuevoArchivo.txt', 'Hola Greys,estoy sobreescribiendo', escribirArchivo);

fs.unlink('nuevoArchivo.txt', (error) => {
    console.log('Se eliminó el archivo');
});

fs.mkdir('nuevaCarpeta', (error) => {
    console.log('Se creó la carpeta');
});

fs.rmdir('nuevaCarpeta', (error) => {
    console.log('Se elimino la carpeta');
});

//Leer un directorio
fs.readdir('./', (error, archivos) => {
    console.log(archivos);
});

//Copiar archivo
const copiarArchivos = (error) => {
    if(error){
        console.log('Error:', error);
    } else {
        console.log('Se copió el archivo');
    }
};
fs.copyFile('archivo.txt', 'copiaArchivo.txt', copiarArchivos);

//RETO
//Leer todos los archivos y carpetas de nuestro directorio
//vamos a crear un frontend que muestre todos los archivos y carpetas usando iconos para diferenciar. 
//Usar Bootstrap icons
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Sirve el archivo HTML directamente
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Endpoint para listar archivos y carpetas
app.get('/list', (req, res) => {
    fs.readdir('./', { withFileTypes: true }, (error, files) => {
        if (error) {
            res.status(500).json({ error: 'Error al leer el directorio' });
        } else {
            const fileList = files.map(file => ({
                name: file.name,
                isDirectory: file.isDirectory()
            }));
            res.json(fileList);
        }
    });
});

app.listen(port, () => {
    console.log(`Servidor en http://localhost:${port}`);
});
