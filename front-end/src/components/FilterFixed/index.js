import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Row, Col, } from 'react-bootstrap';
import { Drawer, TreeSelect, Input, Button, Form, Checkbox } from 'antd';
import { FaFilter, FaUndo } from "react-icons/fa";

import {
    // formatDefault,
    formataBank,
    formataInstitution,
    formataYear,
    formataOffice,
    formataDicipline,
} from '../../helpers/formatDataToQuery';// functions helps : format data retorn id
import { yearData } from '../../services/filter/dataSelect'; // Data filter
import * as bankActions from '../../actions/bank.actions'; // Data filter
import * as institutionActions from '../../actions/institution.actions'; // Data filter
import * as officeActions from '../../actions/office.actions'; // Data filter
import * as diciplineActions from '../../actions/dicipline.actions'; // Data filter

import 'antd/dist/antd.css';

// const CheckboxGroup = Checkbox.Group;
const { SHOW_PARENT } = TreeSelect;


function FilterFixed(props) {

    const plainOptions = ['Gabarito comentado', 'Comentarios'];
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

        // estado data actions
        bank,
        institution,
        office,
        dicipline,

        changerFilter,
        visible,
        onClose
    } = props;


    // set  valores selecionados nos campos
    const [bankValue, setBankValue] = useState([]);
    const [institutionValue, setInstitutionValue] = useState([]);
    const [officeValue, setOfficeValue] = useState([]);
    const [yearValue, setYearValue] = useState([]);

    // get action return dados filter
    useEffect(() => {
        getBank();
        getInstitution();
        getOffice();
        getDicipline();
    }, [getBank, getInstitution, getOffice, getDicipline]);

    // filter formata dados ; return id dados
    function filter(values) {

        const idBank = formataBank(values.bank, bank);
        const idInstitution = formataInstitution(values.institution, institution);
        const year = formataYear(values.year, yearData);
        const idOffice = formataOffice(values.office, office);

        let data = {
            enunciated: values.enunciated,
            bank: idBank,
            institution: idInstitution,
            office: idOffice,
            year: year,
        };  

        console.log(data);
        

        onClose();
        return changerFilter(data);
    }

    //precisa explicar ? kkk
    //não foi feito do jeito que eu (anderson) gostaria
    function clearFilter() {
        window.location.reload();
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
                                    showSearch
                                    treeNodeFilterProp='title'
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
                                    showSearch
                                    treeNodeFilterProp='title'
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
                                    showSearch
                                    treeNodeFilterProp='title'
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
                                    showSearch
                                    treeNodeFilterProp='title'
                                    allowClear
                                    loading={!yearData}
                                />
                            </Form.Item>
                        </Col>
                    </Row>

                    <Row >

                        <Col sm={12}>
                            <hr className="filter-line" />

                            <div style={{ textAlign: 'right', }}>
                                <Button className="B2M-btn mr-2" onClick={clearFilter}
                                    disabled={bankValue.length !== 0 ||
                                        institutionValue.length !== 0 ||
                                        officeValue.length !== 0 ||
                                        yearValue.length !== 0 ||
                                        plainOptions.length !== 0
                                        ? false : true}
                                > <FaUndo className="mr-2" /> Limpar</Button>
                                <Button className="B2M-btn B2M-btn-winter" type="primary" htmlType="submit"
                                    disabled={bankValue.length !== 0 ||
                                        institutionValue.length !== 0 ||
                                        officeValue.length !== 0 ||
                                        yearValue.length !== 0 ||
                                        plainOptions.length !== 0
                                        ? false : true}
                                > <FaFilter className="mr-2" />Filtrar</Button>
                            </div>
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

    dicipline: state.dicipline.dicipline,

});

const mapDispatchToProps = {
    getBank: bankActions.getBank,
    getInstitution: institutionActions.getInstitution,
    getOffice: officeActions.getOffice,
    getDicipline: diciplineActions.getDicipline,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilterFixed);
