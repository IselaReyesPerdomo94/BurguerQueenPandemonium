import React, { Fragment} from 'react';
import Button from '../../../components/Buttons/buttons';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Hamburguers from './hamburguers/hamburguers';

import "react-tabs/style/react-tabs.css";
import './style.css';

const Userandbranch = (props) => {
    const {numberTable, nameTable, changeVisibility, visible} = props;
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
                <Hamburguers changeVisibility={changeVisibility}/>
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

    console.log("visible?", visible)
    return (
        <Fragment> 
                <Button onClick={() =>{
                        changeVisibility(true);
                    }    
                } text={`Mesa ${numberTable}`} client={nameTable} className={`${visible ? "no-visible": "visible"}`}/>
            <main className={`${visible ? 'visible' : 'no-visible'}`}>
            <label className="table-text">{`Mesa ${numberTable}/ ${nameTable}`}</label>
                {displayTabsMenu}
            </main>
        </Fragment>
    )
}

export default Userandbranch;