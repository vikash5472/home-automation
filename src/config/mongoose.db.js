'use strict';

const mongoose = require('mongoose');

// db connection (mongo db, URI presnt in .env file)
const db = mongoose.connect(process.env.MONGO_URI, {
    useCreateIndex: true,
    useUnifiedTopology: true,
    useNewUrlParser: true
}, err => {
    if (err) console.error('Mongo connection failed !!!', err);
    else console.log('== Mongo db conencted ==');
});

module.exports = db;