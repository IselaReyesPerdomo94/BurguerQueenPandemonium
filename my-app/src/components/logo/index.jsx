import React from 'react';
import logo from '../../img/pandmonium.png';
import './style.css';

class Logo extends React.Component{
    render(){
      return (
        <figure>
            <img src={logo} alt="Pan D Monium" className="logo-PandMonium"/>
        </figure>
          )  
    }
};


export default Logo;