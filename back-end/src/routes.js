import express from "express";

import BankController from './controllers/bankController';
import OfficeController from './controllers/officeController';
import InstitutionController from './controllers/institutionController';
import DiciplineController from './controllers/diciplineController';

import RegisterQuestions from "./controllers/registerQuestionsController";

const routes = express.Router();

const apiVersionV1 = "/v1";

// --- ROTAS SEM AUTENTICAÇÃO ---
routes.get(`${apiVersionV1}/bank`, BankController.index);
routes.get(`${apiVersionV1}/office`, OfficeController.index);
routes.get(`${apiVersionV1}/institution`, InstitutionController.index);
routes.get(`${apiVersionV1}/dicipline`, DiciplineController.index);

// --- ROTAS QUE PRECISAM DE AUTENTICACAO ---
routes.post(`${apiVersionV1}/registerQuestions`, RegisterQuestions.index);

module.exports = routes;