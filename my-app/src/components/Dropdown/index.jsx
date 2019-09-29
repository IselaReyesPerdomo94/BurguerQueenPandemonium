import React, { Component, Fragment, useState } from 'react';
import './style.css';

const Dropdown = ({options, optionDefault, titulo}) => {
    return (
        <Fragment>
          <label className = "label">{titulo}</label>
            <div className = "caja">
            <select name="Usuarios">
                <option defaultValue value="user">{optionDefault}</option>
                {
                    options
                }
            </select>
            </div>
        </Fragment>
    );
}

export default Dropdown;