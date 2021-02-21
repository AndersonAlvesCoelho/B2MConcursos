import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Row, Col, } from 'react-bootstrap';
import { Drawer, TreeSelect, Input, Button, Form } from 'antd';
// functions helps : format data retorn id
import { formataBank, formataInstitution, formataOffice, formataDicipline, formataYear } from '../../helpers/formatDataToQuery';

import { yearData } from '../../services/filter/dataSelect'; // Data filter
import * as bankActions from '../../actions/bank.actions'; // Data filter
import * as institutionActions from '../../actions/institution.actions'; // Data filter
import * as officeActions from '../../actions/office.actions'; // Data filter
import * as diciplineActions from '../../actions/dicipline.actions'; // Data filter

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

        changerFilter,
        visible,
        onClose
    } = props;

    // dados para guarda os valores selecionados nos campos
    const [questionSearch, setQuestionSearch] = useState();
    const [bankValue, setBankValue] = useState([]);
    const [institutionValue, setInstitutionValue] = useState([]);
    const [officeValue, setOfficeValue] = useState([]);
    const [yearValue, setYearValue] = useState([]);
    const [diciplineValue, setDiciplineValue] = useState([]);

    // get action return dados filter
    useEffect(() => {
        getBank();
        getInstitution();
        getOffice();
        getDicipline();
    }, []);

    // filter formata dados ; return id dados
    function filter(values) {
        const idBank = formataBank(values.bank, bank);
        const idInstitution = formataInstitution(values.institution, institution);
        const idOffice = formataOffice(values.office, office);
        const year = formataYear(values.year, yearData);
        const idDicipline = formataDicipline(values.dicipline, dicipline);

        const data = { enunciated: values.enunciated, bank: idBank, institution: idInstitution, office: idOffice, year: year, dicipline: idDicipline };
        return changerFilter(data);
    }

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

            >
                <Form layout="vertical" requiredMark={false} onFinish={filter} >
                    <Row>
                        <Col md="12">
                            <Form.Item
                                name="enunciated"
                                label="Pesquisar por enunciado"
                            >

                                <Input
                                    placeholder="Pesquisar..."
                                    onChange={(value) => { setQuestionSearch(value) }}
                                    allowClear
                                />
                            </Form.Item>
                        </Col>

                        <Col md="12">
                            <Form.Item
                                name="bank"
                                label="Banca"
                            >
                                <TreeSelect
                                    treeData={bank}
                                    value={bankValue}
                                    onChange={(value) => { setBankValue(value); }}
                                    treeCheckable={true}
                                    placeholder="Banca..."
                                    className="filter-field"
                                    showCheckedStrategy={SHOW_PARENT}
                                    maxTagCount='responsive'
                                    allowClear
                                    loading={loadingBank}
                                />
                            </Form.Item>
                        </Col>

                        <Col md="12">
                            <Form.Item
                                name="institution"
                                label="Orgão"
                            >
                                <TreeSelect
                                    treeData={institution}
                                    value={institutionValue}
                                    onChange={(value) => { setInstitutionValue(value) }}
                                    treeCheckable={true}
                                    placeholder="Orgão..."
                                    className="filter-field"
                                    showCheckedStrategy={SHOW_PARENT}
                                    maxTagCount='responsive'
                                    allowClear
                                    loading={loadingInstitution}
                                />
                            </Form.Item>
                        </Col>

                        <Col md="12">
                            <Form.Item
                                name="office"
                                label="Cargo"
                            >
                                <TreeSelect
                                    treeData={office}
                                    value={officeValue}
                                    onChange={(value) => { setOfficeValue(value) }}
                                    treeCheckable={true}
                                    placeholder="Cargo..."
                                    className="filter-field"
                                    showCheckedStrategy={SHOW_PARENT}
                                    maxTagCount='responsive'
                                    allowClear
                                    loading={loadingOffice}
                                />
                            </Form.Item>
                        </Col>

                        <Col md="12">
                            <Form.Item
                                name="year"
                                label="Ano"
                            >
                                <TreeSelect
                                    treeData={yearData}
                                    value={yearValue}
                                    onChange={(value) => { setYearValue(value) }}
                                    treeCheckable={true}
                                    placeholder="Ano..."
                                    className="filter-field"
                                    showCheckedStrategy={SHOW_PARENT}
                                    maxTagCount='responsive'
                                    allowClear
                                    loading={!yearData}
                                />
                            </Form.Item>
                        </Col>

                        <Col md="12">
                            <Form.Item
                                name="dicipline"
                                label="Matéria & Assunto"
                            >
                                <TreeSelect
                                    treeData={dicipline}
                                    value={diciplineValue}
                                    onChange={(value) => { setDiciplineValue(value) }}
                                    treeCheckable={true}
                                    placeholder="Matéria & Assunto..."
                                    className="filter-field"
                                    showCheckedStrategy={SHOW_PARENT}
                                    maxTagCount='responsive'
                                    allowClear
                                    loading={loadingDicipline}
                                />
                            </Form.Item>
                        </Col>
                    </Row>
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
                            htmlType="submit"
                            disabled={questionSearch ||
                                bankValue.length !== 0 ||
                                institutionValue.length !== 0 ||
                                officeValue.length !== 0 ||
                                yearValue.length !== 0 ||
                                diciplineValue.length !== 0
                                ? false : true}
                        >
                            Filtrar
                        </Button>
                    </div>
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
