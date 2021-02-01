import React, { useState } from 'react';
import { Row, Col, Button, ListGroup } from 'react-bootstrap';
import { FaBookmark, FaRocketchat } from "react-icons/fa";
import { Radio } from 'antd';

function Alternative({ data, index }) {

    const [answer, setAnswer] = useState();
    const [alternative, setAlternative] = useState();


    const keyAnswer = () => {
        setAnswer(true);
        data.nome_alternative.map((e, index) => {
            e.answer && setAnswer(index + 1);
        })
    }

    return (
        <Row className="mt-3 ">
            <Col sm={12} className="alternative-titer">
                <span className="alternative-number mr-1" >Nº {index + 1}</span>
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
            </Col>data.name_discipline[0].name_subject.length

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
                                    style={{ background: answer === e.answer && 'var(--success)' }}
                                >
                                    <Radio
                                        className="alternative-alternative"
                                        value={index + 1}>
                                        {e.alternative}
                                    </Radio>
                                </ListGroup.Item>
                            </div>
                        ))}
                    </Radio.Group>
                </ListGroup>
            </Col>

            <Col sm={12} className="my-2">
                <Button className="alternative-btn" disabled={!alternative} onClick={() => keyAnswer()} >Visualizar resposta</Button>
                <span className="alternative-subject ml-5">
                    { }
                </span>
            </Col>

            <Col sm={12} className="my-2">
                <ListGroup className="float-right" horizontal >
                    <ListGroup.Item><FaBookmark size={25} className="filter-icon-outline" />Resposta do professor</ListGroup.Item>
                    <ListGroup.Item><FaRocketchat size={25} className="filter-icon-outline" />Comentarios</ListGroup.Item>
                </ListGroup>
            </Col>
        </Row >

    );
}

export default Alternative;
