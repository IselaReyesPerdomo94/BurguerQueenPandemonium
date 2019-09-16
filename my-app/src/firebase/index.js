import firebaseApp from 'firebase/app'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyC7FSK03JcEV7HtO20cXB03ncK_afcfSc4",
    authDomain: "pandemonium-5a001.firebaseapp.com",
    databaseURL: "https://pandemonium-5a001.firebaseio.com",
    projectId: "pandemonium",
    storageBucket: "pandemonium.appspot.com",
    messagingSenderId: "472468721699",
    appId: "1:472468721699:web:6c8dfa1b1e77d01f296196"
}

const createFirebaseApp = () => {
    firebaseApp.initializeApp(config)
    firebaseApp.auth().onAuthStateChanged(user => {
        if (user) {
            console.log('User bien prron')

        } else {
            console.log('No se pudo conectar el hdspm')
        }
    })
    return firebaseApp
}


export default createFirebaseApp