import React from 'react';
import './CardSlider.css'; // Include CSS file for styling

const CardSlider = () => {
  // Sample card data
  const cards = [
    {
        id: 1,
        image: '../images/me.jpg', // Replace with your image URL
        title: 'Card 1',
        description: 'This is the first card',
    },
    {
        id: 2,
        image: 'https://via.placeholder.com/150',
        title: 'Card 2',
        description: 'This is the second card',
    },
    {
        id: 3,
        image: 'https://via.placeholder.com/150',
        title: 'Card 3',
        description: 'This is the third card',
    },
    // {
    //     id: 4,
    //     image: 'https://via.placeholder.com/150',
    //     title: 'Card 4',
    //     description: 'This is the fourth card',
    // },
    // {
    //     id: 5,
    //     image: 'https://via.placeholder.com/150', // Replace with your image URL
    //     title: 'Card 5',
    //     description: 'This is the fifth card',
    // },
    // {
    //     id: 6,
    //     image: 'https://via.placeholder.com/150',
    //     title: 'Card 6',
    //     description: 'This is the sixth card',
    // },
    // {
    //     id: 7,
    //     image: 'https://via.placeholder.com/150',
    //     title: 'Card 7',
    //     description: 'This is the seventh card',
    // },
    // {
    //     id: 8,
    //     image: 'https://via.placeholder.com/150',
    //     title: 'Card 8',
    //     description: 'This is the eighth card',
    // },
    
    // Add more cards as needed
  ];

  return (
    <div className="card-slider-container">
      {cards.map((card, index) => (
        <div className="card" key={card.id} style={{ animationDelay: `${index * 2}s` }}>
          <img src={card.image} alt={card.title} className="card-image" />
          <div className="card-content">
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardSlider;
