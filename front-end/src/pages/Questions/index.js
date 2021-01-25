import React, { useState } from 'react';
import { Jumbotron, Container, Row, Col, ButtonToolbar, ButtonGroup, Button, Badge, ListGroup } from 'react-bootstrap';
import { FaRegTimesCircle, FaRegSave, FaBookmark, FaRocketchat } from "react-icons/fa";
import { TreeSelect, Input, Radio } from 'antd';
import { bankData, institutionData, officeData, yearData, diciplineData } from '../../services/filter/dataSelect';
import 'antd/dist/antd.css';

import MenuNavbar from '../../components/MenuNavbar/index';
import './index.css';
import logoQuest from '../../assets/img/logo-quest.png';

const { SHOW_PARENT } = TreeSelect;
const { Search } = Input;


function Questions() {


    const [questionSearch, setQuestionSearch] = useState();

    const [bankValue, setBankValue] = useState([]);
    const [bankLabel, setBankLabel] = useState([]);

    const [institutionValue, setInstitutionValue] = useState([]);
    const [institutionLabel, setInstitutionLabel] = useState([]);

    const [officeValue, setOfficeValue] = useState([]);
    const [officeLabel, setOfficeLabel] = useState([]);

    const [yearValue, setYearValue] = useState([]);
    const [yearLabel, setYearLabel] = useState([]);

    const [diciplineValue, setDiciplineValue] = useState([]);
    const [diciplineLabel, setDiciplineLabel] = useState([]);

    return (
        <div>
            <MenuNavbar />

            <Jumbotron  className="conatiner-banner">
                <Container >
                    <h1>Questões de Concurso</h1>
                    <p>Resolva centenas de milhares de questões de provas anteriores de concursos, OAB, CFC, ENEM e Vestibulares. Bateu dúvida? Confira os comentários dos professores!</p>
                </Container>
            </Jumbotron>

            <Container className="filter-conatiner" >
                <Row >
                    {/* <Col>
                        <span className="filter-titer mr-1">Filtrar por: </span>
                        {questionSearch ||
                            bankLabel.length !== 0 ||
                            institutionLabel.length !== 0 ||
                            officeLabel.length !== 0 ||
                            yearLabel.length !== 0 ||
                            diciplineLabel.length !== 0
                            ? null : (
                                <span className="ml-1  filter-titer-default"> Nem um filtro foi selecionado.</span>
                            )}

                        {questionSearch && (<>
                            <span className="filter-group px-1"> Enunciado
                                    <Badge Badge className="mx-1 filter-label pm-4">{questionSearch}
                                    <FaRegTimesCircle size={15} onClick={() => setQuestionSearch('')}className="filter-icon-outline ml-1" />
                                </Badge>
                            </span>
                        </>)}

                        {bankLabel.length !== 0 && (<>
                            <span className="filter-group px-1"> Banca
                            {bankLabel.map((bank, index) => {
                                return (
                                    <Badge key={index} Badge className="mx-1 filter-label pm-4">{bank}
                                        <FaRegTimesCircle size={15} className="filter-icon-outline ml-1" />
                                    </Badge>
                                )
                            })}
                            </span>
                        </>)}

                        {institutionLabel.length !== 0 && (<>
                            <span className="filter-group px-1 mx-2"> Orgão
                            {institutionLabel.map((institution, index) => {
                                return (
                                    <Badge key={index} Badge className="mx-1 filter-label pm-4">{institution}
                                        <FaRegTimesCircle size={15} className="filter-icon-outline ml-1" />
                                    </Badge>
                                )
                            })}
                            </span>
                        </>)}

                        {officeLabel.length !== 0 && (<>
                            <span className="filter-group px-1 mx-2"> Cargo
                            {officeLabel.map((office, index) => {
                                return (
                                    <Badge key={index} Badge className="mx-1 filter-label pm-4">{office}
                                        <FaRegTimesCircle size={15} className="filter-icon-outline ml-1" />
                                    </Badge>
                                )
                            })}
                            </span>
                        </>)}

                        {yearLabel.length !== 0 && (<>
                            <span className="filter-group px-1 mx-2"> Ano
                            {yearLabel.map((year, index) => {
                                return (
                                    <Badge key={index} Badge className="mx-1 filter-label pm-4">{year}
                                        <FaRegTimesCircle size={15} className="filter-icon-outline ml-1" />
                                    </Badge>
                                )
                            })}
                            </span>
                        </>)}

                        {diciplineLabel.length !== 0 && (<>
                            <span className="filter-group px-1 mx-2"> Matéria & Assunto
                            {diciplineLabel.map((dicipline, index) => {
                                return (
                                    <Badge key={index} Badge className="mx-1 filter-label pm-4">{dicipline}
                                        <FaRegTimesCircle size={15} className="filter-icon-outline ml-1" />
                                    </Badge>
                                )
                            })}
                            </span>
                        </>)}
                        <hr className="filter-line mx-1" />
                    </Col> */}
                </Row>

                <Row >
                    <span className="filter-titer mx-1 ml-2">Filtrar por:</span>
                </Row >
                <Row >

                    <Col className="mt-3" xs={6} md={4}>
                        <Search
                            placeholder="Pesquisar por enunciado.."
                            allowClear
                            className="filter-select"
                            onSearch={(value) => setQuestionSearch(value)}
                            enterButton
                        />

                    </Col>

                    <Col className="mt-3" xs={6} md={4}>
                        <TreeSelect
                            treeData={bankData}
                            value={bankValue}
                            onChange={(value, label) => { setBankValue(value); setBankLabel(label); }}
                            treeCheckable={true}
                            placeholder="Banca..."
                            // bordered={false}
                            // style=''
                            className="filter-field"
                            showCheckedStrategy={SHOW_PARENT}
                            maxTagCount='responsive'
                            allowClear={true}
                            loading={!bankData}
                        />

                    </Col>

                    <Col className="mt-3" xs={6} md={4}>
                        <TreeSelect
                            treeData={institutionData}
                            value={institutionValue}
                            onChange={(value, label) => { setInstitutionValue(value); setInstitutionLabel(label) }}
                            treeCheckable={true}
                            placeholder="Orgão..."
                            className="filter-field"
                            showCheckedStrategy={SHOW_PARENT}
                            maxTagCount='responsive'
                            allowClear={true}
                            loading={!institutionData}
                        />
                    </Col>

                    <Col className="mt-3 " xs={6} md={4}>
                        <TreeSelect
                            treeData={officeData}
                            value={officeValue}
                            onChange={(value, label) => { setOfficeValue(value); setOfficeLabel(label) }}
                            treeCheckable={true}
                            placeholder="Cargo..."
                            className="filter-field"
                            showCheckedStrategy={SHOW_PARENT}
                            maxTagCount='responsive'
                            allowClear={true}
                            loading={!officeData}
                        />
                    </Col>

                    <Col className="mt-3 " xs={6} md={4}>
                        <TreeSelect
                            treeData={yearData}
                            value={yearValue}
                            onChange={(value, label) => { setYearValue(value); setYearLabel(label) }}
                            treeCheckable={true}
                            placeholder="Ano..."
                            className="filter-field"
                            showCheckedStrategy={SHOW_PARENT}
                            maxTagCount='responsive'
                            allowClear={true}
                            loading={!yearData}
                        />
                    </Col>

                    <Col className="mt-3 mb-3" xs={6} md={4}>
                        <TreeSelect
                            treeData={diciplineData}
                            value={diciplineValue}
                            onChange={(value, label) => { setDiciplineValue(value); setDiciplineLabel(label) }}
                            treeCheckable={true}
                            placeholder="Matéria & Assunto..."
                            className="filter-field"
                            showCheckedStrategy={SHOW_PARENT}
                            maxTagCount='responsive'
                            allowClear={true}
                            loading={!diciplineData}
                        />
                    </Col>
                </Row>

                <Row >
                    <Col >
                        <ButtonToolbar className="my-3 float-right">
                            {/* <ButtonGroup className="mx-1 my-1">
                                <Button className="filter-btn-outline">  <FaRegSave size={25} className="filter-icon-outline" /> Salvar Filtro</Button>
                            </ButtonGroup> */}
                            <ButtonGroup className="mx-1 my-1">
                                <Button
                                    className="filter-btn"
                                    variant="info"
                                    disabled={questionSearch ||
                                        bankLabel.length !== 0 ||
                                        institutionLabel.length !== 0 ||
                                        officeLabel.length !== 0 ||
                                        yearLabel.length !== 0 ||
                                        diciplineLabel.length !== 0
                                        ? false : true}
                                >Filtrar</Button>
                            </ButtonGroup>
                        </ButtonToolbar>
                    </Col>

                </Row>
            </Container>

            <Container className="question-conatiner my-3">
                <Row className="mt-3 ">
                    <Col sm={12} className="question-titer">
                        <span className="question-number mr-1" >Nº 1</span>
                        <Badge className="question-codigo mr-1" >
                            <img
                                src={logoQuest}
                                className="d-inline-block align-top question-img"
                            /> - 1667231</Badge>
                        <span className="question-dicipline">Português: </span>
                        <span className="question-subject">Interpretação de Textos</span>
                        <span> - </span>
                        <span className="question-subject">Noções Gerais de Compreensão e Interpretação de Texto</span>
                    </Col>

                    <Col sm={12} className="my-1">
                        <span className="question-info mr-1" >Ano:</span><span className="mr-1">2019</span>
                        <span className="question-info mr-1" >Banca:</span> <span className="mr-1">ADM&TEC</span>
                        <span className="question-info mr-1" >Órgão:</span><span className="mr-1">Prefeitura de Colônia Leopoldina - AL </span>
                        <span className="question-info mr-1" >Prova:</span><span className="mr-1">ADM&TEC - 2019 - Prefeitura de Colônia Leopoldina - AL - Analista de Controle Interno </span>
                        <hr className="filter-line" />
                    </Col>

                    <Col sm={12}>
                        <b>De acordo com o Provimento nº 260/CGJ/2013, são requisitos indispensáveis à escritura pública que implique alienação, a qualquer título, de imóvel rural ou de direito a ele relativo, assim como sua oneração, EXCETO: </b>
                    </Col>

                    <Col sm={12}>
                        <ListGroup variant="flush">
                            <Radio.Group >
                                <ListGroup.Item ><Radio className="question-alternative" value={1}>Neste sentido, a complexidade dos estudos efetuados deve passar por modificações independentemente dos procedimentos normalmente adotados.Neste sentido, a complexidade dos estudos efetuados deve passar por modificações independentemente dos procedimentos normalmente adotados.</Radio></ListGroup.Item>
                                <ListGroup.Item><Radio className="question-alternative" value={2}>Neste sentido, a complexidade dos estudos efetuados deve passar por modificações independentemente dos procedimentos normalmente adotados.Neste sentido, a complexidade dos estudos efetuados deve passar por modificações independentemente dos procedimentos normalmente adotados.</Radio></ListGroup.Item>
                                <ListGroup.Item><Radio className="question-alternative" value={3}>Neste sentido, a complexidade dos estudos efetuados deve passar por modificações independentemente dos procedimentos normalmente adotados.Neste sentido, a complexidade dos estudos efetuados deve passar por modificações independentemente dos procedimentos normalmente adotados.</Radio></ListGroup.Item>
                                <ListGroup.Item><Radio className="question-alternative" value={4}>Neste sentido, a complexidade dos estudos efetuados deve passar por modificações independentemente dos procedimentos normalmente adotados.Neste sentido, a complexidade dos estudos efetuados deve passar por modificações independentemente dos procedimentos normalmente adotados.</Radio></ListGroup.Item>
                            </Radio.Group>
                        </ListGroup>
                    </Col>

                    <Col sm={12} className="my-2">
                        <Button className="question-btn" >Visualizar resposta</Button>
                    </Col>

                    <Col sm={12} className="my-2 " >
                        <ListGroup className="float-right" horizontal >
                            <ListGroup.Item><FaBookmark size={25} className="filter-icon-outline" />Resposta do professor</ListGroup.Item>
                            <ListGroup.Item><FaRocketchat size={25} className="filter-icon-outline" />Comentarios</ListGroup.Item>
                        </ListGroup>
                    </Col>
                </Row>

                <hr className="filter-line" />

                <Row className="mt-3 ">
                    <Col sm={12} className="question-titer">
                        <span className="question-number mr-1" >Nº 1</span>
                        <Badge className="question-codigo mr-1" >
                            <img
                                src={logoQuest}
                                className="d-inline-block align-top question-img"
                            /> - 1667231</Badge>
                        <span className="question-dicipline">Português: </span>
                        <span className="question-subject">Interpretação de Textos</span>
                        <span> - </span>
                        <span className="question-subject">Noções Gerais de Compreensão e Interpretação de Texto</span>
                    </Col>

                    <Col sm={12} className="my-1">
                        <span className="question-info mr-1" >Ano:</span><span className="mr-1">2019</span>
                        <span className="question-info mr-1" >Banca:</span> <span className="mr-1">ADM&TEC</span>
                        <span className="question-info mr-1" >Órgão:</span><span className="mr-1">Prefeitura de Colônia Leopoldina - AL </span>
                        <span className="question-info mr-1" >Prova:</span><span className="mr-1">ADM&TEC - 2019 - Prefeitura de Colônia Leopoldina - AL - Analista de Controle Interno </span>
                        <hr className="filter-line" />
                    </Col>

                    <Col sm={12}>
                        <b>De acordo com o Provimento nº 260/CGJ/2013, são requisitos indispensáveis à escritura pública que implique alienação, a qualquer título, de imóvel rural ou de direito a ele relativo, assim como sua oneração, EXCETO: </b>
                    </Col>

                    <Col sm={12}>
                        <ListGroup variant="flush">
                            <Radio.Group >
                                <ListGroup.Item ><Radio className="question-alternative" value={1}>Neste sentido, a complexidade dos estudos efetuados deve passar por modificações independentemente dos procedimentos normalmente adotados.Neste sentido, a complexidade dos estudos efetuados deve passar por modificações independentemente dos procedimentos normalmente adotados.</Radio></ListGroup.Item>
                                <ListGroup.Item><Radio className="question-alternative" value={2}>Neste sentido, a complexidade dos estudos efetuados deve passar por modificações independentemente dos procedimentos normalmente adotados.Neste sentido, a complexidade dos estudos efetuados deve passar por modificações independentemente dos procedimentos normalmente adotados.</Radio></ListGroup.Item>
                                <ListGroup.Item><Radio className="question-alternative" value={3}>Neste sentido, a complexidade dos estudos efetuados deve passar por modificações independentemente dos procedimentos normalmente adotados.Neste sentido, a complexidade dos estudos efetuados deve passar por modificações independentemente dos procedimentos normalmente adotados.</Radio></ListGroup.Item>
                                <ListGroup.Item><Radio className="question-alternative" value={4}>Neste sentido, a complexidade dos estudos efetuados deve passar por modificações independentemente dos procedimentos normalmente adotados.Neste sentido, a complexidade dos estudos efetuados deve passar por modificações independentemente dos procedimentos normalmente adotados.</Radio></ListGroup.Item>
                            </Radio.Group>
                        </ListGroup>
                    </Col>

                    <Col sm={12} className="my-2">
                        <Button className="question-btn">Visualizar resposta</Button>
                    </Col>


                </Row>
            </Container>


            <h1 className="mt-5">Hello Word</h1>
            <h1>Hello Word</h1>
            <h1>Hello Word</h1>
            <h1>Hello Word</h1>
            <h1>Hello Word</h1>
            <h1>Hello Word</h1>
            <h1>Hello Word</h1>
            <h1>Hello Word</h1>
            <h1>Hello Word</h1>
            <h1>Hello Word</h1>
            <h1>Hello Word</h1>
            <h1>Hello Word</h1>
            <h1>Hello Word</h1>



        </div >
    );
}

export default Questions;
