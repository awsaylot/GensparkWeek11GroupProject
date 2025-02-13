import React from 'react'
import { IoMdHeartEmpty } from "react-icons/io";
import {BsBag} from "react-icons/bs";
import {BiSearch} from "react-icons/bi";
import "./Header.css";


const Navigation = props => {
  return (
    <div className="navigation">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12">
            <h1 className="title pucci-logo">P U C C I </h1>
              <div className="nav-user-btn-container">
                {props.currentUser ? (
                  <button className='nav-login-btn' onClick={props.logout}>
                    Logout
                  </button>
                ) : (
                <>
                    <button className='nav-login-btn' onClick={props.onLoginClick}>Sign in</button>
                    <button className='nav-register-btn' onClick={props.onRegisterClick}>Register</button>
                </>
                )}
                
                <button className='nav-favorites-btn'><IoMdHeartEmpty className="nav-favorites-btn-icon"/></button>
                <button className='nav-bag-btn'><BsBag className="nav-bag-btn-icon"/>Bag</button>
                <button className='nav-search-btn'><BiSearch className="nav-search-btn-icon"/></button>
              </div>
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
  const logout= (e) => {
    localStorage.removeItem("user");
    window.location.reload();
  }
  return (
    <div className="header-container">
      <Navigation 
        onLoginClick={props.onLoginClick}
        onRegisterClick={props.onRegisterClick}
        currentUser={props.currentUser}
        logout={logout}
      />
    </div>
  )
}

export default Header