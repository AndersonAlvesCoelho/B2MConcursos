import React, { useState } from 'react';
import { Container, Row, Col, Button, ListGroup } from 'react-bootstrap';
import { FaBookmark, FaComments, FaCheckCircle, FaInfoCircle, FaWindowClose } from "react-icons/fa";
import { Radio, Card, Avatar, Menu } from 'antd';

import CommentUser from '../Comment/commentUser';

function Alternative({ data, indexQ }) {

    const [answer, setAnswer] = useState([]);
    const [alternative, setAlternative] = useState();
    const [current, setCurrent] = useState('close');

    //verificar se a questão marcada está correta 
    const keyAnswer = () => {
        data.alternative.map((e, index) => {
            if (e.answer) {
                return setAnswer({
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
                        <span className="alternative-number mr-1" >Nº {Date.parse(data.updatedAt)}</span>
                        <span className="alternative-dicipline">{data.discipline_subject.dicipline.name_dicipline} </span>
                    </Col>

                    <Col sm={12} className="my-1">
                        <span className="alternative-info mr-1" >Ano:</span><span className="mr-1">{data.year}</span>
                        <span className="alternative-info mr-1" >Banca:</span> <span className="mr-1">{data.bank.name_bank}</span>
                        <span className="alternative-info mr-1" >Órgão:</span><span className="mr-1">{data.institution.name_institution}</span>
                        <span className="alternative-info mr-1" >Prova:</span><span className="mr-1">{data.bank.name_bank} - {data.year} - {data.institution.name_institution} - {data.discipline_subject.dicipline.name_dicipline} </span>
                        <hr className="filter-line" />
                    </Col>

                    <Col sm={12}>
                        {data.enunciated}
                    </Col>

                    <Col sm={12}>
                        <ListGroup variant="flush">
                            <Radio.Group onChange={(e) => setAlternative(e.target.value)} value={alternative} >
                                {data.alternative.map((e, index) => (
                                    <div key={index}>
                                        <ListGroup.Item
                                            style={{ background: e.answer === answer.check && 'var(--success)' }}
                                        >
                                            <Radio
                                                className="alternative-alternative"
                                                value={index + 1}
                                                disabled={answer.answer}
                                            >
                                                {!answer.answer ? e.name_alternative : (<b>{e.name_alternative}</b>)}
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
                            <Button className="alternative-btn" disabled={!alternative || answer.answer} onClick={() => keyAnswer()} >Visualizar Resposta</Button>
                        </ListGroup>
                    </Col>

                    <Col sm={12} className="my-2">
                        <Menu onClick={(e) => setCurrent(e.key)} selectedKeys={[current]} mode="horizontal">
                            <Menu.Item key="teacher" disabled={!alternative} icon={<FaBookmark size={25} className="alternative-icon-outline" />}>Resposta do professor</Menu.Item>
                            <Menu.Item key="comment" icon={<FaComments size={25} className="alternative-icon-outline" />}>Comentarios</Menu.Item>
                            <Menu.Item key="close" className="float-right" icon={<FaWindowClose size={25} className="alternative-icon-outline " />}></Menu.Item>
                        </Menu>

                        {current === "teacher" && (<>
                            {/* // View Comment teacher   */}
                            <Card title={data.user.login} extra={<Avatar shape="square" size="large" src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}>
                                <p>{data.issue_resolution}</p>
                            </Card>
                        </>)}
                        {current === "comment" && (<>
                            {/* // Array view Comment and answer    */}
                            {data.comment.map((com, index) =>
                                <div key={index}>
                                    <CommentUser dataComment={com} numComment={index} />
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
