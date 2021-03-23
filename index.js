var express = require('express');
const fs = require('fs')
const path = require('path')

var app = express();

app.use(express.static(path.join(__dirname, 'views')));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/index.html'))
});

app.get('/signup', function(req, res) {
    res.sendFile(path.join(__dirname + '/views/signup.html'));
  });




const port = 9500;
const ip = 'localhost' 
app.listen(port, ip, ()=>{
    console.log('Server stared at port :', port);
})
