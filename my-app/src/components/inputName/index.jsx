import React from 'react';
import "./style.css";
import TextField from '@material-ui/core/TextField';

const InputName = () => {
    return (
        <TextField id="standard-name" label="Nombre" className={classes.textField} value={values.name} onChange={handleChange('name')}  margin="normal"/>
    )
}

export default InputName;