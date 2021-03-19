import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import * as userAnswersQuestionActions from '../../../actions/userAnswersQuestion.actions';
import { getUserCookie } from '../../../services/session';
import { SideNavbar, Navbar } from '../../../components/Menu';
import Footer from '../../../components/Footer';

import '../../../assets/css/perfil.css';

function Perfil(props) {

    const { getAnswerQuestion, answerQuestion, loading } = props;

    const idUser = getUserCookie() ? getUserCookie()[0].id_user : false;
    const [toggle, setToggle] = useState(false); // mudar o stado do side bar
    const [statistics, setStatistics] = useState([]);

    useEffect(() => {
        getAnswerQuestion(idUser);
    }, [getAnswerQuestion, idUser])

    useEffect(() => {
        if (answerQuestion.length !== 0) {
            let wrong = 0;
            let acts = 0;
            answerQuestion.map(e => {
                if (e.check) {
                    wrong = wrong + 1
                } else {
                    acts = acts + 1
                }
            })
            setStatistics({
                total: answerQuestion.length,
                wrong: wrong,
                acts: acts,
            })
        }
    }, [answerQuestion, idUser])

    return (
        <>

            <div className="B2M-page">
                <Navbar toggle={toggle} onToggle={(e) => setToggle(e)} /> {/* MAIN NAVBAR */}
                <div className="B2M-page-content">
                    <SideNavbar toggle={toggle} type="Perfil" /> {/* SIDEBAR */}
                    {/* Page Header */}
                    <div className="B2M-content-inner side-navbar-active">
                        <header className="B2M-page-header">
                            <h2>Perfil</h2>
                        </header>

                        {/* Breadcrumb */}
                        <div className="breadcrumb-holder container-fluid B2M-bg">
                            <ul className="B2M-breadcrumb">
                                <li className="breadcrumb-item"><a href="/">Home</a></li>
                                <li className="breadcrumb-item active B2M-text-color-primary">Perfil</li>
                            </ul>
                        </div>

                        <div className="container-fluid aling-center">
                            <div className="row justify-content-md-center">
                                <div className="col-lg-4">
                                    <div className="client card">
                                        <div className="card-body text-center">
                                            <div className="B2M-client-avatar">
                                                <img src="https://secure.gravatar.com/avatar/?s=56&d=mm&r=g" alt="avatar" className="img-fluid rounded-circle" />
                                                <div className="status bg-green"></div>
                                            </div>
                                            <div className="client-title">
                                                <h3>Jason Doe</h3>
                                                {/* <span>Web Developer</span><a href="#">Follow</a> */}
                                            </div>
                                            <div className="B2M-client-info">
                                                {!loading ? (<>
                                                    {answerQuestion.length !== 0 ? <>
                                                        <div className="row">
                                                            <div className="col-4"><strong className="B2M-client-info-total">{statistics.total}</strong><br /><small>Questões feitas</small></div>
                                                            <div className="col-4"><strong className="B2M-client-info-wrong">{statistics.wrong}</strong><br /><small>Questões acertadas</small></div>
                                                            <div className="col-4"><strong className="B2M-client-info-acts">{statistics.acts}</strong><br /><small>questões errdas</small></div>
                                                        </div>
                                                    </> : <>
                                                        <div className="row">
                                                            <div className="col-4"><strong className="B2M-client-info-total">0</strong><br /><small>Questões feitas</small></div>
                                                            <div className="col-4"><strong className="B2M-client-info-wrong">0</strong><br /><small>Questões acertadas</small></div>
                                                            <div className="col-4"><strong className="B2M-client-info-acts">0</strong><br /><small>questões errdas</small></div>
                                                        </div>
                                                    </>}
                                                </>) : <div class="B2M-loader mb-5"></div>}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Footer />
                    </div>
                </div>
            </div>
        </>
    );
}

const mapStateToProps = (state) => ({
    loading: state.userAnswersQuestion.loading,
    answerQuestion: state.userAnswersQuestion.answerQuestion,
});

const mapDispatchToProps = {
    getAnswerQuestion: userAnswersQuestionActions.getAnswerQuestion,
};

export default connect(mapStateToProps, mapDispatchToProps)(Perfil);
