import React, { Fragment, useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Tittle from '../../components/titles/index';
import Dropdown from '../../components/Dropdown/index';
import { db } from '../../firebase/index';
import TablaInsumos from '../../components/tabla-insumos/';
import Add from '../../components/Add/index';
import './equipment.css';
import InputInventory from '../../components/InputInventory/index'
import CleanModal from '../../components/cleanmodal/index';
import EntryButton from '../../components/Buttons/EntryButton/index'

const Equipment = (props) => {
    const [users, setUsers] = useState([]);
    const [category, setCategory] = useState('');
    const [nameProduct, setNameProduct] = useState('');
    const [measureActual, setMeasureActual] = useState('');//dropdown
    const [currentAmount, setCurrentAmount] = useState('');//input
    const [todayAmount, setTodayAmount] = useState(''); //input of "cantidad diaria"
    const [weeklyAmount, setWeeklyAmount] = useState('')//input of "cantidad semanal"
    const [info, setInfo] = useState([]);
    const [showModal, setShowModal] = useState(false);//modal to add category or measure
    const [inputModal, setInputModal] = useState('');
    const [newThing, setNewThing] = useState('');
    const [categories, setCategories] = useState([]);
    const [quantity, setQuantity] = useState([]);

    const infoInLocal = JSON.parse(localStorage.getItem('tableData'));
    console.log(categories)
    console.log(quantity)
    const catchRadioButton = (e) => {
        e.preventDefault();
        const formInfo = new FormData(e.target)
        const newName = formInfo.get('name');
        const newAdd = formInfo.get('add-item')
        const word = `${newName} ${newAdd}`;
        addNewThing(word);
        setNewThing(word);
    }

    const handleChangeInputModal = (e) => {
        setInputModal(e.target.value)
    }

    const cleanInputModal = () => {
        setInputModal('');
    }

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
    const handleChangeTodayAmount = (e) => {
        setTodayAmount(e.target.value)
    }

    const handleChangeWeeklyAmount = (e) => {
        setWeeklyAmount(e.target.value)
    }
    const showModalAdd = () => {
        setShowModal(true);
    }
    const hideModalAdd = () => {
        setShowModal(false);
    }

    const addNewInventoryItem = () => {
        const newItem = info.concat({
            categoria: category,
            nombre: nameProduct,
            disponible: currentAmount,
            medida: measureActual,
            necesario: todayAmount,
            medidaDelDia: measureActual,
            semanal: weeklyAmount,
            medidaSemanal: measureActual
        })
        localStorage.setItem('tableData', JSON.stringify(newItem))
        const infoInLocal = JSON.parse(localStorage.getItem('tableData'));
        setInfo(infoInLocal)
        //localStorage.removeItem('tableData')
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
        const categoriesInLocal = localStorage.getItem('categories').split(',');
        const quantityInLocal = localStorage.getItem('quantity').split(',');
        setCategories(categoriesInLocal)
        setQuantity(quantityInLocal)
        if(categoriesInLocal == ""|| categoriesInLocal == null){
            localStorage.setItem('categories', categories2.toString())
            const arrayCategories = localStorage.getItem('categories').split(',')
            setCategories(arrayCategories)
        }
        if(quantityInLocal == ""|| quantityInLocal == null){
            localStorage.setItem('quantity', quantity2.toString())
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

    useEffect(() => {
        getUserCollectionForDropdown();
        verifyDrops();
        setInfo(infoInLocal)
    }, []);

    const { menu } = props;
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
                    <div className="add">
                        <button className="button-add-inventory" onClick={showModalAdd}>
                            AGREGAR
                        </button>
                    </div>
                    <InputInventory
                        newThing={newThing}
                        handleChangeMeasureActual={handleChangeMeasureActual}
                        handleChangeNameProduct={handleChangeNameProduct}
                        handleChangeCategory={handleChangeCategory}
                        handleChangeCurrentAmount={handleChangeCurrentAmount}
                        handleChangeTodayAmount={handleChangeTodayAmount}
                        handleChangeWeeklyAmount={handleChangeWeeklyAmount}
                        addNewInventoryItem={addNewInventoryItem}
                        quantity={quantity}
                        categories={categories}
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
            <CleanModal
                title="Agregar categoria y medida"
                open={showModal}
                close={() => {
                    hideModalAdd()
                    cleanInputModal()
                }}
                content={
                    <Add
                        name="add-item"
                        value1="Categoria"
                        value2="Medida"
                        value={inputModal}
                        onChange={handleChangeInputModal}
                        label="Agregar categoria o medida"
                        onSubmit={(e) => {
                            catchRadioButton(e)
                            hideModalAdd()
                            cleanInputModal()
                        }
                        } />
                }
            />

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