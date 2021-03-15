import React, { useState } from 'react';

import { SideNavbar, Navbar } from '../../../components/Menu';
import Footer from '../../../components/Footer';

import '../../../assets/css/perfil.css';

function Perfil() {

    const [toggle, setToggle] = useState(false); // mudar o stado do side bar

    return (
        <>

            <div className="B2M-page">
                <Navbar toggle={toggle} onToggle={(e) => setToggle(e)} /> {/* MAIN NAVBAR */}
                <div className="B2M-page-content">
                    <SideNavbar toggle={toggle} type="Home" /> {/* SIDEBAR */}
                    {/* Page Header */}
                    <div className="B2M-content-inner side-navbar-active">
                        <header className="B2M-page-header">
                            <h2>Perfil</h2>
                        </header>

                        {/* Breadcrumb */}
                        <div className="breadcrumb-holder container-fluid B2M-bg">
                            <ul className="B2M-breadcrumb">
                                <li className="breadcrumb-item"><a href="/">Home</a></li>
                                <li className="breadcrumb-item active B2M-text-color-primary">Perfil</li>
                            </ul>
                        </div>

                        <div className="container-fluid aling-center">
                            <div className="row justify-content-md-center">
                                <div className="col-lg-4">
                                    <div className="client card">
                                        <div className="card-body text-center">
                                            <div className="B2M-client-avatar">
                                                <img src="https://bootdey.com/img/Content/user_1.jpg" alt="avatar" className="img-fluid rounded-circle" />
                                                <div className="status bg-green"></div>
                                            </div>
                                            <div className="client-title">
                                                <h3>Jason Doe</h3>
                                                {/* <span>Web Developer</span><a href="#">Follow</a> */}
                                            </div>
                                            <div className="client-info">
                                                <div className="row">
                                                    <div className="col-4"><strong>20</strong><br /><small>Questões feitas</small></div>
                                                    <div className="col-4"><strong>20</strong><br /><small>Questões acertadas</small></div>
                                                    <div className="col-4"><strong>20</strong><br /><small>questões errdas</small></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Footer />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Perfil;
