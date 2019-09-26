import React, { Fragment, useState,useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Tittle from '../../components/titles/index';
import Modal from '../../components/modal';
import ModalClean from '../../components/cleanmodal/index';
import './settings.css';
import UserTabs from './settingsUser/index.jsx';
import Support from './../../components/soporte/index';
import EntryButton from './../../components/Buttons/EntryButton/index.jsx';
import Input from './../../components/CleanInput/index.jsx';


const Settings = (props) => {
    const [openCodeSecurity, setOpenCodeSecurity] = useState(false);

    const closeCodeSecurityModal = () => {
        setOpenCodeSecurity(false)
    }
     const openCodeSecurityModal = () => {
        setOpenCodeSecurity(true)
    }

    useEffect(()=>{
        props.setToOpen()
    },[]) 
    


    const { modalOpen, closeModal, handleSide, menu } = props
    const displayTabsSettings = (
        <Tabs>
            <TabList>
                <Tab>Usuarios</Tab>
                <Tab>Menú</Tab>
                <Tab>Ayuda</Tab>
            </TabList>

            <TabPanel>
                <UserTabs/>
            </TabPanel>
            <TabPanel>
                <h2>No hay menú agregado aún</h2>
            </TabPanel>
            <TabPanel>
                <Support openModal={openCodeSecurityModal}/>
            </TabPanel>
        </Tabs>
    )

    const content = (
        <Fragment>
            <Input
                id="nueva-clave"
                label="Ingresa nueva clave"
                type="password"
                name="clave"
                autoComplete="false"
                margin="normal"
                variant="outlined"
                className="mobile-input"
            />
            <Input
                id="confirmar-nueva-clave"
                label="Confirmar nueva clave"
                type="password"
                name="nuevaClave"
                autoComplete="false"
                margin="normal"
                variant="outlined"
                className="mobile-input"
            />
        </Fragment>
    );

    return (
        <Fragment>
            <div className="wrapper">
                <Modal open={modalOpen} close={closeModal} />
                <ModalClean open={openCodeSecurity} close={closeCodeSecurityModal} content={content} title="Cambiar clave" footer={<EntryButton text="Cambiar clave" />
            } />
                {menu}
                <main className="main">
                    <Tittle color="#303F9F" text="Configuración" icon={<i className="material-icons icon">settings_applications</i>} />
                    {displayTabsSettings}
                </main>
            </div>
        </Fragment>
    )

}

export default Settings;