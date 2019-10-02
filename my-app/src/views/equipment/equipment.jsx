import React, { Fragment, useState, useEffect } from 'react';
import { Tab, Tabs, TabList,TabPanel } from 'react-tabs';
import Tittle from '../../components/titles/index';
import Dropdown from '../../components/Dropdown/index';
import {db} from '../../firebase/index';
import './equipment.css'

const Equipment = (props) =>  {
    const [users, setUsers] = useState([]);
    
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

 
    const {menu}= props;
    const displayTabsEquipment = (
        <Tabs>
        <TabList className="tab-list">
            <Tab>Local</Tab>
            <Tab>Puesto</Tab>
            <Tab>Evento</Tab>
        </TabList>
        <TabPanel>
            <div className="main-equipment">
                <h2>Local</h2>
            </div>
        </TabPanel>
        <TabPanel>
            <h2>Puesto</h2>
        </TabPanel>
        <TabPanel>
            <h2>Evento</h2>
        </TabPanel>
    
    </Tabs>
    )
        return (
            <Fragment>
                <div className="wrapper">
                    {menu}
                    <main className="main-inventory">
                        <Tittle color="#512DA8" text="Inventario" />
                         <div className="options-select">
                            <Dropdown titulo="¿QUIEN REVISÓ?" options={
                                users.map(item => 
                                    <option key={item.telefono} value={item.nombre}>{item.nombre}</option>
                                )
                            } optionDefault="USUARIO" />
                        </div>
                        {displayTabsEquipment}
                    </main>
                </div>
            </Fragment>
        )
}

export default Equipment