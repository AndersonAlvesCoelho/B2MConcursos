import React, {useEffect, useRef, useState} from 'react';
import { connect } from 'react-redux';
// import MenuNavbar from '../../components/MenuNavbar/index';
import { Col, Container, Row} from "react-bootstrap";
import {
    Form,
    Input,
    Button,
    Card,
    Radio,
    Select,
    Cascader,
    DatePicker,
    InputNumber,
    TreeSelect,
    Switch,
    Steps
} from 'antd';

// import {Card, Form, Input, Steps, TreeSelect} from 'antd';
import * as regusterQuestionsActions from '../../actions/registerQuestions.actions';
import * as bankActions from "../../actions/bank.actions";
import * as institutionActions from "../../actions/institution.actions";
import * as officeActions from "../../actions/office.actions";
import * as diciplineActions from "../../actions/dicipline.actions";
import {yearData} from "../../services/filter/dataSelect";
import {
    formatDefault,
    formataDicipline,
    formataOffice,
    formatDefaultRegister
} from "../../helpers/formatDataToQuery";


const answerStyleBox = {
    float: 'left',
    height: '350px',
};

const answerStyle = {
    marginTop: '70px',
};

const { SHOW_PARENT } = TreeSelect;

const RegisterQuestions = (props) => {

    const { Step } = Steps;

    const {
        getBank,
        getInstitution,
        getOffice,
        getDicipline,

        // uploadFile,
        loadingBank,
        store,
        bank,
        loadingInstitution,
        institution,
        loadingOffice,
        office,
        loadingDicipline,
        dicipline,
    } = props

    // general info
    // const [office, setOffice] = useState();
    const [bankValue, setBankValue] = useState([]);
    const [institutionValue, setInstitutionValue] = useState([]);
    const [officeValue, setOfficeValue] = useState([]);
    const [yearValue, setYearValue] = useState([]);
    const [diciplineValue, setDiciplineValue] = useState([]);

    // questions info


    const [issueResolution , setIssueResolution] = useState();
    const [enunciated, setEnunciated] = useState();
    const [alternativeA, setAlternativeA] = useState();
    const [alternativeB, setAlternativeB] = useState();
    const [alternativeC, setAlternativeC] = useState();
    const [alternativeD, setAlternativeD] = useState();
    const [radioData, setRadioData] = useState([
        {
            radioName: 'radioA', selected: false
        },
        {
            radioName: 'radioB', selected: false
        },
        {
            radioName: 'radioC', selected: false
        },
        {
            radioName: 'radioD', selected: false
        },
    ])


    const [step, setStep] = useState();

    const [file, setFile] = useState(''); // storing the uploaded file
    // storing the recived file from backend
    // const [data, getFile] = useState({ name: "", path: "" });
    const [progress, setProgess] = useState(0); // progess bar
    const el = useRef(); // accesing input element


    useEffect(() => {
        getBank();
        getInstitution();
        getOffice();
        getDicipline();
    }, [getBank, getInstitution, getOffice, getDicipline]);

    const changeRadio =  ({ target })  => {
        const newRadioData = radioData.map((radio) => {
            const checked = radio.radioName === target.value;
            return {
                ...radio,
                selected: checked
            }
        })
        setRadioData(newRadioData)
    }

    const onChange = step => {
        setStep(step);
    };


    const handleChangeFile = (e) => {
        setProgess(0)
        const file = e.target.files[0]; // accesing file
        console.log(file);
        setFile(file); // storing file
    }

    function handleSubmit(values) {
        // e.preventDefault()

        const idBank = formatDefaultRegister(bankValue, bank);
        const idInstitution = formatDefaultRegister(institutionValue, institution);
        const yearArray = formatDefault(yearValue, yearData);
        const year = yearArray[0]

        //TODO: finish catch value discipline and office
        console.log(officeValue)
        const idOffice = formataOffice(officeValue, office);
        console.log(diciplineValue)
        const idDicipline = formataDicipline(diciplineValue,dicipline);

        const nameAlternative = [
            alternativeA,
            alternativeB,
            alternativeC,
            alternativeD
        ]

        const answer =  radioData.map((radio) => {
            return radio.selected
        })

        const data = {
            // general info
            idBank,
            idInstitution,
            idOffice,
            year,
            idDicipline,

            // questions info
            issueResolution,
            enunciated,
            nameAlternative,
            answer
        }

        store(data)
    }

    const uploadFileFunction = () => {
        const formData = new FormData();
        formData.append('file', file); // appending file

        // for (let i = 0; i < file.length; i++) {
        //     formData.append(file[i].name, files[i])
        // }

        props.uploadFile(formData)
    }

    const sendPDF = () => {
        // api.get('/pdfFile')
        //     .then((res) => {
        //         console.log(res);
        //     })
        //     .catch((error) => {
        //         //
        //     });

        props.uploadFile('teste')
        // setEnunciated('De acordo com o Provimento nº 260/CGJ/2013, são requisitos indispensáveis à escritura pública que implique alienação, a qualquer título, de imóvel rural ou de direito a ele relativo, assim como sua oneração, EXCETO: ')
        // setYear('2015')
        // setBank('Prefeitura de Colônia Leopoldina - AL ')
        // setProve('ADM&TEC - 2019 - Prefeitura de Colônia Leopoldina - AL - Analista de Controle Interno')
        // setInstitute('ADM&TEC')
        // setAlternativeA('Observância da descrição georreferenciada, nos termos da legislação específica')
        // setAlternativeB('Apresentação do Documento de Informação e Apuração do ITR – DIAT, ressalvadas as hipóteses de isenção ou imunidade previstas em lei. ')
        // setAlternativeC('Apresentação do Recibo de Inscrição do Imóvel Rural no Cadastro Ambiental Rural – CAR, emitido por órgão nacional competente, desde que a reserva legal não esteja averbada na matrícula imobiliária. ')
        // setAlternativeD(') Apresentação de certidão negativa de débito para com o INSS da pessoa jurídica alienante e da pessoa física alienante, caso esta última seja empregadora ou, se a pessoa física não for empregadora, declaração expressa nesse sentido sob sua responsabilidade civil e criminal.')
    };

    return (
        <div>
            {/* <MenuNavbar /> */}

            <Container className="filter-conatiner" >

                <Row >
                    <span className="filter-titer mx-1 ml-2">Upload da prova:</span>
                </Row >


                <div className="file-upload">
                    <input
                        type="file" ref={el}
                        onChange={handleChangeFile}
                    />
                    <div className="progessBar" style={{ width: progress }}>
                        {progress}
                    </div>
                    <button onClick={uploadFileFunction} className="upbutton">                   Upload
                    </button>
                    {/* displaying received image*/}
                    {/*{data.path && <img src={data.path} alt={data.name} />}*/}
                </div>

                <Button
                    onClick={sendPDF}
                    className="filter-btn"
                    variant="info"
                >
                    Fazer upload do PDF
                </Button>
                <hr />

                {/*<>*/}
                {/*    <Steps*/}
                {/*        type="navigation"*/}
                {/*        current={step}*/}
                {/*        onChange={onChange}*/}
                {/*        className="site-navigation-steps"*/}
                {/*    >*/}
                {/*        <Step status="process"  title="Informações gerais" />*/}
                {/*        <Step status="process" title="Cadastro de questões" />*/}
                {/*    </Steps>*/}
                {/*</>*/}

                <Form layout="vertical" requiredMark={false} onFinish={handleSubmit}>

                        <div id="generalInfo">

                            <Row >
                                {/*<Col className="mt-3" xs={6} md={6}>*/}
                                <Col className="mt-3" xs={6} md={6}>
                                    <Form.Item
                                        name="year"
                                        label="Ano da prova"
                                    >
                                        <TreeSelect
                                            treeData={yearData}
                                            value={yearValue}
                                            maxLength={4}
                                            onChange={(value) => { setYearValue(value) }}
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

                                <Col className="mt-3" xs={6} md={6}>
                                    <Form.Item
                                        name="bank"
                                        label="Banca"
                                    >
                                        <TreeSelect
                                            treeData={bank}
                                            value={bankValue}
                                            onChange={(value) => { setBankValue(value) }}

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

                                    {/*</Col>*/}
                                </Col>
                            </Row>

                            <Row >
                                <Col className="mt-3" xs={6} md={6}>
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

                                <Col className="mt-3" xs={6} md={6}>
                                    <Form.Item
                                        name="institution"
                                        label="Orgão"
                                    >
                                        <TreeSelect
                                            treeData={institution}
                                            value={institutionValue}
                                            onChange={(value) => { setInstitutionValue(value) }}
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
                            </Row>

                            <Row >
                                <Col className="mt-3" xs={6} md={6}>
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
                                            showSearch
                                            treeNodeFilterProp='title'
                                            allowClear
                                            loading={loadingDicipline}
                                        />
                                    </Form.Item>
                                </Col>

                                {/*<Col className="mt-3" xs={6} md={6}>*/}
                                {/*    <Form.Item*/}
                                {/*        name="prove"*/}
                                {/*        label="Prova"*/}
                                {/*    >*/}
                                {/*        <Input*/}
                                {/*            onChange={(e) => setProve(e.target.value)}*/}
                                {/*            placeholder="Prova"*/}
                                {/*            allowClear*/}
                                {/*            className="filter-select"*/}
                                {/*            enterButton*/}
                                {/*            value={prove}*/}
                                {/*        />*/}
                                {/*    </Form.Item>*/}
                                {/*</Col>*/}
                            </Row>

                            <Card type="inner" title="Questão 01" >

                                <Row >
                                    <Col className="mt-3" xs={8} md={6}>
                                        <Form.Item
                                            name="enunciated"
                                            label="Enunciado"
                                        >
                                            <Input
                                                onChange={(e) => setEnunciated(e.target.value)}
                                                placeholder="Enunciado.."
                                                allowClear
                                                className="filter-select"
                                                enterButton
                                                value={enunciated}
                                            />
                                        </Form.Item>
                                    </Col>
                                </Row>

                                <div style={answerStyleBox}>
                                    {
                                        radioData.map((lo, idx) => {
                                            return <>
                                                <div style={answerStyle}>
                                                    <input
                                                        key={idx}
                                                        type="radio"
                                                        name="answer"
                                                        value={lo.radioName}
                                                        checked={!!lo.selected}
                                                        onChange={changeRadio}
                                                    />
                                                </div>
                                            </>
                                        })
                                    }
                                </div>

                                <Row >
                                    <Col className="mt-3" xs={8} md={6}>
                                        <Form.Item
                                            name="alternativeA"
                                            label="Alternativa A"
                                        >
                                            <Input
                                                onChange={(e) => setAlternativeA(e.target.value)}
                                                placeholder="Descrição da alternativa A.."
                                                allowClear
                                                className="filter-select"
                                                enterButton
                                                value={alternativeA}
                                            />
                                        </Form.Item>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col className="mt-3" xs={8} md={6}>
                                        <Form.Item
                                            name="alternativeB"
                                            label="Alternativa B"
                                        >
                                            <Input
                                                onChange={(e) => setAlternativeB(e.target.value)}
                                                placeholder="Descrição da pergunta B.."
                                                allowClear
                                                className="filter-select"
                                                enterButton
                                                value={alternativeB}
                                            />
                                        </Form.Item>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col className="mt-3" xs={8} md={6}>
                                        <Form.Item
                                            name="alternativeC"
                                            label="Alternativa C"
                                        >
                                            <Input
                                                onChange={(e) => setAlternativeC(e.target.value)}
                                                placeholder="Descrição da pergunta C.."
                                                allowClear
                                                className="filter-select"
                                                enterButton
                                                value={alternativeC}
                                            />
                                        </Form.Item>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col className="mt-3" xs={8} md={6}>
                                        <Form.Item
                                            name="alternativeD"
                                            label="Alternativa D"
                                        >
                                            <Input
                                                name="alternativeD"
                                                onChange={(e) => setAlternativeD(e.target.value)}
                                                placeholder="Descrição da pergunta D.."
                                                allowClear
                                                className="filter-select"
                                                enterButton
                                                value={alternativeD}
                                            />
                                        </Form.Item>
                                    </Col>
                                </Row>

                                <Row >
                                    <Col className="mt-3" xs={8} md={6}>
                                        <Form.Item
                                            name="issueResolution"
                                            label="Resposta"
                                        >
                                            <Input
                                                onChange={(e) => setIssueResolution(e.target.value)}
                                                placeholder="Descrição da resposta .."
                                                allowClear
                                                className="filter-select"
                                                enterButton
                                                value={issueResolution}
                                            />
                                        </Form.Item>
                                    </Col>
                                </Row>

                            </Card>
                        </div>

                    <Button
                        htmlType="submit"
                    >
                        Cadastrar questão
                    </Button>
                </Form>

            </Container>
        </div>
    );
}

const mapStateToProps = state => ({
    loadingBank: state.bank.loading,
    bank: state.bank.bank,

    loadingInstitution: state.institution.loading,
    institution: state.institution.institution,

    loadingOffice: state.office.loading,
    office: state.office.office,

    loadingDicipline: state.dicipline.loading,
    dicipline: state.dicipline.dicipline,
})


const mapDispatchToProps = {
    uploadFile: regusterQuestionsActions.uploadFile,
    store: regusterQuestionsActions.store,

    getBank: bankActions.getBank,
    getInstitution: institutionActions.getInstitution,
    getOffice: officeActions.getOffice,
    getDicipline: diciplineActions.getDicipline,
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterQuestions);
