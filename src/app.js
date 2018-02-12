require('dotenv').config();
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var config = require('../config');
var https = require('https');

var port = process.env.PORT || 3005;
console.log(port);

mongoose.connect(config.getDbConnectionString())
    .then(function () {
        console.log('[mongoose] Connected to MongoDB')
    })
    .catch(function () {
        console.log('[mongoose] Error connecting to MongoDB')
    });

const options = {
    hostname: 'data.austintexas.gov',
    path: '/resource/fdzn-9yqv.json',
    data: {
        limit: 50000
    }
}

function getAnimalData() {
    https.get(options, function (fetched) {
        console.log(fetched);
        fetched.setEncoding('utf8');
        let body = '';
        fetched.on('data', function (data) {
            body += data;
        });
        fetched.on('end', function () {
            body = JSON.parse(body);
            console.log(body);
        });
    });
}

setInterval(getAnimalData, 5000);

app.listen(port);