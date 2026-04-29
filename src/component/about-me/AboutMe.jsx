import { useCallback } from 'react';
import { FaReact, FaJs, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import {
  SiDjango,
  SiPython,
  SiFirebase,
  SiFlask,
  SiFigma,
  SiCanva,
  SiAdobephotoshop,
} from 'react-icons/si';
import {
  MdCode,
  MdStorage,
  MdDesignServices,
  MdBrush,
} from 'react-icons/md';
import './AboutMe.css';

const SKILL_GROUPS = [
  {
    title: 'Frontend',
    Icon: MdCode,
    items: [
      { name: 'React', Icon: FaReact },
      { name: 'JavaScript', Icon: FaJs },
      { name: 'HTML', Icon: FaHtml5 },
      { name: 'CSS', Icon: FaCss3Alt },
    ],
  },
  {
    title: 'Backend',
    Icon: MdStorage,
    items: [
      { name: 'Python', Icon: SiPython },
      { name: 'Firebase', Icon: SiFirebase },
      { name: 'Flask', Icon: SiFlask },
      { name: 'Django', Icon: SiDjango },
    ],
  },
  {
    title: 'Design',
    Icon: MdDesignServices,
    items: [
      { name: 'UI/UX Design', Icon: MdBrush },
      { name: 'Figma', Icon: SiFigma },
      { name: 'Canva', Icon: SiCanva },
      { name: 'Photoshop', Icon: SiAdobephotoshop },
    ],
  },
];

const STATS = [
  { value: '2+', label: 'Years Experience', className: 'experience-badge', valueClass: 'years' },
  { value: '4+', label: 'Projects Completed', className: 'project-badge', valueClass: 'count' },
  { value: '∞', label: 'Curiosity Level', className: 'client-badge', valueClass: 'count' },
];

const AboutMe = () => {
  const scrollToProjects = useCallback(() => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-header">
          <h2 className="about-title">About Me</h2>
          <div className="title-underline" aria-hidden="true" />
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
                {SKILL_GROUPS.map(({ title, Icon, items }) => (
                  <div className="skill-category" key={title}>
                    <h4>
                      <Icon size={20} className="skill-icon" aria-hidden="true" />
                      {title}
                    </h4>
                    <ul>
                      {items.map(({ name, Icon: ItemIcon }) => (
                        <li key={name}>
                          <ItemIcon size={16} className="skill-item-icon" aria-hidden="true" />
                          {name}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="cta-container">
              <button
                type="button"
                className="cta-button"
                onClick={scrollToProjects}
              >
                View My Projects
              </button>

              <a
                href="https://www.linkedin.com/in/supremshrestha/details/certifications/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button type="button" className="cta-button-outline">
                  View My Certifications
                </button>
              </a>
            </div>
          </div>

          <div className="about-visual">
            <div className="visual-container">
              {STATS.map(({ value, label, className, valueClass }) => (
                <div className={className} key={label}>
                  <span className={valueClass}>{value}</span>
                  <span className="label">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
