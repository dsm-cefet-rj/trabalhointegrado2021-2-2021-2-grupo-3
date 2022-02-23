const mongoose = require('mongoose')

const aluguelSchema = mongoose.Schema({
    dataAluguel: String,
    livroId: mongoose.Types.ObjectId,
    proprietarioId: mongoose.Types.ObjectId,
    locatarioId: mongoose.Types.ObjectId,
    status: String
})

const aluguelModel = mongoose.model('aluguel', aluguelSchema)
module.exports = aluguelModel