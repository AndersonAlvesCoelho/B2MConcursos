import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import parse from 'html-react-parser';

import { dataFormatada } from '../../helpers/dataFormata';
import * as userAnswersQuestionActions from '../../actions/userAnswersQuestion.actions';
import * as commentActions from '../../actions/comment.actions';

import logo from '../../assets/img/svg/logo.svg';
import erro from '../../assets/img/svg/erro.svg';
import ok from '../../assets/img/svg/ok.svg';


function Alternative(props) {

    const {
        data,
        idUser,
        // answerUser,
        saveUserAnswersQuestion,
        saveComment,
        loading,
        newComment
    } = props;

    const [loadingComment, setLoadingComment] = useState(false);
    const [loadingCommentAnswer, setLoadingCommentAnswer] = useState(false);

    // estados auxiliar de escolha de alternativa
    const [checkAnswer, setCheckAnswer] = useState([]);
    const [option, setOption] = useState('');
    const [answerLatters, setAnswerLatters] = useState('');

    // estado auxiliar do registre do comnetario
    const [current, setCurrent] = useState();
    const [comment, setComment] = useState('');
    const [commentAnswer, setCommentAnswer] = useState('');
    const [idComment, setIdComment] = useState('');
    const [dataComment, setDataComment] = useState([]);
    const [openComment, setOpenComment] = useState(false);
    const [openIndex, setOpenIndex] = useState(false);
    const letters = ['A', 'B', 'C', 'D'];


    //verificar se a questão marcada está correta 
    function keyAnswer(opt, situation) {
        let answer = [];
        data.alternative.map((e, x) => {
            if (x === parseInt(opt)) {
                answer = { check: e.answer, answer: parseInt(opt) }
            }

        })
        setCheckAnswer(answer);
        if (situation === 0) saveAnswer(answer);
    }

    // salvando resposta da pergunta 
    function saveAnswer(e) {
        if (idUser) {
            saveUserAnswersQuestion(idUser, data.id_question, e.answer, e.check);
        }
        localStorage.setItem(data.id_question, JSON.stringify(e));
        setCheckAnswer(JSON.parse(localStorage.getItem(data.id_question)));
    }

    //salvando comentario do usuario na questão
    function SotreComment(type, comment, idQuestion, idComment, idUser) {
        setComment('');
        setCommentAnswer('');
        setOpenComment(false);
        setOpenIndex(false);
        if (type !== 'comment answer') {
            return saveComment('comment', comment, false, idQuestion, false, idUser)
        } else {
            return saveComment(type, false, comment, false, idComment, idUser)
        }
    }

    // setando os valores inicial dos option
    useEffect(() => {
        keyAnswer(data.answer, 1);
        setDataComment(data.comment);

        if (data.alternative) {
            data.alternative.map((e, index) => {
                if (e.answer) {
                    setAnswerLatters(letters[index]);
                }
            })
        }
    }, [data])

    // get new comment
    useEffect(() => {
        if (newComment.length !== 0) {
            let aux = dataComment;

            if (newComment.id_question) {
                setLoadingComment(true);
                setTimeout(() => {
                    aux.push({
                        comment: newComment.comment,
                        id_comment: newComment.id_comment,
                        updatedAt: newComment.updatedAt,
                        comment_answer: [],
                        user: newComment.user
                    })
                    setLoadingComment(false);
                }, 700);
            } else {
                setTimeout(() => {
                    setLoadingCommentAnswer(true);
                    dataComment.map((e, i) => {
                        if (e.id_comment === newComment.id_comment) {
                            aux[i].comment_answer.push({
                                answer: newComment.answer,
                                updatedAt: newComment.updatedAt,
                                user: newComment.user
                            })
                        }
                    })
                    setDataComment(aux);
                    setLoadingCommentAnswer(false);
                }, 700);
            }
        }

    }, [dataComment, newComment]);

    useEffect(() => {
        setOption('');
        if (checkAnswer.length !== 0) setOption(checkAnswer?.answer);
    }, [checkAnswer]);


    return (
        <>
            <div className="B2M-card-header">
                <div className="B2M-card-title">
                    <p>{data.bank.name_bank} - {data.institution.name_institution} - {data.office.office_niv_1.name_office} - {data.year} </p>
                </div>
                <span>Nº {data.id_question}</span>

            </div>

            <div className="B2M-card-body">

                <div dangerouslySetInnerHTML={{ __html: data.enunciated }} />
                {/* {parse(data.enunciated)} */}

                {/* OPTION  */}
                <div className="B2M-alternative" >
                    {data.alternative.map((e, x) => (
                        <label
                            className="B2M-option-alternative"
                            key={x}
                            onChange={(e) => setOption(e.target.value)}
                        >
                            { option === x ?
                                <input type="radio" value={x} className="B2M-answer-question" name={`answer-question-${data.id_question}`} checked />
                                : <input type="radio" value={x} className="B2M-answer-question" name={`answer-question-${data.id_question}`} />
                            }
                            <span class="B2M-checkmark">{letters[x]}</span>

                            <div class="B2M-alternative-description">
                                {checkAnswer?.check ?
                                    checkAnswer?.answer !== x ?
                                        <p style={{ color: '#cecece' }}>{parse(e.name_alternative)}</p>
                                        : <b>{parse(e.name_alternative)}</b>
                                    : <p>{parse(e.name_alternative)}</p>
                                }
                            </div>
                        </label>
                    ))}
                </div>


                {/* MENSSAGEM DE REPOSTA DA OPTION  */}
                <div className="B2M-answer-option">
                    <div className="B2M-answer-msg">
                        {checkAnswer.length !== 0 ? checkAnswer.check ?
                            <>
                                <img src={ok} alt="ok" />
                                <span>Alternativa correta, parabéns!</span>
                            </> : <>
                                <img src={erro} alt="erro" />
                                <span>Você errou!</span>
                            </> : null}
                        <br />

                        {(checkAnswer.length !== 0) && !(checkAnswer.check) &&
                            <>
                                <p>A opção correta é:  <span>{answerLatters}</span></p>
                            </>
                        }

                    </div>

                    <button type="button" disabled={!option} onClick={() => keyAnswer(option, 0)}>Visualizar Resposta</button>
                </div>
            </div>

            <div className="B2M-card-footer">
                <button disabled={!idUser ? true : false} className={current === 'teacher' && 'B2M-card-tab-active'} onClick={() => setCurrent(current === 'teacher' ? '' : 'teacher')} ><i className="B2M-bookmark-icon mr-3"></i>Comentário  do professor</button>
                <button disabled={!idUser ? true : false} className={current === 'comment' && 'B2M-card-tab-active'} onClick={() => setCurrent(current === 'comment' ? '' : 'comment')} ><i className="B2M-list-icon mr-3"></i>Comentários</button>
            </div>

            {idUser && (<>
                {/* CONETARIO DO PROFESSOR */}
                {current === "teacher" && <>
                    {data.issue_resolution ? (<>
                        <div className="B2M-comment-teacher">
                            <div className="feed d-flex justify-content-between">
                                <div className="feed-body d-flex justify-content-between">
                                    <a href="#" className="feed-profile"><img src="https://secure.gravatar.com/avatar/?s=56&d=mm&r=g" alt="avatar" className="img-fluid rounded-circle" /></a>
                                    <div className="B2M-comment-content">
                                        <h5>{data.user.name}</h5>
                                        <div className="full-date">
                                            <small>{dataFormatada(data.updatedAt)}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="B2M-comment">
                                <small>{parse(data.issue_resolution)}</small>
                            </div>
                        </div>
                    </>) : <p className="mx-5 my-5">Sem comentário do professor</p>}
                </>}

                {/* COMENTARIOS DE USUARIOS */}
                {current === "comment" && (<>
                    {/* COMENTARIO PRINCIPAL */}
                    {dataComment.length !== 0 ? dataComment.map((commit, x) => <>
                        <div className="B2M-comment-user">
                            <div className="feed d-flex justify-content-between" key={x}>
                                <div className="feed-body d-flex justify-content-between">
                                    <a href="#" className="feed-profile">
                                        <img src="https://secure.gravatar.com/avatar/?s=56&d=mm&r=g" alt="avatar" className="img-fluid rounded-circle" />
                                    </a>
                                    <div className="B2M-comment-content">
                                        <h5>{commit.user.name}</h5>
                                        <div className="full-date">
                                            <small>{dataFormatada(commit.updatedAt)}</small>
                                        </div>
                                    </div>
                                </div>

                                <div className="B2M-comment-answer-btn text-right">
                                    <a
                                        href="/questoes#comment"
                                        onClick={() => {
                                            setIdComment(commit.id_comment);
                                            setOpenComment(openComment ? false : true);
                                            setOpenIndex(x);
                                        }
                                        }>
                                        <i className="B2M-comment-icon mr-2"></i>Responder</a>
                                </div>
                            </div>

                            <div className="B2M-comment">
                                <small>{parse(commit.comment)}</small>
                            </div>
                            <hr />
                            {/* RESPOSTA DO COMENTARIO PRINCIPAL */}
                            {commit.comment_answer.map((ans, y) => <>
                                <div className="B2M-comment-user-answer" key={y}>
                                    <div className="feed d-flex justify-content-between">
                                        <div className="feed-body d-flex justify-content-between">
                                            <a href="#" className="feed-profile">
                                                <img src="https://secure.gravatar.com/avatar/?s=56&d=mm&r=g"
                                                    alt="avatar" className="img-fluid rounded-circle" />
                                            </a>
                                            <div className="B2M-comment-content">
                                                <h5>{ans.user.name}</h5>
                                                <div className="full-date">
                                                    <small>{dataFormatada(ans.updatedAt)}</small>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="B2M-comment">
                                        <small>{parse(ans.answer)}</small>
                                    </div>
                                    <hr />
                                </div>
                            </>)}

                            {openComment && openIndex === x ? (<>
                                {!loading && !loadingCommentAnswer ? (<>
                                    <div className="B2M-comment-new" id="comment" >
                                        <label className="form-label">Escreva um resposta...</label>
                                        <textarea
                                            onChange={(e) => setCommentAnswer(e.target.value)}
                                            className="form-control"
                                            id="comment"
                                            rows="3"
                                            value={commentAnswer}
                                        >
                                        </textarea>
                                        <button
                                            type="submit"
                                            disabled={!commentAnswer}
                                            onClick={() => SotreComment('comment answer', commentAnswer, data.id_question, idComment, idUser)}
                                        >
                                            <i className="B2M-comment-icon mr-2"></i>Enviar</button>
                                    </div>
                                </>) : <div className="B2M-loader mb-5"></div>}
                            </>) : null}
                        </div>
                    </>) : null}

                    {!loading && !loadingComment ? (<>
                        <div className="B2M-comment-new" id="comment" >
                            <label className="form-label">Escreva um comentário...</label>
                            <textarea
                                onChange={(e) => setComment(e.target.value)}
                                className="form-control"
                                id="comment"
                                rows="3"
                                value={comment}
                            ></textarea>
                            <button
                                type="submit"
                                disabled={!comment}
                                onClick={() => SotreComment('comment', comment, data.id_question, idComment, idUser)}
                            >
                                <i className="B2M-comment-icon mr-2"></i>Enviar</button>
                        </div>
                    </>) : <div className="B2M-loader mb-5"></div>}

                </>)}
            </>)}
        </>
    );
}

const mapStateToProps = (state) => ({
    loadingAnswer: state.userAnswersQuestion.loading,
    loading: state.comment.loading,
    newComment: state.comment.newComment,
});

const mapDispatchToProps = {
    saveUserAnswersQuestion: userAnswersQuestionActions.saveUserAnswersQuestion,
    saveComment: commentActions.saveComment
};

export default connect(mapStateToProps, mapDispatchToProps)(Alternative);