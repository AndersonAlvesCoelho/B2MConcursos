import React from 'react';
import { BrowserRouter , Switch, Route } from 'react-router-dom';
import PrivateRoute from "./Auth";
/* // --- ROTAS SEM AUTENTICAÇÃO --- */
import Home from  './pages';
import Questions from './pages/Questions';
import Login from './pages/Login';
/* // --- ROTAS QUE NECESSITAM DE AUTENTICAÇÃO --- */
import RegisterQuestions from './pages/RegisterQuestions';
import Perfil from './pages/Dashboard/Perfil';

const Routes = () => (
    <>
        <BrowserRouter>
            <Switch>
                {/* // --- ROTAS SEM AUTENTICAÇÃO --- */}
                <Route path="/" exact component={Home} />
                <Route path="/questoes" exact component={Questions} />
                <Route path="/login" exact component={Login} />

                {/* // --- ROTAS QUE NECESSITAM DE AUTENTICAÇÃO --- */}
                <Route path="/cadastrar-questoes" exact component={RegisterQuestions} />
                <PrivateRoute path="/dashboard/perfil" exact component={Perfil}
                   
                />
            </Switch>
        </BrowserRouter>

    </>
);



export default Routes;
