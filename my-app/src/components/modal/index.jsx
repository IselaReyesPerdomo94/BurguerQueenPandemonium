import React from 'react';
import "./style.css";
import { Link } from "react-router-dom";
import PasswordInput from '../password/index.jsx';
import EntryButton from '../Buttons/EntryButton';

function Modal({ open, close }) {
  const classes = `overlay ${open ? "open" : "closed"}`
  return (
    <div className={classes}>
      <div className="modal">
        <div className="modal-title">
          <Link to="/">
            <input type="button" className="close-modal-button" value="X" onClick={close} />
          </Link>
          <h3>Introduce tu PIN</h3>
        </div>
        <div className="modal-input">
          <PasswordInput/>
          <EntryButton onClick={close} text="Entrar"/>
        </div>
      </div>
    </div>
  )
}


export default Modal