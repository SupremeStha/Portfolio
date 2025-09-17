import React from 'react';
import {
    FaReact,
    FaJs,
    FaHtml5,
    FaCss3Alt
} from 'react-icons/fa';
import {
    SiTypescript,
    SiDjango,
    SiPython,
    SiFirebase,
    SiFlask,
    SiFigma,
    SiCanva,
    SiAdobephotoshop
} from 'react-icons/si';
import {
    MdCode,
    MdStorage,
    MdDesignServices,
    MdBrush
} from 'react-icons/md';
import './AboutMe.css';

const AboutMe = () => {
    const scrollToProjects = () => {
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="about-section" id="about">
            <div className="about-container">
                <div className="about-header">
                    <h2 className="about-title">About Me</h2>
                    <div className="title-underline"></div>
                </div>

                <div className="about-content">
                    <div className="about-text">
                        <p className="about-intro">
                            I’m a second-year Computer Science (AI) student passionate about 
                            artificial intelligence, data, and software development.
                        </p>

                        <p className="about-description">
                            I enjoy creating projects that combine intelligent systems, predictive 
                            modeling, and practical applications. With intermediate coding skills 
                            and curiosity, I constantly learn, experiment, and improve while applying
                            AI-driven solutions to meaningful real-world challenges.
                        </p>

                        <div className="skills-container">
                            <h3 className="skills-title">My Skills</h3>
                            <div className="skills-grid">
                                <div className="skill-category">
                                    <h4>
                                        <MdCode size={20} className="skill-icon" />
                                        Frontend
                                    </h4>
                                    <ul>
                                        <li>
                                            <FaReact size={16} className="skill-item-icon" />
                                            React
                                        </li>
                                        <li>
                                            <FaJs size={16} className="skill-item-icon" />
                                            JavaScript
                                        </li>
                                        <li>
                                            <FaHtml5 size={16} className="skill-item-icon" />
                                            HTML
                                        </li>
                                        <li>
                                            <FaCss3Alt size={16} className="skill-item-icon" />
                                            CSS
                                        </li>
                                    </ul>
                                </div>

                                <div className="skill-category">
                                    <h4>
                                        <MdStorage size={20} className="skill-icon" />
                                        Backend
                                    </h4>
                                    <ul>

                                        <li>
                                            <SiPython size={16} className="skill-item-icon" />
                                            Python
                                        </li>
                                        <li>
                                            <SiFirebase size={16} className="skill-item-icon" />
                                            Firebase
                                        </li>
                                        <li>
                                            <SiFlask size={16} className="skill-item-icon" />
                                            Flask
                                        </li>
                                        <li>
                                            <SiDjango size={16} className="skill-item-icon" />
                                            Django
                                        </li>
                                    </ul>
                                </div>

                                <div className="skill-category">
                                    <h4>
                                        <MdDesignServices size={20} className="skill-icon" />
                                        Design
                                    </h4>
                                    <ul>
                                        <li>
                                            <MdBrush size={16} className="skill-item-icon" />
                                            UI/UX Design
                                        </li>
                                        <li>
                                            <SiFigma size={16} className="skill-item-icon" />
                                            Figma
                                        </li>
                                        <li>
                                            <SiCanva size={16} className="skill-item-icon" />
                                            Canva
                                        </li>
                                        <li>
                                            <SiAdobephotoshop size={16} className="skill-item-icon" />
                                            Photoshop
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="cta-container">
                            <button className="cta-button" onClick={scrollToProjects}>
                                View My Projects
                            </button>

                            <a href='https://www.linkedin.com/in/supremshrestha/details/certifications/' target="_blank" rel="noopener noreferrer">
                                <button className="cta-button-outline">View My Certifications</button>
                            </a>
                        </div>
                    </div>

                    <div className="about-visual">
                        <div className="visual-container">
                            <div className="experience-badge">
                                <span className="years">2+</span>
                                <span className="label">Years Experience</span>
                            </div>

                            <div className="project-badge">
                                <span className="count">4+</span>
                                <span className="label">Projects Completed</span>
                            </div>

                            <div className="client-badge">
                                <span className="count">∞</span>
                                <span className="label">Curiosity Level</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;