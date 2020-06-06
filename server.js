var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');

var app = express();
var port = process.env.PORT || 5522;
var petData = require('./petInfo');     //from petInfo.json

app.engine('handlebars', exphbs({defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(express.static('public'));



//home page
app.get('/', function(req, res){
    res.status(200).render('homePage', {
        //stuff?
    });
});


//pets page
app.get('/pets', function(req, res){
    res.status(200).render('petPage', {
        pets: petData
    });
});


//about page
app.get('/about', function(req,res){
    res.status(200).render('aboutPage', {
        //stuff?
    });
});


//individual pet page. Goes to pet based off their name
app.get('/pets/:petName', function(req, res, next){
    var petName = req.params.petName;

    if(petData[petName]){
        res.status(200).render("individualPet", {
            pets: [petData[petName]]
        });
    }
    else{
        next();
    }
});


//404 page
app.get('*', function(req,res) {
    res.status(404).render('404');
});


//port listener
app.listen(port, function() {
    console.log('== Server is listening on port', port);
});

