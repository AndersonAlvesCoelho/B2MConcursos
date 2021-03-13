import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages';
import Questions from './pages/Questions';
import RegisterQuestions from './pages/RegisterQuestions';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Perfil from './pages/Dashboard/Perfil';

const Routes = () => (
    <>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/questoes" exact component={Questions} />
                <Route path="/cadastrar-questoes" exact component={RegisterQuestions} />
                <Route path="/login" exact component={Login} />

                <Route path="/dashboard" exact component={Dashboard} />
                <Route path="/dashboard/perfil" exact component={Perfil} />
            </Switch>
        </BrowserRouter>

    </>
);



export default Routes;
