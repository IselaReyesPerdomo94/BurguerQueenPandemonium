import React from 'react';
import EntryButton from './../Buttons/EntryButton/index.jsx';
import './style.css';

const Support = ({openModal}) => {

    
    return (
        <div className="button-container">
            <EntryButton className="button-support" onClick={openModal}text=" Cambiar clave de seguridad" />
        </div>
    )
};


export default Support;