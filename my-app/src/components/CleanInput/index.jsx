import React, { Component } from 'react';
import './style.css';
import TextField from '@material-ui/core/TextField';

class Input extends Component {
    render(){
        const {id, label, type, name, autoComplete, margin, variant, className,value,onChange} = this.props;
        return(
            <TextField
                id={id}
                label={label}
                type={type}
                name={name}
                autoComplete={autoComplete}
                margin={margin}
                variant={variant}
                className={className}
                value={value}
                onChange={onChange}
            />
        )
    }
}

export default Input;