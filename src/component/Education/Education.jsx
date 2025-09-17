import React from 'react';
import './Education.css';

const Education = () => {
    return (
        <section className="education-section" id="education">
    <div className="education-container">
        <div className="education-header">
            <h2 className="education-title">Education Journey</h2>
            <div className="title-underline"></div>
        </div>

        <div className="education-timeline">
            <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                    <h3>Bachelor's in Computer Science</h3>
                    <p className="institution">Sunway College / Birmingham University</p>
                    <p className="duration">2024 - Ongoing</p>
                    <p className="description">
                        I am pursuing a BSc (Hons) in Computer Science with specialization in 
                        Artificial Intelligence, developing strong skills in coding, data analysis, 
                        and building intelligent software solutions.
                    </p>
                </div>
            </div>

            <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                    <h3>+2 in Science</h3>
                    <p className="institution">Reliance International Academy</p>
                    <p className="duration">2022 - 2024</p>
                    <p className="description">
                        As a high school Science and Computer Science major, I developed a strong 
                        foundation in logical problem-solving and technical skills, sparking my 
                        passion for building with purpose.
                    </p>
                </div>
            </div>

            <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                    <h3>High School</h3>
                    <p className="institution">Paragon Public School</p>
                    <p className="duration">2012 - 2022</p>
                    <p className="description">
                        In Grade 10, my focus on Computer Science and Mathematics honed my 
                        analytical thinking and sparked my interest in creating logical, 
                        data-driven solutions.
                    </p>
                </div>
            </div>
        </div>
    </div>
</section>
    );
};

export default Education;