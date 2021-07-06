const express = require('express')
const router = express.Router()

const { localUpload, CDNupload } = require('../config/file-upload.config')
const Movie = require('../models/Movie.model')


router.get('/', (req, res) => {

    Movie
        .find()
        .then(movies => res.render('pages/movies/gallery-page', { movies }))
        .catch(err => console.log(err))
})


router.get('/local', (req, res) => res.render('pages/movies/upload-local-page'))
router.post('/local', localUpload.single('userImage'), (req, res) => {

    const { description } = req.body

    console.log('Objeto file de Multer:', req.file)

    Movie
        .create({ description, path: `/uploads/${req.file.filename}` })
        .then(() => res.redirect('/peliculas'))
        .catch(err => console.log(err))
})




router.get('/cdn', (req, res) => res.render('pages/movies/upload-cdn-page'))
router.post('/cdn', CDNupload.single('userImage'), (req, res) => {

    const { description } = req.body
    const { path } = req.file

    Movie
        .create({ description, path })
        .then(() => res.redirect('/peliculas'))
        .catch(err => console.log(err))
})



module.exports = router