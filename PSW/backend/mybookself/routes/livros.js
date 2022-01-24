
const livrosIniciais = [{
  id: 123,
  titulo: "O poder do hábito",
  descricao: "Este livro tem como objetivo descrever...",
  proprietario: "Jorge",
  dataAluguel: "20/06/2021",
  img: "http://localhost:3000/images/livro4.jpg"
},{
  id: 142,
  titulo: "Código Limpo",
  descricao: "Este livro tem como objetivo descrever...",
  proprietario: "Lucas",
  dataAluguel: "10/05/2021",
  img: "http://localhost:3000/images/livro3.jpg"
}]

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(livrosIniciais);
});

module.exports = router;
