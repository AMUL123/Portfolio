import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: "Netflix Clone",
    description: "A fully responsive Netflix UI clone with movie previews and details.",
    tech: ["React", "Tailwind", "TMDB API"],
    repo: "https://github.com/AMUL123/Netflix-Clone",
    live: "https://amul123.github.io/Netflix-Clone/"
  },
  {
    title: "To-Do List App",
    description: "It allows users to efficiently organize their daily tasks by providing essential features such as adding, editing, marking as complete, and deleting tasks",
    tech: ["HTML", "Tailwind", "JavaScript"],
    repo: "https://github.com/AMUL123/ToDO_List",
    live: "https://amul123.github.io/ToDO_List/"
  },
  {
    title: "Movie Recommender System",
    description: "A system that recommends movies based on user preferences.",
    tech: ["React", "JavaScript", "Tailwind"],
    repo: "https://github.com/AMUL123/MovieRecommendation",
    live: "https://movierecommend.example.com"
  }
];

const Projects = () => {
  return (
    <section className="bg-gray-900 text-white py-16" id="projects">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">

        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-12 text-yellow-400">
          Projects
        </h2>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg
                         hover:scale-105 transition-transform duration-300 group"
            >
              <div className="p-6 space-y-4">
                {/* Project Title */}
                <h3 className="text-2xl font-semibold">{project.title}</h3>

                {/* Description */}
                <p className="text-white/80">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-yellow-400 text-black text-sm font-medium px-2 py-1 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex items-center space-x-4 mt-4">
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-400 hover:text-yellow-300 flex items-center space-x-1"
                  >
                    <FaGithub /> <span>Code</span>
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-400 hover:text-yellow-300 flex items-center space-x-1"
                  >
                    <FaExternalLinkAlt /> <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
