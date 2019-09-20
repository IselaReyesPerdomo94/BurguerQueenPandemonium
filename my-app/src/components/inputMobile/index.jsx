import React from 'react';
import "./style.css";
import TextField from '@material-ui/core/TextField';

const InputMobile = () => {
    return (
        <TextField
        id="outlined-name-input"
        label="No. de Celular"
        type="number"
        name="mobile"
        autoComplete="mobile"
        margin="normal"
        variant="outlined"
        className="mobile-input"
      />
    )
}

export default InputMobile;