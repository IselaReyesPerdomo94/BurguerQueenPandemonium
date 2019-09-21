import React, { Component } from 'react';
import "./style.css";
import { Link } from "react-router-dom";
import PasswordInput from '../password/index.jsx';
import EntryButton from '../Buttons/EntryButton';
import FlatButton from '../Buttons/flatButton/index.jsx';
import { db, firebaseApp } from '../../firebase/index';

class Modal extends Component {
  constructor(props){
  super(props)
  this.state = {pin: ""}
  this.handlePinChange = this.handlePinChange.bind(this);
  this.handlePinFromFirebase = this.handlePinFromFirebase.bind(this);
  }

  handlePinChange(e) {
    const { value } = e.target;
    this.setState({ pin: value });
  }

  handlePinFromFirebase(e){
    db.collection("clave").doc('7zSrA5mnA7kqA32wuyxx').get().then((doc) => {
      const pinFirebase = doc.data().pin
      return pinFirebase
  }).then(pinFirebase => {
      if(pinFirebase == this.state.pin){
        
       console.log('son iguales')
      }else{
        console.error('No son iguales')
      }
  })
  ;

  }

render(){
  const {pin} = this.state;
  const {open, close} = this.props;
  const classes = `overlay ${open ? "open" : "closed"}`;
  console.log(pin);
  return (
    <div className={classes}>
      <div className="modal">
        <div className="modal-title">
          <h3>Clave de seguridad</h3>
        </div>
        <div className="modal-input">
          <PasswordInput labelText="Ingresa tu clave de seguridad" value={pin} onChange={this.handlePinChange}/>
        </div>
        <div className="modal-footer">
          <Link to="/">
            <FlatButton text="CANCELAR" onClick={close}/> 
          </Link>
          <EntryButton onClick={()=>{
            this.handlePinFromFirebase()
          }} text="Entrar"/>
        </div>
      </div>
    </div>
  )
}

  
}


export default Modal