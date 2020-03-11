import React, { useEffect } from 'react'
import './App.css'
import { userRef } from './firebase'

function App() {
  useEffect(() => {
    function callFunc() {
      userRef.push({
        email: "teste@teste.com",
        passaword: "12345678"
      })
    }

    callFunc()
    
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
