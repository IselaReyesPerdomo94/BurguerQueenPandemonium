import React, { Component } from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

import './style.css';

const TablaInsumos = (props) => {
    const {info} = props; 
    
    return (
        <ReactTable
            defaultPageSize={10}
            showPagination={false}
            data={info}
            resolveData={data => data.map(row => row)}
            columns={[
                {
                    Header: 'Detalles de insumos',
                    headerClassName: "header-tab2",
                    columns: [
                        {
                            Header: "Categoría",
                            accessor: "categoria"
                        },
                        {
                            Header: "Nombre",
                            accessor: "nombre"
                        },
                        {
                            Header: "Disponible",
                            accessor: "disponible"
                        },
                        {
                            Header: "Necesario por día",
                            accessor: "necesario"
                        },
                        {
                            Header: "Necesidad semanal",
                            accessor: "semanal"
                        }
                    ]
                }
            ]}
        />
    );
};
export default TablaInsumos