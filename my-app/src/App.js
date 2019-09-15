import React from 'react';
import {Link} from 'react-router-dom';
import './App.css';
import Logo from './components/logo/index';

function Home() {
  return (
    <div className="App">
      <Logo/>
      <nav>
        <Link to="/corte-de-caja" className="homeButtons cashOut">
        <i class="material-icons icons">attach_money</i>
          Corte de Caja
        </Link>
        <Link to="/configuración" className="homeButtons settings">
        <i class="material-icons icons">settings_applications</i>
          Configuración
        </Link>
        <Link to="/comandas" className="homeButtons commands">
        <i class="material-icons icons">restaurant</i>
          Comandas</Link>
        <Link to="/Inventario" className="homeButtons inventory">
          <i class="material-icons icons">assignment</i>
          Inventario
        </Link>
      </nav>
    </div>
  );
}


export default Home;

