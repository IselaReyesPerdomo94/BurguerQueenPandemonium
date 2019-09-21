import React, { Fragment } from 'react';
import InputEmail from '../inputEmail/index';
import InputName from '../inputName/index';
import InputMobile from '../inputMobile/index';
import FlatButton from '../Buttons/flatButton/index.jsx';
import EntryButton from '../Buttons/EntryButton/index.jsx';
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
                        <EntryButton text="GUARDAR"/>
                            <FlatButton text="CANCELAR" color="#00BCD4"/>
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
