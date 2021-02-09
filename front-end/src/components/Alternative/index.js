import React, { useState } from 'react';
import { Container, Row, Col, Button, ListGroup } from 'react-bootstrap';
import { FaBookmark, FaComments, FaCheckCircle, FaInfoCircle } from "react-icons/fa";
import { Radio, Tabs, Card, Avatar, Menu } from 'antd';

import CommitUser from '../Commit/commitUser.js';

function Alternative({ data, index }) {

    const [answer, setAnswer] = useState([]);
    const [alternative, setAlternative] = useState();
    const [current, setCurrent] = useState('');

    const keyAnswer = () => {
        data.nome_alternative.map((e, index) => {
            if (e.answer) {
                setAnswer({
                    check: true,
                    answer: index + 1,
                    hitMessage: 'Alternativa correta, parabéns!!',
                    errorMessage: 'Você errou!',
                })
            }
        })
    }

    return (
        <>
            <Container className="alternative-conatiner mb-5">
                <Row className="mt-3 ">
                    <Col sm={12} className="alternative-titer">
                        <span className="alternative-number mr-1" >Nº {data.id_question}</span>
                        <span className="alternative-dicipline">{data.name_discipline[0].name_discipline}: </span>

                        {data.name_discipline[0].name_subject.length !== 0 &&
                            data.name_discipline[0].name_subject.map((e, index) => (
                                <span key={index}>
                                    <span className="alternative-subject">
                                        {e.name_subject}
                                        {/* {data.name_discipline[0].name_subject.length ===} */}
                                , </span>
                                </span>
                            ))}
                    </Col>

                    <Col sm={12} className="my-1">
                        <span className="alternative-info mr-1" >Ano:</span><span className="mr-1">{data.year}</span>
                        <span className="alternative-info mr-1" >Banca:</span> <span className="mr-1">{data.name_bank}</span>
                        <span className="alternative-info mr-1" >Órgão:</span><span className="mr-1">{data.name_institution}</span>
                        <span className="alternative-info mr-1" >Prova:</span><span className="mr-1">{data.name_bank} - {data.year} - {data.name_institution} - {data.name_discipline[0].name_discipline} </span>
                        <hr className="filter-line" />
                    </Col>

                    <Col sm={12}>
                        <b>{data.enunciated}</b>
                    </Col>

                    <Col sm={12}>
                        <ListGroup variant="flush">
                            <Radio.Group onChange={(e) => setAlternative(e.target.value)} value={alternative} >
                                {data.nome_alternative.map((e, index) => (
                                    <div key={index}>
                                        <ListGroup.Item
                                            style={{ background: e.answer === answer.check && 'var(--success)' }}
                                        >
                                            <Radio
                                                className="alternative-alternative"
                                                value={index + 1}
                                                disabled={answer.answer}
                                            >
                                                {/* {e.alternative} */}
                                                {!answer.answer ? e.alternative : (<b>{e.alternative}</b>)}
                                            </Radio>
                                        </ListGroup.Item>
                                    </div>
                                ))}
                            </Radio.Group>
                        </ListGroup>
                    </Col>

                    <Col sm={12} className="my-2 ">
                        <ListGroup className="float-right">
                            <span className="mb-1">
                                {answer.length !== 0 ?
                                    answer.answer === alternative ?
                                        (<><FaCheckCircle size={25} className="alternative-hit-icon-outline mx-1" /> {answer.hitMessage} </>) :
                                        (<><FaInfoCircle size={25} className="alternative-error-icon-outline mx-1" /> {answer.errorMessage} </>)
                                    : null}
                            </span>
                            <Button className="alternative-btn" disabled={!alternative} onClick={() => keyAnswer()} >Visualizar Resposta</Button>
                        </ListGroup>
                    </Col>

                    <Col sm={12} className="my-2">
                        <Menu onClick={(e) => setCurrent(e.key)} selectedKeys={[current]} mode="horizontal">
                            <Menu.Item key="teacher" disabled={!alternative} icon={<FaBookmark size={25} className="alternative-icon-outline" />}>Resposta do professor</Menu.Item>
                            <Menu.Item key="commit" icon={<FaComments size={25} className="alternative-icon-outline" />}>Comentarios</Menu.Item>
                        </Menu>

                        {current === "teacher" && (<>
                            {/* View commit teacher   */}
                            <Card title={data.issue_resolution[0].name_user} extra={<Avatar shape="square" size="large" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}>
                                <p>{data.issue_resolution[0].issue_resolution}</p>
                            </Card>
                        </>)}
                        {current === "commit" && (<>
                            {/* Array view commit and answer    */}
                            {data.commit.map((com, index) =>
                                <div key={index}>
                                    <CommitUser dataCommit={com} numCommit={index} />
                                </div>
                            )}
                        </>)}

                    </Col >

                    <hr className="filter-line" />
                </Row >
            </Container>

        </>
    );
}

export default Alternative;
