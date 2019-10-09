import React from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';

import './style.css';

const TablaInsumos = (props) => {
    const { info } = props;

    return (
        <div className="table-products-equipment">
        <ReactTable
            defaultPageSize={7}
            data={info}
            resolveData={data => data.map(row => row)}
            columns={[
                {
                    Header: 'Detalles de insumos',
                    headerClassName: "header-tab2",
                    columns: [
                        {
                            headerClassName:"header-categories",
                            Header: "Categoría",
                            accessor: "categoria"
                        },
                        {   
                            headerClassName:"header-categories",
                            Header: "Nombre",
                            accessor: "nombre"
                        },
                        {   
                            headerClassName:"header-categories",
                            Header: "Disponible",
                            accessor: "disponible"
                        },
                        {   
                            headerClassName:"header-categories",
                            Header: "Medida",
                            accessor: "medida"
                        },
                        {   
                            headerClassName:"header-categories",
                            Header: "Necesario por día",
                            accessor: "necesario"
                        },
                        {   
                            headerClassName:"header-categories",
                            Header: "Medida",
                            accessor: "medidaDelDia"
                        },
                        {   
                            headerClassName:"header-categories",
                            Header: "Necesidad por semana",
                            accessor: "semanal"
                        },
                        {   
                            headerClassName:"header-categories",
                            Header: "Medida",
                            accessor: "medidaSemanal"
                        },
                    ]
                }
            ]}
        />
        </div>
    );
};
export default TablaInsumos