import React, { useState } from 'react';
import { Row, Col, Button, Badge, ListGroup } from 'react-bootstrap';
import { FaBookmark, FaRocketchat, FaGrinAlt, FaFrown } from "react-icons/fa";
import { Radio } from 'antd';

import logoQuest from '../../../assets/img/logo-quest.png';

function Alternative({ data, index }) {

    const [answer, setAnswer] = useState();
    const [alternative, setAlternative] = useState();


    const keyAnswer = () => {
        setAnswer(true);
        data.nome_alternative.map((e, index) => {
            e.answer && setAnswer(index + 1);
        })
    }
    console.log(data.nome_alternative);

    return (
        <Row className="mt-3 ">
            <Col sm={12} className="question-titer">
                {/* <Badge className="question-codigo mr-1" >
                    <img
                        src={logoQuest}
                        className="d-inline-block align-top question-img"
                    /> - {data.id_question}</Badge> */}

                <span className="question-number mr-1" >Nº {index + 1}</span>
                <span className="question-dicipline">{data.name_discipline[0].name_discipline}: </span>

                {data.name_discipline[0].name_subject.length !== 0 &&
                    data.name_discipline[0].name_subject.map((e) => (<>
                        <span className="question-subject">{e.name_subject}, </span>
                    </>))}
            </Col>

            <Col sm={12} className="my-1">
                <span className="question-info mr-1" >Ano:</span><span className="mr-1">{data.year}</span>
                <span className="question-info mr-1" >Banca:</span> <span className="mr-1">{data.name_bank}</span>
                <span className="question-info mr-1" >Órgão:</span><span className="mr-1">{data.name_institution}</span>
                <span className="question-info mr-1" >Prova:</span><span className="mr-1">{data.name_bank} - {data.year} - {data.name_institution} - {data.name_discipline[0].name_discipline} </span>
                <hr className="filter-line" />
            </Col>

            <Col sm={12}>
                <b>{data.enunciated}</b>
            </Col>

            <Col sm={12}>

                <ListGroup variant="flush">
                    <Radio.Group onChange={(e) => setAlternative(e.target.value)} value={alternative} >
                        {data.nome_alternative.map((e, index) => (
                            <ListGroup.Item
                                style={{ background: answer === e.answer && 'var(--success)' }}
                            >
                                <Radio
                                    className="question-alternative"
                                    value={index + 1}>
                                    {e.alternative}
                                </Radio>
                            </ListGroup.Item>
                        ))}
                    </Radio.Group>
                </ListGroup>
            </Col>

            <Col sm={12} className="my-2">
                <Button className="question-btn" disabled={!alternative} onClick={() => keyAnswer()} >Visualizar resposta</Button>
                <span className="question-subject ml-5">
                    {}
                </span>
            </Col>

            <Col sm={12} className="my-2 " >
                <ListGroup className="float-right" horizontal >
                    <ListGroup.Item><FaBookmark size={25} className="filter-icon-outline" />Resposta do professor</ListGroup.Item>
                    <ListGroup.Item><FaRocketchat size={25} className="filter-icon-outline" />Comentarios</ListGroup.Item>
                </ListGroup>
            </Col>
        </Row >

    );
}

export default Alternative;
