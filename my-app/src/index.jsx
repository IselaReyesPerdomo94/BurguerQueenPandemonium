import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './App';
import Settings from './views/settings'
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import createFirebaseApp from './firebase'
const firebaseApp = createFirebaseApp() 
ReactDOM.render(
<Router>
    <Switch>
        <Route exact path="/" render={props => <Home firebase={firebaseApp}/>}></Route>
        <Route exact path="/configuracion" render={props => <Settings/>}></Route>
    </Switch>
</Router>, document.getElementById('root'));



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();