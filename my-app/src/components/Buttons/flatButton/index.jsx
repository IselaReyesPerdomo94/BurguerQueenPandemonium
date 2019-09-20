import React from 'react';
import './style.css';
import Button from '@material-ui/core/Button';

const FlatButton = ({text, color, onClick}) => {
    return (
        <Button style={{Color:color}} className="flat-button" onClick={onClick}>
            {text}
        </Button>
    )
}

export default FlatButton;