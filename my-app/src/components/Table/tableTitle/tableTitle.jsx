import React from 'react';
import './tableTitle.css';

const TableTitle = ({color, text}) => {
    return (
        <header style={{backgroundColor:color}}className="header-tab">
            <h3 className="title-header">{text}</h3>
        </header>
    )
}

export default TableTitle;