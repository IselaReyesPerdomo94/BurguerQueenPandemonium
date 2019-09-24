import React, {Component, Fragment} from 'react';
import InputName from '../inputName/index';
import InputEmail from '../inputEmail/index';
import InputMobile from '../inputMobile/index';
import Input from '../inputEmpty/index';

const CreateUser = () => {
    return (
        <Fragment>
            <InputName/>
            <InputEmail/>
            <InputMobile/>
        </Fragment>
    )
}

export default CreateUser;