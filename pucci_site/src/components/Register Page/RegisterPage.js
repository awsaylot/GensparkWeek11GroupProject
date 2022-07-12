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

                <input type="name" className="firstName" placeholder="First Name"/>
                <input type="name" className="lastName" placeholder="Last Name"/>

                <input type="text" className="email" placeholder="Email Address"/>

                <input type="text" className="phone" placeholder="Phone Number"/>

                <div type="userHeader">
                    {props.content2}
                </div>

                <input type="text" className="username" placeholder="Username"/>

                <input type="text" className="password" placeholder="Password"/>
                <input type="text" className="password" placeholder="Re-enter Password"/>

                <input type="checkbox"/><span>I accept <a href="#">Terms of Use</a></span>

                <a className="btn btn-primary btn-med register-btn" onClick={props.handleClose}>Submit</a>

            </div>
        </div>
    )
}

export default RegisterPage