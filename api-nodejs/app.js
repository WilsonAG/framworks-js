'use strict';

// load modules
const express = require('express');
const bodyParser = require('body-parser');
const articleRoutes = require('./routes/ArticleRoutes');

// execute express http
let app = express();

// middlewares
app.use(bodyParser.json()); // body en formato json
app.use(bodyParser.urlencoded({ extended: false })); //body formulario


// load routes
app.use('/api', articleRoutes);

// activate cors


/* app.post('/', (req, res) => {
    return res.json({
        message: 'Hola mundo desde express.'
    })
}); */

// export module

module.exports = app;