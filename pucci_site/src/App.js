import React, { useState} from 'react';
import './App.css';
import LoginPage from './components/Login Page/LoginPage';

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleLogin = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">

    <button onClick={toggleLogin}>Login</button>

    {isOpen && 
      <LoginPage 
      handleClose={toggleLogin}
      content = {
        <div> 
          <h2>Login</h2>
          <p>Please enter your username and password</p>
        </div>
      }
    />}

    </div>
  );
}

export default App;
