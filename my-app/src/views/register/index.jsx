import React, { Fragment } from 'react';
import InputEmail from '../../components/inputEmail/index.jsx';
import InputPassword from '../../components/password/index.jsx';
import InputName from '../../components/inputName/index';
import InputMobile from '../../components/inputMobile/index';
import InputConfirmPass from '../../components/inputConfirmPass/index';
import FlatButton from '../../components/Buttons/flatButton/index.jsx';
import EntryButton from '../../components/Buttons/EntryButton/index.jsx';
import {Link} from 'react-router-dom';
import './style.css';

class Register extends React.Component{
    render(){
        return(
            <Fragment>
                <main className="register-container">
                    <div className="register-inputs">
                    <h2 className="tittle-register">Regístrate</h2>
                        <InputName/>
                        <InputEmail/>
                        <InputMobile/>
                        <InputPassword/>
                        <InputConfirmPass/>
                        <EntryButton text="ENVIAR"/>
                        <Link to="./">
                            <FlatButton text="CANCELAR" color="#00BCD4"/>
                        </Link>
                        <box className="have-account">
                            <p>¿Ya tienes una cuenta?</p>
                            <Link to="./">
                                <FlatButton text="INICIA SESIÓN"/>
                            </Link>
                        </box>
                    </div>
                </main>
            </Fragment>
        )
    }
}

export default Register;
