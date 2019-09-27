import React from 'react';
import './userbox.css'

const UserBox = ({name, email, cellphone}) => {
    return(
        <div className ="user-box">
            <menu className="more-menu">
                <i className="material-icons icon-user-menu">more_vert</i>
            </menu>    
            <article className="user-data">
                <p className="name-user">{name}</p>
                <p><i className="material-icons">email</i> {email}</p>
                <p><i className="material-icons">local_phone</i> {cellphone}</p>
            </article>

        </div>
    )
}

export default UserBox;