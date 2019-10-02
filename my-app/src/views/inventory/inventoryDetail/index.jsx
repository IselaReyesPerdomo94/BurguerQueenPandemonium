import React, { Component } from 'react';
import ReactTable from 'react-table';
import TablaInsumos from '../../../components/tabla-insumos/index';


const InventoryDetail = (props) => {
    const {menu}= props;

    return (
        <Fragment>
            <div className="wrapper">
                {menu}
                <main className="main-inventory">
                <TablaInsumos />
                </main>
            </div>
        </Fragment>
    )
}

export default InventoryDetail