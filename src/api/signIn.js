import { firebaseApp, userRef } from '../firebase'

export default (email, password) => {
        console.log('Into the function')
    firebaseApp
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(data => {
                console.log(data.user)
            userRef.child(data.user.uid).once('value', (snapshot)=> {
                    console.log(snapshot.val())
                return snapshot.val()
            })
            return true
    })
    .catch(err => {
        console.log(err.message)
        console.log("User not Found and not signed In")
        return err
    })
}