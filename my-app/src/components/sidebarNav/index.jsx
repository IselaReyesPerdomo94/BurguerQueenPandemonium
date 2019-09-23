import React, {Component} from 'react'
import DrawerToogleButton from './sideDrawer/drawerToogleButton'
import {Link} from 'react-router-dom';
import './style.css'

import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import {firebaseApp} from '../../firebase/index'

class Menu extends Component {
   constructor(props) {
      super(props)
      this.state = {
         isLogged:true};
       this.handleOnClick = this.handleOnClick.bind(this);
     }
     handleOnClick(e){
       this.setState({isLogged:false});
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
                     <li onClick= {() => {
                        firebase.auth().signOut()
                        .then(() =>console.log('sesion cerrada')).catch(() => console.error)}}>
                        <Link to="/">
                           <i className="material-icons icons sign-out">account_circle</i>
                        </Link>
                     </li>
                  </ul>
               </div>
            </nav>
         </aside>
      );
      };
}

const firebaseAppAuth = firebaseApp.auth();

export default withFirebaseAuth({
  firebaseAppAuth,
})(Menu);