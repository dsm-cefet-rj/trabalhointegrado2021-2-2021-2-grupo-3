const mongoose = require('mongoose')

const usuarioSchema = mongoose.Schema({
    cel: String,
    cpf: String,
    email: String,
    name: String,
    nickname: String,
    password: String,
    agreement: String
})

const usuario = mongoose.model("usuario", usuarioSchema)
module.exports = usuario