import express from "express";

import BankController from './controllers/bankController';
import OfficeController from './controllers/officeController';
import InstitutionController from './controllers/institutionController';
import DiciplineController from './controllers/diciplineController';
import QuestionController from './controllers/questionController';
import UserController from './controllers/userController';
import AuthController from './controllers/authController';
import UserAnswersQuestionController from './controllers/userAnswersQuestionController';
import CommentController from './controllers/commentController';

const routes = express.Router();

const apiVersionV1 = "/v1";

// --- ROTAS SEM AUTENTICAÇÃO ---
routes.get(`${apiVersionV1}/banks`, BankController.index);
routes.get(`${apiVersionV1}/offices`, OfficeController.index);
routes.get(`${apiVersionV1}/institutions`, InstitutionController.index);
routes.get(`${apiVersionV1}/subjects`, DiciplineController.index);
routes.post(`${apiVersionV1}/questions`, QuestionController.index);

// --- ROTAS QUE NECESSITAM DE AUTENTICAÇÃO ---
routes.post(`${apiVersionV1}/uploadQuestions`, QuestionController.upload);
routes.post(`${apiVersionV1}/registerQuestions`, QuestionController.store);
routes.post(`${apiVersionV1}/registerUser`, UserController.store);
routes.post(`${apiVersionV1}/login`, AuthController.login);

routes.post(`${apiVersionV1}/userAnswersQuestion`, UserAnswersQuestionController.index);
routes.post(`${apiVersionV1}/saveUserAnswers`, UserAnswersQuestionController.store);

routes.get(`${apiVersionV1}/comments`, CommentController.index); // não ta sendo usar
routes.post(`${apiVersionV1}/comments`, CommentController.store);

// --- EM ANALISE ---
routes.get(`${apiVersionV1}/users`, UserController.index);

module.exports = routes;