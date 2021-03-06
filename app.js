const express = require('express')
const mongoose = require('mongoose')
const app =  express()
const bodyParser = require('body-parser')



//import middlware
app.use(bodyParser.json());

// import routes
const callRoute = require('./routers/callApi')
app.use('/callApi',callRoute)

const authUser = require('./routers/auth')
app.use('/user',authUser)
const drinkRoute = require('./routers/drinks')
app.use('/drinks',drinkRoute)


//Connected  database

mongoose.connect('mongodb+srv://hieu:phamhieu@cluster0-0dym1.mongodb.net/test?retryWrites=true&w=majority',
{userNewUrlParser: true},
()=>
console.log('connection data')
)

app.listen(4000)


