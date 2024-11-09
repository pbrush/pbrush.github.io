import React from 'react';
import './CardSlider.css'; // Include CSS file for styling
import me from '../images/me.jpg';
import bee from '../images/cropped_bee.png';
import voltaic from '../images/voltaic.png';

const CardSlider = () => {
  // Sample card data
  const cards = [
    {
        id: 1,
        image: me, // Replace with your image URL
        title: 'Card 1',
    },
    {
        id: 2,
        image: bee,
        title: 'Micro Drone Demo',
    },
    {
        id: 3,
        image: voltaic,
        title: '3lb Combat Robot',
    },
    {
      id: 4,
      image: voltaic,
      title: '3lb Combat Robot',
    },
  ];

  return (
    <div className="card-slider-container">
      {cards.map((card) => (
        <div key={card.id} className="card">
          <div className="card-body">
            <img src={card.image} alt={card.title} className="card-image" />
            <div className="card-content">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardSlider;
