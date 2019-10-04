import React from 'react';
import CleanInput from '../CleanInput/index'
import './style.css';


const Add = (props) => {
    const { name, value1, value2, label, onChange, value, onSubmit } = props;
    return (
        <div className="add-box">
        <form name="form-data" onSubmit={onSubmit}>
            <CleanInput
                label={label}
                type="text"
                onChange={onChange}
                value={value}
                variant="outlined"
                className="input-add"
                name="name" 
                />
            <div className="radios">
                <input type="radio" name={name} id={value1} value={value1} />
                <label htmlFor={value1}>{value1}</label>
                <input type="radio" name={name} id={value2} value={value2} />
                <label htmlFor={value2}>{value2}</label>
            </div>
            <input 
                        type="submit" 
                        value="Agregar" 
                        className="btn-add-form"
                    />
        </form>
        </div>
    )
}

export default Add;
