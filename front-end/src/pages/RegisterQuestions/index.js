import React, { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
// import MenuNavbar from '../../components/MenuNavbar/index';
import { Col, Container, Row } from "react-bootstrap";
import Toast from '../../helpers/toast';
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
    Steps,
    Typography,
} from 'antd';
import { SideNavbar, Navbar } from '../../components/Menu/';
import '../../assets/css/home.css';
import JoditEditor from 'jodit-react';
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
const { Title } = Typography;

const answerStyleBox = {
    float: 'left',
    height: '150px',
};

const ABCDStyle = {
    float: 'left',
    marginLeft: '20px',
    marginTop: '-24px',
};

const answerStyle = {
    marginTop: '5px',
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
        questions,
        loadingUpload,
        loadingRegister
    } = props

    const ABCD = ["A", "B", "C", "D"]
    const editor = useRef(null);
    const [questionInfo, setQuestionInfo] = useState([]);
    const [indexQuestion, setIndexQuestion] = useState(0);

    // general info
    // const [office, setOffice] = useState();
    const [bankValue, setBankValue] = useState([]);
    const [institutionValue, setInstitutionValue] = useState([]);
    const [officeValue, setOfficeValue] = useState([]);
    const [yearValue, setYearValue] = useState([]);
    // const [diciplineValue, setDiciplineValue] = useState([]);

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


    const [file, setFile] = useState(''); // storing the uploaded file
    const [progress, setProgess] = useState(0); // progess bar
    const el = useRef(); // accesing input element

    useEffect(() => {
        getBank();
        getInstitution();
        getOffice();
        getDicipline();
    }, [getBank, getInstitution, getOffice, getDicipline]);

    // useEffect(() => {
    //     if(questions.length !== 0) {
    //         setEnunciated(questions[0][0])
    //         setAlternativeA(questions[0][1])
    //         setAlternativeB(questions[0][2])
    //         setAlternativeC(questions[0][3])
    //         setAlternativeD(questions[0][4])
    //     }
    // }, [questions]);

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

    const handleChangeFile = (e) => {
        setProgess(0)
        const file = e.target.files[0]; // accesing file
        console.log(file);
        setFile(file); // storing file
    }

    function renderQuestion(question, index) {
        setIndexQuestion(index)
        setEnunciated(question[0])
        setAlternativeA(question[1])
        setAlternativeB(question[2])
        setAlternativeC(question[3])
        setAlternativeD(question[4])
        setQuestionInfo(question)
    }


    function handleSubmit(values) {
        // values.preventDefault()

        const idBank = formatDefaultRegister(bankValue, bank);
        const idInstitution = formatDefaultRegister(institutionValue, institution);
        const yearArray = formatDefault(yearValue, yearData);
        const year = yearArray[0]

        //TODO: finish catch value discipline and office
        console.log(officeValue)
        // const idOffice = formataOffice(officeValue, office);
        const idOffice = '0-0';

        const idDicipline = '0-1';

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
        <>
            <div className="B2M-page">
                <Navbar toggle={toggle} onToggle={(e) => setToggle(e)} /> {/* MAIN NAVBAR */}
                <div className="B2M-page-content">
                    <SideNavbar toggle={toggle} type="RegisterQuestions" /> {/* SIDEBAR */}
                    {/* Page Header */}
                    <div className={`B2M-content-inner side-navbar-active ${toggle ? 'active' : ''}`}>
                        <header className="B2M-page-header">
                            <h2>Registro de questões</h2>
                        </header>
                        {/* Breadcrumb */}
                        <div className="breadcrumb-holder container-fluid B2M-bg">
                            <ul className="B2M-breadcrumb">
                                <li className="breadcrumb-item"><a href="/">Home</a></li>
                                <li className="breadcrumb-item active B2M-text-color-primary">Registro de questões</li>
                            </ul>
                        </div>

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
                                <Button onClick={uploadFileFunction} disabled={loadingUpload} className="filter-btn">
                                    {!loadingUpload ? <>Fazer upload </> : <>Processando... </>}
                                </Button>
                            </div>
                            <hr />

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
                                                    showCheckedStrategy={SHOW_ALL}
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
                                    <Row style={{ marginBottom: '50px' }} >
                                        <Col className="mt-3" xs={12} md={12}>
                                            <Card type="inner" >
                                                {questions && questions.map((data, index) =>
                                                    <Button onClick={() => renderQuestion(data, index + 1)}>Questão {index + 1}</Button>
                                                )}
                                            </Card>
                                        </Col>
                                    </Row>
                                    {questionInfo.length !== 0 && (
                                        <Card type="inner" title={`Questão ${indexQuestion}`} >
                                            {/* <Col className="mt-3" xs={6} md={6}>
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
                                            </Col> */}
                                            
                                            {/* <Col className="mt-3" xs={6} md={6}>
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
                                            </Col> */}
                                            <Card type="inner" title={`Estrutura`} >
                                                <Row >
                                                    <Title level={3}>Enunciado</Title>
                                                    <Col xs={12} md={12}>
                                                        <JoditEditor
                                                            ref={editor}
                                                            value={enunciated}
                                                            // config={config}
                                                            tabIndex={0}
                                                            onBlur={(newContent) => setEnunciated(newContent)}
                                                            onChange={() => { }}
                                                        />
                                                    </Col>
                                                </Row>

                                                <Row >
                                                    <Title level={3}>Alternativa A</Title>
                                                    <Col xs={12} md={12}>
                                                        <JoditEditor
                                                            ref={editor}
                                                            value={alternativeA}
                                                            // config={config}
                                                            tabIndex={0}
                                                            onBlur={(newContent) => setAlternativeA(newContent)}
                                                            onChange={() => { }}
                                                        />
                                                    </Col>
                                                </Row>

                                                <Row>
                                                    <Title level={3}>Alternativa B</Title>
                                                    <Col xs={12} md={12}>
                                                        <JoditEditor
                                                            ref={editor}
                                                            value={alternativeB}
                                                            // config={config}
                                                            tabIndex={0}
                                                            onBlur={(newContent) => setAlternativeB(newContent)}
                                                            onChange={() => { }}
                                                        />
                                                    </Col>
                                                </Row>

                                                <Row>
                                                    <Title level={3}>Alternativa C</Title>
                                                    <Col xs={12} md={12}>
                                                        <JoditEditor
                                                            ref={editor}
                                                            value={alternativeC}
                                                            // config={config}
                                                            tabIndex={0}
                                                            onBlur={(newContent) => setAlternativeC(newContent)}
                                                            onChange={() => { }}
                                                        />
                                                    </Col>
                                                </Row>

                                                <Row>
                                                    <Title level={3}>Alternativa D</Title>
                                                    <Col xs={12} md={12}>
                                                        <JoditEditor
                                                            ref={editor}
                                                            value={alternativeD}
                                                            // config={config}
                                                            tabIndex={0}
                                                            onBlur={(newContent) => setAlternativeD(newContent)}
                                                            onChange={() => { }}
                                                        />
                                                    </Col>
                                                </Row>

                                            </Card>

                                            <Card type="inner" title={`Resolução`} >
                                                <Row>
                                                    <Title level={3}>Alternativa correta</Title>
                                                    <Col xs={12} md={12}>
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

                                                                        <div style={ABCDStyle}>
                                                                            {ABCD[idx]}
                                                                        </div>
                                                                    </>
                                                                })
                                                            }
                                                        </div>
                                                    </Col>
                                                </Row>

                                                <Row >
                                                    <Title level={3}>Resolução</Title>
                                                    <Col xs={12} md={12}>
                                                        <JoditEditor
                                                            ref={editor}
                                                            value={issueResolution}
                                                            // config={config}
                                                            tabIndex={0} // tabIndex of textarea
                                                            onBlur={(newContent) => setIssueResolution(newContent)}
                                                            onChange={() => { }}
                                                        />
                                                    </Col>
                                                </Row>
                                            </Card>
                                            <Button htmlType="submit" disabled={loadingRegister}>
                                                {!loadingRegister ? <>Cadastrar questão</> : <>Cadastrando...</>}
                                            </Button>
                                        </Card>
                                    )}
                                </div>
                            </Form>
                        </Container>
                        <Footer />
                    </div>
                </div>
            </div>
        </>
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
    loadingUpload: state.registerQuestion.loadingUpload,
    loadingRegister: state.registerQuestion.loadingRegister,
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
