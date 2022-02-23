const express = require('express');
const router = express.Router();
const livro = require('../models/livrosModel') 

const fs = require('fs');
const uploadImg = require('../middleware/multer');

async function pegarLivros(status) {
  var dados = { livros : [] }
  const livrosinfo =  await livro.find({alugado: status});

  livrosinfo.map(livro => dados.livros.push(livro))
  return dados
}

/* informações dos livros gerais. */
router.get('/', async (req, res, next) => {
  const dados = await pegarLivros(false)
  res.status(200).send(dados) 
});

router.post('/cadastro', uploadImg,(req, res, next) => {
  const { titulo, proprietario, dataPublicacao, 
          descricao, edicao, editora, escritor, 
          valorAluguel } = req.body

  let dataFormatada = new Date(dataPublicacao).toLocaleDateString("pt-br", {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  const novoLivro = new livro({
      titulo, proprietario,
      dataPublicacao: dataFormatada,
      descricao, edicao, editora, escritor,
      img: "http://localhost:3000/images/" + req.file.filename, 
      valorAluguel, alugado: false
  })

  novoLivro.save()
  res.status(201).send("Livro cadastrado")
})

/* infomações do livros Alugados */
router.get('/alugados', async (req, res, next) => {
  const dados = await pegarLivros(true)
  res.status(200).send(dados) 
})

router.post('/alugar', (req, res, next) => {
  const {livroID} = req.body
  livro.findByIdAndUpdate(livroID, { alugado: true}, function (err, docs) {
    if (err){
        console.log(err)
        res.status(400).send('não foi possivel alugar o livro!')
    } else 
      res.status(200).send("livro Alugado")
  })
  
})

router.delete('/devolver', (req, res, next) => {
  const {livroID} = req.body
  livro.deleteOne(livroID, function (err, docs) {
    if (err){
        console.log(err)
        res.status(400).send('não foi possivel devolver o livro!')
    } else 
      res.status(200).send("livro Devolvido")
  })
  
})

module.exports = router;
