import { useState } from 'react';
import Project from "../Project";

function Portfolio() {

  // Replace links with deployed projects and GitHub repos
  const [projects] = useState([
    {
      name: 'musicDiscovery',
      description: 'Interactive Front End App',
      link: "https://innovative-j.github.io/Music-Discovery-with-Lyrics/",
      repo: "https://github.com/Innovative-J/Music-Discovery-with-Lyrics"
    },
    {
      name: 'procrastinationStation',
      description: 'Interactive Full Stack App',
      link: "https://task-manager-group-project.onrender.com",
      repo: "https://github.com/kristencullen/task-manager-group-project"
    },
    {
      name: 'readMe',
      description: 'Professional ReadME',
      link: "https://drive.google.com/file/d/1S4n_es_LfFUbph845ZoQPp4FD4GnAAix/view",
      repo: "https://github.com/brooke-dunlap/README-generator"
    },
    {
      name: 'weatherDashboard',
      description: 'Server-Side API',
      link: "https://brooke-dunlap.github.io/weather-dashboard/",
      repo: "https://github.com/brooke-dunlap/weather-dashboard"
    },
    {
      name: 'employeeTracker',
      description: 'SQL',
      link: "https://drive.google.com/file/d/10TYfz8wt1uFZoNCahxtWVMFVxuZbRatC/view",
      repo: "https://github.com/brooke-dunlap/employee-tracker"
    },
    {
      name: 'ecommerce',
      description: 'Object-Relational Mapping',
      link: "https://drive.google.com/file/d/15Nnzm7s3Xx2HFa_syD2KHl8mcGW5ihpV/view",
      repo: "https://github.com/brooke-dunlap/e-commerce"
    },
 
  ]);

  return (
    <div>
      <div className="flex-row">
        {projects.map((project, idx) => (
          <Project
            project={project}
            key={"project" + idx}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
