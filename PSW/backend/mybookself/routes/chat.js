var chatModel = require('../models/chatModel.js')
var express = require('express');
var router = express.Router();

/* GET todas as mensagens no bd. */
router.get('/', async function(req, res, next) {
  var dados = { mensagem : [] }
  const chatMsg = await chatModel.find()
  chatMsg.map(mensagem => dados.mensagem.push(mensagem))
  res.send(dados);
});

router.post('/enviarMsg', function(req, res, next){
  const {destinatarioID, msg, img} = req.body
  console.log(msg)
  const horaFormatada = new Date( Date.now() ).toLocaleTimeString("pt-br", { hour12: false })
  const novaMensagem = new chatModel({destinatarioID, remetenteID: req.userId, msg, hora: horaFormatada, img})
  novaMensagem.save()
  res.send("teste")
});

module.exports = router;
