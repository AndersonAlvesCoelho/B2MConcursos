import React from 'react';
import { Jumbotron, Container, Row } from 'react-bootstrap';
import { TreeSelect, Input, Radio } from 'antd';
import { questionData } from '../../services/filter/dataSelect';

import './index.css';
import MenuNavbar from '../../components/MenuNavbar/index';
import Alternative from '../../components/Alternative/index';
import FilterFixed from '../../components/FilterFixed/index';

function Questions(props) {

    return (

        <div>
            {/* Navbar */}
            <MenuNavbar />

            <Jumbotron className="conatiner-banner">
                <Container >
                    <h1>Questões de Concurso</h1>
                    <p>Resolva centenas de milhares de questões de provas anteriores de concursos, OAB, CFC, ENEM e Vestibulares. Bateu dúvida? Confira os comentários dos professores!</p>
                </Container>
            </Jumbotron>

            {/* Formulario para o filtro de questões */}
            <FilterFixed />

            <Container className="filter-conatiner" >
                <Row >
                    {/* <Col>
                        <span className="filter-titer mr-1">Filtrar por: </span>
                        {questionSearch ||
                            bankLabel.length !== 0 ||
                            institutionLabel.length !== 0 ||
                            officeLabel.length !== 0 ||
                            yearLabel.length !== 0 ||
                            diciplineLabel.length !== 0
                            ? null : (
                                <span className="ml-1  filter-titer-default"> Nem um filtro foi selecionado.</span>
                            )}

                        {questionSearch && (<>
                            <span className="filter-group px-1"> Enunciado
                                    <Badge Badge className="mx-1 filter-label pm-4">{questionSearch}
                                    <FaRegTimesCircle size={15} onClick={() => setQuestionSearch('')}className="filter-icon-outline ml-1" />
                                </Badge>
                            </span>
                        </>)}

                        {bankLabel.length !== 0 && (<>
                            <span className="filter-group px-1"> Banca
                            {bankLabel.map((bank, index) => {
                                return (
                                    <Badge key={index} Badge className="mx-1 filter-label pm-4">{bank}
                                        <FaRegTimesCircle size={15} className="filter-icon-outline ml-1" />
                                    </Badge>
                                )
                            })}
                            </span>
                        </>)}

                        {institutionLabel.length !== 0 && (<>
                            <span className="filter-group px-1 mx-2"> Orgão
                            {institutionLabel.map((institution, index) => {
                                return (
                                    <Badge key={index} Badge className="mx-1 filter-label pm-4">{institution}
                                        <FaRegTimesCircle size={15} className="filter-icon-outline ml-1" />
                                    </Badge>
                                )
                            })}
                            </span>
                        </>)}

                        {officeLabel.length !== 0 && (<>
                            <span className="filter-group px-1 mx-2"> Cargo
                            {officeLabel.map((office, index) => {
                                return (
                                    <Badge key={index} Badge className="mx-1 filter-label pm-4">{office}
                                        <FaRegTimesCircle size={15} className="filter-icon-outline ml-1" />
                                    </Badge>
                                )
                            })}
                            </span>
                        </>)}

                        {yearLabel.length !== 0 && (<>
                            <span className="filter-group px-1 mx-2"> Ano
                            {yearLabel.map((year, index) => {
                                return (
                                    <Badge key={index} Badge className="mx-1 filter-label pm-4">{year}
                                        <FaRegTimesCircle size={15} className="filter-icon-outline ml-1" />
                                    </Badge>
                                )
                            })}
                            </span>
                        </>)}

                        {diciplineLabel.length !== 0 && (<>
                            <span className="filter-group px-1 mx-2"> Matéria & Assunto
                            {diciplineLabel.map((dicipline, index) => {
                                return (
                                    <Badge key={index} Badge className="mx-1 filter-label pm-4">{dicipline}
                                        <FaRegTimesCircle size={15} className="filter-icon-outline ml-1" />
                                    </Badge>
                                )
                            })}
                            </span>
                        </>)}
                        <hr className="filter-line mx-1" />
                    </Col> */}
                </Row>
            </Container>

            {/* Lista de questões baseado  */}
            <Container className="alternative-conatiner my-3">
                {questionData.length !== 0 && questionData.map((data, key) =>
                (
                    <div key={key}>
                        <Alternative data={data} index={key} />
                        <hr className="filter-line" />
                    </div>
                )
                )}
            </Container>




            <h1 className="mt-5">Hello Word</h1>
            <h1>Hello Word</h1>
            <h1>Hello Word</h1>
            <h1>Hello Word</h1>
            <h1>Hello Word</h1>
            <h1>Hello Word</h1>
            <h1>Hello Word</h1>
            <h1>Hello Word</h1>
            <h1>Hello Word</h1>
            <h1>Hello Word</h1>
            <h1>Hello Word</h1>
            <h1>Hello Word</h1>
            <h1>Hello Word</h1>



        </div >
    );
}


export default Questions;
