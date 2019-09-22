import React, { Component, Fragment } from 'react';
import Tittle from '../../components/titles/index'
import Userandbranch from '../comandas/UserComandas/index'

class Comandas extends Component {

    render() {
        return (
            <Fragment>
                <main className="main-comandas">
                    <Tittle color="#0288D1" text="Comandas" />
                    <Userandbranch />
                </main>
            </Fragment>
        )
    }

}

export default Comandas;