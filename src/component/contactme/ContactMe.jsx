import { useState, useCallback } from 'react';
import { Github, Linkedin } from 'lucide-react';
import { FaPaperPlane } from 'react-icons/fa';
import './ContactMe.css';

const INITIAL_FORM = { name: '', email: '', message: '' };

const CONTACT_INFO = [
  { icon: '📧', label: 'Email', value: 'ssuprim26@gmail.com' },
  { icon: '📱', label: 'Phone', value: '+977 - 98--------' },
  { icon: '📍', label: 'Location', value: 'Kathmandu, Nepal' },
];

const SOCIALS = [
  { href: 'https://github.com/SupremeStha', label: 'GitHub', Icon: Github },
  { href: 'https://www.linkedin.com/in/supremshrestha/', label: 'LinkedIn', Icon: Linkedin },
];

const Contact = () => {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [submitting, setSubmitting] = useState(false);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    setSubmitting(true);
    // Open user's mail client as a graceful fallback (no backend wired up).
    const subject = encodeURIComponent(`Portfolio contact from ${formData.name}`);
    const body = encodeURIComponent(
      `${formData.message}\n\n— ${formData.name} (${formData.email})`
    );
    window.location.href = `mailto:ssuprim26@gmail.com?subject=${subject}&body=${body}`;
    setFormData(INITIAL_FORM);
    setSubmitting(false);
  }, [formData]);

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">Get In Touch</h2>
          <div className="title-underline" aria-hidden="true" />
          <p className="contact-subtitle">
            Have a question or want to work together? Feel free to contact me!
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <h3>Contact Information</h3>

            {CONTACT_INFO.map(({ icon, label, value }) => (
              <div className="contact-item" key={label}>
                <div className="contact-icon" aria-hidden="true">{icon}</div>
                <div className="contact-details">
                  <h4>{label}</h4>
                  <p>{value}</p>
                </div>
              </div>
            ))}

            <div className="social-links">
              {SOCIALS.map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  className="social-link"
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="social-icon">
                    <Icon size={20} aria-hidden="true" />
                    {label}
                  </span>
                </a>
              ))}
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                autoComplete="name"
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
                autoComplete="email"
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
              />
            </div>

            <button type="submit" className="submit-button" disabled={submitting}>
              <FaPaperPlane aria-hidden="true" />
              {submitting ? 'Sending…' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
