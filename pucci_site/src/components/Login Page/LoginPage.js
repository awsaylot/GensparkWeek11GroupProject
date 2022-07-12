import React from 'react';
import "./LoginPage.css";

const LoginPage = props => {
  return (
    <div className="login-page">
      <div className="login-box">

      <button className="btn-close" onClick={props.handleClose}>x</button>
      {props.content}
      
      <input type="text" className="username" placeholder="Username"/>

      <input type="text" className="password" placeholder="Password"/>

      <input type="checkbox"/><span>Remember Me</span>

      </div>
    </div>
  )
}

export default LoginPage