import React, { Fragment } from 'react';

import './hamburguers.css';
import Button from '../../../../components/Buttons/buttons';
import EntryButton from '../../../../components/Buttons/EntryButton/index';
import FlatButton from '../../../../components/Buttons/flatButton/index';

const Hamburguers = ({ changeVisibility, visible }) => {
    const menuHamburguer = ['Malicia Sencilla',
        'Malicia Combo',
        'Soberbia sencilla',
        'Soberbia Combo',
        'Gula Sencilla',
        'Gula Combo',
        'Alma en pena Sencilla',
        'Alma en pena Combo']



    return (
        <Fragment >
            <main className={`hamburguer-main`} >

                <div className="hamburguers-menu">
                    {
                        menuHamburguer.map(hamburguer => <Button text={hamburguer} />)
                    }
                </div>
                <div className="count">
                    <div className="bill">
                        <h2>Cuenta</h2>
                        <div className="foodAccount">
                            {print}
                        </div>
                        <div className="total">
                            <p>Total: <span>$</span></p>
                        </div>
                    </div>
                    <div className="comandas-button">
                        <EntryButton text="PAGAR" className="button-nocolor" />
                        <EntryButton text="IMPRIMIR" className="button-nocolor" />
                        <EntryButton text="GUARDAR" />
                    </div>
                    <FlatButton text="REGRESAR" onClick={() => changeVisibility(false)} />
                </div>
            </main>

        </Fragment>
    )
}

export default Hamburguers;