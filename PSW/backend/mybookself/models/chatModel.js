const mongoose = require('mongoose')

const chatSchema = mongoose.Schema({
    destinatarioID: String,
    remetenteID: String,
    msg: String,
    hora: Date 
})

const chatModel = mongoose.model('mensagens', chatSchema)
module.exports = chatModel