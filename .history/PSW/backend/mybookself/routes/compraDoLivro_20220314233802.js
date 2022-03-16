const express = require('express');
const router = express.Router();
const livro = require('../models/livrosModel')

async function pegaLivro(livroID) {
  var livrosinfo = await livro.findById(livroID);
  console.log(livrosinfo);

  usuario.findOne({id: decoded.livroId}).then((livro) => {
    if(livro === null) {
        var err = new Error('Livro ja comprado')
        err.status = 403
        return next(err)
    }
})             

}

  router.post('/', async(req, res, next) => {
  
  const { livroID } = req.body;
  pegaLivro(livroID);
  livro.findByIdAndUpdate(livroID, { comprado: true }, function (err, docs) {
    if (err) {
      console.log(err)
      res.status(400).send('não foi possivel comprar o livro!')
    }
    else
      res.status(200).send("livro comprado")
  })

})

module.exports = router;
