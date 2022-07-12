import React, { useState, Component } from 'react';
import './App.css';

import Wrapper from './components/Wrapper/Wrapper';
import LoginPage from './components/Login Page/LoginPage';
import RegisterPage from './components/Register Page/RegisterPage';

function App() {

  const [isOpen, setIsOpen] = useState(false);
  const [register, setRegister] = useState(false);

  const toggleLogin = () => {
    setIsOpen(!isOpen);
  };

  const toggleRegister = () => {
    setRegister(!register);
  }

  return (
    <div className="App">

      <button onClick={toggleLogin}>Login</button>
      <button onClick={toggleRegister}>Register</button>

      {isOpen &&
        <Wrapper>
          <LoginPage
            handleClose={toggleLogin}
            content={
              <div>
                <p />
                <h2 style={{ fontWeight: 'bolder' }}>Login</h2>
                <p style={{ fontWeight: 'bold' }}>Please enter your username and password</p>
              </div>
            }
          />
        </Wrapper>},

      {register &&
        <Wrapper>
          <RegisterPage
            handleClose={toggleRegister}
            content={
              <div>
                <h2>New User</h2>
                <p>Personal Information</p>
              </div>
            }
            content2={
              <div>
                <p>Login Information</p>
              </div>
            } 
            />
        </Wrapper>}
    </div>
  );
}

export default App;
