import React, { Component } from 'react';
import ReactTable from 'react-table';
import './style.css';

const TablaInsumos = () => {
    return (
        <ReactTable
            defaultPageSize={10}
            showPagination={false}
            noDataText={false}
            columns={[
                {
                    Header: 'Detalles de insumos',
                    headerClassName: "header-tab2",
                    columns: [
                        {
                            Header: "Producción",
                            accessor: ""
                        },
                        {
                            Header: "Nombre",
                            accessor: ""
                        },
                        {
                            Header: "Disponible",
                            accessor: ""
                        },
                        {
                            Header: "Necesario",
                            accessor: ""
                        },
                        {
                            Header: "Necesidad semanal",
                            accessor: ""
                        }
                    ]
                }
            ]}
        />
    );
};
export default TablaInsumos