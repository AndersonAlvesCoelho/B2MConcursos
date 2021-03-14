import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Empty } from 'antd';

import '../../assets/css/question.css';
import 'antd/dist/antd.css';

import { SideNavbar, Navbar } from '../../components/Menu/';
import Alternative from '../../components/Alternative';
import FilterFixed from '../../components/FilterFixed';
import Pagination from '../../components/Pagination';
import Footer from '../../components/Footer';
import * as questionActions from '../../actions/question.actions';

const viewSizeQuestion = 1;

function Questions(props) {

    const [toggle, setToggle] = useState(false); // mudar o stado do side bar
    const [visible, setVisible] = useState(false);
    const [dataFilter, setDataFilter] = useState([]);
    const [pagerCurrent, setPagerCurrent] = useState(1);
    const [offset, setOffset] = useState(0);
    const [limit, setLimit] = useState(viewSizeQuestion);

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

    function onShowSizeChange(page) {
        setPagerCurrent(page);
        setLimit(viewSizeQuestion)
        setOffset((page - 1) * viewSizeQuestion)
    }

    return (
        <>

            <div className="B2M-page">
                <Navbar toggle={toggle} onToggle={(e) => setToggle(e)} /> {/* MAIN NAVBAR */}
                <div className="B2M-page-content">
                    <SideNavbar toggle={toggle} type="Questions" /> {/* SIDEBAR */}
                    {/* Page Header */}
                    <div className={`B2M-content-inner side-navbar-active ${toggle ? 'active' : ''}`}>
                        <header className="B2M-page-header">
                            <h2>Questões</h2>
                        </header>
                        {/* Breadcrumb */}
                        <div class="breadcrumb-holder container-fluid B2M-bg">
                            <ul class="B2M-breadcrumb">
                                <li class="breadcrumb-item"><a href="/">Home</a></li>
                                <li class="breadcrumb-item active B2M-text-color-primary">Questões</li>
                            </ul>
                        </div>

                        <section class="B2M-questions">
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-12">

                                        {question.length !== 0 ? (<>
                                            <div className="row">
                                                <div className="col-lg-2 col-md-12 B2M-info-question-none">
                                                    <div className="B2M-info-question">
                                                        <FilterFixed visible={visible} onClose={() => setVisible(false)} changerFilter={(e) => { setDataFilter(e); }} />
                                                        <a onClick={() => setVisible(true)}><i className="B2M-search-icon"></i></a>
                                                    </div>
                                                </div>

                                                <div className="col-lg-10 col-md-12">
                                                    <Pagination
                                                        postsPerPage={viewSizeQuestion}
                                                        totalPosts={qtdQuestion}
                                                        newPage={onShowSizeChange}
                                                        paginate={pagerCurrent}
                                                    />
                                                </div>

                                            </div>

                                            {question.map((data, index) =>
                                                <div key={index} className="card">
                                                    <Alternative data={data} index={index} />
                                                </div>
                                            )}
                                        </>) : (<>
                                            {loadingQuestion ? <div class="B2M-loader"></div> : <div className="center-Component"><Empty /></div>}
                                        </>)}
                                    </div>
                                </div>
                            </div>
                        </section>
                       
                        <Footer />
                    </div>
                </div>
            </div>

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
{/* <div className="B2M-q-content">
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
    {loadingQuestion ? <div class="B2M-loader"></div> : <div className="center-Component"><Empty /></div>}
</>)}
</div> */}