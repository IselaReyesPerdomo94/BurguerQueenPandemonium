import React, {Fragment} from 'react';
import * as firebase from 'firebase/app';
import EntryButton from '../../../components/Buttons/EntryButton/index.jsx';

class UsersTab extends React.Component {
    constructor(){
        super()
    }
    render(){
        return(
            <Fragment>
                <main>
                    <h2>No se han agregado usuarios</h2>
                    <EntryButton text="Agregar usuarios"/>
                </main>
            </Fragment>
        )
    }
}

export default UsersTab;