import React, { Component, Fragment } from 'react';
import './style.css';

class Dropdown extends Component {
    
    render() {
        return (
            <Fragment>
                <div className="select-uno">
                    <select name="Usuarios">
                        <option defaultValue value="user">Usuario</option>
                        <option value="uno">Uno</option>
                        <option value="dos">Dos</option>
                    </select>
                </div>
            </Fragment>
        );
    }
}




export default Dropdown;