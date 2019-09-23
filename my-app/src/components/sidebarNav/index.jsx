import React, {Component} from 'react'
import './style.css'
import DrawerToogleButton from './sideDrawer/drawerToogleButton'
import {Link} from 'react-router-dom';

class Menu extends Component {
   constructor(props) {
      super(props)
      // this.props = this.click.bind(this)   
   }
   render(){
      const {handleSide, open} =this.props;
      return (
         <aside className="menu">
            <nav className="toolbar-navigation">
               <div className="toolbar-icon">
                  <DrawerToogleButton open={open} click={handleSide}/>
               </div>
               <div className="toolbar-navigation-items">
                  <ul>
                     <li><Link to="/Home" className="link">
                        <i className="material-icons icons">home</i>
                        </Link> 
                     </li>
                     <li><Link to="/comandas" className="link">
                        <i className="material-icons icons">restaurant</i>
                        </Link> 
                     </li>
                     <li>
                        <i className="material-icons icons">assignment</i>
                     </li>
                     <li>
                        <i className="material-icons icons">attach_money</i>
                     </li>
                     <li><Link to="/configuracion" className="link">
                        <i className="material-icons icons">settings_applications</i>
                        </Link>
                     </li>
                     <li>
                        <i className="material-icons icons">account_circle</i> 
                     </li>
                  </ul>
               </div>
            </nav>
         </aside>
      );
      };
}

export default Menu; 