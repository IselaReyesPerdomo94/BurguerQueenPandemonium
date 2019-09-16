import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';
import Logo from './components/logo/index';

function Home({firebase}) {
  
  console.log(firebase.auth().signInWithEmailAndPassword('evictorio92@gmail.com','123456'))
  return (
    <div className="App">
      <Logo/>
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
      </nav>
    </div>
  );
}


export default Home;

