import React, { Component, Fragment } from 'react';
import Tittle from '../../components/titles/index';
import './inventory.css'

class Inventory extends Component {

    render() {
        const {menu}= this.props;
        return (
            <Fragment>
                <div className="wrapper">
                    {menu}
                    <main className="main-inventory">
                        <Tittle color="#512DA8" text="Inventario" />
                    </main>
                </div>
            </Fragment>
        )
    }

}

export default Inventory