import React, {Fragment} from 'react';
import {Link, Redirect} from 'react-router-dom'; 
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseApp from '../../firebase/index';
import Logo from '../../components/logo/index.jsx';
import InputEmail from '../../components/inputEmail/index.jsx';
import InputPassword from '../../components/password/index.jsx';
import FlatButton from '../../components/Buttons/flatButton/index.jsx';
import EntryButton from '../../components/Buttons/EntryButton/index.jsx';
import './style.css'

class Login extends React.Component {
    constructor(){
        super();
        this.state = {email: "", password: ""};
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
    }

    handleEmailChange(e) {
        const { value } = e.target;
        this.setState({ email: value });
      }
    
    handlePasswordChange(e) {
        const { value } = e.target;
        this.setState({ password: value });
      }

    render() {
        const { 
            user,
            signInWithEmailAndPassword
          } = this.props;

        const {email, password} = this.state;  
        return (
            <Fragment>
                <main className = "login">
                    <Logo/>
                    <div className="user-inputs">
                        <InputEmail value={email} onChange={this.handleEmailChange}/>
                        <InputPassword labelText="Contraseña" value={password} onChange={this.handlePasswordChange}/>
                        {
                            user
                            ? <Redirect to="/Home"/>
                                : 
                                <EntryButton text="INICIAR SESIÓN" onClick = {(e) => {
                                    signInWithEmailAndPassword(email,password)}}/>
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