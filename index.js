const express = require('express')
const mongoose = require('mongoose')
const app = express()

app.use(
    express.urlencoded({
        extended: true,
    })
)

app.use(express.json())

const personRoutes = require('./routes/personRoutes')
app.use('/person', personRoutes)


mongoose.connect(
    'mongodb+srv://leviagape:levi123456@cluster0.icyqnly.mongodb.net/?retryWrites=true&w=majority')
    .then (() => {
        console.log("Conectou-se ao MongoDB")
        app.listen(3000)
    })
    .catch((erro) => console.log(erro))
