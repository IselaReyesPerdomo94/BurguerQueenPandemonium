import React from 'react';
import "./style.css";
import TextField from '@material-ui/core/TextField';

const PasswordInput = () => {
    return (
    <TextField id="outlined-password-input" label="Contraseña" type="password" autoComplete="current-password" margin="normal" variant="outlined" />
    )
}

export default PasswordInput;