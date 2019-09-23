import React, { Component, Fragment } from 'react';
import Tittle from '../../components/titles/index';
import Userandbranch from './UserComandas/index.jsx';
import './style.css';

class Comandas extends Component {

    render() {
        const {menu, handleSide}= this.props;
        return (
            <Fragment>
                <div className="wrapper">
                     {menu}
                    <main className="main-comandas">
                        <Tittle color="#0288D1" text="Comandas" />
                        <Userandbranch />
                    </main>
                </div>
            </Fragment>
        )
    }

}

export default Comandas;