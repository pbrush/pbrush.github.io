import React from 'react';
import './CardSlider.css'; // Include CSS file for styling
import bee from '../images/cropped_bee.png';
import voltaic from '../images/voltaic.png';
import rbe2102 from '../images/rbe2102_romi.png';
import huron_comp from '../images/huron_comparison.png';
import controls_proj from '../images/502.png';
import motion_plannign_proj from '../images/550_proj3_1.png';
import cube_swarm from '../images/cubeswarm.jpg';
import gesture_recog from '../images/gesture_ds.png';
import ind_robot_arm from '../images/abb_irb1600.png';
import rbe3002 from '../images/rbe3002.png';
import shapes from '../images/shapes.png';
import sfis from '../images/sfis.png';
import fpv from '../images/fpvdrone.png';
import rc from '../images/3dprccar.png';

const CardSlider = () => {
  // Sample card data
  const cards = [
    { id: 1, image: controls_proj, title: 'Drone Control' },
    { id: 2, image: bee, title: 'Micro Drone Demo' },
    { id: 3, image: voltaic, title: '3lb Combat Robot' },
    { id: 4, image: rbe3002, title: 'SLAM in static environment' },
    { id: 5, image: huron_comp, title: 'HURON: Humanoid Robot' },
    { id: 6, image: shapes, title: 'Point Cloud Segmentation' },
    { id: 7, image: gesture_recog, title: 'Gesture Recognition' },
    { id: 8, image: motion_plannign_proj, title: 'Various Motion Planning Projects' },
    { id: 9, image: cube_swarm, title: 'Swarm of Cube Robots' },
    { id: 10, image: fpv, title: 'FPV Drone' },
    { id: 11, image: ind_robot_arm, title: 'Industrial Robot Pick and Place' },
    { id: 12, image: sfis, title: 'STEAM Initiative' },
  ];

  // Clone cards for seamless scrolling
  const allCards = [...cards, ...cards];

  return (
    <div className="card-slider-container">
      {allCards.map((card, index) => (
        <div key={`${card.id}-${index}`} className="card">
          <div className="card-body">
            <img src={card.image} alt={card.title} className="card-image" />
            <div className="card-content">
              <h3>{card.title}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardSlider;
