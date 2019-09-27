import React from 'react';
import './style.css';

const Button = ({text, client}) => {
    return(
        <button className="button comandas-box">
            <span>{text}</span>
            <span>{client}</span>
        </button>
    )
}

export default Button;