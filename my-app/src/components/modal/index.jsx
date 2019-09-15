import React from 'react';
import "./style.css"

function Modal({open, close}) {
  const classes =  `overlay ${open ? "open": "closed"}`
  return (
    <div className={classes}>
      <div className="modal">YA QUEDO EL MODAL</div>
      <input type="button" className="close-modal-button" onClick={close}/>
    </div>
  )
}


export default Modal