const express = require('express');
const router = express.Router();
const livro = require('../models/livrosModel') 

const fs = require('fs');
const uploadImg = require('../middleware/multer');

/* GET informações dos livros. */
router.get('/', async (req, res, next) => {
  const livrosinfo =  await livro.find();
  var dados = {
    livros : []
  }

  livrosinfo.map(livro => dados.livros.push(livro))
  res.status(200).send(dados) 
});

router.post('/cadastro', uploadImg,(req, res, next) => {
  const { titulo, proprietario, dataPublicacao, 
          descricao, edicao, editora, escritor, 
          valorAluguel } = req.body
  
  const novoLivro = new livro({
      titulo, proprietario, dataPublicacao,
      descricao, edicao, editora, escritor,
      img: "http://localhost:3000/images/" + req.file.filename, 
      valorAluguel
  })

  novoLivro.save()
  res.status(201).send("Livro cadastrado")
})

router.post('/Alugado', (req, res, next) => {

  res.send("livro Alugado")
})

module.exports = router;
