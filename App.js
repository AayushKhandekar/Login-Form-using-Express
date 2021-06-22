var express = require('express');
var app = express();
var http = require('http');
var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/MongoDatabase';
var PORT = 8081;

app.use(express.static('public'));

app.get('/', function(req, res){

    res.sendFile(__dirname + '/' + 'index.html');
});

app.get('/details', function(req, res){

    response = {

        firstName : req.query.firstName,
        lastName : req.query.lastName,
        email : req.query.email,
        password : req.query.password
    };

    console.log(response);
    res.redirect('/home');
});

app.get('/home', function(req, res){

    res.send("<h1>Logged In!</h1>");
});

MongoClient.connect(url, function(err, db){

    if(err) throw err;
    console.log("Database Created");
    var dbase = db.db("LoginDatabase");
    dbase.collection('UserDetails').insert(response, function(err, res){
        if(err) throw err;
        console.log("Data Inserted");
        db.close();
    });
});

var server = app.listen(PORT, function(){

    console.log('App listening on port : %d', PORT);
});