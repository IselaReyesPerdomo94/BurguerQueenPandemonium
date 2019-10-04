import React from 'react';
import CleanInput from '../CleanInput/index'
import './style.css';


const Add = (props) => {
    const { name, value1, value2, label, onChange, value } = props;
    return (
        <div className="add-box">
            <CleanInput
                label={label}
                type="text"
                onChange={onChange}
                value={value} />
            <div className="radios">
                <input type="radio" name={name} id={value1} value={value1} />
                <label for={value1}>{value1}</label>
                <input type="radio" name={name} id={value2} value={value2} />
                <label for={value2}>{value2}</label>
            </div>
        </div>
    )
}

export default Add;
