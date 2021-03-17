import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import '../../assets/css/login.css';
import * as User from "../../actions/user.actions";
import * as Auth from "../../actions/auth.actions";
import {connect} from "react-redux";
import { getUserCookie } from '../../services/session';

const user = getUserCookie() ? getUserCookie() : [];

function Login(props) {
    
    console.log("getUserCookie() ", getUserCookie());
    
    const [classActive, setClassActive] = useState(false);
    const [requestAccess, setRequestAccess] = useState({
        name: '',
        email: '',
        password: '',
    })


    const {
        store,
        login,
        history
    } = props

    const handleChange = (e) => {
        const { name } = e.target
        const { value } = e.target
        requestAccess[name] = value
        setRequestAccess(requestAccess)
    }

    function handleSubmitStore(event) {
        event.preventDefault()
        store(requestAccess)
    }

    function handleSubmit(event) {
        event.preventDefault()
        login(requestAccess).then(() => {
            history.push('/');
        })
    }

    return (
        <>
            <div className="B2M-login-container">
                <div className={classActive ? "B2M-login-login B2M-login-right-panel-active" : "B2M-login-login"} >
                    <div className="B2M-login-form-container B2M-login-sign-up-container">
                        <form onSubmit={handleSubmitStore} action="#">
                            <h1>Criar conta</h1>
                            {/* <div className="B2M-login-social-container">
                                <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                                <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                                <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                            <span>or use your email for registration</span> */}
                            <input type="text" name="name" placeholder="Nome"  onChange={handleChange}/>
                            <input type="email" name="email" placeholder="E-mail"  onChange={handleChange}/>
                            <input type="password" name="password" placeholder="Senha"  onChange={handleChange}/>
                            <button>Cadastrar</button>
                        </form>
                    </div>
                    <div className="B2M-login-form-container B2M-login-sign-in-container">
                        <form onSubmit={handleSubmit}>
                            <h1>Entrar</h1>
                            {/* <div className="B2M-login-social-container">
                                <a href="#" className="social"><i className="fab fa-facebook-f"></i></a>
                                <a href="#" className="social"><i className="fab fa-google-plus-g"></i></a>
                                <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a>
                            </div>
                            <span>or use your account</span> */}
                            <input type="email"  onChange={handleChange} name="email" placeholder="Email" />
                            <input type="password"  onChange={handleChange} name="password" placeholder="Password" />
                            <a href="#">Esqueceu sua senha?</a>
                            <button>Logar</button>
                        </form>
                    </div>
                    <div className="B2M-login-overlay-container">
                        <div className="B2M-login-overlay">
                            <div className="B2M-login-overlay-panel B2M-login-overlay-left">
                                <h1>Bem vindo de volta!</h1>
                                <p>Para se manter conectado conosco, faça o login com suas informações pessoais</p>
                                <button className="B2M-login-ghost" onClick={() => setClassActive(false)}>Entrar</button>
                            </div>
                            <div className="B2M-login-overlay-panel B2M-login-overlay-right">
                                <h1>Olá amigo!</h1>
                                <p>Insira seus dados pessoais e comece a jornada conosco</p>
                                <button className="B2M-login-ghost" onClick={() => setClassActive(true)}>Registra-se</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

const mapStateToProps = state => {
    const { auth } = state;
    return {
        loading: state.user.loading,
    }
}

const mapDispatchToProps = {
    store: User.store,
    login: Auth.login,
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

