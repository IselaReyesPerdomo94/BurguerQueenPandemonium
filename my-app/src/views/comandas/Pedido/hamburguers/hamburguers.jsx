import React, { Fragment, useState } from 'react';
import './hamburguers.css';
import Button from '../../../../components/Buttons/buttons';
import EntryButton from '../../../../components/Buttons/EntryButton/index';
import FlatButton from '../../../../components/Buttons/flatButton/index';
import data from '../../../../Data/data.json';
import ProductList from '../ProductList/ProductList';

const Hamburguers = ({ changeVisibility, visible, bill, addItemToBill, saveAndRestOrder}) => {
    
    const menuHamburguer = data.filter(dish => dish.type === "hamburguesas");

    return (
        <Fragment >
            <main className={`hamburguer-main`} >

                <div className="hamburguers-menu">
                    {
                        menuHamburguer.map((hamburguer, index) => {

                            return <Button
                        id={index} 
                        text={hamburguer.name} 
                        price={hamburguer.priceClassic}
                        onClick={(e)=> addItemToBill(e.target,hamburguer)}
                        />
                        })
                    }
                </div>
                <div className="count">
                    <div className="bill">
                        <h2>Cuenta</h2>
                        <div className="foodAccount">
                        {
                            bill.map((product)=> {
                                return <ProductList 
                                amount={1}
                                itemName={product.hamburguerName}
                                itemPrice={product.price}
                                />
                            })
                        }
                        </div>
                        <div className="total">
                            <p>Total: <span>$</span></p>
                        </div>
                    </div>
                    <div className="comandas-button">
                        <EntryButton text="PAGAR" className="button-nocolor" />
                        <EntryButton text="IMPRIMIR" className="button-nocolor" />
                        <EntryButton text="GUARDAR" onClick={saveAndRestOrder} />
                    </div>
                    <FlatButton text="REGRESAR" onClick={() => changeVisibility(false)} />
                </div>
            </main>

        </Fragment>
    )
}

export default Hamburguers;