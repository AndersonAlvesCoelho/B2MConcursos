import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
// import MenuNavbar from '../../components/MenuNavbar/index';
import { Col, Container, Row } from "react-bootstrap";
import {
    Form,
    Input,
    Button,
    Card,
    Radio,
    Select,
    Cascader,
    DatePicker,
    InputNumber,
    TreeSelect,
    Switch,
    Steps,
    Typography ,
    onFieldsChange
} from 'antd';
import { SideNavbar, Navbar } from '../../components/Menu/';
import '../../assets/css/home.css';
import JoditEditor from 'jodit-react';
// import {Card, Form, Input, Steps, TreeSelect} from 'antd';
import Footer from '../../components/Footer';
import * as regusterQuestionsActions from '../../actions/registerQuestions.actions';
import * as bankActions from "../../actions/bank.actions";
import * as institutionActions from "../../actions/institution.actions";
import * as officeActions from "../../actions/office.actions";
import * as diciplineActions from "../../actions/dicipline.actions";
import { yearData } from "../../services/filter/dataSelect";
import {
    formatDefault,
    formataDicipline,
    formataOffice,
    formatDefaultRegister
} from "../../helpers/formatDataToQuery";
import Pagination from "../../components/Pagination";
import registerQuestion from "../../reducers/registeQuestions.reducer";
import Alternative from "../../components/Alternative";
const { Title } = Typography;

const answerStyleBox = {
    float: 'left',
    height: '150px',
};

const ABCDStyle = {
    float: 'left',
    marginLeft: '20px',
    marginTop: '-24px',
};

const answerStyle = {
    marginTop: '5px',
};



const { SHOW_PARENT, SHOW_ALL } = TreeSelect;

// TODO: Retirar o menu desse componenete e criar um menu para toda a apalicacao
const RegisterQuestions = (props) => {

    const {children} = props

    const [toggle, setToggle] = useState(false); // mudar o stado do side bar

    return (
        <div className="B2M-page">
            <Navbar toggle={toggle} onToggle={(e) => setToggle(e)} /> {/* MAIN NAVBAR */}
            <div className="B2M-page-content">
                <SideNavbar toggle={toggle} type="RegisterQuestions" /> {/* SIDEBAR */}
                {/* Page Header */}
                <div className={`B2M-content-inner side-navbar-active ${toggle ? 'active' : ''}`}>
                    <header className="B2M-page-header">
                        <h2>Registro de questões</h2>
                    </header>
                    {/* Breadcrumb */}
                    <div className="breadcrumb-holder container-fluid B2M-bg">
                        <ul className="B2M-breadcrumb">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="breadcrumb-item active B2M-text-color-primary">Registro de questões</li>
                        </ul>
                    </div>

                    <section>{children}</section>

                    <Footer />
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    loadingBank: state.bank.loading,
    bank: state.bank.bank,

    loadingInstitution: state.institution.loading,
    institution: state.institution.institution,

    loadingOffice: state.office.loading,
    office: state.office.office,

    loadingDicipline: state.dicipline.loading,
    dicipline: state.dicipline.dicipline,
    qtdUploadQuestions: state.registerQuestion.qtdUploadQuestions,
    questions: state.registerQuestion.questions,
})


const mapDispatchToProps = {
    uploadFile: regusterQuestionsActions.uploadFile,
    store: regusterQuestionsActions.store,

    getBank: bankActions.getBank,
    getInstitution: institutionActions.getInstitution,
    getOffice: officeActions.getOffice,
    getDicipline: diciplineActions.getDicipline,
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterQuestions);
