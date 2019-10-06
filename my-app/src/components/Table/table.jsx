import React, { Component} from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import './table.css'
// import color from '@material-ui/core/colors/deepOrange';

class TableView extends Component {
    
    render() {
      const {headerText, lowSupplies} = this.props 
        return (
            <div className="table-products">
        <ReactTable
          defaultPageSize={10}
          showPagination={true}
          noDataText={false}
          data={lowSupplies}
          resolveData={data => data.map(row => row)}
          columns={[
            {
              Header: headerText,
              headerClassName:"header-tab",
              columns: [
                {
                  Header: "Producto",
                  accessor: "name"
                },
                {
                  Header: "Disponible",
                  id: "disponible",
                  accessor: "disponible"
                }
              ]
            }
          ]}
        />
        </div>
        )
    }
}

export default TableView