import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages';
import Questions from './pages/Questions';
import RegisterQuestions from './pages/RegisterQuestions';
import Dashboard from './pages/Dashboard';

const Routes = () => (
    <>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/questoes" exact component={Questions} />
                <Route path="/cadastrar-questoes" exact component={RegisterQuestions} />
                <Route path="/dashboard" exact component={Dashboard} />
            </Switch>
        </BrowserRouter>

    </>
);



export default Routes;
