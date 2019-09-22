import React, { Component, Fragment } from 'react';
import Dropdown from '../../../components/Dropdown/index'
import EntryButton from '../../../components/Buttons/EntryButton/index.jsx';
import './style.css';


class Userandbranch extends Component {
    constructor() {
        super()
    }
    render() {
        return (
            <Fragment>
                <main>
                    <div className="options-select">
                        <Dropdown options="USUARIO" />
                        <Dropdown options="SUCURSAL" />
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
