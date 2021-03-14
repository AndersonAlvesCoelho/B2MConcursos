import React, { useState } from 'react';
import { Container, Row, Col, Button, ListGroup, Form } from 'react-bootstrap';
import { FaBookmark, FaComments, FaCheckCircle, FaInfoCircle, FaCommentAlt } from "react-icons/fa";
import { Radio, Card, Avatar, Menu } from 'antd';

import CommentUser from '../Comment/commentUser';

import logo from '../../assets/img/svg/logo.svg';
import erro from '../../assets/img/svg/erro.svg';
import ok from '../../assets/img/svg/ok.svg';
import bookmark from '../../assets/img/svg/bookmark.svg';
import chat from '../../assets/img/svg/chat-bubbles-with-ellipsis.svg';

// import 'bootstrap/dist/css/bootstrap.min.css';

function Alternative({ data, indexQ }) {

    const [answer, setAnswer] = useState([]);
    const [alternative, setAlternative] = useState();
    const [current, setCurrent] = useState();
    const [newComment, setNewComment] = useState([]);

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

    // function newComment() {

    // }
    console.log('data.comment ', data.comment);
    console.log('newComment ', newComment);

    return (
        <>
            <div className="B2M-a-container">
                <div className="B2M-a-test">
                    <div className="B2M-a-title">
                        <img src={logo} />
                        <span>{data.bank.name_bank} - {data.year} - {data.institution.name_institution} - {data.discipline_subject.dicipline.name_dicipline}</span>
                    </div>

                    <span>Nº {data.id_question} - {Date.parse(data.updatedAt)}</span>
                </div>
                <hr />
                {/* <div className="B2M-a-option">
                    <p><span >Ano:   </span> {data.year}</p>
                    <p><span >Banca: </span> {data.bank.name_bank}</p>
                    <p><span >Órgão: </span> {data.institution.name_institution}</p>
                </div> */}

                <Col className="B2M-a-enunciated">
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
                                            <small> {Date(data.updatedAt)} <a>{data.user.email}</a></small>
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
                                                <small> {Date(commit.updatedAt)} <a>{commit.user.email}</a></small>
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
                                                            <small> {Date(ans.updatedAt)} <a>{ans.user.email}</a></small>
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
            </div>
        </>
    );
}

export default Alternative;
