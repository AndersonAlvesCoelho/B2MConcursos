import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages';
import Questions from './pages/Questions';
import RegisterQuestions from './pages/RegisterQuestions';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

const Routes = () => (
    <>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/questoes" exact component={Questions} />
                <Route path="/cadastrar-questoes" exact component={RegisterQuestions} />
                <Route path="/dashboard" exact component={Dashboard} />
                <Route path="/login" exact component={Login} />
            </Switch>
        </BrowserRouter>

    </>
);



export default Routes;
