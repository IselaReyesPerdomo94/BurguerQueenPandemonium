import React from 'react';
import "./style.css";
import TextField from '@material-ui/core/TextField';

const InputName = () => {
    return (
        <TextField
        id="outlined-name-input"
        label="Nombre"
        type="text"
        name="name"
        autoComplete="name"
        margin="normal"
        variant="outlined"
        className="name-input"
      />
    )
}

export default InputName;


// const InputName = () => {
//     return (
//         <TextField
//         id="standard-name" 
//         label="Nombre" 
//         className={classes.textField} 
//         value={values.name} 
//         onChange={handleChange('name')}
//         margin="normal"/>
//     )
// }