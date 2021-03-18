import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

{/* // --- ROTAS SEM AUTENTICAÇÃO --- */ }
import Home from  './pages';
import Questions from './pages/Questions';
import RegisterQuestions from './pages/RegisterQuestions';
{/* // --- ROTAS QUE NECESSITAM DE AUTENTICAÇÃO --- */ }
import PrivateRoute from "./Auth";
import Login from './pages/Login';
import Perfil from './pages/Dashboard/Perfil';

const Routes = () => (
    <>
        <Router>
            <Switch>
                {/* // --- ROTAS SEM AUTENTICAÇÃO --- */}
                <Route path="/" exact component={Home} />
                <Route path="/questoes" exact component={Questions} />
                <Route path="/login" exact component={Login} />

                {/* // --- ROTAS QUE NECESSITAM DE AUTENTICAÇÃO --- */}
                <PrivateRoute path="/cadastrar-questoes" exact component={RegisterQuestions} />
                <PrivateRoute path="/dashboard/perfil" exact component={Perfil}
                   
                />
            </Switch>
        </Router>

    </>
);



export default Routes;
