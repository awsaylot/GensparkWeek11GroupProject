import React, { Component } from 'react';
import './RegisterPage.css';

const RegisterPage = props => {
    return (
        <div className="reg-page">
            <div className="reg-box" style={
                {
                    backgroundImage: `url(${process.env.PUBLIC_URL + "/IMG_9554.webp"})`,
                    backgroundSize: "contain",
                }
            }>

                <button className="btn-close" onClick={props.handleClose} />
                
                <div type="regHeader">
                    {props.content}
                </div>

                <input type="name" className="firstName" placeholder="First Name">First Name</input>
                <input type="name" className="lastName" placeholder="Last Name">Last Name</input> 

                <input type="text" className="email" placeholder="Email Address">Email Address</input>

                <input type="text" className="phone" placeholder="Phone Number">Phone Number</input>

                <div type="userHeader">
                    {props.content2}
                </div>

                <input type="text" className="username" placeholder="Username">Username</input>

                <input type="text" className="password" placeholder="Password">Password</input>
                <input type="text" className="password" placeholder="Re-enter Password"/>

                <input type="checkbox"/><span>I accept <a href="#">Terms of Use</a></span>

                <a className="btn btn-primary btn-med register-btn" onClick={props.handleClose}>Submit</a>

            </div>
        </div>
    )
}

export default RegisterPage