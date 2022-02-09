const express = require('express');
const router = express.Router();
const usuario = require('../models/usuarioModel') 
const bodyParser = require('body-parser');
router.use(bodyParser.json());

router.post('/', (req, res, next) => {
    if(!req.session.user) {
        var authHeader = req.headers.authorization;

        /* if(!authHeader) {
            var err = new Error(' Você não está autorizado!');
            res.setHeader('WWW-Authenticate', 'Basic');
            err.status = 401;
            return next(err);
        }

        var auth = new Buffer.from(authHeader.split(' ')[1], 'base64').toString().split(':');
        var username = auth[0];
        var password = auth[1]; */

        const {email, password} = req.body

        usuario.findOne({email})
        .then((user) => {
            console.log(user)
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
                req.session.user = 'authenticated';
                res.statusCode = 200;
                res.setHeader('Content-Type', 'text/plain');
                res.end('Você está autenticado!')
            }
        })
        .catch((err) => next(err));
    } else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Você já está autenticado!');
    }
    })

router.get('/logout', (req, res) => {
    if (req.session) {
        req.session.destroy();
        res.clearCookie('session-id');
        res.send('logout!!')
    } else {
        var err = new Error('Você não está logado!');
        err.status = 403;
        next(err);
    }
});


module.exports = router