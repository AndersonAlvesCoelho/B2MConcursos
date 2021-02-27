import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Jumbotron, Container } from 'react-bootstrap';
import { Divider } from 'antd';
import { Menu, Pagination, Affix, Spin, Empty } from 'antd';
import { FaFilter } from "react-icons/fa";

import './index.css';
// import { questionData } from '../../services/filter/dataSelect';
import MenuNavbar from '../../components/MenuNavbar';
import Alternative from '../../components/Alternative';
import FilterFixed from '../../components/FilterFixed';

import * as questionActions from '../../actions/question.actions';

const viewSizeQuestion = 2;

function Questions(props) {

    const [visible, setVisible] = useState(false);
    const [current, setCurrent] = useState();
    const [dataFilter, setDataFilter] = useState([]);
    const [pagerCurrent, setPagerCurrent] = useState(1);

    const [offset, setOffset] = useState(0);
    const [limit, setLimit] = useState(viewSizeQuestion);

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    function onShowSizeChange(page) {
        setPagerCurrent(page);
        setLimit(viewSizeQuestion)
        setOffset((page - 1) * viewSizeQuestion)
    }

    const {
        loadingQuestion,

        question,
        qtdQuestion,

        getQuestion,
        getQtdQuestion,
    } = props;

    //get data questions
    useEffect(() => {
        let data = dataFilter.length !== 0 ? dataFilter : false;
        getQuestion({ offset, limit, data });
    }, [getQuestion, offset, limit, dataFilter]);

    //get size data questions
    useEffect(() => {
        let data = dataFilter.length !== 0 ? dataFilter : false;
        getQtdQuestion({ data });
        setOffset(0);
        setPagerCurrent(1);
    }, [getQtdQuestion, dataFilter]);

    return (
        <>
            {/* Navbar */}
            <MenuNavbar />

            <Jumbotron className="conatiner-banner">
                <Container >
                    <h1>Questões de Concurso</h1>
                    <p>Resolva centenas de milhares de questões de provas anteriores de concursos, OAB, CFC, ENEM e Vestibulares. Bateu dúvida? Confira os comentários dos professores!</p>
                </Container>
            </Jumbotron>

            {/* Formulario para o filtro de questões */}
            <Divider orientation="right">
                <Affix offsetTop={10}>
                    <Menu onClick={(e) => setCurrent(e.key)} selectedKeys={[current]} mode="inline" >
                        <Menu.Item key="mail" onClick={showDrawer} icon={<FaFilter />}>Filtrar</Menu.Item>
                        <Pagination
                            current={pagerCurrent}
                            defaultCurrent={1}
                            total={qtdQuestion}
                            onChange={onShowSizeChange}
                            defaultPageSize={viewSizeQuestion}
                            responsive={true}
                        />
                    </Menu>

                    <FilterFixed visible={visible} onClose={onClose} changerFilter={(e) => { setDataFilter(e); }} />
                </Affix>
            </Divider>

            {/* Lista de questões baseado  */}
            {
                question.length !== 0 ? (<>
                    {question.map((e, x) =>
                        <div key={x}>
                            <Alternative data={e} indexQ={x} />
                        </div>
                    )}
                </>) : (<>
                    {loadingQuestion ? <div className="center-component"><Spin /></div> : <div className="center-Component"><Empty /></div>}
                </>)
            }
        </>
    );
}


const mapStateToProps = (state) => ({
    loadingQuestion: state.question.loading,
    question: state.question.question,
    qtdQuestion: state.question.qtdQuestion,
});

const mapDispatchToProps = {
    getQuestion: questionActions.getQuestion,
    getQtdQuestion: questionActions.getQtdQuestion,
};

export default connect(mapStateToProps, mapDispatchToProps)(Questions);
