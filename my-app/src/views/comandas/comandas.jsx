import React, { Component, Fragment } from 'react';
import Tittle from '../../components/titles/index'
import User from '../comandas/UserComandas/index'

class Comandas extends Component {

    render() {
        return (
            <Fragment>
                <main className="main-comandas">
                    <Tittle color="#0288D1" text="Comandas" />
                    <User />
                </main>
            </Fragment>
        )
    }

}

export default Comandas;