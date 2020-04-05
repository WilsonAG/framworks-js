'use strict';

// load modules
const express = require('express');
const bodyParser = require('body-parser');
const articleRoutes = require('./routes/ArticleRoutes');

// execute express http
let app = express();

// activate cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

// middlewares
app.use(bodyParser.json()); // body en formato json
app.use(bodyParser.urlencoded({ extended: false })); //body formulario


// load routes
app.use('/api', articleRoutes);




/* app.post('/', (req, res) => {
    return res.json({
        message: 'Hola mundo desde express.'
    })
}); */

// export module

module.exports = app;