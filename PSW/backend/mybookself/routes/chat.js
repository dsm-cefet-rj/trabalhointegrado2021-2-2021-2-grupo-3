const mensagem = [{
    idUsuario: 10,
    msg: "ola",
    container: "container",
    hora: new Date().getHours() + ":" + new Date().getMinutes(),
}]

var chatmsg = require('../bdLocal/chat.json')
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(chatmsg);
});

module.exports = router;
