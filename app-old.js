const http = require('http');

http.createServer((req, resp) => {

    resp.writeHead(200, { 'Content-Type': 'aplication/json' });

    let salida = {
        nombre: 'Diego',
        edad: 32,
        url: req.url
    }

    //resp.write('Hola Mundo');
    resp.write(JSON.stringify(salida));
    resp.end();
})


.listen(8080);

console.log('Escuchando el puerto 8080');