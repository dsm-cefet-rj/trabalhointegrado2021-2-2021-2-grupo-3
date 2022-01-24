var express = require('express');
var router = express.Router();

const fs = require('fs')
var livrosJson = require('../bdLocal/livros.json')

/* GET informações dos livros. */
router.get('/', (req, res, next) => {
  res.status(200).send(livrosJson);
});

router.post('/cadastro', (req, res, next) => {
  livrosJson.livros.push(req.body) 
  
  const data = JSON.stringify(livrosJson) // Converte o Json 
  fs.writeFile('./bdLocal/livros.json', data, (err) => { // sobrescreve o arquivo livros.json 
    if (err) throw err;
    console.log('Livro Cadastro no livros.json');
  })
  
  res.status(200).send("Livro cadastrado")
})

router.delete('/Alugado', (req, res, next) => {
  res.send("não funcionado ainda")
})

module.exports = router;
