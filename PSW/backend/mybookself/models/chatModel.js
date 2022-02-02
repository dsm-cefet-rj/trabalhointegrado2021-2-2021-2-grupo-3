const mongoose = require('mongoose')

const chatSchema = mongoose.Schema({
    destinatarioID: String,
    remetenteID: String,
    msg: String,
    hora: String,
    img: String
})

const chatModel = mongoose.model('mensagens', chatSchema)
module.exports = chatModel