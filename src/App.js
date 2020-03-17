import React, { useEffect, useState } from 'react'
import { userRef, firebaseApp } from './firebase'
import signIn from './api/signIn'
import signUp from './api/signUp'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Feed from './components/Feed'
import Navbar from './components/reusable/Navbar'

import { Button, Container, Row, Col } from 'react-materialize'

import './App.css'

function App() {

  const [stage, setStage] = useState('')
  const [signUpSignIn, setSignUpSignIn] = useState("SI")
  
  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged(function(user) {
      if (user) {
        console.log(user.uid)
        setStage('loggedIn')
        setSignUpSignIn("SI")
      } else {
        console.log('No User Logged In')
        setStage('notLoggedIn')
      }
    })
  }, [])

  const changeState = value => {
    setSignUpSignIn(value)
  }
 
  return (
    <div className="App">
      <Navbar stage={stage} />
      {stage === 'loggedIn' && <Feed />}
      {stage === 'notLoggedIn' && signUpSignIn === "SI" && ( 
        <SignIn changeState={changeState}/> 
      )}
      {stage === 'notLoggedIn' && signUpSignIn === "SU" && ( 
        <SignUp changeState={changeState}/> 
      )}
    </div>
  );
}

export default App;
