import { Github, ExternalLink } from 'lucide-react';
import './Projects.css';

/**
 * Project images live in /public so Vite serves them at the root.
 * Place files like /public/Cvisionary.png, /public/Dealership.png, etc.
 */
const PROJECTS = [
  {
    id: 'cvisionary',
    title: 'CVisionary - AI based CV analyzer',
    image: '/Cvisionary.png',
    alt: 'CVisionary AI CV Analyzer',
    technologies: ['LangChain', 'HTML', 'JavaScript', 'CSS'],
    links: { github: 'https://github.com/SupremeStha/CVisionary' },
  },
  {
    id: 'dealership',
    title: 'Online Car Dealership Website',
    image: '/Dealership.png',
    alt: 'Car Dealership Website',
    technologies: ['JavaScript', 'HTML', 'CSS'],
    links: { github: 'https://github.com/SupremeStha/Car-Dealership-Website' },
  },
  {
    id: 'water-iot',
    title: 'Smart Water Conservation System',
    image: '/IOT.png',
    alt: 'Smart Water Conservation System',
    technologies: ['Tinkercad', 'C#', 'Arduino', 'Sensors'],
    links: {
      github: 'https://github.com/SupremeStha/Smart-Water-Conservation-System-IOT',
    },
  },
  {
    id: 'hms',
    title: 'Hospital Management System',
    image: '/HMS.png',
    alt: 'Hospital Management System',
    technologies: ['Python'],
    links: { github: 'https://github.com/SupremeStha/Hospital-Management-System' },
  },
  {
    id: 'fuel-ai',
    title: 'Fuel Efficiency Predictive Model',
    image: '/AI.png',
    alt: 'Automobile Fuel Efficiency Analysis',
    technologies: ['Python', 'Pandas', 'Numpy'],
    links: {
      github:
        'https://github.com/SupremeStha/Analysis-and-Predictive-Modeling-of-Automobile-Fuel-Efficiency',
    },
  },
  {
    id: 'mhs',
    title: 'Smart Mental Health Support System',
    image: '/MHS.png',
    alt: 'Mental Health System',
    technologies: ['NLP', 'HTML/CSS', 'Database'],
    links: { github: 'https://github.com/SupremeStha/Code-Crunch' },
  },
];

const Projects = () => (
  <section className="projects-section" id="projects">
    <div className="projects-container">
      <div className="projects-header">
        <h2 className="projects-title">My Projects</h2>
        <div className="title-underline" aria-hidden="true" />
      </div>

      <div className="projects-grid">
        {PROJECTS.map((project) => (
          <article key={project.id} className="project-card">
            <div className="project-image">
              <img
                src={project.image}
                alt={project.alt}
                className="project-img"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>

              <div className="project-req">
                <div className="project-tech">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <div className="project-links">
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      className="project-link"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} live demo`}
                    >
                      <span>Live Demo</span>
                      <ExternalLink size={16} className="project-link-icon" aria-hidden="true" />
                    </a>
                  )}
                  <a
                    href={project.links.github}
                    className="project-link"
                    aria-label={`${project.title} on GitHub`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="social-icon">
                      <Github size={20} aria-hidden="true" />
                      GitHub
                    </span>
                    <ExternalLink size={16} className="project-link-icon" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
