var express = require('express');
var router = express.Router();
const usuario = require('../models/usuarioModel') 

const fs = require('fs')
var usuarioJson = require('../bdLocal/usuario.json')


/* GET informações dos livros. */
router.get('/', async (req, res, next) => {
  const usuarioInfo =  await usuario.find();
  res.send(usuarioInfo);
});

router.post('/cadastro', (req, res, next) => {
  const { name, nickname, cpf, cel, email, password, conformicaoPassword, agreement } = req.body

  const novoUsuario = new usuario({
    name, nickname, cpf, cel, email, password, agreement
  })

  novoUsuario.save()
  res.status(200).send("Usuario cadastrado")
}
)



module.exports = router;
