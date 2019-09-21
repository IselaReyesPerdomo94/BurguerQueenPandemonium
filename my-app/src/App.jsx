import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './App.css';
import Logo from './components/logo/index';
import FlatButton from './components/Buttons/flatButton/index.jsx'
import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseApp from './firebase/index'
import Menu from './components/sidebar/index';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogged:true};
    this.handleOnClick = this.handleOnClick.bind(this);
  }
  handleOnClick(e){
    this.setState({isLogged:false});
  }
  render() {
    return (
      <div className="App">
        <Logo/>
        <Menu/>
        <nav>
          <Link to="/corte-de-caja" className="homeButtons cashOut">
          <i className="material-icons icons">attach_money</i>
            Corte de Caja
          </Link>
          <Link to="/configuracion" className="homeButtons settings">
          <i className="material-icons icons">settings_applications</i>
            Configuración
          </Link>
          <Link to="/comandas" className="homeButtons commands">
          <i className="material-icons icons">restaurant</i>
            Comandas</Link>
          <Link to="/Inventario" className="homeButtons inventory">
            <i className="material-icons icons">assignment</i>
            Inventario
          </Link>
          <FlatButton text="CERRAR SESIÓN" onClick= {() => {
            firebase.auth().signOut().then(() =>console.log('sesion cerrada')).catch(() => console.error)}}/> 
        </nav>
      </div>
    );
  }
}

const firebaseAppAuth = firebaseApp.auth();

export default withFirebaseAuth({
  firebaseAppAuth,
})(Home);

