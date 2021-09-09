const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true })
    .then(() => {
        console.log('Mongo Connection Open')
    })
    .catch(err => {
        console.log('Oh no Mongo connection error!', err)
    })

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/dog', (req, res) => {
    res.send('WOOF')
})

app.listen(3000, () => {
    console.log('Listening on port: 3000')
})