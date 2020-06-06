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
    
    var petIndex = parseInt(petName, 10);
    
    if(Number.isNaN(petIndex)){
    console.log('==Pets Name sent is: ', petName);
    console.log('==Pets Name type is: ', typeof(petName));
    var i = 0;
    petData.forEach(function checkName(pet) {
        if(pet.petName == petName){
            res.status(200).render("individualPetPage", {
                pets: [petData[i]]
            });
            return;
        }
        i++;
    });
    }else{
   
    console.log('==Pets Index sent is: ', petIndex);
    console.log('==Pets Index type is: ', typeof(petIndex));
    if(petIndex != NaN && petData.length > petIndex){
            res.status(200).render("individualPetPage", {
                pets: [petData[petIndex]]
            });
    }else{
        next();
    }
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

