import React from 'react';
import "./style.css";
import { Link } from "react-router-dom";
import PasswordInput from '../password/index.jsx';
import EntryButton from '../Buttons/EntryButton';
import FlatButton from '../Buttons/flatButton/index.jsx';

function Modal({ open, close }) {
  const classes = `overlay ${open ? "open" : "closed"}`
  return (
    <div className={classes}>
      <div className="modal">
        <div className="modal-title">
          <h3>Clave de seguridad</h3>
        </div>
        <div className="modal-input">
          <PasswordInput labelText="Ingresa tu clave de seguridad"/>
        </div>
        <div className="modal-footer">
          <Link to="/">
            <FlatButton text="CANCELAR" onClick={close}/> 
          </Link>
          <EntryButton onClick={close} text="Entrar"/>
        </div>
      </div>
    </div>
  )
}


export default Modal