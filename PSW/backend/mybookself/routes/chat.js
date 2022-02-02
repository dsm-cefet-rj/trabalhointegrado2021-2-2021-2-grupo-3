var express = require('express');
var router = express.Router();

/* GET todas as mensagens no bd. */
router.get('/', function(req, res, next) {
  res.send('mensagens');
});

module.exports = router;
