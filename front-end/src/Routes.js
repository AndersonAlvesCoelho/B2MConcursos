import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/index';
import Questions from './pages/Questions/index';
import RegisterQuestions from './pages/RegisterQuestions/index';

const Routes = () => (
    <>
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/questoes" exact component={Questions} />
                <Route path="/cadastrar-questoes" exact component={RegisterQuestions} />
            </Switch>
        </BrowserRouter>

    </>
);



export default Routes;
