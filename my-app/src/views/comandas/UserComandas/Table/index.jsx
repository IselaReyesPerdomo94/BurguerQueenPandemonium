import React from 'react'
import Button from '../../../../components/Buttons/buttons';

const Table = (props) => {

    const { numberTable, nameTable, changeVisibility, visible, dato, getDataTable } = props;
    return (

        <Button
            id={dato}
            number={dato}
            onClick={(e) => {
                getDataTable(e.currentTarget)
                changeVisibility(true);
            }}
            text={`Mesa ${numberTable}`}
            client={nameTable}
            className={`${visible ? "no-visible" : "visible"}`}
        />
    )
}

export default Table;