import { useState, useEffect, useCallback, useRef } from 'react';
import './Navbar.css';

const SECTIONS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const tickingRef = useRef(false);

  const scrollToSection = useCallback((sectionId) => {
    const element = document.getElementById(sectionId);
    if (!element) return;
    element.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(sectionId);
  }, []);

  // Throttled scroll-spy via rAF; avoids re-render storms.
  useEffect(() => {
    const update = () => {
      tickingRef.current = false;
      const scrollPosition = window.scrollY + 120;
      let current = SECTIONS[0].id;
      for (const { id } of SECTIONS) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (scrollPosition >= el.offsetTop) current = id;
      }
      setActiveSection((prev) => (prev === current ? prev : current));
    };

    const onScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;
      requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header>
      <a
        href="#home"
        className="portfolio-logo"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection('home');
        }}
      >
        My Portfolio
      </a>

      <nav className="navbar" aria-label="Primary">
        {SECTIONS.map(({ id, label }) => (
          <a
            key={id}
            href={`#${id}`}
            className={`navlinks ${activeSection === id ? 'active' : ''}`}
            aria-current={activeSection === id ? 'page' : undefined}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(id);
            }}
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;
