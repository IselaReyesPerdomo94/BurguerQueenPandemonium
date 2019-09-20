import React, {Fragment} from 'react';
import Logo from '../../components/logo/index.jsx';
import InputEmail from '../../components/inputEmail/index.jsx';
import InputPassword from '../../components/password/index.jsx';
import FlatButton from '../../components/Buttons/flatButton/index.jsx';
import EntryButton from '../../components/Buttons/EntryButton/index.jsx';
import {Link} from 'react-router-dom'; 
import './style.css'


class Login extends React.Component {
    render() {
        return (
            <Fragment>
                <main className = "login">
                    <div className="contenedor">
                        <Logo/>
                        <div className="user-inputs">
                            <InputEmail/>
                            <InputPassword/>
                            <EntryButton text="INICIAR SESIÓN"/>
                            <Link to = "/registro">
                                <FlatButton text="REGÍSTRATE"/>
                            </Link> 
                            <p>¿Olvidaste tu contraseña?<FlatButton text="RECUPERAR"/></p>
                        </div>
                    </div>
                </main>
            </Fragment>
        )
    }
}

export default Login;