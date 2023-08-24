const express = require('express')
const app = express()

app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})

const users = ["shadow.no.money", "diislay"]
const bannis = []

app.get('/users', function (req, res) {
    res.setHeader('Content-Type', 'text/json');
    res.status(200).send(users)
});

app.get('/bannis', function (req, res) {
    res.setHeader('Content-Type', 'text/json');
    res.status(200).send(bannis)
});

app.listen(process.env.PORT || 3000)
