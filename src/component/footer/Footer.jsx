import React from 'react';
import './Footer.css';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="footer-section">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-info">
                        <h3>Portfolio</h3>
                    </div>

                    <div className="footer-links">
                        <div className="link-group">
                            <h4>Navigation</h4>
                            <a href="#home" onClick={(e) => {
                                e.preventDefault();
                                scrollToTop();
                            }}>Home</a>
                            <a href="#about" onClick={(e) => {
                                e.preventDefault();
                                scrollToSection('about');
                            }}>About</a>
                            <a href="#education" onClick={(e) => {
                                e.preventDefault();
                                scrollToSection('education');
                            }}>Education</a>
                            <a href="#projects" onClick={(e) => {
                                e.preventDefault();
                                scrollToSection('projects');
                            }}>Projects</a>
                            <a href="#contact" onClick={(e) => {
                                e.preventDefault();
                                scrollToSection('contact');
                            }}>Contact</a>
                        </div>

                        <div className="link-group">
                            <h4>Connect</h4>
                            <a href="#">LinkedIn</a>
                            <a href="#">GitHub</a>
                        </div>

                        <div className="link-group">
                            <h4>Contact Info</h4>
                            <p>ssuprim26@gmail.com</p>
                            <p>Kathmandu, Nepal</p>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="copyright">
                        <p>&copy; 2025 Suprem Shrestha. All rights reserved.</p>
                    </div>

                    <div className="back-to-top">
                        <a href="#home" onClick={(e) => {
                            e.preventDefault();
                            scrollToTop();
                        }}>Back to Top ↑</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;