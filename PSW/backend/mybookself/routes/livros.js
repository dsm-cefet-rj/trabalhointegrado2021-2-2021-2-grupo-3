var express = require('express');
var router = express.Router();

const fs = require('fs')
var livrosJson = require('../bdLocal/livros.json')

function SalvarJson (livrosJson) {
  const data = JSON.stringify(livrosJson) // Converte o Json 
  fs.writeFile('./bdLocal/livros.json', data, (err) => { // sobrescreve o arquivo livros.json 
    if (err) throw err;
    console.log('Livro Cadastro no livros.json');
  })
}

/* GET informações dos livros. */
router.get('/', (req, res, next) => {
  res.status(200).send(livrosJson);
});

router.post('/cadastro', (req, res, next) => {
  livrosJson.livros.push(req.body) 
  SalvarJson(livrosJson)
  res.status(200).send("Livro cadastrado")
})

router.post('/Alugado', (req, res, next) => {
  const { idLivro, idPropietario, idLocatario } = req.body
  const data = {
    idAluguel: Math.floor(Math.random() * 100000),
    idLivro, 
    idPropietario, 
    idLocatario
  }

  livrosJson.Alugados.push(data)
  
  SalvarJson(livrosJson)
  
  res.send("livro Alugado")
})

module.exports = router;
