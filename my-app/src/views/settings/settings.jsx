import React, { Fragment } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import Tittle from '../../components/titles/index';
import Modal from "../../components/modal"
import './settings.css'

class Settings extends React.Component {
    constructor() {
        super();
        this.state = { modalOpen: true }
        this.closeModal = this.closeModal.bind(this)
    }

    closeModal() {
        console.log("Closes")
        this.setState({ modalOpen: false })
    }

    render() {
        const { modalOpen } = this.state;
        const displayTabsSettings = (
            <Tabs>
                <TabList>
                    <Tab>Usuarios</Tab>
                    <Tab>Menú</Tab>
                    <Tab>Ayuda</Tab>
                </TabList>

                <TabPanel>
                    <h2>Any content 1</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Ayuda en construcción</h2>
                </TabPanel>
            </Tabs>
        )

        return (
            <Fragment>
                <Modal open={modalOpen} close={this.closeModal} />
                <main className="main">
                    <Tittle color="#303F9F" text="Configuración" icon={<i className="material-icons icon">settings_applications</i>} />
                    {displayTabsSettings}
                </main>
            </Fragment>
        )
    }
}

export default Settings;