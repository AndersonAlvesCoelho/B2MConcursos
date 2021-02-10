import express from "express";

import BankController from './controllers/bankController';
import OfficeController from './controllers/officeController';

const routes = express.Router();

const apiVersionV1 = "/v1";

// --- ROTAS SEM AUTENTICAÇÃO ---
routes.get(`${apiVersionV1}/bank`, BankController.index);
routes.get(`${apiVersionV1}/office`, OfficeController.index);
    
module.exports = routes;