import React, {Component} from 'react'
import './style.css'
import DrawerToogleButton from './sideDrawer/drawerToogleButton'

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
                     <li>
                        <i className="material-icons icons">home</i>
                     </li>
                     <li>
                        <i className="material-icons icons">restaurant</i>
                     </li>
                     <li>
                        <i className="material-icons icons">assignment</i>
                     </li>
                     <li>
                        <i className="material-icons icons">attach_money</i>
                     </li>
                     <li>
                        <i className="material-icons icons">settings_applications</i> 
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