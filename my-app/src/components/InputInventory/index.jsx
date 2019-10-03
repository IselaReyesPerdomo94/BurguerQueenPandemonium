import React from 'react';
import InputEmpty from '../inputEmpty/index';
import CleanInput from '../CleanInput/index';
import Dropdown from '../Dropdown/index';
import './style.css';

const InputInventory = () => {
    const categories = [
                        "Producción", 
                        "Aderezos", 
                        "Desechables", 
                        "Proveedores"
                        ]
    const quantity = [
                        "kg",
                        "gramos",
                        "litros", 
                        "mamila",
                        "piezas"
                    ]

    return (
        <div className="inventory-inputs">
            <Dropdown optionDefault="Categoria" className="drop" options={
                categories.map(opt =>
                    <option key={opt} value={opt}>{opt}</option>
                    )
            }/>
            <CleanInput label="Nombre" type="text" className="input-box" variant="outlined"/>
            <InputEmpty text="Cantidad actual" className="input-box-empty"/>
            <Dropdown optionDefault="Medida" className="drop" options={
                quantity.map(opt =>
                    <option key={opt} value={opt}>{opt}</option>
                    )
            }/>
            <InputEmpty text="Cantidad diaria" className="input-box-empty"/>
            <Dropdown optionDefault="Medida" className="drop" options={
                quantity.map(opt =>
                    <option key={opt} value={opt}>{opt}</option>
                    )
            }/>
            <InputEmpty text="Cantidad semanal" className="input-box-empty"/>
            <Dropdown optionDefault="Medida" className="drop" options={
                quantity.map(opt =>
                    <option key={opt} value={opt}>{opt}</option>
                    )
            }/>
        </div>
    )
}





export default InputInventory;
