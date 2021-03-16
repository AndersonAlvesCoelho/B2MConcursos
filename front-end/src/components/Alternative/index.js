import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

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

    // estados auxiliar de escolha de alternativa
    const [checkAnswer, setCheckAnswer] = useState([]);
    const [option, setOption] = useState();

    // estado auxiliar do registre do comnetario
    const [current, setCurrent] = useState();
    const [typeComment, setTypeComment] = useState('');
    const [comment, setComment] = useState('');
    const [idComment, setIdComment] = useState(0);
    const [dataComment, setDataComment] = useState([]);

    //verificar se a questão marcada está correta 
    function keyAnswer(opt, situation) {
        let answer = [];
        data.alternative.map((e, x) => {
            if (x === parseInt(opt)) {
                answer = { check: e.answer, answer: parseInt(opt) }
            }

        })
        setOption(false);
        setCheckAnswer(answer);
        if (situation === 0) saveAnswer(answer);
    }

    // salvando resposta da pergunta 
    function saveAnswer(e) {
        if (idUser) {
            saveUserAnswersQuestion(idUser, data.id_question, e.answer);
        }
        localStorage.setItem(data.id_question, JSON.stringify(e));
        setCheckAnswer(JSON.parse(localStorage.getItem(data.id_question)));
    }

    //salvando comentario do usuario na questão
    function SotreComment(type, comment, idQuestion, idComment, idUser) {
        setComment('');

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
    }, [data])


    // get new comment
    // useEffect(() => {
    //     console.log("dataComment 01", dataComment);

    //     if (newComment.length !== 0) {
    //         let aux = dataComment;
    //         console.log("newComment 01", newComment);
    //         if (newComment.id_question) {
    //             aux.push({
    //                 comment: newComment.comment,
    //                 id_comment: newComment.id_comment,
    //                 updatedAt: newComment.updatedAt,
    //                 comment_answer: [],
    //                 user: newComment.user
    //             })
    //         } else {
    //             dataComment.map((e) => {
    //                 if (e) {
    //                     aux.comment_answer.push({
    //                         answer: newComment.comment,
    //                         updatedAt: newComment.updatedAt,
    //                         user: newComment.user
    //                     })
    //                 }
    //             })
    //         }
    //         setDataComment(aux)
    //     }
    //     console.log("dataComment 02", dataComment);

    // }, [newComment])


    return (
        <>
            <div className="B2M-card-header">
                <div className="B2M-card-title">
                    <img src={logo} atl="LOGO" />
                    <p>{data.bank.name_bank} - {data.year} - {data.institution.name_institution} - {data.discipline_subject.dicipline.name_dicipline}</p>
                </div>
                <span>Nº {data.id_question}</span>

                {/* <div className="B2M-card-info">
                    <ul>
                        <li>Ano: {data.year}</li>
                        <li>Banca:{data.bank.name_bank}  </li>
                        <li>Orgão: {data.institution.name_institution} </li>
                    </ul>
                </div> */}
            </div>

            <div className="B2M-card-body">
                <p>{data.enunciated}</p>

                {/* OPTION  */}

                <div className="B2M-alternative" onChange={(e) => setOption(e.target.value)}>
                    {data.alternative.map((e, x) => (
                        <label className="B2M-option-alternative" key={x} >
                            {checkAnswer.length !== 0 ? !(checkAnswer.answer === x) ? e.name_alternative : (<b>{e.name_alternative}</b>) : e.name_alternative}
                            <input type="radio" value={x} name="alternative" />
                            <span className="B2M-checkmark"></span>
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
                        <div class="B2M-comment-teacher">
                            <div class="feed d-flex justify-content-between">
                                <div class="feed-body d-flex justify-content-between">
                                    <a href="#" class="feed-profile"><img src="https://secure.gravatar.com/avatar/?s=56&d=mm&r=g" alt="avatar" class="img-fluid rounded-circle" /></a>
                                    <div class="B2M-comment-content">
                                        <h5>{data.user.name}</h5>
                                        <div class="full-date">
                                            <small>{dataFormatada(data.updatedAt)}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="B2M-comment">
                                <small>{data.issue_resolution}</small>
                            </div>
                        </div>
                    </>) : <p className="mx-5 my-5">Sem comentário do professor</p>}
                </>}

                {/* COMENTARIOS DE USUARIOS */}
                {current === "comment" && (<>
                    {/* COMENTARIO PRINCIPAL */}
                    {dataComment.length !== 0 ? dataComment.map((commit, x) => <>
                        <div class="B2M-comment-user">
                            <div class="feed d-flex justify-content-between" key={x}>
                                <div class="feed-body d-flex justify-content-between">
                                    <a href="#" class="feed-profile"><img src="https://secure.gravatar.com/avatar/?s=56&d=mm&r=g" alt="avatar" class="img-fluid rounded-circle" /></a>
                                    <div class="B2M-comment-content">
                                        <h5>{commit.user.name}</h5>
                                        <div class="full-date">
                                            <small>{dataFormatada(commit.updatedAt)}</small>
                                        </div>
                                    </div>
                                </div>

                                <div class="B2M-comment-answer-btn text-right">
                                    <a
                                        href="/questoes#comment"
                                        onClick={() => {
                                            setTypeComment('comment answer');
                                            setIdComment(commit.id_comment);
                                        }
                                        }>
                                        <i className="B2M-comment-icon mr-2"></i>Responder</a>
                                </div>
                            </div>

                            <div class="B2M-comment">
                                <small>{commit.comment}</small>
                            </div>
                            <hr />
                            {/* RESPOSTA DO COMENTARIO PRINCIPAL */}
                            {commit.comment_answer.map((ans, y) => <>
                                <div class="B2M-comment-user-answer" key={y}>
                                    <div class="feed d-flex justify-content-between">
                                        <div class="feed-body d-flex justify-content-between">
                                            <a href="#" class="feed-profile"><img src="https://secure.gravatar.com/avatar/?s=56&d=mm&r=g" alt="avatar" class="img-fluid rounded-circle" /></a>
                                            <div class="B2M-comment-content">
                                                <h5>{ans.user.name}</h5>
                                                <div class="full-date">
                                                    <small>{dataFormatada(ans.updatedAt)}</small>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="B2M-comment">
                                        <small>{ans.answer}</small>
                                    </div>
                                    <hr />
                                </div>
                            </>)}

                        </div>
                    </>) : null}

                    {!loading ? (<>
                        <div className="B2M-comment-new" id="comment" onChange={(e) => setComment(e.target.value)}>
                            <label className="form-label">{typeComment !== 'comment answer' ? 'Escreva um comentário...' : 'Escreva um resposta...'}</label>
                            <textarea className="form-control" id="comment" rows="3" value={comment}></textarea>
                            <button
                                type="submit"
                                onClick={() => SotreComment(typeComment, comment, data.id_question, idComment, idUser)}
                            >
                                <i className="B2M-comment-icon mr-2"></i>Enviar</button>
                        </div>
                    </>) : <p>Carregando ...</p>}

                </>)}
            </>)}
        </>
    );
}

const mapStateToProps = (state) => ({
    loading: state.userAnswersQuestion.loading,
    loading: state.comment.loading,
    newComment: state.comment.newComment,
});

const mapDispatchToProps = {
    saveUserAnswersQuestion: userAnswersQuestionActions.saveUserAnswersQuestion,
    saveComment: commentActions.saveComment
};

export default connect(mapStateToProps, mapDispatchToProps)(Alternative);