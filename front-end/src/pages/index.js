import React, { useState } from 'react';
import { SideNavbar, Navbar } from '../components/Menu/';

import Footer from '../components/Footer';

import '../assets/css/home.css';

// TODO: criar um menu para toda a apalicacao
function Home() {
    const [toggle, setToggle] = useState(false); // mudar o stado do side bar


    console.log('toggle ', toggle);

    return (
        <>
            <div className="B2M-page">
                <Navbar toggle={toggle} onToggle={(e) => setToggle(e)} /> {/* MAIN NAVBAR */}
                <div className="B2M-page-content">
                    <SideNavbar toggle={toggle} type="Home" /> {/* SIDEBAR */}
                    {/* Page Header */}
                    <div className="B2M-content-inner">
                        <header className="B2M-page-header">
                            <h2>Home</h2>
                        </header>

                        <div className="B2M-text-banner-home">
                            <div >
                                <small>CONCURSO</small>
                                <h1>Seja aprovado e mude de vida</h1>
                                <p>Prepare-se com a ferramenta preferida dos aprovados nos concursos e exames mais concorridos do País</p>
                                <button className="B2M-btn-primary"><a href="/login">CRIE SUA CONTA</a></button>
                            </div>
                        </div>

                        <Footer />
                    </div>
                </div>
            </div>


        </>
    );
}

export default Home;
