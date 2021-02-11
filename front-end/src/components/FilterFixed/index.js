import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Row, Col, } from 'react-bootstrap';
import { yearData, diciplineData } from '../../services/filter/dataSelect';

import { Drawer, TreeSelect, Input, Button, Form } from 'antd';


import * as bankActions from '../../actions/bank.actions';
import * as institutionActions from '../../actions/institution.actions';
import * as officeActions from '../../actions/office.actions';
import * as diciplineActions from '../../actions/dicipline.actions';

const { SHOW_PARENT } = TreeSelect;
const { Search } = Input;

function FilterFixed(props) {

    const {
        // actions function get
        getBank,
        getInstitution,
        getOffice,
        getDicipline,

        // estado true or false data empty
        loadingBank,
        loadingInstitution,
        loadingOffice,
        loadingDicipline,

        // estado data actions
        bank,
        institution,
        office,
        dicipline,

        visible,
        onClose
    } = props;

    useEffect(() => {
        getBank();
        getInstitution();
        getOffice();
        getDicipline();
    }, []);


    // const [open, setOpen] = useState(false);
    // const [open2, setOpen2] = useState(false);

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
        <>
            <Drawer
                title="Filtrar por: "
                placement="right"
                width={720}
                closable={false}
                onClose={onClose}
                visible={visible}
                bodyStyle={{ paddingBottom: 80 }}
                footer={
                    <div
                        style={{
                            textAlign: 'right',
                        }}
                    >
                        <Button className="filter-btn" onClick={onClose} style={{ marginRight: 8 }}>Cancel</Button>
                        <Button
                            className="filter-btn"
                            variant="info"
                            onClick={onClose}
                            disabled={questionSearch ||
                                bankLabel.length !== 0 ||
                                institutionLabel.length !== 0 ||
                                officeLabel.length !== 0 ||
                                yearLabel.length !== 0 ||
                                diciplineLabel.length !== 0
                                ? false : true}
                        >
                            Filtrar
                        </Button>
                    </div>
                }
            >
                <Form layout="vertical" hideRequiredMark>
                    <Row>
                        <Col md="12">
                            <Form.Item
                                name="pesquisar"
                                label="Pesquisar por enunciado"
                            >
                                <Search
                                    placeholder="Pesquisar.."
                                    allowClear
                                    className="filter-select"
                                    onSearch={(value) => setQuestionSearch(value)}
                                    enterButton
                                />
                            </Form.Item>
                        </Col>
                        <Col md="12">
                            <Form.Item
                                name="banca"
                                label="Banca"
                            >
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
                            </Form.Item>
                        </Col>
                        <Col md="12">
                            <Form.Item
                                name="orgao"
                                label="Orgão"
                            >
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
                            </Form.Item>
                        </Col>
                        <Col md="12">
                            <Form.Item
                                name="cargo"
                                label="Cargo"
                            >
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
                            </Form.Item>
                        </Col>
                        <Col md="12">
                            <Form.Item
                                name="ano"
                                label="Ano"
                            >
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
                            </Form.Item>
                        </Col>
                        <Col md="12">
                            <Form.Item
                                name="assunto"
                                label="Matéria & Assunto"
                            >
                                <TreeSelect
                                    treeData={dicipline}
                                    value={diciplineValue}
                                    onChange={(value, label) => { setDiciplineValue(value); setDiciplineLabel(label) }}
                                    treeCheckable={true}
                                    placeholder="Matéria & Assunto..."
                                    className="filter-field"
                                    showCheckedStrategy={SHOW_PARENT}
                                    maxTagCount='responsive'
                                    allowClear={true}
                                    loading={loadingDicipline}
                                />
                            </Form.Item>
                        </Col>
                    </Row>
                </Form>
            </Drawer>
        </>
    );
}

const mapStateToProps = (state) => ({
    loadingBank: state.bank.loading,
    bank: state.bank.bank,

    loadingInstitution: state.institution.loading,
    institution: state.institution.institution,

    loadingOffice: state.office.loading,
    office: state.office.office,

    loadingDicipline: state.dicipline.loading,
    dicipline: state.dicipline.dicipline,

});

const mapDispatchToProps = {
    getBank: bankActions.getBank,
    getInstitution: institutionActions.getInstitution,
    getOffice: officeActions.getOffice,
    getDicipline: diciplineActions.getDicipline,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterFixed);
