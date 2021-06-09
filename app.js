const express = require('express')
const app = express()
 

// Servir contenido estatico

app.use(express.static('public'));



app.get('/generic', function(req, res){
    res.sendFile(__dirname + '/public/generic.html')
});

app.get('/elements', function(req, res){
    res.sendFile(__dirname + '/public/elements.html')
});

app.get('*', function(req, res){
    res.sendFile(__dirname + '/public/index.html');
});

app.listen(8080)