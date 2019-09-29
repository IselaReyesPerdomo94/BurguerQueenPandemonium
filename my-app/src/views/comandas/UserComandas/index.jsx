import React, { Component, Fragment, useState, useEffect } from 'react';
import Dropdown from '../../../components/Dropdown/index'
import EntryButton from '../../../components/Buttons/EntryButton/index.jsx';
import Button from '../../../components/Buttons/buttons';
import {db} from '../../../firebase/index';
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

    return (
        <Fragment>
            <main className={`user-comandas-main ${!visible ? 'visible' : 'no-visible'}`}>
                <div className="options-select">
                    <Dropdown titulo="¿QUIEN ATIENDE?" options={
                        users.map(item => 
                            <option key={item.telefono} value={item.nombre}>{item.nombre}</option>
                        )
                    } optionDefault="USUARIO" />
                    <Dropdown titulo="SUCURSAL" optionDefault="SUCURSAL" options={
                        sucursalOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)
                    }/>
                </div>
                <div className="table-box">
                    <Button onClick={() =>{
                            changeVisibility(true);
                        }    
                    } text="Mesa 3" client="Ana"/>
                </div>
                <div className="btn-add">
                    <EntryButton text="AGREGAR" />
                </div>
            </main>
            <main className={`${visible ? 'visible' : 'no-visible'}`}>
                <div className="options-select">
                    <Dropdown titulo="¿Quien atiende?" options={
                        users.map(item => 
                            <option key={item.telefono} value={item.nombre}>{item.nombre}</option>
                        )
                    } optionDefault="USUARIO" />
                    <Dropdown titulo="Sucursal" optionDefault="SUCURSAL" />
                </div>
            </main>
        </Fragment>
    )
}

export default Userandbranch;