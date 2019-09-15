import React, {Fragment} from 'react';
import Tittle from '../components/titles/index';
import Sidebar from '../components/sidebarSettings/index';
import Modal from "../components/modal"

class Settings extends React.Component {
    constructor() {
        super();
        this.state = { modalOpen: true }
        this.closeModal = this.closeModal.bind(this)
    }

    closeModal() {
        console.log("Closes")
        this.setState({modalOpen: false})
    }

    render() {
        const {modalOpen} = this.state
        return (
            <Fragment>
                <Modal open={modalOpen} close={this.closeModal}/>
                <main>
                    <Tittle color = "#303F9F"  text = "Configuración" icon = {<i className="material-icons icon">settings_applications</i>}/>
                    <Sidebar className="sidebar"/>
                </main>
            </Fragment>
        )
    }
}

export default Settings;