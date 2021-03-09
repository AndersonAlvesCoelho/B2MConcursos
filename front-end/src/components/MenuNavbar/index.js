import React from 'react';

import logo from '../../assets/img/svg/logo.svg';
import '../../assets/css/menu-nav-bar.css';

function MenuNavbar() {
    return (
        <>
            <div className="B2M-m-container">
                <header className="B2M-m-header">
                    <div className="B2M-m-logo">
                        <img src={logo} />
                        <a href="/" >B2MConcursos</a>
                    </div>
                    <nav>
                        <ul className="B2M-m-menu">
                            <li><a href="/questoes">Questões </a></li>
                            <li><a href="/cadastrar-questoes">Registrar questão</a></li>
                            <li className="B2M-m-btn"><a href="/login">Logar</a></li>

                        </ul>
                    </nav>
                    {/* <div className="B2M-m-login">
                        <ul className="B2M-m-menu">
                            <li><a href="/login">Logar</a></li>
                        </ul>
                    </div> */}
                </header>
            </div>
        </>
    );
}

export default MenuNavbar;
