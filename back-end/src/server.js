const express = require('express')
// const app = require('./app');
const port = process.env.PORT || 5000;
const app = express();
var router = express.Router();
const path = require('path')
var another = require('./index.js');

console.log(another.data.timestamp())
console.log(another.data.currentDate())

exports.post = (req, res, next) => {
    res.status(201).send('Requisição recebida com sucesso!');
};
exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(201).send(`Requisição recebida com sucesso! ${id}`);
};
exports.delete = (req, res, next) => {
    let id = req.params.id;
    res.status(200).send(`Requisição recebida com sucesso! ${id}`);
};

router.get('/pdfFile', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'functions', 'pdfParse', 'index.js'))
})

app.get('/api/mensagem', (req, res) => {
    res.send({ express: 'Hello From Express' });
});

app.listen(port, () => console.log(`Listening on port ${port}`));