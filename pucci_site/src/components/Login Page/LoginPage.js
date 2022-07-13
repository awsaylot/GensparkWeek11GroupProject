import React from 'react';
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

        <div className="login-content">
          <button className="btn-close" onClick={props.handleClose} />

          <div type="loginHeader">
            {props.content}
          </div>

          <div className="text-input-wrapper">
            <input type="text" className="username" placeholder="Username" />

            <input type="text" className="password" placeholder="Password" />
          </div>

          <input type="checkbox" /><span>Remember Me</span>

          <a className="btn btn-med login-btn" href="#" role="button" onClick={props.handleClose}>Login</a>

          <p>No existing account? <a href="#" onClick={openRegisterPage}>Register here</a></p>

        </div>
      </div>
    </div>
  )
}

export default LoginPage