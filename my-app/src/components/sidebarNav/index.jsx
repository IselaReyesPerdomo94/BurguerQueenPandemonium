import React, {Component} from 'react'
import './style.css'
import DrawerToogleButton from './sideDrawer/drawerToogleButton'

const Menu = (props) => {
return (
   <aside className="toolbar aside">
      <nav className="toolbar-navigation">
         <div className="toolbar-icon">
            <DrawerToogleButton/>
         </div>
         <div className="toolbar-navigation-items">
            <ul>
               <li>
                  <i className="material-icons icons">attach_money</i>
               </li>
               <li>
                  <i className="material-icons icons">attach_money</i>
               </li>
               <li>
                  <i className="material-icons icons">attach_money</i>
               </li>
               <li>
                  <i className="material-icons icons">attach_money</i>
               </li>
               <li>
                  <i className="material-icons icons">attach_money</i> 
               </li>
               <li>
                  <i className="material-icons icons">attach_money</i> 
               </li>
            </ul>
         </div>
      </nav>
   </aside>
);
}

export default Menu; 