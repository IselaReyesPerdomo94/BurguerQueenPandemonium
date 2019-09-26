import React, { Fragment, useState, useEffect} from 'react';
import {db} from '../../../firebase/index';
import EntryButton from '../../../components/Buttons/EntryButton/index.jsx';
import Button from '../../../components/Buttons/buttons';
import './style.css';

const  UsersTab =({openModal}) => {
    const [userButton, setUserButton] =useState([]);

    const getUsers = () => {
        db.collection('users').onSnapshot((querySnapshot)=> {
            const usersInFirebase = []
            querySnapshot.forEach((doc)=> {
                const name = doc.data().nombre;
                usersInFirebase.push(name)
            })
            setUserButton(usersInFirebase)
        })
    }

    useEffect(() => getUsers(), [] )

        return (
            <Fragment>
                
                <main>
                    <div className="users-wrapper">

                    {userButton.map(user => <Button text={user} />)}
                    </div>
                    <div className="button-add">
                        <EntryButton text="Agregar usuarios" className="button-settings" onClick= {openModal}/>
                    </div>
                </main>
            </Fragment>
        )
}

export default UsersTab;

