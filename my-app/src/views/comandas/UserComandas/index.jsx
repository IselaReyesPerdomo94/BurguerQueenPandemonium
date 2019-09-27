import React, { Component, Fragment } from 'react';
import Dropdown from '../../../components/Dropdown/index'
import EntryButton from '../../../components/Buttons/EntryButton/index.jsx';
import Button from '../../../components/Buttons/buttons';
import './style.css';


class Userandbranch extends Component {

    render() {
        return (
            <Fragment>
                <main className="user-comandas-main">
                    <div className="options-select">
                        <Dropdown options="USUARIO" />
                        <Dropdown options="SUCURSAL" />
                    </div>
                    <div className="comandas-box">
                        <Button text="Mesa 3" client="Ana"/>

                    </div>
                    <div className="btn-add">
                        <EntryButton text="AGREGAR" />
                    </div>
                </main>
            </Fragment>
        )
    }
}


export default Userandbranch;
