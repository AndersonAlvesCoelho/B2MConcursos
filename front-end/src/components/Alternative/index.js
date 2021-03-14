import React, { useState, useEffect } from 'react';

import logo from '../../assets/img/svg/logo.svg';
import erro from '../../assets/img/svg/erro.svg';
import ok from '../../assets/img/svg/ok.svg';

import { dataFormatada } from '../../helpers/dataFormata';


function Alternative({ data, index }) {

    const [checkAnswer, setCheckAnswer] = useState([]);
    const [option, setOption] = useState();
    const [current, setCurrent] = useState();

    const [openTextare01, setOpenTextare01] = useState(false);
    const [openTextare02, setOpenTextare02] = useState(false);

    //verificar se a questão marcada está correta 
    function keyAnswer() {
        let answer = [];
        data.alternative.map((e, index) => {
            if (index === parseInt(option)) {
                answer = { check: e.answer, answer: parseInt(option) }
            }
        })
        saveAnswer(answer);
    }

    function saveAnswer(e) {
        localStorage.setItem(data.id_question, JSON.stringify(e));
        setCheckAnswer(JSON.parse(localStorage.getItem(data.id_question)));
    }

    useEffect(() => {
        setCheckAnswer(JSON.parse(localStorage.getItem(data.id_question)));
    }, [data])


    return (
        <>
            <div className="B2M-card-header">
                <div className="B2M-card-title">
                    <img src={logo} atl="LOGO" />
                    <p>{data.bank.name_bank} - {data.year} - {data.institution.name_institution} - {data.discipline_subject.dicipline.name_dicipline}</p>
                </div>
                <span>Nº {index + 1}</span>

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
                    {data.alternative.map((e, index) => (
                        <label className="B2M-option-alternative" key={index} >
                            {checkAnswer ?
                                !(checkAnswer.answer === index) ? e.name_alternative : (<b>{e.name_alternative}</b>)
                                : e.name_alternative}

                            <input type="radio" value={index} name="alternative" disabled={checkAnswer} />
                            <span className="B2M-checkmark"></span>
                        </label>
                    ))}
                </div>


                {/* MENSSAGEM DE REPOSTA DA OPTION  */}
                <div className="B2M-answer-option">
                    <div className="B2M-answer-msg">
                        {checkAnswer ? checkAnswer.check ?
                            <>
                                <img src={ok} alt="ok" />
                                <span>Alternativa correta, parabéns!</span>
                            </> : <>
                                <img src={erro} alt="erro" />
                                <span>Você errou!</span>
                            </> : null}
                    </div>

                    {!checkAnswer &&
                        <button disabled={!option || checkAnswer} onClick={() => keyAnswer()}>
                            Visualizar Resposta
                        </button>
                    }
                </div>
            </div>

            <div className="B2M-card-footer">
                <button className={current === 'teacher' && 'B2M-card-tab-active'} onClick={() => setCurrent(current === 'teacher' ? '' : 'teacher')} ><i className="B2M-bookmark-icon mr-3"></i>Comentário  do professor</button>
                <button className={current === 'comment' && 'B2M-card-tab-active'} onClick={() => setCurrent(current === 'comment' ? '' : 'comment')} ><i className="B2M-list-icon mr-3"></i>Comentários</button>
            </div>

            {/* CONETARIO DO PROFESSOR */}
            {current === "teacher" && <>
                {data.issue_resolution ? (<>
                    <div class="B2M-comment-teacher">
                        <div class="feed d-flex justify-content-between">
                            <div class="feed-body d-flex justify-content-between">
                                <a href="#" class="feed-profile"><img src="https://image.flaticon.com/icons/png/512/16/16363.png" alt="avatar" class="img-fluid rounded-circle" /></a>
                                <div class="B2M-comment-content">
                                    <h5>{data.user.login}</h5>
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
                {data.comment.length !== 0 ? data.comment.map((commit, index) => <>
                    <div class="B2M-comment-user">
                        <div class="feed d-flex justify-content-between" key={index}>
                            <div class="feed-body d-flex justify-content-between">
                                <a href="#" class="feed-profile"><img src="https://image.flaticon.com/icons/png/512/16/16363.png" alt="avatar" class="img-fluid rounded-circle" /></a>
                                <div class="B2M-comment-content">
                                    <h5>{commit.user.login}</h5>
                                    <div class="full-date">
                                        <small>{dataFormatada(commit.updatedAt)}</small>
                                    </div>
                                </div>
                            </div>

                            <div class="B2M-comment-answer-btn text-right">
                                <a href="/questoes#comment" onClick={() => setOpenTextare01(openTextare01 === true ? false : true)}><i className="B2M-comment-icon mr-2"></i>Responder</a>
                            </div>
                        </div>
                        <div class="B2M-comment">
                            <small>{commit.comment}</small>
                        </div>
                        <hr />
                        {/* RESPOSTA DO COMENTARIO PRINCIPAL */}
                        {commit.comment_answer.map((ans, index) => <>
                            <div class="B2M-comment-user-answer" key={index}>
                                <div class="feed d-flex justify-content-between">
                                    <div class="feed-body d-flex justify-content-between">
                                        <a href="#" class="feed-profile"><img src="https://bootdey.com/img/Content/user_1.jpg" alt="avatar" class="img-fluid rounded-circle" /></a>
                                        <div class="B2M-comment-content">
                                            <h5>{ans.user.login}</h5>
                                            <div class="full-date">
                                                <small>{dataFormatada(ans.updatedAt)}</small>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="B2M-comment-answer-btn text-right">
                                        <a href="/questoes#comment" onClick={() => setOpenTextare02(openTextare02 === true ? false : true)}><i className="B2M-comment-icon mr-2"></i>Responder</a>
                                    </div>
                                </div>
                                <div class="B2M-comment">
                                    <small>{ans.answer}</small>
                                </div>
                                <hr />
                            </div>
                        </>)}

                    </div>
                </>) : (<>
                    <div className="B2M-comment-new">
                        <label for="exampleFormControlTextarea1" className="form-label">Seja o primeiro a comentar</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        <button><i className="B2M-comment-icon mr-2"></i> Enviar</button>
                    </div>
                </>)}

                {openTextare01 || openTextare02 && <>
                    <div class="B2M-comment-new" id="comment">
                        <label for="exampleFormControlTextarea1" class="form-label">Responder comentario do </label>
                        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        <button><i className="B2M-comment-icon mr-2"></i> Enviar</button>
                    </div>
                </>}
            </>)}
        </>
    );
}

export default Alternative;
