var express = require('express');
var route = express.Router();

route.post('/authentication', (req, res) => {
    res.render('dashboard');
});

module.exports = route;