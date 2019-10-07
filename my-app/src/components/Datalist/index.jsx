import React, { Fragment } from 'react';
import './style.css';


const Datalist = (props) => {

    const { placeholder,
        name,
        onChange,
        optionDefault,
        list,
        id,
        options } = props

    return (
        <Fragment>
            <input list={list} id={id} name={name} placeholder={placeholder} className="input" onChange={onChange} />

            <datalist id={list} >
                <option defaultValue value="list">{optionDefault}</option>
                {
                    options
                }

            </datalist>
        </Fragment >
    );

}


export default Datalist;