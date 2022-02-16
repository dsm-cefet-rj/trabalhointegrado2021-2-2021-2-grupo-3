const express = require('express');
const router = express.Router();
const usuario = require('../models/usuarioModel') 
const jwt = require('jsonwebtoken')

router.post('/', (req, res, next) => {
        const {email, password} = req.body

        usuario.findOne({email}).then( async (user) => {
            if(user === null) {
                var err = new Error('Email invalido!!');
                err.status = 403;
                return next();
            }
            else if (user.password !== password) {
                var err = new Error('Sua senha está incorreta!');
                err.status = 403;
                return next(err);
            }
            else if (user.email === email && user.password === password) {
                jwt.sign({ usuarioID: user._id }
                , 'SenhaSecreta', { expiresIn: '1h' }
                , (err, token) => {
                    console.log("Token: " + token);
                    res.status(200).json({
                        nickname: user.nickname,
                        token: token
                    }).end()
                  });
            }
        })
        .catch((err) => next(err)) 
    })

/* outer.get('/logout', (req, res) => {
    if (req.session) {
        req.session.destroy();
        res.clearCookie('session-id');
        res.send('logout!!')
    } else {
        var err = new Error('Você não está logado!');
        err.status = 403;
        next(err);
    }
}); */


module.exports = router