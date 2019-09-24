import React from 'react';
import './style.css';
import TextField from '@material-ui/core/TextField';

const InputEmpty = ({text}) => {
  return (
    <TextField
      id="outlined-name-input"
      label={text}
      type="number"
      name="mobile"
      autoComplete="mobile"
      margin="normal"
      variant="outlined"
      className="mobile-input"
    />
  )
}

export default InputEmpty;