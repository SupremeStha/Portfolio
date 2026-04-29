import './Education.css';

const TIMELINE = [
  {
    title: "Bachelor's in Computer Science",
    institution: 'Sunway College / Birmingham University',
    duration: '2024 - Ongoing',
    description:
      'I am pursuing a BSc (Hons) in Computer Science with specialization in Artificial Intelligence, developing strong skills in coding, data analysis, and building intelligent software solutions.',
  },
  {
    title: '+2 in Science',
    institution: 'Reliance International Academy',
    duration: '2022 - 2024',
    description:
      'As a high school Science and Computer Science major, I developed a strong foundation in logical problem-solving and technical skills, sparking my passion for building with purpose.',
  },
  {
    title: 'High School',
    institution: 'Paragon Public School',
    duration: '2012 - 2022',
    description:
      'In Grade 10, my focus on Computer Science and Mathematics honed my analytical thinking and sparked my interest in creating logical, data-driven solutions.',
  },
];

const Education = () => (
  <section className="education-section" id="education">
    <div className="education-container">
      <div className="education-header">
        <h2 className="education-title">Education Journey</h2>
        <div className="title-underline" aria-hidden="true" />
      </div>

      <div className="education-timeline">
        {TIMELINE.map((item) => (
          <div className="timeline-item" key={item.title}>
            <div className="timeline-dot" aria-hidden="true" />
            <div className="timeline-content">
              <h3>{item.title}</h3>
              <p className="institution">{item.institution}</p>
              <p className="duration">{item.duration}</p>
              <p className="description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Education;
