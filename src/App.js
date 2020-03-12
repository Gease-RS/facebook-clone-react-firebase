import React, { useEffect } from 'react'
import { userRef } from './firebase'
import signIn from './api/signIn'
import signUp from './api/signUp'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import Feed from './components/Feed'
import Navbar from './components/reusable/Navbar'

import { Button, Container, Row, Col } from 'react-materialize'

import './App.css'

function App() {
  useEffect(() => {
    function callFunc() {
      userRef.push({
        email: "teste@teste.com",
        passaword: "12345678"
      })
    }

    //callFunc()
    
  }, [])

  const onSignUp = () => {
    const result = signUp(
      'olavo@signup3.com', 
      'olavopassword3', 
      'Olavo3', 
      'Bilac3'
      )
    console.log(result)
  }

  const onSignIn = () => {
    const result = signIn('olavo@signup3.com', 'olavopassword3')
    
    console.log(result)
  }
  return (
    <div className="App">
      <Navbar />
      <Container>
        <Row>
          <Col s={4}>
            <SignIn/>
              <Button className="red"
                small 
                 onClick={()=>onSignIn()}
             >
                Sign In
              </Button>
          </Col>
          <Col s={8}>
            <SignUp/>
              <Button node="a"
                small 
                onClick={()=>onSignUp()}
              >
                Sign Up
            </Button>
          </Col>
        </Row>   
      </Container>
    </div>
  );
}

export default App;
