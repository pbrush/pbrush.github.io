// components/Home.js
import React from 'react';
import './Home.css';
import CardSlider from './CardSlider'; // Import the CardSlider component
import me from "../images/me.jpg";

function Home() {
  return (
    <div className="home">
      <div className="content">
        <img src={me} alt="No load :(" className="landing-image" />
        <div className="text-content">
          <h1>Howdy!</h1>
          <h2>My name is Phillip Brush, welcome to my portfolio!</h2>
          <p>Explore my projects and learn more about me!</p>
        </div>
      </div>
      <CardSlider />
    </div>
  );
}

export default Home;

