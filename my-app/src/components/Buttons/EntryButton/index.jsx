import React from 'react';
import './style.css';
import Button from '@material-ui/core/Button';

const EntryButton = ({text, ...props}) => {
    return (
        <Button variant="contained" className='button-modal send-button' {...props} >{text}</Button>
    )
}

export default EntryButton;