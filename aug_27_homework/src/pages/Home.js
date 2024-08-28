import React from 'react';
import './Home.css';

const Home = () => (
  <div className="home-container">
    <header className="home-header">
      <h1>Home page</h1>
    </header>
    <section className="home-content">
      <div className="cta-buttons">
        <a href="/features" className="cta-button">Learn More</a>
        <a href="/contact" className="cta-button">Get in Touch</a>
      </div>
    </section>
  </div>
);

export default Home;
