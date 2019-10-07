import React, { Fragment, useState, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Link } from 'react-router-dom';
import FlatButton from '../../components/Buttons/flatButton/index'
import Dropdown from '../../components/Dropdown/index';
import TableView from '../../components/Table/table';
import Tittle from '../../components/titles/index';
import { db } from '../../firebase/index';
import './inventory.css'

const Inventory = (props) => {
    const [users, setUsers] = useState([]);
    const [lowSupplies, setLowSupplies] = useState([]);

    const getUserCollectionForDropdown = () => {
        db.collection('users').get().then(querySnapshot => {
            let elements = [];
            querySnapshot.forEach(item => {
                elements.push(item.data());
            });
            setUsers(elements);
        });
    }

    const supplies = localStorage.getItem('tableData') ? JSON.parse(localStorage.getItem('tableData')) : []
    
    const transformToNumber = () => {
        const suppliesNumber = supplies.map((element)=>{
            let available = parseFloat(element.disponible);
            let needed = parseFloat(element.necesario)
        return {
            ...element,
            disponible: available,
            necesario:  needed
        }
        })
        return suppliesNumber;
    }

    const verifyDisponibility = () => {
       const transformedSupplies = transformToNumber();
       const lowSupplies = transformedSupplies.filter(element => element.disponible < element.necesario/2)
       const lowSuppliesReduce = lowSupplies.map(item => {
           return {
               name: item.nombre,
               disponible: `${item.disponible} ${item.medida}`
           }
       })
       setLowSupplies(lowSuppliesReduce)
    }

    const verifyEmptyInventory = () => {
        if(!supplies.length || supplies == null){
            const emptyInventory  = [{
                    categoria: "",
                    nombre: "",
                    disponible: "",
                    medida: "",
                    necesario: "",
                    medidaDelDia: "",
                    semanal: "",
                    medidaSemanal: ""
            }]
            localStorage.setItem('tableData', JSON.stringify(emptyInventory))
        }
    }

    useEffect(() => {
        getUserCollectionForDropdown();
        verifyEmptyInventory();
        verifyDisponibility()
    }, []);


    const { menu } = props;
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
                    <Tabs>
                        <TabList className="tab-list">
                            <Tab>Local</Tab>
                            <Tab>Puesto</Tab>
                            <Tab>Evento</Tab>
                        </TabList>
                        <TabPanel>
                            <div className="first-table-view">
                                <div className="column-view">
                                    <TableView headerText="Insumos por agotarse" lowSupplies={lowSupplies}/>
                                    <Link to="/insumos">
                                        <FlatButton className="detail-button" text="VER DETALLE"/>
                                    </Link>
                                </div>
                                <div className="column-view">
                                    <TableView headerText="Compras por agotarse" />
                                    <Link to="/compras">
                                        <FlatButton className="detail-button" text="VER DETALLE"/>
                                    </Link>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="first-table-view">
                                <TableView headerText="Insumos por agotarse" />
                                <TableView headerText="Compras por agotarse" />
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="first-table-view">
                                <TableView headerText="Insumos por agotarse" />
                                <TableView headerText="Compras por agotarse" />
                            </div>
                        </TabPanel>

                    </Tabs>
                </main>
            </div>
        </Fragment>
    )
}

export default Inventory