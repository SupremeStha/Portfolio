import React from 'react';
import './Projects.css';
import { Github, ExternalLink } from 'lucide-react';


const Projects = () => {
    const projectsData = [
        {
            id: 1,
            title: "CVisionary-AI based CV analyzer",
            image: "./Cvisionary.png",
            alt: "CVisionary AI CV Analyzer",
            technologies: ["LangChain", "HTML", "Javascript", "CSS"],
            links: {
                github: "https://github.com/SupremeStha/CVisionary",
            }
        },
        {
            id: 2,
            title: "Online Car Dealership Website",
            image: "./Dealership.png",
            alt: "Car Dealership Website",
            technologies: ["JavaScript", "HTML", "CSS"],
            links: {
                github: "https://github.com/SupremeStha/Car-Dealership-Website",
            }
        },
        {
            id: 3,
            title: "Smart Water Conservation System",
            image: "./IOT.png",
            alt: "Smart Water Conservation System",
            technologies: ["Tinkercad", "C#", "Arduino", "Sensors"],
            links: {
                github: "https://github.com/SupremeStha/Smart-Water-Conservation-System-IOT",
            }
        },
        {
            id: 4,
            title: "Hospital Management System",
            image: "./HMS.png",
            alt: "Hospital Management System",
            technologies: ["Python"],
            links: {
                github: "https://github.com/SupremeStha/Hospital-Management-System",
            }
        },
        {
            id: 5,
            title: "Fuel Efficiency Predictive Model",
            image: "./AI.png",
            alt: "Automobile Fuel Efficiency Analysis",
            technologies: ["Python", "Pandas", "Numpy"],
            links: {
                github: "https://github.com/SupremeStha/Analysis-and-Predictive-Modeling-of-Automobile-Fuel-Efficiency",
            }
        },
        {
            id: 6,
            title: "Smart Mental Health Support System",
            image: "./MHS.png",
            alt: "Mental Health System",
            technologies: ["NLP", "HTML/CSS", "Database"],
            links: {
                github: "https://github.com/SupremeStha/Code-Crunch"
            }
        }
    ];

    return (
        <section className="projects-section" id="projects">
            <div className="projects-container">
                <div className="projects-header">
                    <h2 className="projects-title">My Projects</h2>
                    <div className="title-underline"></div>
                </div>

                <div className="projects-grid">
                    {projectsData.map((project) => (
                        <div key={project.id} className="project-card">
                            <div className="project-image">
                                <img
                                    src={project.image}
                                    alt={project.alt}
                                    className="project-img"
                                />
                            </div>

                            <div className="project-content">
                                <h3>{project.title}</h3>

                                <div className='project-req'>

                                    <div className="project-tech">
                                        {project.technologies.map((tech, index) => (
                                            <span key={index}>{tech}</span>
                                        ))}
                                    </div>

                                    <div className="project-links">
                                        {project.links.demo && (
                                            <a href={project.links.demo} className="project-link">
                                                <span>Live Demo</span>
                                                <ExternalLink size={16} className="project-link-icon" />
                                            </a>
                                        )}
                                        <a href={project.links.github} className="project-link" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                                            <span className="social-icon">
                                                <Github size={20} />
                                                GitHub
                                            </span>
                                            <ExternalLink size={16} className="project-link-icon" />
                                        </a>
                                    </div>
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