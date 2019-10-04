import React, {useState} from 'react';
import InputEmpty from '../inputEmpty/index';
import CleanInput from '../CleanInput/index';
import Dropdown from '../Dropdown/index';
import './style.css';

const InputInventory = (props) => {
    const categories2 = [
        "Producción",
        "Aderezos",
        "Desechables",
        "Proveedores"
    ]

    const quantity2 = [
        "kg",
        "gramos",
        "litros",
        "mamila",
        "piezas"
    ]
    //localstorage of categories
    localStorage.setItem('categories', categories2.toString())
    const categoriesInLocal = localStorage.getItem('categories');
    const arrayCategories = categoriesInLocal.split(',')

    //localstorage of quantity
    localStorage.setItem('quantity', quantity2.toString())
    const quantityInLocal =localStorage.getItem('quantity');
    const arrayQuantity = quantityInLocal.split(',')


    const [categories, setCategories] = useState(arrayCategories);
    const [quantity, setQuantity] = useState(arrayQuantity);
        

    const { handleChangeCategory,
        handleChangeNameProduct,
        handleChangeCurrentAmount,
        handleChangeMeasureActual,
        handleChangeTodayAmount,
        handleChangeWeeklyAmount,
        addNewInventoryItem,
        newThing } = props;


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