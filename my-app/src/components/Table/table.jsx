import React, { Component} from 'react';
import ReactTable from 'react-table';
import 'react-table/react-table.css';
import './table.css'
// import color from '@material-ui/core/colors/deepOrange';

class TableView extends Component {
    
    render() {
      const {headerText} = this.props 
        return (
            <div className="table-products">
        <ReactTable
          defaultPageSize={10}
          showPagination={false}
          noDataText={false}
          columns={[
            {
              Header: headerText,
              headerClassName:"header-tab",
              columns: [
                {
                  Header: "Categoría",
                  accessor: ""
                },
                {
                  Header: "Disponible",
                  id: "disponible",
                  accessor: ""
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