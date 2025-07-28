// Project.jsx
import React from 'react';
import './Project.css';
import { Link } from 'react-router-dom';

const projects = [
  { id: 1, title: 'Crystal Cove Oasis', img: 'src/assets/Crystal cove oasis.png', link: '/project/1' },
  { id: 2, title: 'MetroGlo', img: 'src/assets/metroglo.jpg', link: '/project/2' },
  { id: 3, title: 'CampusSpace', img: 'src/assets/campusspace.jpg', link: '/project/3' },
];

function Project() {
  return (
    <div className="project-page">
      <div className="project-thumb">
        <h2>My Projects Showcase</h2>
      </div>
      <div className="intro-paragraph">
        <p>
          Welcome to my professional portfolio page, where each project tells a story
          of innovation, creativity, and technical proficiency. Explore the showcased work
          below to see how I translate ideas into impactful digital experiences.
        </p>
      </div>
      <div className="cards-row">
        {projects.map(p => (
          <Link key={p.id} to={p.link} className="project-card">
            <img src={p.img} alt={p.title} />
            <h3>{p.title}</h3>
          </Link>
        ))}
      </div>
      {/* Add footer manually or rely on your shared Footer component */}
    </div>
  );
}

export default Project;
