import React, { useState } from 'react';
import CommentUser from '../Comment/commentUser';

import logo from '../../assets/img/svg/logo.svg';
import erro from '../../assets/img/svg/erro.svg';
import ok from '../../assets/img/svg/ok.svg';

import { dataFormatada } from '../../helpers/dataFormata';


function Alternative({ data, index }) {

    const [answer, setAnswer] = useState([]);
    const [alternative, setAlternative] = useState();
    const [current, setCurrent] = useState();

    const [openTextare01, setOpenTextare01] = useState(false);
    const [openTextare02, setOpenTextare02] = useState(false);

    //verificar se a questão marcada está correta 
    function keyAnswer() {
        data.alternative.map((e, index) => {
            if (index === parseInt(alternative)) {
                return setAnswer({ check: e.answer, answer: parseInt(alternative) })
            }
        })
    }

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
                <div className="B2M-alternative" onChange={(e) => setAlternative(e.target.value)}>
                    {data.alternative.map((e, index) => (
                        <label className="B2M-option-alternative" key={index} >
                            {!(answer.answer === index) ? e.name_alternative : (<b>{e.name_alternative}</b>)}
                            <input type="radio" value={index} name="alternative" disabled={answer.length !== 0} />
                            <span className="B2M-checkmark"></span>
                        </label>
                    ))}
                </div>

                {/* MENSSAGEM DE REPOSTA DA OPTION  */}
                <div className="B2M-answer-option">
                    <div className="B2M-answer-msg">
                        {answer.length !== 0 ? answer.check ?
                            <>
                                <img src={ok} alt="ok" />
                                <span>Alternativa correta, parabéns!</span>
                            </> : <>
                                <img src={erro} alt="erro" />
                                <span>Você errou!</span>
                            </> : null}
                    </div>

                    <button
                        disabled={!alternative || answer.length !== 0}
                        onClick={() => keyAnswer()}>
                        Visualizar Resposta
                    </button>
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


            {/* <Col className="B2M-a-enunciated">
                {data.enunciated}
            </Col>
            <div className="B2M-a-alternative" onChange={(e) => setAlternative(e.target.value)}>
                {data.alternative.map((e, index) => (
                    <label className="B2M-a-option" key={index} >
                        {!(answer.answer === index) ? e.name_alternative : (<b>{e.name_alternative}</b>)}
                        <input type="radio" value={index} name="alternative" disabled={answer.length !== 0} />
                        <span className="B2M-a-checkmark"></span>
                    </label>
                ))}
                <hr />
                <div className="B2M-a-answer">
                    {!alternative}
                    <div className="B2M-a-answer-msg">
                        {answer.length !== 0
                            ? answer.check ?
                                <>
                                    <img src={ok} />
                                    <span>Alternativa correta, parabéns!</span>
                                </>
                                : <>
                                    <img src={erro} />
                                    <span>Você errou!</span>
                                </>
                            : null}
                    </div>
                    <a className={!alternative && answer.length !== 0 && "disabled"} disabled={!alternative || answer.length !== 0} onClick={() => keyAnswer()}>
                        Visualizar Resposta
                        </a>
                </div>
            </div>

            <duv className="B2M-a-container-comments" >
                <div  >
                    <div onClick={() => setCurrent(current === 'teacher' ? '' : 'teacher')} >
                        <img src={bookmark} />
                        <span >Comentário  do professor</span>
                    </div>

                </div>
                <div onClick={() => setCurrent(current === 'comment' ? '' : 'comment')} >
                    <img src={chat} />
                    <span >Comentários (0)</span>
                </div>
            </duv>
            {current === "teacher" && (<>
                <div className="B2M-a-comment-chat" >
                    <div className="B2M-a-chat">
                        <hr />
                        <ul >
                            <li>
                                <img src="https://bootdey.com/img/Content/user_1.jpg" className="B2M-a-avatar" alt="avatar" />
                                <div className="B2M-a-post-commit">
                                    <div className="B2M-a-post-info">
                                        <small> {Date(data.updatedAt)} <a>{data.user.login}</a></small>
                                    </div>
                                    <div>
                                        {data.issue_resolution}
                                    </div>
                                </div>

                            </li>
                        </ul>
                    </div>
                </div>
            </>)}

            {current === "comment" && (<>
                <div className="B2M-a-comment-chat" >
                    <div className="B2M-a-chat">
                        <hr />
                        <ul >

                            {data.comment && data.comment.map((commit, index) => <>

                                <li key={index}>
                                    <img src="https://bootdey.com/img/Content/user_1.jpg" className="B2M-a-avatar" alt="avatar" />
                                    <div className="B2M-a-post-commit">
                                        <div className="B2M-a-post-info">
                                            <small> {Date(commit.updatedAt)} <a>{commit.user.login}</a></small>
                                            <span>
                                                <FaCommentAlt size={15} />
                                                <a
                                                    href="/questoes#comment"
                                                    onClick={() => setOpenTextare01(openTextare01 === true ? false : true)}
                                                >
                                                    Responder
                                                    </a>

                                            </span>
                                        </div>
                                        {commit.comment}

                                    </div>

                                    <hr />
                                    <ul >
                                        {commit.comment_answer.map((ans) => <>
                                            <li >
                                                <img src="https://bootdey.com/img/Content/user_1.jpg" className="B2M-a-avatar" alt="avatar" />
                                                <div className="B2M-a-post-commit">
                                                    <div className="B2M-a-post-info">
                                                        <small> {Date(ans.updatedAt)} <a>{ans.user.login}</a></small>
                                                        <span>
                                                            <FaCommentAlt size={15} />
                                                            <a
                                                                href="/questoes#comment"
                                                                onClick={() => setOpenTextare02(openTextare02 === true ? false : true)}
                                                            >
                                                                Responder
                                                                </a>
                                                        </span>
                                                    </div>
                                                    <div>
                                                        {ans.answer}
                                                    </div>
                                                </div>
                                            </li>
                                        </>)}
                                    </ul>
                                </li>


                            </>)}

                            {openTextare01 || openTextare02 &&
                                <Form className="B2M-a-post-textarea" id="comment">
                                    <Form.Control as="textarea" rows={3} />
                                    <button className="B2M-btn" type="submit"> Comentar</button>
                                </Form>
                            }
                        </ul>
                    </div>
                </div>
            </>)}
       
        */}
        </>
    );
}

export default Alternative;
