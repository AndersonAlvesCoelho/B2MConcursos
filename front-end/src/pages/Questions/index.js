import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, Row, Col, ButtonToolbar, ButtonGroup, Button, Badge } from 'react-bootstrap';
import { FaRegTimesCircle, FaRegTrashAlt, FaRegSave } from "react-icons/fa";
import { TreeSelect, Input } from 'antd';
import { bankData, institutionData, officeData, yearData, diciplineData } from '../../services/filter/dataSelect';
import 'antd/dist/antd.css';

import MenuNavbar from '../../components/MenuNavbar/index';
import './index.css';

const { SHOW_PARENT } = TreeSelect;
const { Search } = Input;


function Questions() {


    const [questionSearch, setQuestionSearch] = useState([]);
    const [bankValue, setBankValue] = useState([]);
    const [bankLabel, setBankLabel] = useState([]);
    const [institutionValue, setInstitutionValue] = useState([]);
    const [institutionLabel, setInstitutionLabel] = useState([]);

    const [officeValue, setOfficeValue] = useState([]);
    const [officeName, setOfficeValue] = useState([]);
    const [year, setYear] = useState([]);
    const [diciplineName, setDiciplineName] = useState([]);

    return (
        <div>
            <MenuNavbar />
            <Jumbotron fluid>
                <Container>
                    <h1>Questões de Concurso</h1>
                    <p>Resolva centenas de milhares de questões de provas anteriores de concursos, OAB, CFC, ENEM e Vestibulares. Bateu dúvida? Confira os comentários dos professores!</p>
                </Container>
            </Jumbotron>

            <Container className="filter-conatiner" >
                <Row >
                    <Col>
                        <span className="filter-titulo mr-1">Filtrar por: </span>
                        {bankLabel.length !== 0 || institutionLabel.length !== 0 ? null : (
                            <span className="ml-1  filter-titulo-default"> Nem um filtro foi selecionado.</span>
                        )}
                        {bankLabel.length !== 0 && (<>
                            <span className="filter-grupo px-1"> Banca
                            {bankLabel.map((bank) => {
                                return (<>
                                    <Badge Badge className="mx-1 filter-label pm-4">{bank}
                                        <FaRegTimesCircle size={15} className="filter-icon-outline ml-1" />
                                    </Badge>
                                </>)
                            })}
                            </span>
                        </>)}

                        {institutionLabel.length !== 0 && (<>
                            <span className="filter-grupo px-1 mx-2"> Orgão
                            {institutionLabel.map((institution) => {
                                return (<>
                                    <Badge Badge className="mx-1 filter-label pm-4">{institution}
                                        <FaRegTimesCircle size={15} className="filter-icon-outline ml-1" />
                                    </Badge>
                                </>)
                            })}
                            </span>
                        </>)}
                        <hr className="filter-line mx-1" />
                    </Col>
                </Row>

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
                            className="filter-campo"
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
                            className="filter-campo"
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
                            onChange={(value, label) => {setOfficeValue(value); setOfficeLabel(label)}}
                            treeCheckable={true}
                            placeholder="Cargo..."
                            className="filter-campo"
                            showCheckedStrategy={SHOW_PARENT}
                            maxTagCount='responsive'
                            allowClear={true}
                            loading={!officeData}
                        />
                    </Col>
                    <Col className="mt-3 " xs={6} md={4}>
                        <TreeSelect
                            treeData={yearData}
                            value={year}
                            onChange={(value) => setYear(value)}
                            treeCheckable={true}
                            placeholder="Ano..."
                            className="filter-campo"
                            showCheckedStrategy={SHOW_PARENT}
                            maxTagCount='responsive'
                            allowClear={true}
                            loading={!yearData}
                        />
                    </Col>
                    <Col className="mt-3 mb-3" xs={6} md={4}>
                        <TreeSelect
                            treeData={diciplineData}
                            value={diciplineName}
                            onChange={(value) => setDiciplineName(value)}
                            treeCheckable={true}
                            placeholder="Matéria & Assunto..."
                            className="filter-campo"
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
                            <ButtonGroup className="mx-1 my-1">
                                <Button className="filter-btn-outline">  <FaRegSave size={25} className="filter-icon-outline" /> Salvar Filtro</Button>
                            </ButtonGroup>
                            <ButtonGroup className="mx-1 my-1">
                                <Button className="filter-btn" variant="info">Filtro</Button>
                            </ButtonGroup>
                        </ButtonToolbar>
                    </Col>

                </Row>
            </Container>

            <Container className="conatiner-question my-3" >
                <Row >
                    <Col className="mt-3" xs={6} md={4}>
                        <h1>Hello Word</h1>
                    </Col>

                </Row>

            </Container>


        </div>
    );
}

export default Questions;
