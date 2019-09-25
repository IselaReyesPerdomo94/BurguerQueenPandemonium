import React, { Fragment, Component } from 'react';
import * as firebase from 'firebase/app';
import EntryButton from './../Buttons/EntryButton/index.jsx';
import ModalClean from './../cleanmodal/index.jsx';
import Input from './../CleanInput/index.jsx';
import './style.css';

class Support extends Component {
    constructor (){
        super ()
        this.state = {open: false} 
        this.closeModal = this.closeModal.bind(this)
        this.openModal = this.openModal.bind(this)
    }

    closeModal (){
        this.setState({open: false})
    }
    openModal (){
        this.setState({open: true})
    }

    render() {
        const content = (
            <Fragment>
                <Input
                    id="nueva-clave"
                    label="Ingresa nueva clave"
                    type="password"
                    name="clave"
                    autoComplete="false"
                    margin="normal"
                    variant="outlined"
                    className=""
                />
                <Input
                    id="confirmar-nueva-clave"
                    label="Confirmar nueva clave"
                    type="password"
                    name="nuevaClave"
                    autoComplete="false"
                    margin="normal"
                    variant="outlined"
                    className=""
                />
            </Fragment>        
        );

        return (
            <div className="button-container">
                <EntryButton className="button-support" onClick={()=>{
                    this.openModal()
                }} text="Clave de seguridad" />
                <EntryButton className="button-support" text="Sobre el sistema" />
                <ModalClean open = {this.state.open} close = {this.closeModal} content = {content} title = "Cambiar clave"/>
           </div>
        )
    }
};


export default Support;