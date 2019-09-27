import React, { Fragment, useState } from 'react';
import './style.css';

const Dropdown = ({ userBranch, label, option, optionTwo }) => {

    const [firstSelect, setFirstSelect] = ("");

    return (
        <Fragment>
            <label htmlFor="usuarios-select" className="label">{label}</label>
            <div className="caja">
                <select name="usuarios-select">
                    <option defaultValue value="user-branch">{userBranch}</option>
                    <option value="option">{option}</option>
                    <option value="option-two">{optionTwo}</option>
                </select>
            </div>
        </Fragment>
    );

}




export default Dropdown;