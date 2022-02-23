const mongoose = require('mongoose')

const LivroSchema = mongoose.Schema({
    titulo: String,
    proprietario: String,
    dataPublicacao: String,
    descricao: String,
    edicao: String,
    editora: String,
    escritor: String,
    img: String,
    valorAluguel: Number,
    alugado: Boolean,
    comprado: Boolean,
    proprietarioId: mongoose.Types.ObjectId
})

const livro = mongoose.model('livro', LivroSchema)
module.exports = livro