import React, {useState} from 'react';
import './userbox.css';
import MenuMore from '../MenuMore/menumore.jsx';

const UserBox = ({name, email, cellphone, onClick, document, setDocumentToErase, setUserToErase,openModalToEraseDoc}) => {
    const [openMenuMore, setOpenMenuMore] = useState(false);

    const handleClickMenuMore = () => {
        setOpenMenuMore(!openMenuMore)
    }

    const handleEliminateClick = () => {

        setUserToErase(name)
        setDocumentToErase(document)
        openModalToEraseDoc()
        console.log('Estas seguro de eliminar a:',document, "?")
    }



    return(
        <div className ="user-box">
            <menu className="more-menu">
                <i className="material-icons icon-user-menu" onClick={handleClickMenuMore}>more_vert</i>
                {
                    openMenuMore&&
                    <MenuMore handleEliminateClick={handleEliminateClick}/>
                }
            </menu> 
            <article className="user-data" document={document}>
                <p className="name-user">{name}</p>
                <p><i className="material-icons">email</i> {email}</p>
                <p><i className="material-icons">local_phone</i> {cellphone}</p>
            </article>

        </div>
    )
}

export default UserBox;