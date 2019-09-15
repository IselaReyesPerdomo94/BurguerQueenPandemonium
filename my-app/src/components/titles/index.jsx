import React from 'react';
import './style.css';
import TittleText from './text/text'
import TittleIcon from './icon/tittleIcon'

const Tittle = ({color, text, icon}) => {
    return (
        <header style={{backgroundColor:color}}className="header">
            <TittleIcon iconLink={icon} className="icon"/>
            <TittleText text={text}/>
        </header>
    )
}

export default Tittle;