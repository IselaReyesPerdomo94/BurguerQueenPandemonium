import React, { Fragment} from 'react';
import './style.css';

const Dropdown = ({ options, optionDefault, titulo, onChange }) => {
    return (
        <Fragment>
            <label className="label">{titulo}</label>
            <div className="drop-box">
            <div className="caja">
                <select name="Usuarios" onChange={onChange}>
                    <option defaultValue value="user">{optionDefault}</option>
                    {
                        options
                    }
                </select>
            </div>
            </div>
        </Fragment>
    );
}

export default Dropdown;