import React from 'react';
import './style.css';

const Button = ({ text, client, onClick, className, number, price }) => {
    return (
        <button className={`button comandas-box ${className}`} 
        id={`${number}`} onClick={onClick} price={price}>
            <p>{text}</p>
            <p>{client}</p>
        </button>
    )
}

export default Button;