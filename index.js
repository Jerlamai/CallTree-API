const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const pug = require('pug')


//set up express app
const  app = express();

app.set('view engine', 'pug');
app.set('views','./views');

app.get('/dynamic_view', function(req, res){
    res.render('dynamic', {
       name: "TutorialsPoint", 
       url:"http://www.tutorialspoint.com"
    });
 });

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

//connect to mongodb
mongoose.connect('mongodb://localhost/CrudDB') 
mongoose.Promise = global.Promise

app.use(express.static('public'))

app.use(bodyParser.json());

//initialize routes
app.use('/index', require('./routes/api'));

//error handling middleware
app.use(function(err, req, res, next){
    res.send({error: err.message})
})


app.listen(process.env.port || 3000, function () {
    console.log('Example app listening on port 3000!')
 })
 