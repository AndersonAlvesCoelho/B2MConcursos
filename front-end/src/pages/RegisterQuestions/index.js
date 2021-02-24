import React, { useRef, useState} from 'react';
import { connect } from 'react-redux';
import MenuNavbar from '../../components/MenuNavbar/index';
import {Button, Col, Container, Row} from "react-bootstrap";
import { Input } from 'antd';
import * as regusterQuestionsActions from '../../actions/registerQuestions.actions';


const RegisterQuestions = (props) => {

    const {
        // uploadFile,
        store
    } = props

    const [office, setOffice] = useState();
    const [discipline, setDiscipline] = useState();
    const [bank, setBank] = useState();
    const [institute, setInstitute] = useState();
    const [year, setYear] = useState();
    const [issueResolution , setIssueResolution] = useState();
    const [enunciated, setEnunciated] = useState();

    const [alternativeA, setAlternativeA] = useState();
    const [alternativeB, setAlternativeB] = useState();
    const [alternativeC, setAlternativeC] = useState();
    const [alternativeD, setAlternativeD] = useState();

    const [prove, setProve] = useState();

    const [file, setFile] = useState(''); // storing the uploaded file
    // storing the recived file from backend
    // const [data, getFile] = useState({ name: "", path: "" });
    const [progress, setProgess] = useState(0); // progess bar
    const el = useRef(); // accesing input element

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

    const handleChangeFile = (e) => {
        setProgess(0)
        const file = e.target.files[0]; // accesing file
        console.log(file);
        setFile(file); // storing file
    }

    const handleSubmit = (e) => {
        e.preventDefault()

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
            office,
            discipline,
            bank,
            institute,
            year,
            issueResolution,
            enunciated,

            prove,

            nameAlternative,
            answer
        }

        store(data)
    };

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
            <MenuNavbar />

            <Container className="filter-conatiner" >
                <Row >
                    <span className="filter-titer mx-1 ml-2">Cadastro de questões:</span>
                </Row >

                <form onSubmit={handleSubmit}>

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
                        <hr />
                        {/* displaying received image*/}
                        {/*{data.path && <img src={data.path} alt={data.name} />}*/}
                    </div>

                    <Button
                        onClick={sendPDF}
                        className="filter-btn"
                        variant="info"
                    >Fazer upload do PDF
                    </Button>

                    <Row >
                        <Col className="mt-3" xs={2} md={2}>
                            <Input
                                onChange={(e) => setYear(e.target.value)}
                                placeholder="Ano"
                                allowClear
                                className="filter-select"
                                enterButton
                                value={year}
                            />
                        </Col>

                        <Col className="mt-3" xs={2} md={2}>
                            <Input
                                onChange={(e) => setBank(e.target.value)}
                                placeholder="Banca"
                                allowClear
                                className="filter-select"
                                enterButton
                                value={bank}
                            />
                        </Col>


                        <Col className="mt-3" xs={4} md={2}>
                            <Input
                                onChange={(e) => setProve(e.target.value)}
                                placeholder="Prova"
                                allowClear
                                className="filter-select"
                                enterButton
                                value={prove}
                            />
                        </Col>

                        <Col className="mt-3" xs={4} md={2}>
                            <Input
                                onChange={(e) => setInstitute(e.target.value)}
                                placeholder="Órgão"
                                allowClear
                                className="filter-select"
                                enterButton
                                value={institute}
                            />
                        </Col>

                        <Col className="mt-3" xs={2} md={2}>
                            <Input
                                onChange={(e) => setOffice(e.target.value)}
                                placeholder="Cargo"
                                allowClear
                                className="filter-select"
                                enterButton
                                value={office}
                            />
                        </Col>

                        <Input
                            onChange={(e) => setDiscipline(e.target.value)}
                            placeholder="Disciplina"
                            allowClear
                            className="filter-select"
                            enterButton
                            value={discipline}
                        />
                    </Row>

                    <Row >
                        <Col className="mt-3" xs={8} md={6}>
                            <Input
                                onChange={(e) => setEnunciated(e.target.value)}
                                placeholder="Enunciado.."
                                allowClear
                                className="filter-select"
                                enterButton
                                value={enunciated}
                            />
                        </Col>
                    </Row>

                    <Row >
                        <Col className="mt-3" xs={8} md={6}>
                            <Input
                                onChange={(e) => setIssueResolution(e.target.value)}
                                placeholder="Descrição da resposta .."
                                allowClear
                                className="filter-select"
                                enterButton
                                value={issueResolution}
                            />
                        </Col>
                    </Row>

                    <Row >
                        {
                            radioData.map((lo, idx) => {
                                return <input
                                    key={idx}
                                    type="radio"
                                    name="answer"
                                    value={lo.radioName}
                                    checked={!!lo.selected}
                                    onChange={changeRadio}
                                />

                            })
                        }

                        <Col className="mt-3" xs={8} md={6}>
                            <Input
                                onChange={(e) => setAlternativeA(e.target.value)}
                                placeholder="Descrição da pergunta A.."
                                allowClear
                                className="filter-select"
                                enterButton
                                value={alternativeA}
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col className="mt-3" xs={8} md={6}>
                            <Input
                                onChange={(e) => setAlternativeB(e.target.value)}
                                placeholder="Descrição da pergunta B.."
                                allowClear
                                className="filter-select"
                                enterButton
                                value={alternativeB}
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col className="mt-3" xs={8} md={6}>
                            <Input
                                onChange={(e) => setAlternativeC(e.target.value)}
                                placeholder="Descrição da pergunta C.."
                                allowClear
                                className="filter-select"
                                enterButton
                                value={alternativeC}
                            />
                        </Col>
                    </Row>

                    <Row>
                        <Col className="mt-3" xs={8} md={6}>
                            <Input
                                name="alternativeD"
                                onChange={(e) => setAlternativeD(e.target.value)}
                                placeholder="Descrição da pergunta D.."
                                allowClear
                                className="filter-select"
                                enterButton
                                value={alternativeD}
                            />
                        </Col>
                    </Row>

                    <Button
                        className="question-btn"
                        type="submit"
                    >Cadastrar questão</Button>
                </form>

            </Container>
        </div>
    );
}

const mapStateToProps = state => ({

})


const  mapDispatchToProps = {
    uploadFile: regusterQuestionsActions.uploadFile,
    store: regusterQuestionsActions.store,
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterQuestions);
