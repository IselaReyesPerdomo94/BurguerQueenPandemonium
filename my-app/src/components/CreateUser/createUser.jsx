import React, {useState, Fragment} from 'react';
import InputName from '../inputName/index';
import InputEmail from '../inputEmail/index';
import InputMobile from '../inputMobile/index';
import TextErrors from '../textErrors/index';

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
}

export default CreateUser;