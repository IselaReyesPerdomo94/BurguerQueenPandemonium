import React from 'react';

const DrawerToogleButton = ({click, open}) => {
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