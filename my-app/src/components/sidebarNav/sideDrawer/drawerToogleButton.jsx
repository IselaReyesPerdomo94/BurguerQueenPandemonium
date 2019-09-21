import React, {Component} from 'react';

const DrawerToogleButton = (props) => {
    return(
        <span className="toogle-button">
            <i className="material-icons icons" onClick={props.click}>arrow_back_ios</i>
        </span>

    );
}

export default DrawerToogleButton;