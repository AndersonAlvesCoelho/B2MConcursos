import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { FaFacebook, FaYoutube, FaInstagram, FaTwitter, FaQuestionCircle } from "react-icons/fa";

import logo from '../../assets/img/svg/logo.svg';
import '../../assets/css/menu-nav-bar.css';

function MenuNavbar() {
    return (
        <>
            <div className="B2M-container">
                <header className="B2M-header">
                    <div className="B2M-logo">
                        <img src={logo} />
                        <a href="/" >B2MConcursos</a>
                    </div>
                    <nav>
                        <ul className="B2M-menu">
                            <li><a href="/questoes">Questões </a></li>
                            <li><a href="/cadastrar-questoes">Registrar questão</a></li>
                        </ul>
                    </nav>
                    <div className="B2M-login">
                        <ul className="B2M-menu">
                            <li><a href="/login">Logar</a></li>
                        </ul>
                    </div>
                </header>
            </div>
        </>
    );
}

export default MenuNavbar;
