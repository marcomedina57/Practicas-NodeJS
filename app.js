const express = require('express')
const hbs = require('hbs');
require('dotenv').config();
// TODO REQUIRE HBS

const app = express()

const port = process.env.PORT;

app.use(express.static('public'));

app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function(err){

});

app.get('/', function(req, res){
    res.render('home', {
        nombre: 'Fernando Herrera',
        titulo: 'Curso de Node'
    });
});


app.get('/generic', function(req, res){
    res.render('generic', {
        nombre: 'Generic',
        titulo: 'Ponte nuevo'
    })
});
app.get('/elements', function(req, res){
    res.render('elements', {
        nombre: 'Elements',
        titulo: 'Ponte nuevo'
    })
});

// app.get('/elements', function(req, res){
//     res.sendFile(__dirname + '/public/elements.html')
// });

// app.get('*', function(req, res){
//     res.sendFile(__dirname + '/public/index.html');
// });

app.listen(port);