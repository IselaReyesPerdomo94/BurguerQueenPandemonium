import React, {Fragment} from 'react';
import {Link} from 'react-router-dom'; 
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import config from '../../firebase/index';

import Logo from '../../components/logo/index.jsx';
import InputEmail from '../../components/inputEmail/index.jsx';
import InputPassword from '../../components/password/index.jsx';
import FlatButton from '../../components/Buttons/flatButton/index.jsx';
import EntryButton from '../../components/Buttons/EntryButton/index.jsx';
import './style.css'

const firebaseApp = firebase.initializeApp(config);

class Login extends React.Component {
    render() {
        const { 
            user,
            signOut,
            signInWithGoogle,
          } = this.props;
        return (
            <Fragment>
                <main className = "login">
                    <Logo/>
                    <div className="user-inputs">
                        <InputEmail/>
                        <InputPassword/>
                        {
                            user
                            ? <EntryButton text="CERRAR SESIÓN" onClick = {signOut}/>
                                : 
                                <EntryButton text="INICIAR SESIÓN" onClick = {(e) => {
                                    console.log('holi', e);
                                    signInWithGoogle()}}/>
                        }
                        <Link to = "/registro">
                        <FlatButton text="REGÍSTRATE"/>
                        </Link> 
                        <p>¿Olvidaste tu contraseña?<FlatButton text="RECUPERAR"/></p>
                    </div>
                </main>
            </Fragment>
        )
    }
}
const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
  })(Login);