import React from 'react'
import "./Home.css";
import CardGrid from '../CardGrid/CardGrid';

const Home = () => {
  return (
    <div className="home-container">
      <div className="hero-image">
        <h1 className="hero-title">NEW IN: PET COLLECTION</h1>
      </div>

      <div className="grid-nav-container">
        <p> NEW IN | PET COLLECTION</p>
      </div>

      <div className="card-grid-container">
        <CardGrid />
      </div>
    </div>
  );
};

export default Home