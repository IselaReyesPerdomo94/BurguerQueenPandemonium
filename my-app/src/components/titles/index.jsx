import React from 'react';
import './style.css';
import TittleText from './text/text'

const Tittle = ({color, text}) => {
    return (
        <header style={{backgroundColor:color}}className="header">
            <TittleText text={text}/>
        </header>
    )
}

export default Tittle;