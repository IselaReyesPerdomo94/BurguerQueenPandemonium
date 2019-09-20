import React, { Component, Fragment } from 'react';
import './style.css';




class Dropdown extends Component {

    render() {
        return (
            <Fragment>
                <div className="select-uno">
                    <select name="opciones">
                        <option value="uno">Uno</option>
                        <option value="dos">Dos</option>
                    </select>
                    <select name="opciones">
                        <option value="tres">tres</option>
                        <option value="cuatro">cuatro</option>
                    </select>
                </div>
            </Fragment>
        );
    }
}




export default Dropdown;