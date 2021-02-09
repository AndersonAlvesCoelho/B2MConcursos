import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { FaFacebook, FaYoutube, FaInstagram, FaTwitter, FaQuestionCircle } from "react-icons/fa";

// import logoQuest from '../../assets/img/logo-quest.png';
import './index.css';

function MenuNavbar() {
    return (
        <Navbar className="menu-container" expand="lg">
            <Navbar.Brand href="/" className="menu-link-text">
                <FaQuestionCircle size={35} className="mr-1" />{''}
                B2MConcursos
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link className="menu-link-text" href="/questoes">Questões</Nav.Link>
                    <Nav.Link className="menu-link-text" href="/cadastrar-questoes">Registrar questão</Nav.Link>
                </Nav>

                <Nav >
                    <div className="icons-content">
                        <FaFacebook size={20} />
                    </div>
                    <div className="icons-content" >
                        <FaYoutube size={20} />
                    </div>
                    <div className="icons-content">
                        <FaInstagram size={20} />
                    </div>
                    <div className="icons-content">
                        <FaTwitter size={20} />
                    </div>

                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default MenuNavbar;
