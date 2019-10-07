import React from 'react';
import "./style.css";
import TextField from '@material-ui/core/TextField';

const PasswordInput = ({labelText, value, onChange}) => {
    return (
    <TextField id="outlined-password-input" label={labelText} type="password" autoComplete="current-password" margin="normal" variant="outlined" className="password-input" value={value} onChange={onChange}/>
    )
}

export default PasswordInput;