import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { Toast } from 'react-bootstrap';
import { useHistory } from "react-router-dom";

import { } from '../../services/session';
import * as User from "../../actions/user.actions";
import * as Auth from "../../actions/auth.actions";
import { validationRegister, validationLogin } from '../../helpers/validationForm';
import '../../assets/css/login.css';


function Login(props) {


    const {
        store,
        login,
        loadingStore,
        messageStore,
        loadingLogin,
        messageLogin
    } = props;

    const history = useHistory();

    const [show, setShow] = useState(false);
    const [requestAccess, setRequestAccess] = useState({
        name: '',
        email: '',
        password: '',
    })
    console.log('messageLogin', messageLogin)
    const [classActive, setClassActive] = useState(false);
    const [validation, setValidation] = useState([]);
    const [nameAux, setNameAux] = useState();

    const handleChange = (e) => {
        const { name } = e.target;
        const { value } = e.target;

        requestAccess[name] = value;
        setRequestAccess(requestAccess);
    }

    //REGISTRAR USUÁRIO
    function handleSubmitStore(event) {
        event.preventDefault();
        setValidation(validationRegister(requestAccess));

        if (validation.success) {
            store(requestAccess);
            setNameAux(requestAccess.name);
        };
    }

    //SOLICITAÇÃO DE ACESSO
    function handleSubmitLogin(event) {
        event.preventDefault();
        setValidation(validationLogin(requestAccess));

        if (validation.success) {
            login(requestAccess).then(() => {
                history.push('/');
            });
        }
    }

    function clearInput() {
        setShow(true);
        requestAccess.name = '';
        requestAccess.email = '';
        requestAccess.password = '';
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('password').value = '';
        setValidation([]);
    }

    useEffect(() => {
        if (validation.success && messageStore.status === 201) {
            setClassActive(!classActive);
            clearInput();
        };
    }, [messageStore]);

    console.log('messageStore - ', messageStore);
    console.log('validation - ', validation);

    return (
        <>
            <div >
                <div style={{ position: 'absolute', top: 0, right: 0, margin: 10 }}>
                    <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                        <Toast.Header>
                            <img
                                src="holder.js/20x20?text=%20"
                                className="rounded mr-2"
                                alt=""
                            />
                            <strong className="mr-auto">{nameAux}</strong>
                            {/* <small></small> */}
                        </Toast.Header>
                        <Toast.Body>{messageStore !== undefined && messageStore.status === 201 && messageStore.message}</Toast.Body>
                        <Toast.Body>{messageLogin !== undefined && messageLogin.status === 201 && messageLogin.message}</Toast.Body>
                    </Toast>
                </div>
            </div>

            <div className="B2M-login-container">
                <div className={classActive ? "B2M-login-login B2M-login-right-panel-active" : "B2M-login-login"} >

                    <div className="B2M-login-form-container B2M-login-sign-up-container">
                        <form onSubmit={handleSubmitStore} >
                            <h1>Criar conta</h1>
                            <ul className="B2M-validate-login">
                                {validation.erroAll ? (<li>{validation.erroAll}</li>) : (<>
                                    {validation.erroName && (<li>{validation.erroName}</li>)}
                                    {validation.erroEmail && (<li>{validation.erroEmail}</li>)}
                                    {validation.erroPassowrd && (<li>{validation.erroPassowrd}</li>)}
                                    {messageStore.status === 401 && (<li>{messageStore.message}</li>)}
                                </>)}
                            </ul>
                            <input disabled={loadingStore} type="text" id="name" name="name" placeholder="Nome" onChange={handleChange} />
                            <input disabled={loadingStore} type="text" id="email" name="email" placeholder="E-mail" onChange={handleChange} />
                            <input disabled={loadingStore} type="password" id="password" name="password" placeholder="Senha" onChange={handleChange} />
                            <button disabled={show}>{loadingStore ? <div className="B2M-loader"></div> : 'Cadastrar'}</button>
                        </form>
                    </div>

                    <div className="B2M-login-form-container B2M-login-sign-in-container">
                        <form >
                            <h1>Entrar</h1>
                            <ul className="B2M-validate-login">
                                {validation.erroAll ? (<li>{validation.erroAll}</li>) :
                                    (<> {messageLogin !== undefined && messageLogin.status === 401 && (<li>{messageLogin.message}</li>)}</>)
                                }
                            </ul>

                            <input disabled={loadingLogin} type="text" onChange={handleChange} name="email" placeholder="Email" />
                            <input disabled={loadingLogin} type="password" onChange={handleChange} name="password" placeholder="Password" />
                            {/* <a href="#">Esqueceu sua senha?</a> */}
                            <button onClick={handleSubmitLogin} disabled={loadingLogin}>{loadingStore ? <div className="B2M-loader"></div> : 'Entrar'}</button>
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
                                <button className="B2M-login-ghost" onClick={() => setClassActive(true)} >Registra-se</button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}

const mapStateToProps = (state) => {

    return {
        loadingStore: state.user.loading,
        messageStore: state.user.message,

        loadingLogin: state.auth.loading,
        messageLogin: state.auth.message,
    }
}

const mapDispatchToProps = {
    store: User.store,
    login: Auth.login,
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

