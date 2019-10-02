import React, { Fragment, useState, useEffect } from 'react';
import Tittle from '../../components/titles/index';
import Userandbranch from './UserComandas/index.jsx';
import Input from '../../components/CleanInput/index';
import CleanModal from '../../components/cleanmodal/index';
import EntryButton from '../../components/Buttons/EntryButton/index';
import Pedido from './Pedido/Index';
import Dropdown from '../../components/Dropdown/index';
import { db } from '../../firebase/index';
import './style.css';

const Comandas = (props) => {
    const [users, setUsers] = useState([]);
    const [visible, setVisible] = useState(false);
    const [openTableModal, setOpenTableModal] = useState(false);
    const [numberTable, setNumberTable] = useState('');
    const [nameTable, setNameTable] = useState('');
    const [table, setTable] = useState([]);
    const [tableSelect, setTableSelect] = useState({});

    const changeVisibility = (visibility) => {
        setVisible(visibility);
    }

    const handlingTableModal = (state) => {
        cleanInputAddAccount()
        setOpenTableModal(state)
    }

    const handleNumberTable = (e) => setNumberTable(e.target.value)
    const handleNameTable = (e) => setNameTable(e.target.value)

    const addNewTable = () => {
        const newTable = table.concat([{ number: numberTable, name: nameTable }]);
        setTable(newTable);
        handlingTableModal(false);
    }

    const cleanInputAddAccount = () => {
        setNumberTable('')
        setNameTable('')
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

    const getDataTable = (algo) => {
        const tableSelect = table.filter((item, index) => {
            if (index == algo.id) {

                return item;
            }
        })

        setTableSelect(tableSelect[0])
    }

    const sucursalOptions = ["Sucursal", "Evento", "Local"];

    useEffect(() => {
        getUserCollectionForDropdown();
    }, []);


    const { menu } = props;
    const tableContent = (
        <Fragment>
            <p>Número de cuenta</p>
            <Input
                label={"Número de mesa"}
                type={"number"}
                value={numberTable}
                onChange={handleNumberTable}
            />
            <Input
                label={"Nombre"}
                type={"text"}
                value={nameTable}
                onChange={handleNameTable}
            />
        </Fragment>
    )
    return (
        <Fragment>
            <CleanModal
                title="Agregar cuenta"
                open={openTableModal}
                close={() => handlingTableModal(false)}
                content={tableContent}
                footer={
                    <EntryButton
                        text="CONFIRMAR"
                        onClick={addNewTable}
                        className="confirm-table"
                    />}
            />
            <div className="wrapper">
                {menu}
                <main className="main-comandas">
                    <Tittle
                        color="#0288D1"
                        text="Comandas"
                    />
                    <div className="options-select">
                        <Dropdown titulo="¿QUIEN ATIENDE?" options={
                            users.map(item =>
                                <option key={item.telefono} value={item.nombre}>{item.nombre}</option>
                            )
                        } optionDefault="USUARIO" />
                        <Dropdown titulo="SUCURSAL" optionDefault="SUCURSAL" options={
                            sucursalOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)
                        } />
                    </div>
                    <div className= {`table-box ${visible ? "no-visible": "visible"}`}>
                        <div className="table-box">
                            <Userandbranch tables={table} visible={visible} getDataTable={getDataTable} changeVisibility={changeVisibility} />
                        </div>
                    </div>

                    <Pedido tableSelect={tableSelect} visible={visible} changeVisibility={changeVisibility} />

                    <div className={`btn-add ${visible ? "no-visible" : "visible"}`}>
                        <EntryButton text="AGREGAR" onClick={() => handlingTableModal(true)} />
                    </div>
                </main>
            </div>
        </Fragment>
    )

}

export default Comandas;