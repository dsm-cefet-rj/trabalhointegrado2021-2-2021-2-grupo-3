const mongoose = require('mongoose')

const LivroSchema = mongoose.Schema({
    titulo: String,
    proprietario: String,
    dataPublicacao: Date,
    descricao: String,
    edicao: String,
    editora: String,
    escritor: String,
    img: String,
    valorAluguel: Number
})

const livro = mongoose.model('livro', LivroSchema)
module.exports = livro