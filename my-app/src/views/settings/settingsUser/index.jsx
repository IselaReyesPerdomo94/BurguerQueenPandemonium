import React, { Fragment } from 'react';
import * as firebase from 'firebase/app';
import EntryButton from '../../../components/Buttons/EntryButton/index.jsx';
import Dropdown from '../../../components/Dropdown/index.jsx';
import Modal from '../../../components/cleanmodal/index';
import './style.css';

class UsersTab extends React.Component {
    constructor (){
        super ()
        this.state = {modalOpen:false} 
        this.closeModal = this.closeModal.bind(this)
        this.openModal = this.openModal.bind(this)
    }
    closeModal (){
        this.setState({modalOpen:false})
    }
    openModal (){
        this.setState({modalOpen:true})
    }
    render() {
        return (
            <Fragment>
                <Modal open = {this.state.modalOpen} close = {this.closeModal} title = "Crear usuario"/>
                <main>
                    <h2>No se han agregado usuarios</h2>
                    <div className="button-add">
                        <EntryButton text="Agregar usuarios" className="button-settings" onClick= {this.openModal}/>
                    </div>
                </main>
            </Fragment>
        )
    }
}

export default UsersTab;