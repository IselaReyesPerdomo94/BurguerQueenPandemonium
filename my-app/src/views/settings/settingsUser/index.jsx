import React, { Fragment } from 'react';
import * as firebase from 'firebase/app';
import EntryButton from '../../../components/Buttons/EntryButton/index.jsx';
import Dropdown from '../../../components/Dropdown/index.jsx';
import Modal from '../../../components/cleanmodal/index';
import Button from '../../../components/Buttons/buttons';
import './style.css';

const  UsersTab =({openModal}) => {
        return (
            <Fragment>
                
                <main>
                    <h2>No se han agregado usuarios</h2>
                    <Button text="SUSANA"/>
                    <div className="button-add">
                        <EntryButton text="Agregar usuarios" className="button-settings" onClick= {openModal}/>
                    </div>
                </main>
            </Fragment>
        )
}

export default UsersTab;

