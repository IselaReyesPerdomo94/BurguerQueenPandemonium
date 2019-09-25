import React, { Fragment, useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Tittle from '../../components/titles/index';
import Modal from '../../components/modal';
import ModalClean from '../../components/cleanmodal/index';
import './settings.css';
import UserTabs from './settingsUser/index.jsx';
import EntryButton from '../../components/Buttons/EntryButton/index';
import CreateUser from '../../components/CreateUser/createUser';

const Settings = (props) => {
    const [open, setOpen] = useState(false)

    const closeModalClean = () => {
        setOpen(false)
    }
    const openModal = () => {
        setOpen(true)
    }

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handleMobileChange = (e) => {
        setMobile(e.target.value)
    }

    useEffect(() => {
        props.setToOpen()
    }, [])

    const { modalOpen, closeModal, handleSide, menu } = props
    const displayTabsSettings = (
        <Tabs>
            <TabList>
                <Tab>Usuarios</Tab>
                <Tab>Menú</Tab>
                <Tab>Ayuda</Tab>
            </TabList>
            <TabPanel>
                <UserTabs openModal={openModal} />
            </TabPanel>
            <TabPanel>
                <h2>No hay menú agregado aún</h2>
            </TabPanel>
            <TabPanel>
                <h2>Ayuda en construcción</h2>
            </TabPanel>
        </Tabs>
    )
    return (
        <Fragment>
            <div className="wrapper">
                <Modal open={modalOpen} close={closeModal} />
                <ModalClean open={open} close={closeModalClean} title="Crear usuario" footer={<EntryButton text="Guardar" />} content={<CreateUser handleEmailChange={handleEmailChange} handleNameChange={handleNameChange} handleMobileChange={handleMobileChange}/>} />
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
