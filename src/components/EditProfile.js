import React, { useState } from 'react'
import { firebaseApp } from '../firebase'
import editUser from '../api/editUser'

export default ({ changeToFalse }) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')

    const onSubmit = () => {
        const uid = firebaseApp.auth().currentUser.uid
        const data = {
            uid,
            firstName,
            lastName
        }

        const result = editUser(data)

        if (result === true) {
            console.log("User into Edited")
        }

        if (result === false) {
            console.log("ERROR")
        }
    }

    return (
        <div>
            <div onClick={() => changeToFalse()}>Go Back</div>
            <input value="First Name" onChange={event=>setFirstName(event.target.value)} />
            <input value="Last Name" onChange={event=>setLastName(event.target.value)} />
            <button onClick={onSubmit}>Submit</button>
        </div>
    )
}