import React from 'react';
import './menumore.css';

const MenuMore = ({handleEditClick, handleEliminateClick})=> {
    return(
        <menu className="menu-more-box">
            <label onClick={handleEditClick}>
                <i className="material-icons">create</i>
                Editar
            </label>
            <label onClick={handleEliminateClick}>
                <i className="material-icons">delete</i>
                Eliminar
            </label>
        </menu>
    )
}

export default MenuMore