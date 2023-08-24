const express = require('express')
const app = express()
cont key = process.env.key

app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})

const users = ["shadow.no.money", "diislay"]
const bannis = []

app.get('/users', function (req, res) {
    const queryParams = req.query;
    
    if (queryParams.name == key) {
        res.setHeader('Content-Type', 'text/json');
        res.status(200).send(users);
    } else {
        res.status(200).send("Non autorisé");
    }
});

app.get('/bannis', function (req, res) {
    res.setHeader('Content-Type', 'text/json');
    res.status(200).send(bannis)
});

app.listen(process.env.PORT || 3000)
