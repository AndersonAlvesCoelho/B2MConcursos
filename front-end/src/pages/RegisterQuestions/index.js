import React from 'react';
import MenuNavbar from '../../components/MenuNavbar/index';
import {Col, Container, Row} from "react-bootstrap";
import {bankData, diciplineData, institutionData, officeData, yearData} from "../../services/filter/dataSelect";
import { TreeSelect, Input, Radio } from 'antd';

function RegisterQuestions() {
    return (
        <div>
            <MenuNavbar />

            <Container className="filter-conatiner" >
                <Row >
                    <span className="filter-titer mx-1 ml-2">Cadastro de questões:</span>
                </Row >
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

            </Container>
        </div>
    );
}

export default RegisterQuestions;
