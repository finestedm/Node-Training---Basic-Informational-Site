const express = require('express')
const router = express.Router();

router.get('/:page', (req, res) => {
    if (req.params.page === '' || req.params.page === '/') {
        res.render('index')
    } else if (req.params.page === 'about') {
        res.render('about')
    } else if (req.params.page === 'contact-me') {
        res.render('contact-me')
    } else {
        res.render('404')
    }
})

module.exports = router