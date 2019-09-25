import React, {useState, Fragment} from 'react';
import InputName from '../inputName/index';
import InputEmail from '../inputEmail/index';
import InputMobile from '../inputMobile/index';

const CreateUser = ({handleEmailChange, handleMobileChange, handleNameChange}) => {
    return (
        <Fragment>
            <InputName onChange={handleNameChange}/>
            <InputEmail onChange={handleEmailChange}/>
            <InputMobile onChange={handleMobileChange}/>
        </Fragment>
    )
}

export default CreateUser;