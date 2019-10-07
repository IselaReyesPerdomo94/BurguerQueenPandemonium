import React, {Component} from 'react';
import DrawerToogleButton from '../sideDrawer/drawerToogleButton';
import {Link} from 'react-router-dom';
import './sideDrawer.css';

import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import {firebaseApp} from '../../../firebase/index'


class SideDrawer extends Component{
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
        const {handleSide, open} =this.props;
        return(
            <aside className="side-drawer">
                    <nav className="side-drawer-navigation">
                        <div className="toolbar-icon">
                            <DrawerToogleButton open={open} click={handleSide}/>
                        </div>
                        <div className="side-drawer-items">
                            <ul>
                                <li><Link to="/Home" className="link">
                                    <i className="material-icons icons">home</i><span>Inicio</span>  
                                    </Link>                          
                                </li>
                                <li><Link to="/comandas" className="link">
                                    <i className="material-icons icons">restaurant</i><span>Comandas</span>
                                    </Link>
                                </li>
                                <li className="wrapper-childs"><Link to="/inventario" className="link">
                                    <i className="material-icons icons">assignment</i><span>Inventario</span>
                                    </Link>
                                <ul className="wrapper-childs">
                                    <li className="childs">
                                        <Link to="/insumos" className="link-child">Insumos</Link>
                                    </li>
                                    <li className="childs">
                                        <Link to="/compras" className="link-child">Compras</Link>
                                    </li>
                                </ul>
                                </li>
                                <li><Link to="/corte-de-caja" className="link">
                                    <i className="material-icons icons">attach_money</i><span>Corte de caja</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/configuracion" className="link">
                                    <i className="material-icons icons">settings_applications</i><span>Configuración</span> 
                                    </Link>
                                </li>
                                <li className="sign-out" onClick= {() => {
                                            firebase.auth().signOut()
                                            .then(() =>console.log('sesion cerrada')).catch(() => console.error)}}>
                                    <Link to="/" className="link">
                                    <i className="material-icons icons">account_circle</i>
                                        <span className="sign-out-text">Cerrar Sesión</span>
                                    </Link>
                                </li>
                            </ul>
                            </div>
                    </nav>
                </aside>
        );
    }
}

const firebaseAppAuth = firebaseApp.auth();

export default withFirebaseAuth({
  firebaseAppAuth,
})(SideDrawer);