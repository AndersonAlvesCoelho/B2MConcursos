const express = require("express");

const BankController = require('./controllers/bankController');
const OfficeController = require('./controllers/officeController');
const Institution = require('./controllers/institutionController');

const routes = express.Router();

const apiVersionV1 = "/v1";

// --- ROTAS SEM AUTENTICAÇÃO ---
routes.get(`${apiVersionV1}/bank`, BankController.index);
routes.get(`${apiVersionV1}/office`, OfficeController.index);
routes.get(`${apiVersionV1}/institution`, Institution.index);

    
module.exports = routes;