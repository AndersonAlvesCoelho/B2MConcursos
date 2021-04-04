import React from 'react';
import { useHistory } from 'react-router-dom';
import { getUserCookie, removeUserCookie } from '../../services/session';
import '../../assets/css/menu-nav-bar.css';


export const Navbar = (props) => {

    const history = useHistory();

    const logout = () => {
        removeUserCookie();
        history.push('/login');
    }

    return (
        <>
            <header className="header">
                <nav className="navbar">
                    {/* <div className="search-box">
                        <button className="dismiss"><i className="B2M-close-icon"></i></button>
                        <form id="searchForm" action="#" role="search">
                            <input type="search" placeholder="What are you looking for..." className="form-control" />
                        </form>
                    </div> */}

                    <div className="container-fluid">
                        <div className="navbar-holder d-flex align-items-center justify-content-between">
                            <div className="navbar-header">
                                <a href="/" className="navbar-brand d-none d-sm-inline-block">
                                    <div className="brand-text d-none d-lg-inline-block"><span>B2M </span><strong>Concursos</strong></div>
                                    <div className="brand-text d-none d-sm-inline-block d-lg-none"><strong>B2M</strong></div>
                                </a>
                                <a id="toggle-btn" onClick={() => props.onToggle(props.toggle ? false : true)} className={`menu-btn  ${props.toggle ? "active" : ""}`} ><span></span><span></span><span></span>
                                </a>
                            </div>
                            <ul className="nav-menu list-unstyled d-flex flex-md-row align-items-md-center">
                                <li className="nav-item">
                                    {getUserCookie()[0].name ?
                                        <a className="nav-link logout" onClick={logout}>
                                            <span className="d-none d-sm-inline">Sair</span><i className="B2M-log-in-icon"></i>
                                        </a>
                                        :
                                        <a href="/login" className="nav-link logout" >
                                            <span className="d-none d-sm-inline">Entrar</span><i className="B2M-log-in-icon"></i>
                                        </a>
                                    }
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header >
        </>
    );
}

export const SideNavbar = (props) => {

    console.log('getUserCookie() ', getUserCookie())
    return (
        <>
            <nav className={`side-navbar  ${props.toggle ? "side-navbar-active shrinked" : ""}`} >
                {/* <nav className="side-navbar ">; */}

                {getUserCookie()[0].name ? (<>
                    <div className="sidebar-header d-flex align-items-center">
                        <div className="avatar">
                            <a href="/dashboard/perfil"><img src="https://secure.gravatar.com/avatar/?s=56&d=mm&r=g" alt="avatar" className="img-fluid rounded-circle" /></a>
                        </div>
                        <div className="title">
                            <h5 className="h4">{getUserCookie()[0].name}</h5>
                            {/* <p>Concurseiro</p> */}
                            {/* <a className="perfil" href="dashboard/perfil"><i className="B2M-eye-icon"></i> Perfil</a> */}
                        </div>
                    </div>
                </>) : null}

                {/* <span className="heading">Principal</span> */}
                <ul className="list-unstyled">
                    <li className={props.type === "Home" && "active"}><a href="/"> <i className="B2M-menu-grid-r-icon"></i>Home </a></li>
                    <li className={props.type === "Questions" && "active"}><a href="/questoes"> <i className="B2M-file-document-icon"></i>Questões </a></li>
                    {getUserCookie() && getUserCookie()[0].nivel === 2 &&
                        <li className={props.type === "RegisterQuestions" && "active"}>
                            <a href="/cadastrar-questoes"> <i className="B2M-play-list-add-icon"></i>Registrar questão </a>
                        </li>
                    }
                    <li><a href="https://b2mconcursos.com.br/"> <i className="B2M-shopping-cart"></i>Produtos </a></li>
                </ul>
            </nav>

        </>
    );
}