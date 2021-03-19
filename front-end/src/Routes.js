import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from  './pages';
import Questions from './pages/Questions';
import RegisterQuestions from './pages/RegisterQuestions';
import PrivateRoute from "./Auth";
import Login from './pages/Login';
import Perfil from './pages/Dashboard/Perfil';

const Routes = () => (
    <>
        <Router>
            <Switch>
                {/* // --- ROTAS SEM AUTENTICAÇÃO --- */}
                <Route path="/login" exact component={Login} />
                <Route path="/cadastrar-questoes" exact component={RegisterQuestions} />

                {/* // --- ROTAS QUE NECESSITAM DE AUTENTICAÇÃO --- */}
                <PrivateRoute path="/" exact component={Home} />
                <PrivateRoute path="/questoes" exact component={Questions} />
                <PrivateRoute path="/dashboard/perfil" exact component={Perfil}
                   
                />
            </Switch>
        </Router>

    </>
);



export default Routes;
