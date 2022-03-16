const express = require('express');
const router = express.Router();
const livro = require('../models/livrosModel')


router.post('/', (req, res, next) => {
  const { livroID } = req.body
  livro.findByIdAndUpdate(livroID, { comprado: true }, async function (err, docs) {

    var livrosinfo = await livro.find({ _id: livroID });
    console.log(livrosinfo);
    //if (livrosinfo[0].comprado) {
     // res.status(400).send('livro já comprado!')
    //}

    if (err) {
      console.log(err)
      res.status(400).send('não foi possivel comprar o livro!')
    }
    else
      res.status(200).send("livro comprado")
  })

})

module.exports = router;
