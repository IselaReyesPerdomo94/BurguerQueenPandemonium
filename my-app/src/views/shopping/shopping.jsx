import React, { Fragment, useState, useEffect } from 'react';
import { Tab, Tabs, TabList,TabPanel } from 'react-tabs';
import Tittle from '../../components/titles/index';
import Dropdown from '../../components/Dropdown/index';
import {db} from '../../firebase/index';
import TableShopping from '../../components/table-shopping/index.jsx';
import InputInventory from '../../components/InputInventory/index';
import './shopping.css'

const Shopping = (props) =>  {
    const [users, setUsers] = useState([]);
    const [categories, setCategories] = useState([]);
    const [quantity, setQuantity]= useState([]);

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

    const verifyDrops = () => {
        const categoriesInLocal = localStorage.getItem('categories')
        const quantityInLocal = localStorage.getItem('quantity') 
        if(categoriesInLocal == ""|| categoriesInLocal == null){
            localStorage.setItem('categories', categories2.toString())
            const arrayCategories = localStorage.getItem('categories').split(',')
            setCategories(arrayCategories)
        }
        if(quantityInLocal == ""|| quantityInLocal == null){
            localStorage.setItem('quantity', quantity2.toString())
            const arrayQuantity = localStorage.getItem('quantity').split(',')
            setQuantity(arrayQuantity)
        }if(categoriesInLocal !== ""){
            const arrayCategories = localStorage.getItem('categories').split(',')
            setCategories(arrayCategories)
        }if(quantityInLocal !== ""){
            const arrayQuantity = localStorage.getItem('quantity').split(',')
            setQuantity(arrayQuantity)
        }
    }

    //localstorage of quantity

    function addNewThing (word)  {
        const selection = word.split(' ')
        const arrayCategories = localStorage.getItem('categories').split(',')
        const arrayQuantity = localStorage.getItem('quantity').split(',')
        if(selection [1]==='Categoria'){
            arrayCategories.push(selection[0])
            localStorage.setItem('categories', arrayCategories.toString())
            const categoriesLocal = localStorage.getItem('categories').split(',')
            setCategories(categoriesLocal)
        }

        else {
            arrayQuantity.push(selection[0])
            localStorage.setItem('quantity', arrayQuantity.toString())
            const quantityLocal = localStorage.getItem('quantity').split(',')
            setQuantity(quantityLocal)
        }
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
        verifyDrops();
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
                <InputInventory 
                    categories={categories}
                    quantity={quantity}
                    />
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
                        
                    </main>
                </div>
            </Fragment>
        )
}

export default Shopping