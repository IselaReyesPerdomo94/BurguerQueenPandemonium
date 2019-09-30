import React, { Component, Fragment } from 'react';
import Tittle from '../../components/titles/index';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";

import './inventory.css'

const Inventory = () => { 
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

export default Inventory