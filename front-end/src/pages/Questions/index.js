import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Menu, Spin, Empty } from 'antd';
import { FaFilter, FaLongArrowAltRight } from "react-icons/fa";

// import 'bootstrap/dist/css/bootstrap.min.css';
import '../../assets/css/question.css';
import 'antd/dist/antd.css';

// import MenuNavbar from '../../components/MenuNavbar';
import Alternative from '../../components/Alternative';
import FilterFixed from '../../components/FilterFixed';
import Pagination from '../../components/Pagination';
import Footer from '../../components/Footer';
import * as questionActions from '../../actions/question.actions';

const viewSizeQuestion = 1;

function Questions(props) {

    const [visible, setVisible] = useState(false);
    const [current, setCurrent] = useState();
    const [dataFilter, setDataFilter] = useState([]);
    const [pagerCurrent, setPagerCurrent] = useState(1);
    const [offset, setOffset] = useState(0);
    const [limit, setLimit] = useState(viewSizeQuestion);
    const items = [];


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


    const showDrawer = () => {
        setVisible(true);
    };

    const onClose = () => {
        setVisible(false);
    };

    function onShowSizeChange(page) {
        console.log(page)
        setPagerCurrent(page);
        setLimit(viewSizeQuestion)
        setOffset((page - 1) * viewSizeQuestion)
    }


    return (
        <>
            {/* Navbar */}
            {/* <MenuNavbar /> */}


            <div className="B2M-q-content">
                {question.length !== 0 ? (<>
                    <div className="B2M-q-pagination">
                        <Pagination
                            postsPerPage={viewSizeQuestion}
                            totalPosts={qtdQuestion}
                            newPage={onShowSizeChange}
                            paginate={pagerCurrent}
                        />

                        <div className="B2M-q-infos">
                            <FilterFixed visible={visible} onClose={onClose} changerFilter={(e) => { setDataFilter(e); }} />
                            <a onClick={showDrawer}><i className="B2M-zoom-out"></i></a>
                        </div>
                    </div>

                    {question.map((e, x) =>
                        <div key={x}>
                            <Alternative data={e} indexQ={x} />
                        </div>
                    )}
                </>) : (<>
                    {loadingQuestion ?
                        <div class="B2M-loader"></div>
                        : <div className="center-Component"><Empty /></div>}
                </>)}
            </div>

            < Footer />
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
