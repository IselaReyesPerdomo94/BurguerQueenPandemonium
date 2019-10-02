import React from 'react';
import './style.css';

const Button = ({text, client, onClick, className, value}) => {
    return(
        <button className={`button comandas-box ${className}`} onClick={onClick} value={value}>
            <p>{text}</p>
            <p>{client}</p>
        </button>
    )
}

export default Button;