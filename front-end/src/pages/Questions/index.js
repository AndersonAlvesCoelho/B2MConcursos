import React, { useState } from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import { Divider } from 'antd';
import { Menu, Pagination, Affix } from 'antd';
import { FaFilter } from "react-icons/fa";

import './index.css';
import { questionData, officeData } from '../../services/filter/dataSelect';
import MenuNavbar from '../../components/MenuNavbar/index';
import Alternative from '../../components/Alternative/index';
import FilterFixed from '../../components/FilterFixed/index';


const dataSize = 2;
function Questions() {

    const [visible, setVisible] = useState(false);
    const [current, setCurrent] = useState();

    const [data, setData] = useState(questionData.slice(0, dataSize));

    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    function onShowSizeChange(page) {
        setData(questionData.slice(page, dataSize + page));
    }

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
                    <Menu onClick={(e) => setCurrent(e.key)} selectedKeys={[current]} mode="horizontal" mode="inline">
                        <Menu.Item key="mail" onClick={showDrawer} icon={<FaFilter />}>Filtrar</Menu.Item>

                        <Pagination
                            defaultCurrent={1}
                            total={questionData.length}
                            onChange={onShowSizeChange}
                            defaultPageSize={dataSize}
                        />
                    </Menu>

                    <FilterFixed visible={visible} onClose={onClose} />
                </Affix>
            </Divider>

            {/* Lista de questões baseado  */}
            {data.length !== 0 && data.map((e, x) =>
            <div key={x}>
                <Alternative data={e} index={x} />
            </div>
            )}
        </>
    );
}


export default Questions;
