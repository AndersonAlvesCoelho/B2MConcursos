import React, { useState } from 'react';
import { SideNavbar, Navbar } from '../components/Menu/';
import '../assets/css/home.css';

// TODO: criar um menu para toda a apalicacao
function Home() {
    const [toggle, setToggle] = useState(false); // mudar o stado do side bar

    return (
        <>
            <div className="B2M-page">
                <Navbar toggle={toggle} onToggle={(e) => setToggle(e)}/>

                <div className="B2M-page-content">
                    <SideNavbar toggle={toggle}/>

                    <div className="B2M-h-container">
                        <div className="B2M-h-text">
                            <small>CONCURSO</small>
                            <h1 >Seja aprovado e mude de vida</h1>
                            <p>Prepare-se com a ferramenta preferida dos aprovados nos concursos e exames mais concorridos do País</p>
                            <button><a href="/login">CRIE SUA CONTA</a></button>
                        </div>
                    </div>
                </div>
            </div>


        </>
    );
}

export default Home;
