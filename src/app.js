var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('../config');

var port = process.env.PORT || 3000;

mongoose.connect(config.getDbConnectionString())
    .then(function () {
        console.log('[mongoose] Connected to MongoDB')
    })
    .catch(function () {
        console.log('[mongoose] Error connecting to MongoDB')
    });



app.listen(port);