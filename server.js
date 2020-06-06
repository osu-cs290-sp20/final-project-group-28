var path = require('path');
var express = require('express');
var exphbs = require('express-handlebars');

var app = express();
var port = process.env.PORT || 3322;
var petData = require('./petData');     //from petData.json

app.engine('handlebars', exphbs({defaultLayout: 'null' }));
app.set('view engine', 'handlebars');

app.use(express.static('public'));



//home page
app.get('/', function(req, res){
    res.status(200).render('homePage', {
        pets: petData
    });
});


//about page
app.get('/about', function(req,res){
    res.status(200).render('aboutPage', {
        //stuff?
    });
});



