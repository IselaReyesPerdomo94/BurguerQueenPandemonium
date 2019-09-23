import React, {Component} from 'react';
import './sideDrawer.css'
import DrawerToogleButton from '../sideDrawer/drawerToogleButton'

class SideDrawer extends Component{
    constructor(props){
        super(props)
        this.state = {modalOpen: false};
        this.state = {sideDrawerOpen: false}
    };
    drawerToogleClickHandler = () => {
        this.setState((prevState) => {
            return {sideDrawerOpen: !prevState.sideDrawerOpen};
        });
    };

    render() {
        return(
            <aside className="toolbar aside">
                    <nav className="side-drawer">
                        <div className="toolbar-icon">
                            <DrawerToogleButton/>
                            </div>
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
                    </nav>
                </aside>
        );
    }
}

export default SideDrawer;