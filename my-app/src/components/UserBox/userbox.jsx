import React, {useState} from 'react';
import './userbox.css';
import MenuMore from '../MenuMore/menumore.jsx';
import EntryButton from '../Buttons/EntryButton/index';
import FlatButton from '../Buttons/flatButton/index';
import {db} from '../../firebase/index';

const UserBox = ({name, email, cellphone, onClick, document, setDocumentToErase, setUserToErase,openModalToEraseDoc}) => {
    const [openMenuMore, setOpenMenuMore] = useState(false);
    const [saveButton, setSaveButton] = useState(false);
    const [boxName, setBoxName] = useState(name);
    const [boxEmail, setBoxEmail] = useState(email);
    const [boxCellphone, setBoxCellphone] = useState(cellphone);

    const closeMenuMore = () => {
        setOpenMenuMore(false);
    }

    const handleClickMenuMore = () => {
        setOpenMenuMore(!openMenuMore);
    }

    const handleEliminateClick = () => {
        setUserToErase(name);
        setDocumentToErase(document);
        openModalToEraseDoc();
    }

    const handleChangeName = (e) => {
        setBoxName(e.target.value)
    }

     const handleChangeEmail = (e) => {
        setBoxEmail(e.target.value)
    }

     const handleChangeCellphone = (e) => {
        setBoxCellphone(e.target.value)
    }

    const updateUserInfoInFirebase = () => {
        console.log(document, boxName, boxEmail, boxCellphone)
        db.collection('users').doc(document).update({
            nombre: boxName,
            correo: boxEmail,
            telefono: boxCellphone
        }).then(()=>{
            console.log('Se cambio el documento')
        }).then(()=> {
            setSaveButton(false)
        }).catch(()=> {
            console.log('Parece que hubo un error')
        })
    }

    const handleEditClick = () => {
        setSaveButton(true);
        closeMenuMore();
    }

    const handleCancelButton = () => {
        setSaveButton(false)
    }

    return(
        <div className ="user-box">
            <menu className="more-menu">
                <i 
                className="material-icons icon-user-menu" 
                onClick={handleClickMenuMore}>
                more_vert
                </i>
                {
                    openMenuMore&&
                    <MenuMore 
                    handleEliminateClick={handleEliminateClick} 
                    handleEditClick={handleEditClick}/>
                }
            </menu> 
            <article className="user-data" 
                document={document}>
                {
                    saveButton ? (
                        <input value={boxName} onChange={handleChangeName} className="name-user"/>
                    ) : (
                        <p className="name-user">{name}</p>
                    )
                }

                <div className="edit-options-buttons">
                    <i className="material-icons">email</i> 
                    {
                    saveButton ? (
                        <input value={boxEmail} onChange={handleChangeEmail} className="user-info"/>
                    ) : (
                        <p className="user-info">{boxEmail}</p>
                    )
                }
                </div>
                <div className="edit-options-buttons">
                <i className="material-icons">local_phone</i> 
                    {
                    saveButton ? (
                        <input value={boxCellphone} onChange={handleChangeCellphone} className="user-info"/>
                    ) : (
                        <p className="user-info">{boxCellphone}</p>
                    )
                }
                </div>
            </article>
                {
                    saveButton&&
                    <div className="edit-options-buttons">
                        <FlatButton color="blue" text="CANCELAR" onClick={handleCancelButton}/>
                        <EntryButton text="GUARDAR" className="save-user-button" onClick={updateUserInfoInFirebase}/>
                    </div>
                }

        </div>
    )
}

export default UserBox;