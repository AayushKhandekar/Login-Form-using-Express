var express = require('express');
var app = express();
var http = require('http');
var PORT = 8081;

app.use(express.static('public'));

// Setting index.html as the '/' route
app.get('/', function(req, res){
    res.sendFile(__dirname + '/' + 'index.html');
});

app.get('/details', function(req, res){
    response = {

        name : req.query.name,
        email : req.query.email,
        password : req.query.password
    };

    // Logging the response in the console
    console.log(response);
    res.redirect('/home');
});

// Sending confirmation to the user after successful login
app.get('/home', function(req, res){
    res.send("<h1>Logged In!</h1>");
});

var server = app.listen(PORT, function(){
    console.log('App listening on port : %d', PORT);
});