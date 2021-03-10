import express from "express";

import BankController from './controllers/bankController';
import OfficeController from './controllers/officeController';
import InstitutionController from './controllers/institutionController';
import DiciplineController from './controllers/diciplineController';
import QuestionController from './controllers/questionController';
import UserController from './controllers/userController';

const routes = express.Router();

const apiVersionV1 = "/v1";

// --- ROTAS SEM AUTENTICAÇÃO ---
routes.get(`${apiVersionV1}/banks`, BankController.index);
routes.get(`${apiVersionV1}/offices`, OfficeController.index);
routes.get(`${apiVersionV1}/institutions`, InstitutionController.index);
routes.get(`${apiVersionV1}/subjects`, DiciplineController.index);
routes.post(`${apiVersionV1}/questions`, QuestionController.index);
routes.post(`${apiVersionV1}/qtdQuestions`, QuestionController.qtdQuestions);

// --- ROTAS QUE NECESSITAM DE AUTENTICAÇÃO ---
routes.post(`${apiVersionV1}/uploadQuestions`, QuestionController.upload);
routes.post(`${apiVersionV1}/registerQuestions`, QuestionController.store);
routes.post(`${apiVersionV1}/registerUser`, UserController.store);

// --- EM ANALISE ---
routes.get(`${apiVersionV1}/users`, UserController.index);

module.exports = routes;