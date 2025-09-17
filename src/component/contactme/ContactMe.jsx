import React, { useState } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import './ContactMe.css';
import { FaPaperPlane } from 'react-icons/fa';


const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you for your message! I will get back to you soon.');
        setFormData({ name: '', email: '', message: '' });
    };

    return (
        <section className="contact-section" id="contact">
            <div className="contact-container">
                <div className="contact-header">
                    <h2 className="contact-title">Get In Touch</h2>
                    <div className="title-underline"></div>
                    <p className="contact-subtitle">
                        Have a question or want to work together? Feel free to contact me!
                    </p>
                </div>

                <div className="contact-content">
                    <div className="contact-info">
                        <h3>Contact Information</h3>
                        <div className="contact-item">
                            <div className="contact-icon">📧</div>
                            <div className="contact-details">
                                <h4>Email</h4>
                                <p>suprim26@gmail.com</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon">📱</div>
                            <div className="contact-details">
                                <h4>Phone</h4>
                                <p>+977 - 98--------</p>
                            </div>
                        </div>

                        <div className="contact-item">
                            <div className="contact-icon">📍</div>
                            <div className="contact-details">
                                <h4>Location</h4>
                                <p>Kathmandu, Nepal</p>
                            </div>
                        </div>

                        <div className="social-links">
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
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                rows="5"
                                value={formData.message}
                                onChange={handleChange}
                                required
                            ></textarea>
                        </div>

                        <button type="submit" className="submit-button">
                            <FaPaperPlane />
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;