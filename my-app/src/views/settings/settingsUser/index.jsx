import React, { Fragment, useState} from 'react';
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

    getUsers()

        return (
            <Fragment>
                
                <main>
                    <h2>No se han agregado usuarios</h2>
                    {userButton.map(user => <Button text={user} />)}
                    <div className="button-add">
                        <EntryButton text="Agregar usuarios" className="button-settings" onClick= {openModal}/>
                    </div>
                </main>
            </Fragment>
        )
}

export default UsersTab;

