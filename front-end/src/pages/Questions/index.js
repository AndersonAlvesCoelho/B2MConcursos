import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Empty } from 'antd';

import { getUserCookie } from '../../services/session';
import { SideNavbar, Navbar } from '../../components/Menu/';
import Alternative from '../../components/Alternative';
import FilterFixed from '../../components/FilterFixed';
import Pagination from '../../components/Pagination';
import Footer from '../../components/Footer';
import * as questionActions from '../../actions/question.actions';
import * as userAnswersQuestionActions from '../../actions/userAnswersQuestion.actions';

import '../../assets/css/question.css';
import 'antd/dist/antd.css';

const LIMIT = 1;
function Questions(props) {

    const {
        loadingQuestion,
        loadingAnswerQuestion,

        question,
        countQuetion,
        answerQuestion,

        getQuestion,
        getAnswerQuestion,

    } = props;

    const loading = loadingQuestion && loadingAnswerQuestion;
    const idUser = getUserCookie() ? getUserCookie()[0].id_user : false;

    const [offset, setOffset] = useState(0);

    const [toggle, setToggle] = useState(false); // mudar o stado do side bar
    const [visible, setVisible] = useState(false);
    const [dataFilter, setDataFilter] = useState([]);
    const [pagerCurrent, setPagerCurrent] = useState(1);
    const [checkAnswer, setCheckAnswer] = useState([]);
    const [dataQuestion, setDataQuestion] = useState([]);

    //GET DATA QUESTIONS
    useEffect(() => {
        let data = dataFilter.length !== 0 ? dataFilter : false;
        getQuestion({ offset, LIMIT, data });
    }, [getQuestion, offset, dataFilter]);


    //get answer user question
    useEffect(() => {
        let auxAnswer = [];

        if (question.length !== 0) {
            question.forEach(e => auxAnswer.push(e.id_question));

            if (idUser) {
                getAnswerQuestion(idUser, auxAnswer)
            } else {
                const keys = Object.keys(localStorage)
                // get alll localStorages answer
                let auxStorage = []
                keys.map((id) => {
                    let aux = JSON.parse(localStorage.getItem(parseInt(id)))
                    auxStorage.push({ id_question: parseInt(id), check: aux.check, answer: aux.answer });
                })
                setCheckAnswer(auxStorage);
            }
        }
    }, [getAnswerQuestion, question])

    // juntado resposta do usuario com a pergunta
    useEffect(() => {
        if (answerQuestion.length !== 0) {
            if (question.length !== 0) {
                let auxNewData = question.map((quest) => ({
                    ...quest,
                    ...answerQuestion.find((answer) => answer.id_question === quest.id_question)
                }))
                setDataQuestion(auxNewData);
            }
        } else {
            if (question.length !== 0) {
                let auxNewData = question.map((quest) => ({
                    ...quest,
                    ...checkAnswer.find((answer) => answer.id_question === quest.id_question)
                }))

                setDataQuestion(auxNewData);
            }
        }
    }, [answerQuestion, checkAnswer])

    return (
        <>
            <div className="B2M-page">
                <Navbar toggle={toggle} onToggle={(e) => setToggle(e)} /> {/* MAIN NAVBAR */}
                <div className="B2M-page-content">
                    <SideNavbar toggle={toggle} type="Questions" /> {/* SIDEBAR */}
                    {/* Page Header */}
                    <div className={`B2M-content-inner side-navbar-active ${toggle ? 'active' : ''}`}>
                        <header className="B2M-page-header">
                            <h2>Questões</h2>
                        </header>
                        {/* Breadcrumb */}
                        <div class="breadcrumb-holder container-fluid B2M-bg">
                            <ul class="B2M-breadcrumb">
                                <li class="breadcrumb-item"><a href="/">Home</a></li>
                                <li class="breadcrumb-item active B2M-text-color-primary">Questões</li>
                            </ul>
                        </div>

                        <section class="B2M-questions">
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-12">
                                        {!loading ? (<>
                                            {dataQuestion.length !== 0 ? (<>
                                                <div className="row">
                                                    <div className="col-lg-2 col-md-12 B2M-info-question-none">
                                                        <div className="B2M-info-question">
                                                            <FilterFixed visible={visible} onClose={() => setVisible(false)} changerFilter={(e) => { setDataFilter(e); }} />
                                                            <a onClick={() => setVisible(true)}><i className="B2M-search-icon"></i></a>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-10 col-md-12">
                                                        <Pagination
                                                            limit={LIMIT}
                                                            total={countQuetion}
                                                            offset={offset}
                                                            setOffset={setOffset}
                                                        />
                                                    </div>
                                                </div>
                                                {dataQuestion.map((data, index) =>
                                                    <div key={index} className="card">
                                                        <Alternative data={data} idUser={idUser} />
                                                    </div>
                                                )}
                                            </>) : <div className="center-Component"><Empty /></div>}
                                        </>) : <div class="B2M-loader"></div>}

                                    </div>
                                </div>
                            </div>
                        </section>

                        <Footer />
                    </div>
                </div>
            </div>

        </>
    );
}


const mapStateToProps = (state) => ({
    loadingQuestion: state.question.loading,
    question: state.question.question,
    countQuetion: state.question.countQuetion,

    loadingAnswerQuestion: state.userAnswersQuestion.loading,
    answerQuestion: state.userAnswersQuestion.answerQuestion,
});

const mapDispatchToProps = {
    getQuestion: questionActions.getQuestion,

    getAnswerQuestion: userAnswersQuestionActions.getAnswerQuestion,
    saveUserAnswersQuestion: userAnswersQuestionActions.saveUserAnswersQuestion
};

export default connect(mapStateToProps, mapDispatchToProps)(Questions);