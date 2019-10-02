import React, { Fragment } from 'react';
import Hamburguers from '../Pedido/hamburguers/hamburguers';
import Table from './Table';

import "react-tabs/style/react-tabs.css";
import './style.css';

const Userandbranch = (props) => {
    const { tables, visible, changeVisibility, getDataTable } = props;

    return (
        <Fragment>
            {
                tables.map((client, index) => {
                    return (<Table
                        numberTable={client.number}
                        nameTable={client.name}
                        changeVisibility={changeVisibility}
                        visible={visible}
                        dato={index}
                        getDataTable={getDataTable}
                    />)
                }
                )
            }
            {/* <main className={`${visible ? 'visible' : 'no-visible'}`}>
                <label className="table-text">{`Mesa ${numberTable}/ ${nameTable}`}</label>
                {displayTabsMenu}
            </main> */}
        </Fragment>
    )
}

export default Userandbranch;