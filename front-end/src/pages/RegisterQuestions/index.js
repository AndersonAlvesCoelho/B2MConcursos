import React from 'react';
import MenuNavbar from '../../components/MenuNavbar/index';
import {Button, Col, Container, Row} from "react-bootstrap";
import {bankData, diciplineData, institutionData, officeData, yearData} from "../../services/filter/dataSelect";
import { TreeSelect, Input, Radio } from 'antd';

function RegisterQuestions() {

    const sendPDF = () => {

    };

    return (
        <div>
            <MenuNavbar />

            <Container className="filter-conatiner" >
                <Row >
                    <span className="filter-titer mx-1 ml-2">Cadastro de questões:</span>
                </Row >
                <Button
                    onClick={sendPDF}
                    className="filter-btn"
                    variant="info"
                >Fazer upload do PDF</Button>

                <Row >
                    <Col className="mt-3" xs={2} md={2}>
                        <Input
                            placeholder="Ano"
                            allowClear
                            className="filter-select"
                            enterButton
                        />
                    </Col>

                    <Col className="mt-3" xs={2} md={2}>
                        <Input
                            placeholder="Banca"
                            allowClear
                            className="filter-select"
                            enterButton
                        />
                    </Col>


                    <Col className="mt-3" xs={4} md={2}>
                        <Input
                            placeholder="Prova"
                            allowClear
                            className="filter-select"
                            enterButton
                        />
                    </Col>

                    <Col className="mt-3" xs={4} md={2}>
                        <Input
                            placeholder="Órgão"
                            allowClear
                            className="filter-select"
                            enterButton
                        />
                    </Col>
                </Row>

                <Row >
                    <Col className="mt-3" xs={8} md={6}>
                        <Input
                            placeholder="Enunciado.."
                            allowClear
                            className="filter-select"
                            enterButton
                            value="valor padrão"
                        />
                    </Col>
                </Row>

                <Row >
                    <Col className="mt-3" xs={8} md={6}>
                        <Input
                            placeholder="Descrição da pergunta.."
                            allowClear
                            className="filter-select"
                            enterButton
                        />
                    </Col>
                </Row>

                <Row>
                    <Col className="mt-3" xs={8} md={6}>
                        <Input
                            placeholder="Descrição da pergunta.."
                            allowClear
                            className="filter-select"
                            enterButton
                        />
                    </Col>
                </Row>

                <Row>
                    <Col className="mt-3" xs={8} md={6}>
                        <Input
                            placeholder="Descrição da pergunta.."
                            allowClear
                            className="filter-select"
                            enterButton
                        />
                    </Col>
                </Row>


                <Row>
                    <Col className="mt-3" xs={8} md={6}>
                        <Input
                            placeholder="Descrição da pergunta.."
                            allowClear
                            className="filter-select"
                            enterButton
                        />
                    </Col>
                </Row>

                <Button
                    className="question-btn"
                >Cadastrar questão</Button>

            </Container>
        </div>
    );
}

export default RegisterQuestions;
