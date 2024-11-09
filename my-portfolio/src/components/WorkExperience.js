import React from 'react';
import './WorkExperience.css'; // Make sure to add the styles below in WorkExperience.css
import companyLogo1 from '../images/pear_logo.png'; // Example image
import companyLogo2 from '../images/alert_logo.png'; // Example image

const workExperiences = [
  {
    id: 1,
    image: companyLogo1,
    title: 'Software Developer at Company One',
    description: 'Worked on developing web applications and maintaining the company’s core software.',
    date: 'Jan 2022 - Present',
  },
  {
    id: 2,
    image: companyLogo2,
    title: 'Junior Developer at Company Two',
    description: 'Collaborated on front-end development for various projects, including UI/UX enhancements.',
    date: 'Jun 2020 - Dec 2021',
  },
  {
    id: 3,
    image: companyLogo1,
    title: 'Intern at Company One',
    description: 'Assisted in backend development and performed code reviews for small-scale projects.',
    date: 'Jan 2020 - May 2020',
  },
  // Add more work experience objects as needed
];

function WorkExperience() {
  return (
    <div className="work-experience">
      <h2>My Work Experience</h2>
      <div className="work-experience-grid">
        {workExperiences.map((work) => (
          <div className="work-card" key={work.id}>
            <img src={work.image} alt={work.title} className="work-image" />
            <div className="work-details">
              <h3 className="work-title">{work.title}</h3>
              <p className="work-description">{work.description}</p>
              <p className="work-date">{work.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkExperience;
