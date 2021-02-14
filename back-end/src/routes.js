import express from "express";

import BankController from './controllers/bankController';
import OfficeController from './controllers/officeController';
import InstitutionController from './controllers/institutionController';
import DiciplineController from './controllers/DiciplineController';
import QuestionController from './controllers/questionController';
import UserController from './controllers/userController';

const routes = express.Router();

const apiVersionV1 = "/v1";

// --- ROTAS SEM AUTENTICAÇÃO ---
routes.get(`${apiVersionV1}/banks`, BankController.index);
routes.get(`${apiVersionV1}/offices`, OfficeController.index);
routes.get(`${apiVersionV1}/institutions`, InstitutionController.index);
routes.get(`${apiVersionV1}/subjects`, DiciplineController.index);
routes.get(`${apiVersionV1}/questions`, QuestionController.index);
routes.get(`${apiVersionV1}/users`, UserController.index);
    
module.exports = routes;