import React from 'react';
import './style.css';
import Button from '@material-ui/core/Button';

const EntryButton = ({text}) => {
    return (
        <Button variant="contained" className='button-modal'>{text}</Button>
    )
}

export default EntryButton;