import React from 'react';
import './style.css';

const Button = ({ text, client, onClick, className, number }) => {
    return (
        <button className={`button comandas-box ${className}`} id={`${number}`} onClick={onClick}>
            <p>{text}</p>
            <p>{client}</p>
        </button>
    )
}

export default Button;