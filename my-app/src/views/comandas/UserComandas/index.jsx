import React, { Component, Fragment, useState, useEffect } from 'react';
import Dropdown from '../../../components/Dropdown/index'
import EntryButton from '../../../components/Buttons/EntryButton/index.jsx';
import Button from '../../../components/Buttons/buttons';
import { db } from '../../../firebase/index';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Hamburguers from './hamburguers/hamburguers';
import "react-tabs/style/react-tabs.css";
import './style.css';

const Userandbranch = () => {
    const [users, setUsers] = useState([]);
    const [visible, setVisible] = useState(false);

    const changeVisibility = (visibility) => {
        setVisible(visibility);
    }

    const getUserCollectionForDropdown = () => {
        db.collection('users').get().then(querySnapshot => {
            let elements = [];
            querySnapshot.forEach(item => {
                elements.push(item.data());
            });
            setUsers(elements);
        });
    }

    useEffect(() => {
        getUserCollectionForDropdown();
    }, []);

    const sucursalOptions = ["Sucursal", "Evento", "Local"];

    const displayTabsMenu = (
        <Tabs>
            <TabList>
                <Tab>Hamburguesas</Tab>
                <Tab>Hot Dogs</Tab>
                <Tab>Pizzas</Tab>
                <Tab>Ensaladas</Tab>
                <Tab>Extras</Tab>
                <Tab>Malteadas</Tab>
                <Tab>Sodas</Tab>
                <Tab>Postres</Tab>
            </TabList>
            <TabPanel>
                <Hamburguers changeVisibility={changeVisibility} />
            </TabPanel>
            <TabPanel>
                <h2>No hay menú agregado aún</h2>
            </TabPanel>
            <TabPanel>

            </TabPanel>
        </Tabs>
    )

    return (
        <Fragment>

            <div className="options-select">
                <label className={`table-text ${visible ? 'visible' : 'no-visible'}`}>Mesa 3</label>
                <Dropdown titulo="¿QUIEN ATIENDE?" options={
                    users.map(item =>
                        <option key={item.telefono} value={item.nombre}>{item.nombre}</option>
                    )
                } optionDefault="USUARIO" />
                <Dropdown titulo="SUCURSAL" optionDefault="SUCURSAL" options={
                    sucursalOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)
                } />
            </div>
            <main className={`user-comandas-main ${!visible ? 'visible' : 'no-visible'}`}>

                <div className="table-box">
                    <Button onClick={() => {
                        changeVisibility(true);
                    }
                    } text="Mesa 3" client="Ana" />
                </div>
                <div className="btn-add">
                    <EntryButton text="AGREGAR" />
                </div>
            </main>
            <main className={`${visible ? 'visible' : 'no-visible'}`}>
                {displayTabsMenu}
            </main>
        </Fragment>
    )
}

export default Userandbranch;