import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './Projects.css';
import ProjectDetail from './ProjectDetail';
import bee from '../images/cropped_bee.png';
import voltaic from '../images/voltaic.png';

const projects = [
  { id: 1, image: voltaic, title: '3lb Combat Robot: Voltaic', description: 'Description of project one.', date: 'Jan 2023 - Mar 2023', tags: ['robotics', 'engineering'] },
  { id: 2, image: bee, title: 'Micro Bee Demo', description: 'Description of project two.', date: 'Apr 2023 - Jun 2023', tags: ['drones', 'electronics'] },
  { id: 3, image: bee, title: 'Project Three', description: 'Description of project three.', date: 'Jul 2023 - Sep 2023', tags: ['robotics', 'AI'] },
  { id: 4, image: voltaic, title: 'Unified Mobile Robotics Final Projects', description: 'A collection of the final projects from WPIs Intro to Robotics and Unified Robotics I and II courses.', date: 'Oct 2023 - Dec 2023', tags: ['robotics', 'engineering', 'AI'] },
];

function Projects() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState(''); // State for selected tag

  // Filter projects based on search query and selected tag
  const filteredProjects = projects.filter((project) => {
    const lowercasedQuery = searchQuery.toLowerCase();
    const matchesQuery = project.title.toLowerCase().includes(lowercasedQuery) ||
      project.tags.some((tag) => tag.toLowerCase().includes(lowercasedQuery));

    // If a tag is selected, check if the project has that tag
    const matchesTag = selectedTag ? project.tags.includes(selectedTag) : true;

    return matchesQuery && matchesTag;
  });

  // Extract all unique tags from projects for the dropdown options
  const allTags = Array.from(new Set(projects.flatMap(project => project.tags)));

  return (
    <Routes>
      {/* Main Projects Page */}
      <Route
        path="/"
        element={
          <div className="projects">
            <h2>My Projects</h2>

            {/* Search Bar */}
            <div className="search-bar-container">
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="search-bar"
              />

              {/* Tag Dropdown */}
              <select
                value={selectedTag}
                onChange={(e) => setSelectedTag(e.target.value)}
                className="tag-dropdown"
              >
                <option value="">All Tags</option>
                {allTags.map((tag) => (
                  <option key={tag} value={tag}>
                    {tag}
                  </option>
                ))}
              </select>
            </div>

            <div className="projects-grid">
              {filteredProjects.map((project) => (
                <Link to={`/projects/${project.id}`} key={project.id} className="project-link">
                  <div className="project-card">
                    <img src={project.image} alt={project.title} className="project-image" />
                    <div className="project-details">
                      <h3 className="project-title">{project.title}</h3>
                      <p className="project-description">{project.description}</p>
                      <p className="project-date">{project.date}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        }
      />

      {/* Individual Project Pages */}
      <Route path=":id" element={<ProjectDetail projects={projects} />} />
    </Routes>
  );
}

export default Projects;
