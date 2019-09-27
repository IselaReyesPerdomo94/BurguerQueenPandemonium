import React, {Fragment} from 'react';
import InputName from '../inputName/index';
import InputEmail from '../inputEmail/index';
import InputMobile from '../inputMobile/index';
import TextErrors from '../textErrors/index';

const CreateUser = ({handleEmailChange, handleMobileChange, handleNameChange, alert, error, success, name, email, mobile}) => {
    return (
        <Fragment>
            <TextErrors textColor="blue" text={alert}/>
            <InputName onChange={handleNameChange} value={name}/>
            <InputEmail onChange={handleEmailChange} value={email}/>
            <InputMobile onChange={handleMobileChange} value={mobile}/>
            <TextErrors textColor="red" text={error}/>
            <TextErrors textColor="green" text={success}/>
        </Fragment>
    )
}


export default CreateUser;