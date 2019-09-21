import React, { Component, Fragment } from 'react';
import Dropdown from '../../../components/Dropdown/index'
import './style.css';


class User extends Component {
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
                </main>
            </Fragment>
        )
    }
}


export default User;
