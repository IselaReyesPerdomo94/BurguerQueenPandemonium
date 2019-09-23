import React, {Component} from 'react';

const DrawerToogleButton = ({click, open}) => {
    console.log('Open?', open)
    return(
        <span className="toogle-button" onClick={click}>
            {
                open ? 
                    <i className="material-icons icons">chevron_left</i>
                 : 
                    <i className="material-icons icons">chevron_right</i>
            }
            
        </span>

    );
}

export default DrawerToogleButton;