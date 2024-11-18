import React from 'react';
import { useParams } from 'react-router-dom';
import projects from './projectData';  // Import from new data file

function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((proj) => proj.id === parseInt(id));

  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <div className="project-detail">
      <h2>{project.title}</h2>
      <img src={project.image} alt={project.title} className="project-detail-image" />
      <p>{project.description}</p>
      <p>{project.date}</p>
      <h3>Tags</h3>
      <ul>
        {project.tags.map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProjectDetail;
