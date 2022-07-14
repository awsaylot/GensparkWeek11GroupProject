import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/esm/Button';
import Modal from 'react-modal';
import './RegisterPage.css';


const RegisterPage = props => {

    const modalPosition = React.useState('center');
    const modalSize = React.useState('medium');
    const initValues = { username: "", password: "", password2: "", email: "", phone: "", firstName: "", lastName: "" };
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
        const nameRegex = /^[a-zA-Z]+$/
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        const userRegex = /^[a-zA-Z0-9_.-]+$/;
        const passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

        if (!values.firstName) {
            errors.firstName = "First name is required";
        }
        if (!nameRegex.test(values.firstName)) {
            errors.firstName = "Can only contain upper and lowercase letters.";
        }

        if (!values.lastName) {
            errors.lastName = "Last name is required";
        }
        if (!nameRegex.test(values.lastName)) {
            errors.lastName = "Can only contain upper and lowercase letters.";
        }

        if (!values.email) {
            errors.email = "Email is required";
        }
        if (!emailRegex.test(values.email)) {
            errors.email = "Email must be a valid email address.";
        }

        if (!values.username) {
            errors.username = "Username is required";
        }
        if (!userRegex.test(values.username)) {
            errors.username = "Username must only contain Uppercase, Lowercase, underscores, periods, and dashes.";
        }
        if (!values.password) {
            errors.password = "Password is required";
        }

        if (!values.phone) {
            errors.phone = "Phone is required";
        }


        if (values.password < 8) {
            errors.password = "Password must be at least 8 characters long.";
        }
        if (!passwordRegex.test(values.password)) {
            errors.password = "Password must contain at least one number, and at least one special character.";
        }
        if (values.password !== values.password2) {
            errors.password2 = "Passwords do not match.";
        }
        if (!phoneRegex.test(values.phone)) {
            errors.phone = "Phone number must be a valid format.";
        }


        return errors;
    };

    return (
        <div style={{ display: 'flex' }}>
            <Modal className="reg-modal"
                position={modalPosition}
                size={modalSize}
                isOpen={props.modalIsOpen}
                onRequestClose={props.handleClose}
            >
                <div className="reg-page">
                    <div className="reg-box">

                        {/* <Button className="btn-close" onClick={props.handleClose} /> */}

                        <div type="regHeader">
                            {props.content}
                        </div>

                        <div className="fields">
                            <input
                                type="name"
                                className="firstName"
                                placeholder="First Name"
                                value={formValues.firstName}
                                nChange={handleChange}
                            />

                            <input
                                type="name"
                                className="lastName"
                                placeholder="Last Name"
                                value={formValues.lastName}
                                onChange={handleChange}
                            />
                            <p className="errors">{formErrors.firstName}{formErrors.lastName}</p>
                        </div>

                        <div className="field">
                            <input
                                type="text"
                                className="email"
                                placeholder="Email Address"
                                value={formValues.email}
                                onChange={handleChange}
                            />
                        </div>
                        <p className="errors">{formErrors.email}</p>

                        <div className="field">
                            <input
                                type="text"
                                className="phone"
                                placeholder="Phone Number"
                                value={formValues.phone}
                                onChange={handleChange}
                            />
                        </div>
                        <p className="errors">{formErrors.phone}</p>

                        <div type="userHeader">
                            {props.content2}
                        </div>

                        <div className="field">
                            <input
                                type="text"
                                className="username"
                                placeholder="Username"
                                value={formValues.username}
                                onChange={handleChange}
                            />
                        </div>
                        <p className="errors">{formErrors.username}</p>

                        <div className="field">
                            <input
                                type="text"
                                className="password"
                                placeholder="Password"
                                value={formValues.password}
                                onChange={handleChange}
                            />
                        </div>
                        <p className="errors">{formErrors.password}</p>

                        <div className="field">
                            <input
                                type="text"
                                className="password"
                                placeholder="Re-enter Password" value={formValues.password2}
                                onChange={handleChange}
                            />
                        </div>
                        <p className="errors">{formErrors.password2}</p>

                        <div>
                            <input
                                type="checkbox"
                            />
                            <span>
                                I accept
                                <a
                                    href="#"
                                >Terms of Use
                                </a>
                                <Button className="register-btn" onClick={handleSubmit}>Submit</Button>
                            </span>
                        </div>

                    </div>
                </div>
            </Modal>
        </div>
    )
}

export default RegisterPage