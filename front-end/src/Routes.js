import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import PrivateRoute from "./Auth";
// ROTAS SEM AUTENTICAÇÃO
import Home from './pages';
import Questions from './pages/Questions';
import Login from './pages/Login';
// ROTAS QUE NECESSITAM DE AUTENTICAÇÃO
import RegisterQuestions from './pages/RegisterQuestions';
import Perfil from './pages/Dashboard/Perfil';
import Toast from "./helpers/toast";
import {connect} from "react-redux";
import * as regusterQuestionsActions from "./actions/registerQuestions.actions";
import * as bankActions from "./actions/bank.actions";
import * as institutionActions from "./actions/institution.actions";
import * as officeActions from "./actions/office.actions";
import * as diciplineActions from "./actions/dicipline.actions";

const Routes = (props) => (
    <>
        <BrowserRouter>
            <Switch>
                {/* ROTAS SEM AUTENTICAÇÃO */}
                <Route path="/" exact component={Home} />
                <Route path="/questoes" exact component={Questions} />
                <Route path="/login" exact component={Login} />

                {/* ROTAS QUE NECESSITAM DE AUTENTICAÇÃO */}
                <Route path="/cadastrar-questoes" exact component={RegisterQuestions} />
                <PrivateRoute path="/dashboard/perfil" exact component={Perfil} />

            </Switch>
        </BrowserRouter>
        <Toast
            show={props.toastShow}
            status={props.toastStatus}
            title={props.toastTilte}
            message={props.toastMessage}
            delay={props.toastDelay}
        />
    </>
);


const mapStateToProps = state => ({
    toastShow: state.toast.show,
    toastStatus: state.toast.status,
    toastMessage: state.toast.message,
    toastDelay: state.toast.delay,
    toastTilte: state.toast.title,
})

const mapDispatchToProps = {
    uploadFile: regusterQuestionsActions.uploadFile,
    store: regusterQuestionsActions.store,

    getBank: bankActions.getBank,
    getInstitution: institutionActions.getInstitution,
    getOffice: officeActions.getOffice,
    getDicipline: diciplineActions.getDicipline,
}


export default connect(mapStateToProps, mapDispatchToProps)(Routes);
