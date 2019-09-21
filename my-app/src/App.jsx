import React, {Component} from 'react';
import './index.css'
import Home from './views/home/App.jsx';
import Settings from './views/settings/settings';
import Login from './views/login/login';
import Register from './views/register/index';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component{
    constructor(){
        super()
        this.state = { modalOpen: true }
        this.closeModal = this.closeModal.bind(this)   
    }

    closeModal(){
        this.setState({modalOpen: false});
    };

    render(){
        const {modalOpen} = this.state;

        return(
            <Router basename = { window.location.pathname || '' } >
        <Switch >
            <Route exact path = "/" render = { props => < Login/>}></Route>
            <Route exact path = "/Home" render = { props => <Home />}></Route >
            <Route exact path = "/configuracion" render = { props => < Settings modalOpen={modalOpen} closeModal={this.closeModal}/> } ></Route> 
            <Route exact path = "/registro" render = { props => < Register/>}></Route>

        </Switch>  
    </Router>
        )
    }
}

export default App;