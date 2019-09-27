import React, {useState, Fragment} from 'react';
import './userbox.css';
import MenuMore from '../MenuMore/menumore.jsx';
import EntryButton from '../Buttons/EntryButton/index';
import FlatButton from '../Buttons/flatButton/index';

const UserBox = ({name, email, cellphone, onClick, document, setDocumentToErase, setUserToErase,openModalToEraseDoc}) => {
    const [openMenuMore, setOpenMenuMore] = useState(false);
    const [saveButton, setSaveButton] = useState(false);
   
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

    const handleEditClick = () => {
        setSaveButton(true);
        closeMenuMore();
        console.log('Editar este usuario');
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
                <p className="name-user" contentEditable={saveButton} >
                    {name}
                </p>
                    <i className="material-icons">email</i> 
                <p contentEditable={saveButton}>
                    {email}
                </p>
                <i className="material-icons">local_phone</i> 
                <p contentEditable={saveButton}>
                    {cellphone}
                </p>
            </article>
            {
                    saveButton&&
                    <Fragment>
                        <FlatButton color="blue" text="CANCELAR" onClick={handleCancelButton}/>
                        <EntryButton text="GUARDAR" className="save-user-button"/>
                    </Fragment>
                }

        </div>
    )
}

export default UserBox;