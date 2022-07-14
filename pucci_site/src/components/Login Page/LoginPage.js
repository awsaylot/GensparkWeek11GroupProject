import React, { useState, useEffect, formValues, isSubmit } from 'react';
import Modal from 'react-modal';
import Button from 'react-bootstrap/esm/Button';
import "./LoginPage.css";

const LoginPage = props => {

  const modalPosition = React.useState('center');
  const modalSize = React.useState('small');
  const initValues = { username: "", password: "" };
  const [formValues, setFormValues] = useState(initValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value })
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const userRegex = /^[a-zA-Z0-9_.-]+$/;

    if (!values.username) {
      errors.username = "Username is required";
    }
    if (!values.password) {
      errors.password = "Password is required";
    }
    if (!userRegex.test(values.username)) {
      errors.username = "Username must only contain Uppercase, Lowercase, underscores, periods, and dashes.";
    }
    if (values.password < 8) {
      errors.password = "Password must be at least 8 characters long.";
    }
    // if () {
    //   errors.password = "Account not found, either the username or password is incorrect.";
    // }
    return errors;
  };

  return (
    <div style={{display: 'flex'}}>
      <Modal className="login-modal"
        size={modalSize}
        position={modalPosition}
        isOpen={props.modalIsOpen}
        onRequestClose={props.handleClose}
      >
        <div className="login-box">

          <div className="login-content">
            {/* <Button className="btn-close" onClick={props.handleClose} /> */}

            <div type="loginHeader">
              {props.content}
            </div>

            <div className="text-input-wrapper">
              <div className="usernameField">
              <input
                type="text"
                className="username"
                placeholder="Username"
                value={formValues.username}
                onChange={handleChange}
              />
              </div>
              <p className="errors">{formErrors.username}</p>
              <div className="passwordField">
              <input
                type="text"
                className="password"
                placeholder="Password"
                value={formValues.password}
                onChange={handleChange}
              />
              </div>
              <p className="errors">{formErrors.password}</p>
            </div>

            <input type="checkbox" /><span>Remember Me</span>

            <div>
            <Button className="login-btn" onClick={handleSubmit}>Login</Button>
            </div>

            <p>No existing account? <a href="#" onClick={props.onRegisterClick}>Register here</a></p>

          </div>
        </div>

        <div className="sideImage" />
      </Modal>
    </div>
  )
}

export default LoginPage