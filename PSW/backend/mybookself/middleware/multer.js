const path = require('path')
const multer = require('multer')
const storage = multer.diskStorage({
    destination: (req, file, cb ) => {
        cb(null, path.dirname('./') + '/public/images')   //defini o local onde serão armazenadas as imagens
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname.replace(/ /g, "_")) // defini o nome da imagem
    }
})

const up = multer({ storage, 
    fileFilter: (req, file, cb) => { //só permite o upload de imagens
    if(file.mimetype != 'image/jpeg' && file.mimetype != 'image/png' && file.mimetype != 'image/pjpeg') {
        cb(new Error('invalid type file.'))
    }
    else
        cb(null, true)
    }
})

const uploadImg = up.single('img') //img = nome do campo da requisição e aceita uma foto

module.exports = uploadImg