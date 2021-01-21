import React, { useState } from 'react';
import DropdownTreeSelect from 'react-dropdown-tree-select'
import 'react-dropdown-tree-select/dist/styles.css'
import { Jumbotron, Container, Row, Col, ListGroup, Badge, Button } from 'react-bootstrap';
import { FaFacebook, FaYoutube, FaInstagram, FaTwitter } from "react-icons/fa";
import MenuNavbar from '../../components/MenuNavbar/index';
import dataSelect from '../../services/example/dataSelect.json';
import './index.css';

function Questions() {

    const [filterBanca, setFilterBanca] = useState({
        banca: [],
    });

    const onChange = (_, value) => {
        var bancaAux = value.map((e) => e.label);
        filterBanca.banca = bancaAux;
        setFilterBanca(filterBanca);
    }

    console.log(filterBanca);

    return (
        <div>
            <MenuNavbar />
            <Jumbotron fluid>
                <Container>
                    <h1>Questões de Concurso</h1>
                    <p>Resolva centenas de milhares de questões de provas anteriores de concursos, OAB, CFC, ENEM e Vestibulares. Bateu dúvida? Confira os comentários dos professores!</p>
                </Container>
            </Jumbotron>
            <Container style={{ backgroundColor: '#f8f9fa' }}>
                <Row className="mt-5">
                    <Col >
                        {filterBanca.banca.length !== 0 ? (<>
                            <ListGroup horizontal>
                                <p> Filtrar por:</p>
                                {filterBanca.banca && filterBanca.banca.map((banca) => {
                                    return (<>
                                        <Button variant="primary" className="mx-1">
                                            {banca} <Badge variant="light"> <FaTwitter size={20} /></Badge>
                                        </Button>
                                    </>)
                                })}

                            </ListGroup>
                        </>) : null}

                        <hr className="line" />
                    </Col>
                </Row>
                <Row >
                    <Col className="mt-5">
                    </Col>
                </Row>
                <Row >
                    <Col >
                        <DropdownTreeSelect
                            data={dataSelect}
                            onChange={onChange} // Retorna a option selecionado 
                            // onAction={onAction}
                            // onNodeToggle={onNodeToggle} // Retorna a props com estado de open/close da option selecionado
                            className="ScrollStyle"
                            texts={{ placeholder: 'Banca', inlineSearchPlaceholder: 'Pesquisar' }}
                        // mode="simpleSelect"
                        />
                    </Col>
                </Row>
            </Container>

        </div>
    );
}

export default Questions;
