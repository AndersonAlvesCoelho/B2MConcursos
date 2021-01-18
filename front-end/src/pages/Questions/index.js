import React, { useeffect } from 'react';
import DropdownTreeSelect from 'react-dropdown-tree-select'
import 'react-dropdown-tree-select/dist/styles.css'
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';

import MenuNavbar from '../../components/MenuNavbar/index';
import dataSelect from '../../services/example/dataSelect.json';
import './index.css';

function Questions() {

    const onChange = (currentNode, selectedNodes) => {
        console.log('onChange::', currentNode, selectedNodes)
    }
    const onAction = (node, action) => {
        console.log('onAction::', action, node)
    }

    // useEffect(() => {
    //     // Atualiza o titulo do documento usando a API do browser
    //     document.title = `Você clicou ${count} vezes`;
    // })

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
                            onAction={onAction}
                            // onNodeToggle={onNodeToggle} // Retorna a props com estado de open/close da option selecionado
                            className="ScrollStyle"
                            texts={{ placeholder: 'Banca', inlineSearchPlaceholder: 'Pesquisar' }}
                            data={{ label: 'Hi' }}
                        />
                    </Col>
                </Row>
            </Container>

        </div>
    );
}

export default Questions;
