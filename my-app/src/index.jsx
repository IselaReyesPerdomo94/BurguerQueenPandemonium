import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './App';
import Settings from './views/settings';
import Login from './views/login/login';
import Register from './views/register/index';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import createFirebaseApp from './firebase'
// const firebaseApp = createFirebaseApp()

ReactDOM.render(
    < Router basename = { window.location.pathname || '' } >
        <Switch >
            <Route exact path = "/" render = { props => < Login/>}></Route>
            <Route exact path = "/Home" render = { props => < Home/>}></Route >
            <Route exact path = "/configuracion" render = { props => < Settings/> } ></Route> 
            <Route exact path = "/registro" render = { props => < Register/>}></Route>
        </Switch>  
    </Router>, 
            document.getElementById('root'));

            console.log('Este es el index donde esta la ruta')

            // <Route exact path = "/" render = { props => < Login firebase = { firebaseApp }/>}></Route>
            // <Route exact path = "/registro" render = { props => < Register firebase = { firebaseApp }/>}></Route >


            // If you want your app to work offline and load faster, you can change
            // unregister() to register() below. Note this comes with some pitfalls.
            // Learn more about service workers: https://bit.ly/CRA-PWA
            serviceWorker.unregister();