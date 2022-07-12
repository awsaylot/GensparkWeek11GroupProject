import React, { Component } from 'react'
import "./Header.css";


const Navigation = () => {
  return (
    <div className="navigation">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-12">
            <h1 className="title pucci-logo">P U C C I</h1>
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

const Header = () => {
  return (
    <div className="header-container">
      <Navigation />
    </div>
  )
}

export default Header