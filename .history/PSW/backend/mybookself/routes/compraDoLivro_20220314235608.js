const express = require('express');
const router = express.Router();
const livro = require('../models/livrosModel')

// async function pegaLivro(livroID) {
//   livro.findOne({id: livroID}).then((livro) => {
//     if(livro.comprado == true) {
//       res.status(400).send('livro ja comprado!')
//     }
// })             
// }
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
