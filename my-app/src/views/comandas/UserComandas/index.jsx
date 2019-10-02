import React, { Fragment } from 'react';
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
        </Fragment>
    )
}

export default Userandbranch;