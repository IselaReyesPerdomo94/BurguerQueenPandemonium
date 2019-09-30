import React from 'react';
import './style.css';

const TextErrors = ({text, textColor}) => {
    return(
        <p className="text-errors" style={{color: textColor}}>{text}</p>
    )
}

export default TextErrors;