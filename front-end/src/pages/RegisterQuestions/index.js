import React, {useState} from 'react';
import MenuNavbar from '../../components/MenuNavbar/index';
import {Button, Col, Container, Row} from "react-bootstrap";
import { Input } from 'antd';
import api from '../../services/api';


const RegisterQuestions = (props) => {

    const [enunciated, setEnunciated] = useState();
    const [year, setYear] = useState();
    const [bank, setBank] = useState();
    const [prove, setProve] = useState();
    const [institute, setInstitute] = useState();

    const [alternativeA, setAlternativeA] = useState();
    const [alternativeB, setAlternativeB] = useState();
    const [alternativeC, setAlternativeC] = useState();
    const [alternativeD, setAlternativeD] = useState();

    const sendPDF = () => {
        // api.get('/pdfFile')
        //     .then((res) => {
        //         console.log(res);
        //     })
        //     .catch((error) => {
        //         //
        //     });
        setEnunciated('De acordo com o Provimento nº 260/CGJ/2013, são requisitos indispensáveis à escritura pública que implique alienação, a qualquer título, de imóvel rural ou de direito a ele relativo, assim como sua oneração, EXCETO: ')
        setYear('2015')
        setBank('Prefeitura de Colônia Leopoldina - AL ')
        setProve('ADM&TEC - 2019 - Prefeitura de Colônia Leopoldina - AL - Analista de Controle Interno')
        setInstitute('ADM&TEC')
        setAlternativeA('Observância da descrição georreferenciada, nos termos da legislação específica')
        setAlternativeB('Apresentação do Documento de Informação e Apuração do ITR – DIAT, ressalvadas as hipóteses de isenção ou imunidade previstas em lei. ')
        setAlternativeC('Apresentação do Recibo de Inscrição do Imóvel Rural no Cadastro Ambiental Rural – CAR, emitido por órgão nacional competente, desde que a reserva legal não esteja averbada na matrícula imobiliária. ')
        setAlternativeD(') Apresentação de certidão negativa de débito para com o INSS da pessoa jurídica alienante e da pessoa física alienante, caso esta última seja empregadora ou, se a pessoa física não for empregadora, declaração expressa nesse sentido sob sua responsabilidade civil e criminal.')
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
    value={year}
                        />
                    </Col>

                    <Col className="mt-3" xs={2} md={2}>
                        <Input
                            placeholder="Banca"
                            allowClear
                            className="filter-select"
                            enterButton
    value={bank}
                        />
                    </Col>


                    <Col className="mt-3" xs={4} md={2}>
                        <Input
                            placeholder="Prova"
                            allowClear
                            className="filter-select"
                            enterButton
    value={prove}
                        />
                    </Col>

                    <Col className="mt-3" xs={4} md={2}>
                        <Input
                            placeholder="Órgão"
                            allowClear
                            className="filter-select"
                            enterButton
    value={institute}
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
                            value={enunciated}
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
                            value={alternativeA}
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
    value={alternativeB}
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
    value={alternativeC}
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
    value={alternativeD}
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
