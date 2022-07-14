import React from 'react'
import Button from 'react-bootstrap/esm/Button';
import "./Header.css";


const Navigation = props => {
  return (
    <div className="navigation">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12">
            <h1 className="title pucci-logo">P U C C I
              <div className="btns">
                <Button className='user-btn' onClick={props.onLoginClick}>Login</Button>
                <Button className='user-btn' onClick={props.onRegisterClick}>Register</Button>
              </div>
            </h1>
            <nav>
              <ul className="nav nav-tabs">
                <li className="nav-tabs-header">
                  <a className="nav-link" href="#">ADIDOGS X PUCCI</a>
                </li>
                <li className="nav-tabs-header">
                  <a className="nav-link" href="#">WHAT'S NEW</a>
                </li>
                <li className="nav-tabs-header">
                  <a className="nav-link" href="#">HANDBAGS</a>
                </li>
                <li className="nav-tabs-header">
                  <a className="nav-link" href="#">DOGS</a>
                </li>
                <li className="nav-tabs-header">
                  <a className="nav-link" href="#">CATS</a>
                </li>
                <li className="nav-tabs-header">
                  <a className="nav-link" href="#">JEWELRY AND WATCHES</a>
                </li>
                <li className="nav-tabs-header">
                  <a className="nav-link" href="#">BEAUTY</a>
                </li>
                <li className="nav-tabs-header">
                  <a className="nav-link" href="#">SHOES</a>
                </li>
                <li className="nav-tabs-header">
                  <a className="nav-link" href="#">DECOR & LIFESTYLE</a>
                </li>
                <li className="nav-tabs-header">
                  <a className="nav-link" href="#">GIFTS</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  )
}

const Header = props => {
  return (
    <div className="header-container">
      <Navigation 
        onLoginClick={props.onLoginClick}
        onRegisterClick={props.onRegisterClick}
      />
    </div>
  )
}

export default Header