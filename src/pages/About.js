import React, { useState } from 'react';
import './aboutus.css';

const TeamMemberCard = ({ name, role, photo, linkedin, github, twitter }) => (
  <div className="team-card">
    <img src={photo} alt={`${name}'s profile`} className="team-photo" />
    <h4>{name}</h4>
    <p>{role}</p>
    <div className="social-links">
      {linkedin && <a href={linkedin} target="_blank" rel="noreferrer" title="LinkedIn">🔗</a>}
      {github && <a href={github} target="_blank" rel="noreferrer" title="GitHub">🐱</a>}
      {twitter && <a href={twitter} target="_blank" rel="noreferrer" title="Twitter">🐦</a>}
    </div>
  </div>
);

const TestimonialCard = ({ quote, author, company }) => (
  <div className="testimonial-card">
    <p>“{quote}”</p>
    <strong>- {author}, {company}</strong>
  </div>
);

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={`faq-item ${open ? 'open' : ''}`} onClick={() => setOpen(!open)}>
      <div className="faq-question">
        {question}
        <span>{open ? '−' : '+'}</span>
      </div>
      {open && <div className="faq-answer">{answer}</div>}
    </div>
  );
};

const AboutUs = () => {
  const team = [
    { name: 'Joywin', role: 'OCR & NLP Developer', photo: 'https://via.placeholder.com/100', linkedin: '#', github: '#', twitter: '#' },
    { name: 'Reevan', role: 'Backend Developer', photo: 'https://via.placeholder.com/100', linkedin: '#', github: '#', twitter: '#' },
    { name: 'Alston', role: 'Frontend Developer', photo: 'https://via.placeholder.com/100', linkedin: '#', github: '#', twitter: '#' },
  ];

  const testimonials = [
    { quote: 'Delivered great work!', author: 'Client A', company: 'CompanyX' },
    { quote: 'Highly recommend their team.', author: 'Client B', company: 'StartUpY' },
    { quote: 'Exceptional quality and support.', author: 'Client C', company: 'TechCorp' },
    { quote: 'Very professional and timely.', author: 'Client D', company: 'InnovateX' },
  ];

  const faqs = [
    { question: 'What stack do you use?', answer: 'We use the MERN stack (MongoDB, Express, React, Node.js).' },
    { question: 'Can startups hire you?', answer: 'Yes, we love working with startups!' },
    { question: 'Do you offer remote work?', answer: 'Absolutely! We have a fully remote-friendly workflow.' },
    { question: 'How can I contact you?', answer: 'Use the Contact Us button below or email us at contact@ourteam.com.' },
  ];

  const offices = [
    { city: 'New York', address: '123 5th Ave, New York, NY 10001', phone: '+1 212-555-1234' },
    { city: 'London', address: '456 Baker Street, London, UK NW1 6XE', phone: '+44 20 7946 0958' },
    { city: 'Bangalore', address: '789 MG Road, Bangalore, India 560001', phone: '+91 80 1234 5678' },
  ];

  return (
    <div className="about-container">
      <header className="hero-section">
        <h1>About Us</h1>
        <p>We are a dynamic team building modern web solutions.</p>
      </header>

      <section className="team-section">
        <h2>Meet the Team</h2>
        <div className="team-grid">
          {team.map((member, idx) => <TeamMemberCard key={idx} {...member} />)}
        </div>
      </section>

      <section className="testimonial-section">
        <h2>Testimonials</h2>
        <div className="testimonial-grid">
          {testimonials.map((item, idx) => <TestimonialCard key={idx} {...item} />)}
        </div>
      </section>

      <section className="faq-section">
        <h2>FAQs</h2>
        {faqs.map((item, idx) => <FAQItem key={idx} {...item} />)}
      </section>

      <section className="office-section">
        <h2>Our Offices</h2>
        <div className="office-grid">
          {offices.map((office, idx) => (
            <div key={idx} className="office-card">
              <h3>{office.city}</h3>
              <p>{office.address}</p>
              <p>📞 {office.phone}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="cta-section">
        <h2>Join Our Team</h2>
        <p>We're hiring passionate developers and designers!</p>
        <button className="contact-button">Contact Us</button>
      </footer>
    </div>
  );
};

export default AboutUs;
