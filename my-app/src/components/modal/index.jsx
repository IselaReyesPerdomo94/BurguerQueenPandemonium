import React from 'react';
import "./style.css";
import { Link } from "react-router-dom";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
          <TextField id="outlined-password-input" label="Contraseña" className={classes.textField} type="password" autoComplete="current-password" margin="normal" variant="outlined" />
          <Button variant="contained" className={`${classes.button} button-modal`} onClick={close}>Entrar</Button>
        </div>
      </div>
    </div>
  )
}


export default Modal