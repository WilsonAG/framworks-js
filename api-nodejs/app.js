'use strict';

// load modules
const express = require('express');
const bodyParser = require('body-parser');

// execute express http
let app = express();

// load routes

// middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// activate cors

// add prefix to routes

app.get('/', (req, res) => {
    return res.json({
        message: 'Hola mundo desde express.'
    })
});

// export module

module.exports = app;