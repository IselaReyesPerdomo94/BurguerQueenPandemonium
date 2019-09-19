import React from 'react';
import "./style.css";
import TextField from '@material-ui/core/TextField';

const InputEmail = () => {
    return (
        <TextField
        id="outlined-email-input"
        label="Correo electrónico"
        type="email"
        name="email"
        autoComplete="email"
        margin="normal"
        variant="outlined"
        className="email-input"
      />
    )
}

export default InputEmail;