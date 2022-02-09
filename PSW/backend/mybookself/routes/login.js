const express = require('express');
const router = express.Router();
const usuario = require('../models/usuarioModel') 

router.post('/', async (req, res) => {
    const {email, password} = req.body

    const user = await usuario.findOne({email})
    if(!user) {
        return res.status(401).send("Usuario ou Senha invalidos!!")
    }

    if(password == user.password) {
        req.session.user = user._id
        console.log(user._id)
        res.status(200).end("usuario logado")
    } else 
        res.status(401).send("Usuario ou Senha invalidos!!")
})


module.exports = router