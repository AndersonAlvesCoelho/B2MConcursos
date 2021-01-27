import React, { useState } from 'react';
import { Jumbotron, Container, Row, Col, ButtonToolbar, ButtonGroup, Button, Badge, ListGroup } from 'react-bootstrap';
import { FaRegTimesCircle, FaRegSave, FaBookmark, FaRocketchat } from "react-icons/fa";
import { TreeSelect, Input, Radio } from 'antd';
import { bankData, institutionData, officeData, yearData, diciplineData, questionData } from '../../services/filter/dataSelect';

import MenuNavbar from '../../components/MenuNavbar/index';
import './index.css';
import logoQuest from '../../assets/img/logo-quest.png';
import Alternative from './Alternative/alternative';

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

            <Jumbotron className="conatiner-banner">
                <Container >
                    <h1>Questões de Concurso</h1>
                    <p>Resolva centenas de milhares de questões de provas anteriores de concursos, OAB, CFC, ENEM e Vestibulares. Bateu dúvida? Confira os comentários dos professores!</p>
                </Container>
            </Jumbotron>
            <Container className="question-conatiner my-3">

                {questionData.length !== 0 && questionData.map((data, key) =>
                (
                    <div key={key}>
                        <Alternative data={data} index={key} />
                        <hr className="filter-line" />
                    </div>
                )
                )}


            </Container>



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
