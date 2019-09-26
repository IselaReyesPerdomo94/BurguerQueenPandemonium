import React, { Component } from 'react';
import './style.css';
import FlatButton from '../Buttons/flatButton/index';

class CleanModal extends Component {
    
    render() {
       
        const { open, close, content, title, footer} = this.props;
        console.log(typeof open)
        const classes = `full ${open ? "open" : "closed"}`
        return (

            <div className={classes}>
                <div className="modal">
                    <div className="modal-title">
                        <h3>{title}</h3>
                    </div>
                    <div className="modal-input">
                        {content}
                    </div>
                    <div className="modal-footer-clean">
                        {footer}
                        <FlatButton text = "CANCELAR" onClick = {close}/>
                    </div>
                </div>
            </div>
        )
    }


}

export default CleanModal;


