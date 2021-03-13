import React from 'react';
import '../../assets/css/menu-nav-bar.css';


export const Navbar = (props) => {


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
                                <a href="index.html" className="navbar-brand d-none d-sm-inline-block">
                                    <div className="brand-text d-none d-lg-inline-block"><span>Bootstrap </span><strong>Dashboard</strong></div>
                                    <div className="brand-text d-none d-sm-inline-block d-lg-none"><strong>BD</strong></div>
                                </a>
                                <a id="toggle-btn" onClick={() => props.onToggle(props.toggle ? false : true)} className={`menu-btn  ${props.toggle ? "active" : ""}`} ><span></span><span></span><span></span>
                                </a>
                            </div>
                            <ul className="nav-menu list-unstyled d-flex flex-md-row align-items-md-center">
                                {/* <li className="nav-item d-flex align-items-center"><a id="search" href="#"><i className="B2M-search-icon"></i></a></li> */}
                                <li className="nav-item">
                                    <a href="#" className="nav-link logout">
                                        <span className="d-none d-sm-inline">Logout</span><i className="B2M-log-out-icon"></i>
                                    </a>
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


    return (
        <>
            <nav className={`side-navbar  ${props.toggle ? "shrinked" : ""}`} >
                {/* <nav className="side-navbar ">; */}
                <div className="sidebar-header d-flex align-items-center">
                    <div className="avatar"><img src="https://image.freepik.com/vetores-gratis/perfil-de-avatar-de-homem-no-icone-redondo_24640-14044.jpg" alt="avatar" className="img-fluid rounded-circle" /></div>
                    <div className="title">
                        <h1 className="h4">Mark Stephen</h1>
                        <p>Web Designer</p>
                    </div>
                </div>
                {/* <span className="heading">Main</span> */}
                <ul className="list-unstyled">
                    <li className="active"><a href="/"> <i className="B2M-menu-grid-r-icon"></i>Home </a></li>
                    <li><a href="/questoes"> <i className="B2M-file-document-icon"></i>Questões </a></li>
                    <li><a href="/cadastrar-questoes"> <i className="B2M-play-list-add-icon"></i>Registrar questão </a></li>
                    {/* <li><a href="#exampledropdownDropdown" aria-expanded="false" data-toggle="collapse"> <i className="icon-interface-windows"></i>Example dropdown </a>
                        <ul id="exampledropdownDropdown" className="collapse list-unstyled ">
                            <li><a href="#">Page</a></li>
                            <li><a href="#">Page</a></li>
                            <li><a href="#">Page</a></li>
                        </ul>
                    </li> */}
                </ul>
            </nav>

        </>
    );
}


{/* <header className="B2M-m-header">
                <a className="B2M-m-logo" href="/" > B2MConcursos</a>
                <input className="B2M-m-checkbox" type="checkbox" id="menu-btn" />
                <label className="B2M-m-menu-icon" for="menu-btn"><span className="B2M-m-navicon"></span></label>
                <ul className="B2M-m-menu">
                    <li><a href="/questoes">Questões</a></li>
                    <li><a href="/cadastrar-questoes">Registrar questão</a></li>
                    <li className="B2M-m-btn"><a href="/login">Logar</a></li>
                </ul>
            </header> */}