// const http = require('http')
// const path = require('path')
// const fs = require('fs')

const express = require('express')
const app = express()
app.set('view engine', 'ejs')

const allRoutes = require('./routes/all')
app.use('/', allRoutes)

app.listen(3000)

app.get('/', (req, res) => {
    res.render('index')
})