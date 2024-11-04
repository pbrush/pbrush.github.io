// components/Home.js
import React from 'react';
import './Home.css';
import CardSlider from './CardSlider'; // Import the CardSlider component

function Home() {
  return (
    <div className="home">
      <img src="../images/me.jpg" alt="Landing" className="landing-image" />
      <h2>Welcome to My Portfolio</h2>
      <p>Explore my projects and learn more about me!</p>
      
      <CardSlider />
    </div>
  );
}

export default Home;
