const mensagem = [{
    idUsuario: 10,
    msg: "ola",
    container: "container",
    hora: new Date().getHours() + ":" + new Date().getMinutes(),
}]
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(mensagem);
});

module.exports = router;
