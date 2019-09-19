import React from 'react';
import './style.css';
import Button from '@material-ui/core/Button';

const FlatButton = ({text}) => {
    return (
        <Button color="primary">
            {text}
        </Button>
    )
}

export default FlatButton;