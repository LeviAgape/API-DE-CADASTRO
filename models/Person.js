const mongoose = require ('mongoose')

const Person = mongoose.model('Person',{
    nome: String,
    dia: Number,
    mes: String,
    Ano: Number,
    email: String,
})

module.exports = Person