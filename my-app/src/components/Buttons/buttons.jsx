import React from 'react';
import './style.css';

const Button = ({text, client, onClick}) => {
    return(
        <button className="button comandas-box" onClick={onClick}>
            <span>{text}</span>
            <span>{client}</span>
        </button>
    )
}

export default Button;