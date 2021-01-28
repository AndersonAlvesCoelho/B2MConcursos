const express = require("express");
const routes = express.Router();

const BankController = require('./controllers/bankController');

const apiVersion = "/v1";


routes
    // --- ROTAS SEM AUTENTICAÇÃO ---
    .get(`${apiVersion}/bank`, BankController.index);

    
module.exports = routes;