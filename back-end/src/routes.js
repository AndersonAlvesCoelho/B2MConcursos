const express = require("express");
const routes = express.Router();

const BankController = require('./controllers/bankController');
const OfficeController = require('./controllers/officeController');

const apiVersionV1 = "/v1";


// --- ROTAS SEM AUTENTICAÇÃO ---
routes.get(`${apiVersionV1}/bank`, BankController.index);
routes.get(`${apiVersionV1}/office`, OfficeController.index);

    
module.exports = routes;