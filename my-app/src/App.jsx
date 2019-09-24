
import React, {Component} from 'react';
import './index.css'
import Home from './views/home/App.jsx';
import Settings from './views/settings/settings';
import Login from './views/login/login';
import Register from './views/register/index';
import Comandas from './views/comandas/comandas';
import SideDrawer from './components/sidebarNav/sideDrawer/sideDrawer';
import Menu from './components/sidebarNav/index';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

class App extends Component {
    constructor() {
        super()
        this.state = {modalOpen: true, sideDrawerOpen: false};
        this.closeModal = this.closeModal.bind(this);
        this.setToOpen = this.setToOpen.bind(this);
        this.drawerToogleClickHandler = this.drawerToogleClickHandler.bind(this);   
    }

    closeModal() {
        this.setState({ modalOpen: false });
    }

    setToOpen() {
        this.setState({modalOpen: true});
    }

    drawerToogleClickHandler(){
        this.setState((prevState) => {
            console.log('Prevstate:',prevState)
            return {sideDrawerOpen: !prevState.sideDrawerOpen};
        });
    };

    render() {
        const { modalOpen, sideDrawerOpen } = this.state;
        console.log(sideDrawerOpen)
        const menu = sideDrawerOpen ? <SideDrawer open={sideDrawerOpen} handleSide={this.drawerToogleClickHandler}/> : <Menu open={sideDrawerOpen} handleSide={this.drawerToogleClickHandler}/>
        return (
            <Router basename={window.location.pathname || ''} >
                <Switch >
                    <Route exact path="/" render={props => < Login />}></Route>
                    <Route exact path="/Home" render={props => <Home />}></Route >
                    <Route exact path="/configuracion" render={props => < Settings modalOpen={modalOpen} menu={menu} closeModal={this.closeModal}  setToOpen={this.setToOpen} sideBar={sideDrawerOpen} handleSide={this.drawerToogleClickHandler}/>} ></Route>
                    <Route exact path="/registro" render={props => < Register />}></Route>
                    <Route exact path="/comandas" render={props => < Comandas menu={menu} sideBar={sideDrawerOpen} handleSide={this.drawerToogleClickHandler}/>}></Route>

                </Switch>
            </Router>
        )
    }
}

export default App;