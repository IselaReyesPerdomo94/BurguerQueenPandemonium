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
    const [inputModal, setInputModal] =useState('');

    const catchRadioButton = (e) => {
        e.preventDefault();
        const formInfo = new FormData(e.target)
        console.log(formInfo.get('name'), formInfo.get("add-item"))
    }

    const handleChangeInputModal = (e) => {
        setInputModal(e.target.value)
        console.log(inputModal)
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
                    <div className="add">
                        <button className="button-add" onClick={showModalAdd}>
                            +
                        </button>
                    </div>
                    <h2>Local</h2>

                    <InputInventory
                        handleChangeMeasureActual={handleChangeMeasureActual}
                        handleChangeNameProduct={handleChangeNameProduct}
                        handleChangeCategory={handleChangeCategory}
                        handleChangeCurrentAmount={handleChangeCurrentAmount}
                        handleChangeTodayAmount={handleChangeTodayAmount}
                        handleChangeWeeklyAmount={handleChangeWeeklyAmount}
                        addNewInventoryItem={addNewInventoryItem}
                    />
                    <div className="equipment-table">
                        <TablaInsumos info={info} />
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
                close={()=> {
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
                        onSubmit={(e)=> {
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