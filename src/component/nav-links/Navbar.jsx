import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('home');

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setActiveSection(sectionId);
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about', 'education', 'projects', 'contact'];
            const scrollPosition = window.scrollY + 100; // Offset for better detection

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const offsetTop = element.offsetTop;
                    const offsetBottom = offsetTop + element.offsetHeight;

                    if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header>
            <a
                href='#home'
                className='portfolio-logo'
                onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('home');
                }}
            >
                My Portfolio
            </a>

            <div className='navbar'>
                <a
                    href='#home'
                    className={`navlinks ${activeSection === 'home' ? 'active' : ''}`}
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('home');
                    }}
                >
                    Home
                </a>
                <a
                    href='#about'
                    className={`navlinks ${activeSection === 'about' ? 'active' : ''}`}
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('about');
                    }}
                >
                    About
                </a>
                <a
                    href='#education'
                    className={`navlinks ${activeSection === 'education' ? 'active' : ''}`}
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('education');
                    }}
                >
                    Education
                </a>
                <a
                    href='#projects'
                    className={`navlinks ${activeSection === 'projects' ? 'active' : ''}`}
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('projects');
                    }}
                >
                    Projects
                </a>
                <a
                    href='#contact'
                    className={`navlinks ${activeSection === 'contact' ? 'active' : ''}`}
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('contact');
                    }}
                >
                    Contact
                </a>
            </div>
        </header>
    );
};

export default Navbar;