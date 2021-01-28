const express = require("express");
const routes = require("./routes");

const PORT = 3333;
const HOST = "0.0.0.0";

const app = express();

app.use(express.json());
app.use(routes);


//notFound
app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
})

// catch all, 
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({ error: error.message })
});

app.listen(PORT, () => console.log("Hello serve"));


// const express = require('express')
// const app = express();

// const port = process.env.PORT || 5000;


// var router = express.Router();
// const path = require('path')
// var another = require('./index.js');

// // console.log(another.data.timestamp())
// // console.log(another.data.currentDate())

// exports.post = (req, res, next) => {
//     res.status(201).send('Requisição recebida com sucesso!');
// };
// exports.put = (req, res, next) => {
//     let id = req.params.id;
//     res.status(201).send(`Requisição recebida com sucesso! ${id}`);
// };
// exports.delete = (req, res, next) => {
//     let id = req.params.id;
//     res.status(200).send(`Requisição recebida com sucesso! ${id}`);
// };

// router.get('/pdfFile', (req, res, next) => {
//     res.sendFile(path.join(__dirname, '../', 'functions', 'pdfParse', 'index.js'))
// })

// app.get('/api/mensagem', (req, res) => {
//     res.send({ express: 'Hello From Express' });
// });

// app.listen(3333, () => console.log(`Listening on port ${port}`));