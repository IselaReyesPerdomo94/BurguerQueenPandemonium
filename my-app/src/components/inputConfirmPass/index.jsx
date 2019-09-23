import React from 'react';
import "./style.css";
import TextField from '@material-ui/core/TextField';

const InputConfirmPass = () => {
    return (
        <TextField
        id="outlined-confirm-pass-input"
        label="Confirma tu contraseña"
        type="password" 
        autoComplete="current-password" 
        margin="normal" 
        variant="outlined" 
        className="confirm-pass-input"/>
    )
}

export default InputConfirmPass;