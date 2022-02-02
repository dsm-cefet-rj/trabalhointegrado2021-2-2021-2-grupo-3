var express = require('express');
var router = express.Router();
const usuario = require('../models/usuarioModel') 

/* GET informações dos livros. */
router.get('/', async (req, res, next) => {
  const usuarioInfo =  await usuario.find();
  res.send(usuarioInfo);
});

router.post('/cadastro', (req, res, next) => {
  const { name, nickname, cpf, cel, email, password, confirmacaoPassword, agreement } = req.body

  console.log("password: " + password)
  console.log("confimacaoPassword: " + confirmacaoPassword)
  
  if(password == confirmacaoPassword) {
    const novoUsuario = new usuario({
      name, nickname, cpf, cel, email, password, agreement
    })
  
    novoUsuario.save()
    res.status(201).send("Usuario cadastrado")
  } else {
    res.status(400).send("A 'senha' e a 'confirmação da Senha' não são iguais")
  }
}
)

module.exports = router;
