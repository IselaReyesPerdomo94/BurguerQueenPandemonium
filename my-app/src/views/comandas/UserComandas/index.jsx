import React, { Fragment } from 'react';
import Dropdown from '../../../components/Dropdown/index'
import EntryButton from '../../../components/Buttons/EntryButton/index.jsx';
import './style.css';


const Userandbranch = () => {



    return (
        <Fragment>
            <main className="user-comandas-main">
                <div className="options-select">
                    <Dropdown userBranch="Aurora" label="¿QUIÉN ATIENDE?" />
                    <Dropdown userBranch="Local" label="SUCURSAL" option="orizaba" optionTwo="chilpancingo" />

                </div>
                <div className="comandas-box">

                </div>
                <div className="btn-add">
                    <EntryButton text="AGREGAR" />
                </div>
            </main>
        </Fragment>
    )

}


export default Userandbranch;
