import React, { Fragment, useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Link } from 'react-router-dom';
import FlatButton from '../../components/Buttons/flatButton/index'
import Dropdown from '../../components/Dropdown/index';
import TableView from '../../components/Table/table';
import Tittle from '../../components/titles/index';
import { db } from '../../firebase/index';
import CleanModal from '../../components/cleanmodal/index'
import EntryButton from '../../components/Buttons/EntryButton/index'
import Add from '../../components/Add/index'
import './inventory.css'

const Inventory = (props) => {
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


    const { menu } = props;
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
                    <Tabs>
                        <TabList className="tab-list">
                            <Tab>Local</Tab>
                            <Tab>Puesto</Tab>
                            <Tab>Evento</Tab>
                        </TabList>
                        <TabPanel>
                            <div className="first-table-view">
                                <div className="column-view">
                                    <TableView headerText="Insumos por agotarse" />
                                    <Link to="/insumos">
                                        <FlatButton className="detail-button" text="VER DETALLE" />
                                    </Link>
                                </div>
                                <div className="column-view">
                                    <TableView headerText="Compras por agotarse" />
                                    <Link to="/compras">
                                        <FlatButton className="detail-button" text="VER DETALLE" />
                                    </Link>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="first-table-view">
                                <TableView headerText="Insumos por agotarse" />
                                <TableView headerText="Compras por agotarse" />
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="first-table-view">
                                <TableView headerText="Insumos por agotarse" />
                                <TableView headerText="Compras por agotarse" />
                            </div>
                        </TabPanel>

                    </Tabs>
                </main>
            </div>
        </Fragment>
    )
}

export default Inventory