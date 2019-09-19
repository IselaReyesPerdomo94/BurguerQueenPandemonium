import React from 'react';
import './style.css';
import Button from '@material-ui/core/Button';

const FlatButton = ({text, color}) => {
    return (
        <Button style={{Color:color}} className="flat-button">
            {text}
        </Button>
    )
}

export default FlatButton;