import React from 'react';
import './menumore.css';

const MenuMore = ()=> {
    return(
        <menu className="menu-more-box">
            <label>
                <i className="material-icons">create</i>
                Editar
            </label>
            <label>
                <i className="material-icons">delete</i>
                Eliminar
            </label>
        </menu>
    )
}

export default MenuMore