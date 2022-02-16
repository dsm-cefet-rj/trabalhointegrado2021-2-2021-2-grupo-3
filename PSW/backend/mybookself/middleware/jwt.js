const jwt = require('jsonwebtoken')
const express = require('express');
const usuario = require('../models/usuarioModel')

function auth (req, res, next) {
    const headerAuth = req.headers.authorization
    if(headerAuth) {
        const token = headerAuth.slice(7)
        console.log(token)
        jwt.verify(token, 'SenhaSecreta', (err, decoded) => {
            if(err) {
                var erro = new Error(err)
                erro.status = 403
                return next(erro)
            } else {
                usuario.findOne({id: decoded.usuarioId}).then((user) => {
                    if(user === null) {
                        var err = new Error('Usuario Invalido!!')
                        err.status = 403
                        return next(err)
                    } else {
                        req.userId = user._id
                        return next()
                    }
                })             
            }
        })
    } else {
        var err = new Error('Você não está autenticado!!')
        err.status = 403
        return next(err)
    }
   
}

module.exports = auth