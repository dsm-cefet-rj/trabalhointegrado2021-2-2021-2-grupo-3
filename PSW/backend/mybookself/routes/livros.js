const express = require('express');
const router = express.Router();
const livro = require('../models/livrosModel')
const aluguel = require('../models/aluguelModel')
const uploadImg = require('../middleware/multer');

async function pegarLivros(status) {
  var dados = { livros: [] }
  var livrosinfo = await livro.find({ alugado: status });

  livrosinfo.map(livro => dados.livros.push(livro))
  return dados
}

/* informações dos livros gerais. */
router.get('/', async (req, res, next) => {
  const dados = await pegarLivros(false)
  res.status(200).send(dados)
});

router.post('/cadastro', uploadImg, (req, res, next) => {
  const { titulo, proprietario, dataPublicacao,
    descricao, edicao, editora, escritor,
    valorAluguel } = req.body

  let dataFormatada = new Date(dataPublicacao).toLocaleDateString("pt-br", {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric'
  })

  const urlImg = "http://localhost:3000/images/" + req.file.filename

  const novoLivro = new livro({
      titulo, proprietario,
      dataPublicacao: dataFormatada,
      descricao, edicao, editora, escritor,
      img: "http://localhost:3000/images/" + req.file.filename, 
      valorAluguel, alugado: false, comprado: false
  })

  novoLivro.save()
  res.status(201)
    .json({ mensage: "Livro cadastrado", urlImg, livroId: novoLivro._id })
    .end()
})

/* infomações do livros Alugados */
router.get('/alugados', async (req, res, next) => {
  var dados = await pegarLivros(true)
  /* var livros = { livrosAlugados: [], livroEmprestados: [] }
  dados.livros.map(livro => {
    aluguel.find({ livroId: livro._id }, (err, docs) => {
      console.log(docs[0])
      var data = {
        livro,
        aluguelInfo: {
          aluguelId: docs[0]._id,
          dataAluguel: docs[0].dataAluguel
        }
      }

      if (docs[0].proprietarioId === req.userId) {
          console.log('if')
          //livros.livroEmprestados.push(data)
      } 
    })
  }) */

  res.status(200).send(dados)
})

router.post('/alugar', (req, res, next) => {
  const { livroId } = req.body

  livro.findByIdAndUpdate(livroId, { alugado: true }, function (err, docs) {
    if (err) {
      console.log(err)
      res.status(400).send('não foi possivel alugar o livro!')
    } else {
      const novoaluguel = new aluguel({
        locatarioId: req.userId,
        proprietarioId: docs.proprietarioId,
        status: 'alugado',
        livroId,
        dataAluguel: new Date(Date.now()).toLocaleDateString("pt-br", {
          year: 'numeric',
          month: 'numeric',
          day: 'numeric'
        })
      })
      novoaluguel.save()
      res.status(200).send("livro Alugado")
    }

  })

})

router.delete('/devolver', (req, res, next) => {
  const { livroId } = req.body
  livro.deleteOne(livroId, function (err, docs) {
    if (err) {
      console.log(err)
      res.status(400).send('não foi possivel devolver o livro!')
    } else
      res.status(200).send("livro Devolvido")
  })

})

module.exports = router;
