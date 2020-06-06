const express = require('express')
const mongoose = require('mongoose')
const app =  express()
const bodyParser = require('body-parser')

//import middlware
app.use(bodyParser.json());

// import routes

const cocktailRoute = require('./routers/cocktails')
app.use('/cocktails',cocktailRoute)


//Connected  database

mongoose.connect('mongodb+srv://hieu:phamhieu@cluster0-0dym1.mongodb.net/test?retryWrites=true&w=majority',
{userNewUrlParser: true},
()=>
console.log('connection data')
)

app.listen(4000)


