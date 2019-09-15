import React from 'react';
import Tittle from '../components/titles/index';
import Sidebar from '../components/sidebarSettings/index';

const Settings = () => {
    return (
       <main>
            <Tittle color = "#303F9F"  text = "Configuración" icon = {<i className="material-icons icon">settings_applications</i>}/>
            <Sidebar className="sidebar"/>
        </main>
    )
}

export default Settings;