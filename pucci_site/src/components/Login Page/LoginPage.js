import React, { Component } from 'react';
import RegisterPage from '../Register Page/RegisterPage';
import "./LoginPage.css";

const LoginPage = props => {

  const openRegisterPage = () => {
    // props.handleClose();
    RegisterPage(props);
  }

  return (
    <div className="login-page">
      <div className="login-box">

        <button className="btn-close" onClick={props.handleClose} />

        <div type="loginHeader">
          {props.content}
        </div>

        <input type="text" className="username" placeholder="Username" />

        <input type="text" className="password" placeholder="Password" />

        <input type="checkbox" /><span>Remember Me</span>

        <a className="btn btn-primary btn-med login-btn" href="#" role="button" onClick={props.handleClose}>Login</a>

        <a className="btn btn-primary btn-med register-btn" href="#" role="button" onClick={openRegisterPage}>Register</a>

      </div>
    </div>
  )
}

export default LoginPage