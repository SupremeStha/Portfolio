import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import './HeroTitle.css';

const HeroTitle = () => {
    const [currentRole, setCurrentRole] = useState(0);

    const roles = [
        "Full Stack Developer",
        "UI/UX Designer",
        "Problem Solver",
        "Creative Thinker"
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRole((prev) => (prev + 1) % roles.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const scrollToNext = () => {
        window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
        });
    };

    const scrollToProjects = () => {
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
            projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="hero-title-container" id="home">
            <div className="hero-content">
                <div className="hero-grid">
                    <div className="hero-text-content">
                        <h1 className="hero-name">
                            Hi, I'm
                            <span className="name-highlight">
                                Suprem Shrestha
                                <div className="name-underline"></div>
                            </span>
                        </h1>

                        <div className="role-container">
                            <h2 className="role-text">
                                I'm a{' '}
                                <span className="role-highlight">
                                    <span key={currentRole} className="role-changing">
                                        {roles[currentRole]}
                                    </span>
                                    <span className="role-underline"></span>
                                </span>
                            </h2>
                        </div>

                        <p className="hero-description">
                            I’m a CS student passionate about AI, data, and software development, building intelligent projects while constantly learning and growing.
                        </p>

                        <div className="button-container">
                            <button className="primary-button">
                                <span className="button-text" onClick={scrollToProjects}>
                                    View My Work
                                    <span className="button-icon">→</span>
                                </span>
                            </button>
                        </div>

                        <div className="social-container">
                            <a href="https://github.com/SupremeStha" className="social-link" label="GitHub" target="_blank" rel="noopener noreferrer">
                                <span className="social-icon">
                                    <Github size={20} />
                                    GitHub
                                </span>
                            </a>
                            <a href="https://www.linkedin.com/in/supremshrestha/" className="social-link" label="LinkedIn" target="_blank" rel="noopener noreferrer">
                                <span className="social-icon">
                                    <Linkedin size={20} />
                                    LinkedIn
                                </span>
                            </a>
                            <a href="mailto:ssuprim26@gmail.com" className="social-link" label="Email" target="_blank" rel="noopener noreferrer">
                                <span className="social-icon">
                                    <Mail size={20} />
                                    Email
                                </span>
                            </a>
                        </div>
                    </div>

                    <div className="photo-container">
                        <div className="photo-wrapper">
                            <div className="photo-placeholder">
                                <div className="photo-content">
                                    <img src="./myphoto.png" alt="" />
                                </div>
                            </div>

                            <div className="geometric-accent accent-1"></div>
                            <div className="geometric-accent accent-2"></div>
                            <div className="geometric-line line-1"></div>
                            <div className="geometric-line line-2"></div>
                        </div>
                    </div>
                </div>

                <button
                    onClick={scrollToNext}
                    className="scroll-button"
                    label="Scroll to next section"
                >
                    <div className="scroll-content">
                        <span className="scroll-text">Scroll to explore</span>
                        <span className="scroll-icon">↓</span>
                    </div>
                </button>
            </div>
        </section>
    );
};

export default HeroTitle;