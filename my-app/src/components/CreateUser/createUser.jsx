import React, {useState, Fragment} from 'react';
import InputName from '../inputName/index';
import InputEmail from '../inputEmail/index';
import InputMobile from '../inputMobile/index';

const CreateUser = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handleMobileChange = (e) => {
        setMobile(e.target.value)
    }
    
    return (
        <Fragment>
            <InputName onChange={handleNameChange}/>
            <InputEmail onChange={handleEmailChange}/>
            <InputMobile onChange={handleMobileChange}/>
        </Fragment>
    )
}

export default CreateUser;