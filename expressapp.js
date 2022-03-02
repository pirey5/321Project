const express = require('express');
const app = express()
const path = require('path')

app.use(express.static('public'))

app.get('/', function (req, res) {
    var options = {
        root: path.join(__dirname)
    }
    res.sendFile('public/index.html', options)
})
app.get('/game', function (req, res) {
    var options = {
        root: path.join(__dirname)
    }
    res.sendFile('public/tic.html', options)
})

/*app.get('/page2', function (req, res) {
    const id = req.query.id
    res.send('THIS IS PAGE 2, son! ' + id)
})

app.get('/page2/:id', function (req, res) {
    const id = req.params.id
    res.send('Dynamic URLS, kid!' + id)
})*/

app.listen(9000, function (req, res) {
    console.log('Running on port 9000.')
})