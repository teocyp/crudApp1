const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true })
    .then(() => {
        console.log('Mongo Connection Open')
    })
    .catch(err => {
        console.log('Oh no Mongo connection error!', err)
    })

const seedProducts = [
    {
        name: 'Fairy Eggplant',
        price: 1.00,
        category: 'vegetable'
    },
    {
        name: 'Cucumber',
        price: 4.50,
        category: 'vegetable'
    },
    {
        name: 'Organic Mini Watermelon',
        price: 3.99,
        category: 'fruit'
    },
    {
        name: 'Organic Celery',
        price: 2.99,
        category: 'vegetable'
    },
    {
        name: 'Chocolate Whole Milk',
        price: 6.99,
        category: 'dairy'
    }
]

Product.insertMany(seedProducts)
    .then(res => {
        console.log(res);
    })
    .catch(err => {
        console.log(err);
    })