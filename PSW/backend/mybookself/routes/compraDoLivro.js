const express = require('express');
const router = express.Router();
const livro = require('../models/livrosModel')

router.post('/', (req, res, next) => {
  const {livroID} = req.body
  livro.findByIdAndUpdate(livroID, { comprado: true } , function (err, docs) {
    if (err){
        console.log(err)
        res.status(400).send('não foi possivel comprar o livro!')
    } else 
      res.status(200).send("livro comprado")
  })
  
})

module.exports = router;
