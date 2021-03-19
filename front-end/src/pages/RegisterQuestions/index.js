import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
// import MenuNavbar from '../../components/MenuNavbar/index';
import { Col, Container, Row } from "react-bootstrap";
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
import { SideNavbar, Navbar } from '../../components/Menu/';
import '../../assets/css/home.css';

// import {Card, Form, Input, Steps, TreeSelect} from 'antd';
import Footer from '../../components/Footer';
import * as regusterQuestionsActions from '../../actions/registerQuestions.actions';
import * as bankActions from "../../actions/bank.actions";
import * as institutionActions from "../../actions/institution.actions";
import * as officeActions from "../../actions/office.actions";
import * as diciplineActions from "../../actions/dicipline.actions";
import { yearData } from "../../services/filter/dataSelect";
import {
    formatDefault,
    formataDicipline,
    formataOffice,
    formatDefaultRegister
} from "../../helpers/formatDataToQuery";
import Pagination from "../../components/Pagination";
import registerQuestion from "../../reducers/registeQuestions.reducer";
import Alternative from "../../components/Alternative";


const answerStyleBox = {
    float: 'left',
    height: '350px',
};

const answerStyle = {
    marginTop: '70px',
};

const { SHOW_PARENT, SHOW_ALL } = TreeSelect;

// TODO: Retirar o menu desse componenete e criar um menu para toda a apalicacao
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
        qtdUploadQuestions,
        questions
    } = props

    const viewSizeQuestion = 1;
    // general info
    // const [office, setOffice] = useState();
    const [bankValue, setBankValue] = useState([]);
    const [institutionValue, setInstitutionValue] = useState([]);
    const [officeValue, setOfficeValue] = useState([]);
    const [yearValue, setYearValue] = useState([]);
    const [diciplineValue, setDiciplineValue] = useState([]);

    // questions info
    const [issueResolution, setIssueResolution] = useState();
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
    const [toggle, setToggle] = useState(false); // mudar o stado do side bar

    const [step, setStep] = useState();

    const [file, setFile] = useState(''); // storing the uploaded file
    // storing the recived file from backend
    // const [data, getFile] = useState({ name: "", path: "" });
    const [progress, setProgess] = useState(0); // progess bar
    const el = useRef(); // accesing input element
    const [pagerCurrent, setPagerCurrent] = useState(0);

    useEffect(() => {
        getBank();
        getInstitution();
        getOffice();
        getDicipline();
    }, [getBank, getInstitution, getOffice, getDicipline]);

    const changeRadio = ({ target }) => {
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

    function onShowSizeChange(page) {
        setPagerCurrent(page);
    }

    function handleSubmit(values) {
        // values.preventDefault()

        const idBank = formatDefaultRegister(bankValue, bank);
        const idInstitution = formatDefaultRegister(institutionValue, institution);
        const yearArray = formatDefault(yearValue, yearData);
        const year = yearArray[0]

        //TODO: finish catch value discipline and office
        console.log(officeValue)
        const idOffice = formataOffice(officeValue, office);
        console.log(diciplineValue)
        const idDicipline = formataDicipline(diciplineValue, dicipline);

        const nameAlternative = [
            alternativeA,
            alternativeB,
            alternativeC,
            alternativeD
        ]

        const answer = radioData.map((radio) => {
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
        const formData = new FormData()
        formData.append('file', file)
        props.uploadFile(formData)
    }

    return (
        <div className="B2M-page">
            <Navbar toggle={toggle} onToggle={(e) => setToggle(e)} />

            <div className="B2M-page-content">
                <SideNavbar toggle={toggle}  type="RegisterQuestions"/>

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
                        <Button onClick={uploadFileFunction} className="filter-btn">
                            Upload
                        </Button>
                    </div>
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
                                            showSearch
                                            treeData={office}
                                            value={officeValue}
                                            allowClear
                                            onChange={(value) => { setOfficeValue(value) }}
                                            placeholder="Cargo..."
                                            className="filter-field"
                                            showCheckedStrategy={SHOW_ALL }
                                            maxTagCount='responsive'
                                            treeNodeFilterProp='title'
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
                                            treeDataSimpleMode
                                            treeData={dicipline}
                                            value={diciplineValue}
                                            onChange={(value) => { setDiciplineValue(value) }}
                                            placeholder="Matéria & Assunto..."
                                            className="filter-field"
                                            showCheckedStrategy={SHOW_PARENT}
                                            maxTagCount='responsive'
                                            showSearch
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

                            <div className="col-lg-10 col-md-12">
                                <Pagination
                                    postsPerPage={viewSizeQuestion}
                                    totalPosts={qtdUploadQuestions}
                                    newPage={onShowSizeChange}
                                    paginate={pagerCurrent}
                                />
                            </div>

                            {questions.slice(pagerCurrent, qtdUploadQuestions).map((data, index) =>
                                <Card type="inner"  title={`Questão ${pagerCurrent}`} >
                                    {data[0]}
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
                                    <Button htmlType="submit">
                                        Cadastrar questão
                                    </Button>
                                </Card>
                            )}

                        </div>


                    </Form>


                </Container>
                {/* <Footer /> */}
            </div>
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
    qtdUploadQuestions: state.registerQuestion.qtdUploadQuestions,
    questions: state.registerQuestion.questions,
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
