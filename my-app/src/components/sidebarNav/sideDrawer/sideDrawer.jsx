import React, {Component} from 'react';
import './sideDrawer.css';
import DrawerToogleButton from '../sideDrawer/drawerToogleButton';
import {Link} from 'react-router-dom';

class SideDrawer extends Component{
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
                                <li>
                                    <i className="material-icons icons">assignment</i><span>Inventario</span>
                                </li>
                                <li>
                                    <i className="material-icons icons">attach_money</i><span>Corte de caja</span>
                                </li>
                                <li>
                                    <Link to="/configuracion" className="link">
                                    <i className="material-icons icons">settings_applications</i><span>Configuración</span> 
                                    </Link>
                                </li>
                                <li className="sign-out">
                                    <i className="material-icons icons">account_circle</i><span>Cerrar sesión</span> 
                                </li>
                            </ul>
                            </div>
                    </nav>
                </aside>
        );
    }
}

export default SideDrawer;