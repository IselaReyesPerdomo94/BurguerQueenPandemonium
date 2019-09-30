import React, { Fragment, useState, useEffect } from 'react';
import Tittle from '../../components/titles/index';
import Dropdown from '../../components/Dropdown/index';
import {db} from '../../firebase/index';
import './cortedecajas.css';


const CorteCaja = (props) => {
    const {menu} = props;
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
    
    const sucursalOptions = ["Sucursal", "Evento", "Local"];

    useEffect(() => {
        getUserCollectionForDropdown();
    }, []);

        return (
            <Fragment>
                <div className="wrapper">
                    {menu}
                    <main className="main-corte-caja">
                        <Tittle 
                        color="#0097A7" 
                        text="Corte de Caja" />
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
                    </main>
                </div>
            </Fragment>
        )
}



export default CorteCaja;