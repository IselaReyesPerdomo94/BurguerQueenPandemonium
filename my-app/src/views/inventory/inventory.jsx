import React, { Component, Fragment, useState, useEffect } from 'react';
import Tittle from '../../components/titles/index';
import Dropdown from '../../components/Dropdown/index';
import TableView from '../../components/Table/table';
import {db} from '../../firebase/index';
import './inventory.css'

const Inventory = (props) =>  {
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

 
        const {menu}= props;
        return (
            <Fragment>
                <div className="wrapper">
                    {menu}
                    <main className="main-inventory">
                        <Tittle color="#512DA8" text="Inventario" />
                         <div className="options-select">
                            <label className={`table-text ${visible ? 'visible' : 'no-visible'}`}>Mesa 3</label>
                            <Dropdown titulo="¿QUIEN REVISÓ?" options={
                                users.map(item => 
                                    <option key={item.telefono} value={item.nombre}>{item.nombre}</option>
                                )
                            } optionDefault="USUARIO" />
                        </div>
                        <div className="first-table-view"> 
                        <TableView headerText="Insumos por agotarse"/>
                        <TableView headerText="Compras por agotarse"/>
                        </div>
                    </main>
                </div>
            </Fragment>
        )
}

export default Inventory