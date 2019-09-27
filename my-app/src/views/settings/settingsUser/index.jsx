import React, { Fragment, useState, useEffect} from 'react';
import {db} from '../../../firebase/index';
import EntryButton from '../../../components/Buttons/EntryButton/index.jsx';
import UserBox from '../../../components/UserBox/userbox.jsx';
import './style.css';

const  UsersTab =({openModal}) => {
    const [userButton, setUserButton] =useState([]);

    const getUsers = () => {
        db.collection('users').onSnapshot((querySnapshot)=> {
            const usersInFirebase = []
            querySnapshot.forEach((doc)=> {
                const userName = doc.data().nombre;
                const email = doc.data().correo;
                const cellphone = doc.data().telefono;
                usersInFirebase.push({userName, email, cellphone})
            })
            setUserButton(usersInFirebase)
        })
    }

    useEffect(() => getUsers(), [] )

        return (
            <Fragment>
                
                <main>
                    <div className="users-wrapper">

                    {userButton.map(user => <UserBox name={user.userName} cellphone={user.cellphone} email={user.email} />)}
                    </div>
                    <div className="button-add">
                        <EntryButton text="Agregar usuarios" className="button-settings" onClick= {openModal}/>
                    </div>
                </main>
            </Fragment>
        )
}

export default UsersTab;

