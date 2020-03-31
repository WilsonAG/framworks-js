'use strict';
require('dotenv').config();

const mongoose = require('mongoose');
const app = require('./app');
const port = process.env.PORT || 4000;

const DbOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};
mongoose.Promise = global.Promise;
mongoose.set('useFindAndModify', false);
mongoose.connect('mongodb://localhost:27017/api-blog', DbOptions).then(() => {
    console.log('Database is already connected');

    app.listen(port, () => {
        console.log('Server is running at port: ', port);

    })
});