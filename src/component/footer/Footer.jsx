import { useCallback } from 'react';
import './Footer.css';

const NAV_LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const SOCIAL_LINKS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/supremshrestha/' },
  { label: 'GitHub', href: 'https://github.com/SupremeStha' },
];

const Footer = () => {
  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const scrollToSection = useCallback((sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }, []);

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
              {NAV_LINKS.map(({ id, label }) => (
                <a
                  key={id}
                  href={`#${id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    if (id === 'home') scrollToTop();
                    else scrollToSection(id);
                  }}
                >
                  {label}
                </a>
              ))}
            </div>

            <div className="link-group">
              <h4>Connect</h4>
              {SOCIAL_LINKS.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {label}
                </a>
              ))}
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
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
            >
              Back to Top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
