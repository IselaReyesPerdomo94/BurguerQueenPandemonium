import React, { Fragment, useState, useEffect} from 'react';
import {db} from '../../../firebase/index';
import EntryButton from '../../../components/Buttons/EntryButton/index.jsx';
import UserBox from '../../../components/UserBox/userbox.jsx';
import ModalClean from '../../../components/cleanmodal/index.jsx';
import './style.css';

const  UsersTab =({openModal}) => {
    const [userBox, setUserBox] =useState([]);
    const [documentToErase, setDocumentToErase] = useState('');
    const [userToErase, setUserToErase] = useState('');
    const [activeModalToEraseDoc, setActiveModalToEraseDoc] = useState(false)

    const openModalToEraseDoc = () => {
        setActiveModalToEraseDoc(true);
    }

    const closeModalToEraseDoc = () => {
        setActiveModalToEraseDoc(false);
    }

    const getUsers = () => {
        db.collection('users').onSnapshot((querySnapshot)=> {
            const usersInFirebase = []
            querySnapshot.forEach((doc)=> {
                const document = doc.id;
                const {nombre, correo, telefono} = doc.data();
                usersInFirebase.push({nombre, correo, telefono, document});
            })
            setUserBox(usersInFirebase)
        })
    }

    const deleteUser = () => {
        console.log(userToErase)
        console.log(documentToErase)
        db.collection('users').doc(documentToErase).delete()
        .then(()=> {
            console.log('Usuario borrado correctamente')
        })
    }

    useEffect(() => getUsers(), [] )
        const modalContent = `¿Estás seguro de eliminar a ${userToErase}?`
        return (
            <Fragment>
                <ModalClean 
                open={activeModalToEraseDoc}
                content={modalContent} 
                title="Eliminar usuario" 
                footer={
                    <EntryButton 
                    text="ELIMINAR" 
                    onClick={deleteUser}
                    className="button-settings"
                    />
                }
                close={closeModalToEraseDoc}
                />
                <main>
                    <div className="users-wrapper">

                    {userBox.map(user => <UserBox 
                    name={user.nombre} 
                    cellphone={user.telefono} 
                    email={user.correo} 
                    document={user.document} 
                    setDocumentToErase={setDocumentToErase} setUserToErase={setUserToErase} openModalToEraseDoc={openModalToEraseDoc}
                    />)}

                    </div>
                    <div className="button-add">
                        <EntryButton 
                        text="Agregar usuarios" className="button-settings"
                        onClick= {openModal}
                        />
                    </div>
                </main>
            </Fragment>
        )
}

export default UsersTab;

