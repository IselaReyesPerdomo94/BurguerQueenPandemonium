import React, { Fragment, useState, useEffect } from 'react';
import { Tab, Tabs, TabList,TabPanel } from 'react-tabs';
import Tittle from '../../components/titles/index';
import Dropdown from '../../components/Dropdown/index';
import {db} from '../../firebase/index';
import TableShopping from '../../components/table-shopping/index.jsx';
import InputInventory from '../../components/InputInventory/index';
import DownloadExcel from '../../components/ExcelTable/index'
import './shopping.css'

const Shopping = (props) =>  {
    const [users, setUsers] = useState([]);
    const [exportShopping, setExportShopping] = useState(false);
    
    const getUserCollectionForDropdown = () => {
        db.collection('users').get().then(querySnapshot => {
            let elements = [];
            querySnapshot.forEach(item => {
                elements.push(item.data());
            });           
            setUsers(elements);
        });
    }

    const handleExportShopping = (e) => {
        setExportShopping(true)
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
                <h2>Compras</h2>
                <InputInventory/>
                <TableShopping/>
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
                        <DownloadExcel onClick={handleExportShopping}/>
                        
                    </main>
                </div>
            </Fragment>
        )
}

export default Shopping