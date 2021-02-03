import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Jumbotron, Container, Row, Col, ButtonToolbar, ButtonGroup, Button, ListGroup, Tab, Collapse } from 'react-bootstrap';
import { TreeSelect, Input } from 'antd';
import { bankData, institutionData, officeData, yearData, diciplineData, questionData } from '../../services/filter/dataSelect';
import { FaFilter } from "react-icons/fa";


import * as bankActions from '../../actions/bank.actions';
import * as institutionActions from '../../actions/institution.actions';
import * as officeActions from '../../actions/office.actions';

const { SHOW_PARENT } = TreeSelect;
const { Search } = Input;

function FilterFixed(props) {

    const {
        getBank,
        getInstitution,
        getOffice,
        loadingBank,
        loadingInstitution,
        loadingOffice,
        bank,
        institution,
        office,
    } = props;

    useEffect(() => {
        getBank();
        getInstitution();
        getOffice();
    }, []);

    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);

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
        <Container fluid>
            <Row className="filter-conatiner">
                <Col md="1" >
                    <ListGroup variant="flush" className="filter align-items-center">
                        <ListGroup.Item className="filter-icon">
                            <FaFilter className="filter-icon-outline" onClick={() => setOpen(!open)} size={30} />
                        </ListGroup.Item>
                    </ListGroup>
                </Col>

                <Col >
                    <Collapse className="filter-card mr-5" in={open} >
                        <div>
                            <Row className="my-1 mx-1" >
                                <Col className="mt-3" sm={12}>
                                    <span className="filter-titer mx-1 ml-2">Filtrar por:</span>
                                </Col>

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
                                        treeData={bank}
                                        value={bankValue}
                                        onChange={(value, label) => { setBankValue(value); setBankLabel(label); }}
                                        treeCheckable={true}
                                        placeholder="Banca..."
                                        className="filter-field"
                                        showCheckedStrategy={SHOW_PARENT}
                                        maxTagCount='responsive'
                                        allowClear={true}
                                        loading={loadingBank}
                                    />

                                </Col>

                                <Col className="mt-3" xs={6} md={4}>
                                    <TreeSelect
                                        treeData={institution}
                                        value={institutionValue}
                                        onChange={(value, label) => { setInstitutionValue(value); setInstitutionLabel(label) }}
                                        treeCheckable={true}
                                        placeholder="Orgão..."
                                        className="filter-field"
                                        showCheckedStrategy={SHOW_PARENT}
                                        maxTagCount='responsive'
                                        allowClear={true}
                                        loading={loadingInstitution}
                                    />
                                </Col>
                                

                                <Col className="mt-3 " xs={6} md={4}>
                                    <TreeSelect
                                        treeData={office}
                                        value={officeValue}
                                        onChange={(value, label) => { setOfficeValue(value); setOfficeLabel(label) }}
                                        treeCheckable={true}
                                        placeholder="Cargo..."
                                        className="filter-field"
                                        showCheckedStrategy={SHOW_PARENT}
                                        maxTagCount='responsive'
                                        allowClear={true}
                                        loading={loadingOffice}
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
                        </div>

                    </Collapse>
                </Col>
            </Row>
        </Container>
    );
}

const mapStateToProps = (state) => ({
    loadingBank: state.bank.loading,
    bank: state.bank.bank,
    
    loadingInstitution: state.institution.loading,
    institution: state.institution.institution,

    loadingOffice: state.office.loading,
    office: state.office.office,
});

const mapDispatchToProps = {
    getBank: bankActions.getBank,
    getInstitution: institutionActions.getInstitution,
    getOffice: officeActions.getOffice,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterFixed);
