import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import Hamburguers from './hamburguers/hamburguers';

import '../style.css';

const Pedido = (props) => {
    const { changeVisibility, visible, tableSelect } = props;
    console.log(tableSelect);


    const displayTabsMenu = (
        <Tabs>
            <TabList>
                <Tab>Hamburguesas</Tab>
                <Tab>Hot Dogs</Tab>
                <Tab>Pizzas</Tab>
                <Tab>Ensaladas</Tab>
                <Tab>Extras</Tab>
                <Tab>Malteadas</Tab>
                <Tab>Sodas</Tab>
                <Tab>Postres</Tab>
            </TabList>
            <TabPanel>
                <Hamburguers changeVisibility={changeVisibility} />
            </TabPanel>
            <TabPanel>
                <h2>Hot dogs</h2>
            </TabPanel>
            <TabPanel>
                <h2>Pizzas</h2>
            </TabPanel>
            <TabPanel>
                <h2>Ensaladas</h2>
            </TabPanel>
            <TabPanel>
                <h2>Extras</h2>
            </TabPanel>
            <TabPanel>
                <h2>Malteadas</h2>
            </TabPanel>
            <TabPanel>
                <h2>Sodas</h2>
            </TabPanel>
            <TabPanel>
                <h2>Postres</h2>
            </TabPanel>
        </Tabs>
    )
    return (
        // <div className={`${visible ? "visible" : "no-visible"}`}>
        //     {displayTabsMenu}
        // </div>
        <main className={`${visible ? 'visible' : 'no-visible'}`}>
            <label className="table-text">{`Mesa ${tableSelect.number}/ ${tableSelect.name}`}</label>
            {displayTabsMenu}
        </main>
    );

}

export default Pedido;