import React, { Fragment, useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import Tittle from '../../components/titles/index';
import Modal from '../../components/modal';
import './settings.css';
import UserTabs from './settingsUser/index.jsx';
import Support from './../../components/soporte/index';
import EntryButton from './../../components/Buttons/EntryButton/index.jsx';
import Input from './../../components/CleanInput/index.jsx';
import CreateUser from '../../components/CreateUser/createUser';
import { db } from '../../firebase/index';
import TextErrors from '../../components/textErrors/index'


const Settings = (props) => {
    const [openCodeSecurity, setOpenCodeSecurity] = useState(false);
    const [open, setOpen] = useState(false)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [error, setError] = useState('');
    const [alert, setAlert] = useState('');
    const [success, setSuccess] = useState('');
    const [firstPin, setFirstPin] = useState("");
    const [secondPin, setSecondPin] = useState("");

    const cleanModal = () => {
        setName('')
        setEmail('')
        setMobile('')
        setError('')
        setAlert('')
        setSuccess('')
    }

    const cleanSecurityInputsModal = () => {
        setFirstPin('')
        setSecondPin('')
    }
    const closeCodeSecurityModal = () => {
        cleanSecurityInputsModal()
        setOpenCodeSecurity(false)
    }
    const openCodeSecurityModal = () => {
        setOpenCodeSecurity(true)
    }

    const closeModalClean = () => {
        cleanModal()
        setOpen(false)
    }
    const openModal = () => {
        setOpen(true)
    }

    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handleMobileChange = (e) => {
        setMobile(e.target.value)
    }

    const handleFirstPinChange = (e) => {
        console.log(e.target.value)
        setFirstPin(e.target.value)
    }

    const handleSecondPinChange = (e) => {
        console.log(e.target.value)
        setSecondPin(e.target.value)
    }
    const validateInputs = () => {
        if (name === '') {
            setError('El campo de nombre no debe estar vacío')
            setTimeout(() => {
                setError('')
            }, 2500)
            return false;
        }
        if (email === '' || mobile === '') {
            setAlert('Se recomienda llenar teléfono y correo')
            setTimeout(() => {
                setAlert('')
            }, 2500)
            return false;
        }
        return true
    }

    const creatingUser = () => {
        if (!validateInputs()) {
            return
        }
        setAlert('Creando usuario, espere un momento')
        const userCollection = db.collection('users')
        userCollection.add({
            nombre: name,
            correo: email,
            telefono: mobile
        })
            .then(() => {
                console.log('Creado correctamente')
                setSuccess('Usuario creado correctamente')
            }).then(() => {
                closeModalClean()
            })
            .catch(() => {
                setError('Parece que hubo un error')
            })
    }
    
    const validateChangePin = () => {
        if (firstPin === secondPin) {
            return true
        }
        setAlert("Tus claves no son iguales")
        setTimeout(() => {
            setAlert('')
        }, 1500)
        return false
    }

    const changePin = () => {
        if (!validateChangePin()) {
            console.log("validando")
            return
        }
        db.collection("clave").doc('7zSrA5mnA7kqA32wuyxx').update({
            pin: secondPin
        }).then(() => {
            setSuccess("Tu clave ha sido cambiada correctamente")
        }).then(() => {
            setTimeout(() => {
                closeCodeSecurityModal()
            }, 1000)
        }).catch(() => {
            setError("Parece que hubo un error")
        })
    }

    useEffect(() => {
        props.setToOpen()
    }, [])

    const { modalOpen, closeModal, handleSide, menu } = props

    const displayTabsSettings = (
        <Tabs>
            <TabList className="tab-list">
                <Tab>Usuarios</Tab>
                <Tab>Menú</Tab>
                <Tab>Soporte</Tab>
            </TabList>

            <TabPanel>
                <UserTabs openModal={openModal} />
            </TabPanel>
            <TabPanel>
                <h2>No hay menú agregado aún</h2>
            </TabPanel>
            <TabPanel>
                <Support openModal={openCodeSecurityModal} />
            </TabPanel>
        </Tabs>
    )

    const content = (

        < Fragment >
            <TextErrors textColor="blue" text={alert} />
            <Input
                id="nueva-clave"
                label="Ingresa nueva clave"
                type="password"
                name="clave"
                autoComplete="false"
                margin="normal"
                variant="outlined"
                className="mobile-input"
                value={firstPin}
                onChange={handleFirstPinChange}


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
                value={secondPin}
                onChange={handleSecondPinChange}

            />
            <TextErrors textColor="red" text={error} />
            <TextErrors textColor="green" text={success} />
        </Fragment >

    );

    return (
        <Fragment>
            <div className="wrapper">
                <Modal open={modalOpen} close={closeModal} />
                <ModalClean open={open} close={closeModalClean} title="Crear usuario" footer={<EntryButton text="Guardar" onClick={creatingUser} className="create-user-button" />} content={<CreateUser handleEmailChange={handleEmailChange} handleNameChange={handleNameChange} handleMobileChange={handleMobileChange} alert={alert} error={error} success={success} email={email} mobile={mobile} name={name} />} />
                <ModalClean open={openCodeSecurity} close={closeCodeSecurityModal} content={content} title="Cambiar clave" footer={<EntryButton text="Cambiar clave" className='change-pin-button' onClick={changePin} />} />
                {menu}
                <main className="main">
                    <Tittle color="#303F9F" text="Configuración" icon={<i className="material-icons icon">settings_applications</i>} />
                    {displayTabsSettings}
                </main>
            </div>
        </Fragment >
    )
}


export default Settings;
