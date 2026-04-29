import { useState, useEffect, useCallback, useMemo } from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import './HeroTitle.css';

const ROLES = ['Student', 'UI/UX Designer', 'Problem Solver', 'Creative Thinker'];

const SOCIALS = [
  {
    href: 'https://github.com/SupremeStha',
    label: 'GitHub',
    Icon: Github,
    external: true,
  },
  {
    href: 'https://www.linkedin.com/in/supremshrestha/',
    label: 'LinkedIn',
    Icon: Linkedin,
    external: true,
  },
  {
    href: 'mailto:ssuprim26@gmail.com',
    label: 'Email',
    Icon: Mail,
    external: false,
  },
];

const HeroTitle = () => {
  const [currentRole, setCurrentRole] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % ROLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToNext = useCallback(() => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  }, []);

  const scrollToProjects = useCallback(() => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  }, []);

  const role = useMemo(() => ROLES[currentRole], [currentRole]);

  return (
    <section className="hero-title-container" id="home">
      <div className="hero-content">
        <div className="hero-grid">
          <div className="hero-text-content">
            <h1 className="hero-name">
              Hi, I'm
              <span className="name-highlight">
                Suprem Shrestha
                <span className="name-underline" aria-hidden="true" />
              </span>
            </h1>

            <div className="role-container">
              <h2 className="role-text">
                I'm a{' '}
                <span className="role-highlight">
                  <span key={currentRole} className="role-changing">
                    {role}
                  </span>
                  <span className="role-underline" aria-hidden="true" />
                </span>
              </h2>
            </div>

            <p className="hero-description">
              I’m a CS student passionate about AI, data, and software development,
              building intelligent projects while constantly learning and growing.
            </p>

            <div className="button-container">
              {/* Bug fix: onClick was on inner span, not the button */}
              <button
                type="button"
                className="primary-button"
                onClick={scrollToProjects}
              >
                <span className="button-text">
                  View My Work
                  <span className="button-icon" aria-hidden="true">→</span>
                </span>
              </button>
            </div>

            <div className="social-container">
              {SOCIALS.map(({ href, label, Icon, external }) => (
                <a
                  key={label}
                  href={href}
                  className="social-link"
                  aria-label={label}
                  {...(external && {
                    target: '_blank',
                    rel: 'noopener noreferrer',
                  })}
                >
                  <span className="social-icon">
                    <Icon size={20} aria-hidden="true" />
                    {label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          <div className="photo-container">
            <div className="photo-wrapper">
              <div className="photo-placeholder">
                <div className="photo-content">
                  <img
                    src="/myphoto.png"
                    alt="Portrait of Suprem Shrestha"
                    loading="eager"
                    decoding="async"
                  />
                </div>
              </div>

              <div className="geometric-accent accent-1" aria-hidden="true" />
              <div className="geometric-accent accent-2" aria-hidden="true" />
              <div className="geometric-line line-1" aria-hidden="true" />
              <div className="geometric-line line-2" aria-hidden="true" />
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={scrollToNext}
          className="scroll-button"
          aria-label="Scroll to next section"
        >
          <div className="scroll-content">
            <span className="scroll-text">Scroll to explore</span>
            <span className="scroll-icon" aria-hidden="true">↓</span>
          </div>
        </button>
      </div>
    </section>
  );
};

export default HeroTitle;
