import React from 'react';
import "./style.css";
import TextField from '@material-ui/core/TextField';

const InputEmail = ({value, onChange}) => {
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
        value={value}
        onChange={onChange}
      />
    )
}

export default InputEmail;