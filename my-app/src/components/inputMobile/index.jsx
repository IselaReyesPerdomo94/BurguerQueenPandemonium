import React from 'react';
import './style.css';
import TextField from '@material-ui/core/TextField';

const InputMobile = ({value, onChange}) => {
  return (
    <TextField
      id="outlined-name-input"
      label="Número de teléfono"
      type="number"
      name="mobile"
      autoComplete="mobile"
      margin="normal"
      variant="outlined"
      className="mobile-input"
      value={value}
      onChange={onChange}
    />
  )
}

export default InputMobile;