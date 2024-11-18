import React from 'react';
import voltaic from '../../images/voltaic.png';

function Project4() {
  return (
    <div className="project-detail">
      <h2>3lb Combat Robot: Voltaic</h2>
      <img src={voltaic} alt="Voltaic" className="project-detail-image" />
      <p>Description of project one.</p>
      <p>Jan 2023 - Mar 2023</p>
      <h3>Tags</h3>
      <ul>
        <li>robotics</li>
        <li>engineering</li>
      </ul>
    </div>
  );
}

export default Project4;
