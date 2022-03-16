const express = require('express');
const router = express.Router();
const livro = require('../models/livrosModel')


router.post('/', async(req, res, next) => {
  const { livroID } = req.body
  livro.findByIdAndUpdate(livroID, { comprado: true }, function (err, docs) {

    var livrosinfo = await livro.find({ _id: true });

    if (livrosinfo[0].comprado) {
      console.log(err)
      res.status(400).send('livro já comprado!')
    }

    if (err) {
      console.log(err)
      res.status(400).send('não foi possivel comprar o livro!')
    }
    else
      res.status(200).send("livro comprado")
  })

})

module.exports = router;
