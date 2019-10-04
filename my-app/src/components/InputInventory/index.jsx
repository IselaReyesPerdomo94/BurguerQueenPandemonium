import React, { useState } from 'react';
import InputEmpty from '../inputEmpty/index';
import CleanInput from '../CleanInput/index';
import Dropdown from '../Dropdown/index';
import './style.css';

const InputInventory = (props) => {

    const { handleChangeCategory,
        handleChangeNameProduct,
        handleChangeCurrentAmount,
        handleChangeMeasureActual,
        handleChangeTodayAmount,
        handleChangeWeeklyAmount,
        addNewInventoryItem,
        categories,
        quantity} = props;

    return (
        <div className="inventory-inputs">
            <Dropdown
                optionDefault="Categoria"
                className="drop"
                options={
                    categories.map(opt =>
                        <option key={opt} value={opt}>{opt}</option>
                    )
                }
                onChange={handleChangeCategory}
            />
            <CleanInput
                onChange={handleChangeNameProduct}
                label="Nombre"
                type="text"
                className="input-box"
                variant="outlined"
            />
            <InputEmpty
                text="Cantidad actual"
                className="input-box-empty"
                onChange={handleChangeCurrentAmount}
            />
            <InputEmpty
                text="Cantidad diaria"
                className="input-box-empty"
                onChange={handleChangeTodayAmount}
            />
            <InputEmpty
                text="Cantidad semanal"
                className="input-box-empty"
                onChange={handleChangeWeeklyAmount}
            />
            <Dropdown
                optionDefault="Medida"
                className="drop"
                options={
                    quantity.map(opt =>
                        <option key={opt} value={opt}>{opt}</option>
                    )
                } onChange={handleChangeMeasureActual} />

            <span onClick={addNewInventoryItem}>
                <i className="material-icons done">done</i>
            </span>
        </div>
    )
}





export default InputInventory;