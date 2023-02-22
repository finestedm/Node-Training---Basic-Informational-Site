// const http = require('http')
// const path = require('path')
// const fs = require('fs')

const express = require('express')
const app = express()

app.listen(3000)

app.get('/', (req, res) => {
    res.send('Index')
    // res.render('./src/index')
})

// const server = http.createServer((req, res) => {

//     const filePath = path.join(
//         __dirname,
//         'src',
//         req.url === '/' ? 'index.html' : req.url
//     )

//     let extname = path.extname(filePath)
    
//     fs.readFile(filePath, (err, content) => {
//         if (err) {
//             if (err.code === 'ENOENT') {
//                 fs.readFile(path.join(__dirname, 'src', '404.html'), (err, content) => {
//                     res.writeHead(200, { 'ContentType': 'text/html' });
//                     res.end(content, 'utf-8')
//                 })
//             } else {
//                 res.writeHead(500);
//                 res.end(conent, 'utf-8');
//             }
//         } else {
//             res.writeHead(200, { 'Content-Type': 'text/html' })
//             res.end(content, 'utf-8');
//         }
//     })

// })
