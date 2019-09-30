import React, { Component, Fragment } from 'react';
import Tittle from '../../components/titles/index';
import './cortedecajas.css';
import TableView from '../../components/Table/table';

class CorteCaja extends Component {

    render() {
        const {menu}= this.props;
        return (
            <Fragment>
                <div className="wrapper">
                    {menu}
                    <main className="main-corte-caja">
                        <Tittle color="#0097A7" text="Corte de caja" />
                    </main>
                </div>
            </Fragment>
        )
    }
}



export default CorteCaja;