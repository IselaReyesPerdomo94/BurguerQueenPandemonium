import React, { Fragment, useState, useEffect } from 'react';
import { Tab, Tabs, TabList,TabPanel } from 'react-tabs';
import Tittle from '../../components/titles/index';
import Dropdown from '../../components/Dropdown/index';
import {db} from '../../firebase/index';
import TablaInsumos from '../../components/tabla-insumos/';
import './equipment.css'
import InputInventory from '../../components/InputInventory/index'

const Equipment = (props) =>  {
    const [users, setUsers] = useState([]);
    const [category, setCategory] = useState('');
    const [nameProduct, setNameProduct] = useState(''); 
    const [measureActual, setMeasureActual] = useState('');//dropdown
    const [currentAmount, setCurrentAmount] = useState('');//input
    const [todayAmount, setTodayAmount] = useState(''); //input of "cantidad diaria"
    const [weeklyAmount, setWeeklyAmount] = useState('')//input of "cantidad semanal"
    const [info, setInfo] = useState([]);

    const handleChangeCategory = (e) => {
       setCategory(e.target.value)
    }
    const handleChangeNameProduct = (e) => {
        setNameProduct(e.target.value);
    }
    const handleChangeMeasureActual = (e) => {
        setMeasureActual(e.target.value);
    }
    const handleChangeCurrentAmount = (e) => {
        setCurrentAmount(e.target.value)
    }
    const handleChangeTodayAmount =(e) => {
        setTodayAmount(e.target.value)
    }

    const handleChangeWeeklyAmount = (e) => {
        setWeeklyAmount(e.target.value)
    }

   

    const addNewInventoryItem = () => {
        const newItem = info.concat({
            categoria: category,
            nombre: nameProduct,
            disponible: currentAmount,
            medida: measureActual,
            necesario: todayAmount,
            medidaDelDia:measureActual,
            semanal: weeklyAmount,
            medidaSemanal: measureActual
        })
        setInfo(newItem)
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
                <InputInventory 
                    handleChangeMeasureActual = {handleChangeMeasureActual} 
                    handleChangeNameProduct={handleChangeNameProduct} 
                    handleChangeCategory={handleChangeCategory} 
                    handleChangeCurrentAmount={handleChangeCurrentAmount}
                    handleChangeTodayAmount={handleChangeTodayAmount}
                    handleChangeWeeklyAmount={handleChangeWeeklyAmount}
                    addNewInventoryItem={addNewInventoryItem}
                />
                <div className="equipment-table">
                <TablaInsumos info={info}/>
                </div>
            </div>
        </TabPanel>
        <TabPanel>
            <h2>Puesto</h2>
            <TablaInsumos />
        </TabPanel>
        <TabPanel>
            <h2>Evento</h2>
            <TablaInsumos />
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
                            <Dropdown 
                                titulo="¿QUIEN REVISÓ?" 
                                options={
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