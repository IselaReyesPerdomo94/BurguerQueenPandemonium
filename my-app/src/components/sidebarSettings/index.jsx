import React from 'react'
import Button from '../Buttons/buttons';
import './style.css'

const Sidebar = () => {
    return(
        <sidebar className="sidebarSettings">
            <Button text="Usuarios"/>
            <Button text="Menú"/>
            <Button text="Proveedores"/>
            <Button text="Cambiar PIN"/>
        </sidebar>
    )
}

export default Sidebar;
