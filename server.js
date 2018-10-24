const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers.js')

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public')); //para crear carpeta de dominio publica, cualquiera puede acceder

hbs.registerPartials(__dirname + '/views/partials');

//Express HBS
app.set('view engine', 'hbs');



app.get('/', (req, res) => {

    res.render('home', { //renderiza el home.hbs
        nombre: 'Diego',

    });
});

app.get('/about', (req, res) => {
    res.render('about')
})




app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});