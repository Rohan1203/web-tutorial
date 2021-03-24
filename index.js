var express = require('express');
const fs = require('fs');
const path = require('path');
var morgan = require('morgan');
var userRoute = require('./route/userRoute');
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

mongoose.connect(process.env.mongoURI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    .then(res => console.log(`Connection Succesful ${res}`))
    .catch(err => console.log(`Error in DB connection ${err}`));

var app = express();
app.set('view engine', 'ejs');

app.use(express.json());

//middleware and static files
app.use(express.static('views'));
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: true }));

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/signup', (req, res) => {
    res.render('signup');
});

//Routing files
app.use(userRoute);


const port = 8000;
const ip = 'localhost';
app.listen(port, ip, () => {
    console.log('Server stared at port :', port);
});