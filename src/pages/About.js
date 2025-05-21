import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import './aboutus.css';

const TeamMemberCard = ({ name, role, photo, linkedin, github, twitter }) => (
  <div className="team-card">
    <img src={photo} alt={`${name}'s profile`} className="team-photo" />
    <h4>{name}</h4>
    <p>{role}</p>
    <div className="social-links">
      {linkedin && <a href={linkedin} target="_blank" rel="noreferrer"><FaLinkedin /></a>}
      {github && <a href={github} target="_blank" rel="noreferrer"><FaGithub /></a>}
      {twitter && <a href={twitter} target="_blank" rel="noreferrer"><FaTwitter /></a>}
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
    <div
      className={`faq-item ${open ? 'active' : ''}`}
      onClick={() => setOpen(!open)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') setOpen(!open);
      }}
    >
      <div className="faq-question">
        {question}
        <span>{open ? '−' : '+'}</span>
      </div>
      <div className="faq-answer">{answer}</div>
    </div>
  );
};

const AboutUs = () => {
  const team = [
    {
      name: 'Joywin Neil Lasrado',
      role: 'CFO',
      photo: 'https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?cs=srgb&dl=action-asphalt-auto-210019.jpg&fm=jpg',
      linkedin: 'https://www.linkedin.com/in/joywinneillasrado/',
      github: 'https://github.com/joywinNeilLasrado',
      twitter: 'https://x.com/reevan_rego',
    },
    {
      name: 'Reevan Dmello',
      role: 'MD',
      photo: 'https://s.france24.com/media/display/451ed2b8-eed6-11ea-afdd-005056bf87d6/w:1280/p:1x1/messi-1805.jpg',
      linkedin: 'https://in.linkedin.com/in/reevan-d-mello-14563725a',
      github: 'https://github.com/KingReevan',
      twitter: 'https://x.com/reevan_rego',
    },
    {
      name: 'Alston Mendonca',
      role: 'CEO',
      photo: 'https://www.tarshi.net/inplainspeak/wp-content/uploads/2019/10/IMG-20190923-WA0014.jpg',
      linkedin: 'https://www.linkedin.com/in/alstonmendonca/',
      github: 'https://github.com/alstonmendonca',
      twitter: 'https://x.com/reevan_rego',
    },
  ];

  const testimonials = [
   { "quote": "The trip was flawlessly planned and exceeded all my expectations!", "author": "jenica", "company": "Hydrabad,India" },
  { "quote": "Highly recommend their personalized approach and local expertise.", "author": "achillas", "company": "panjim,India" },
  { "quote": "Amazing support from start to finish—made my vacation truly stress-free.", "author": "akhil", "company": "Mangaluru, India" },
  { "quote": "Professional, timely, and always attentive to our needs.", "author": "allen", "company": "Pune, India" },
  { "quote": "Exceptional attention to detail that brought our dream trip to life.", "author": "Tejas", "company": "bangaluru, India" },
  { "quote": "Their commitment to responsible tourism made our journey meaningful.", "author": "shanika", "company": "mumbai, India" }
  ];

  const faqs = [
     { "question": "What career opportunities do you offer?", "answer": "We offer roles in travel planning, customer service, marketing, and technology to build innovative travel solutions." },
  { "question": "How can I apply for a job?", "answer": "You can apply through our careers page on the website by submitting your resume and cover letter." },
  { "question": "Do you offer internships?", "answer": "Yes, we have internship programs for students and recent graduates looking to gain experience in the travel industry." },
  { "question": "What skills do you look for in candidates?", "answer": "We seek passionate, adaptable team players with strong communication skills and a love for travel and innovation." }
  ];

  return (
    <div className="about-container">
      {/* Hero Section with Logo */}
      <header className="hero-section">
        <img src="/logo.png" alt="Company Logo" className="company-logo" />
        <h1>About Us</h1>
        <p>
          We are a passionate team of travel enthusiasts dedicated to creating unforgettable journeys for modern explorers. With a perfect blend of innovation, local insights, and personalized service, we craft travel experiences that go beyond the ordinary. Whether you're seeking adventure, relaxation, or cultural immersion, our mission is to turn your travel dreams into reality. At the heart of everything we do is a commitment to quality, authenticity, and making every journey seamless and memorable.
        </p>
      </header>

      <section className="mission-vision-section">
        <h2>Our Mission & Vision</h2>
        <div className="mv-card-container">
          <div className="mv-card">
            <h3>Our Mission</h3>
            <p>
              Our mission is to create memorable travel experiences that connect people with cultures, nature, and adventure. We deliver personalized, seamless journeys using innovative solutions while promoting responsible and sustainable tourism.
            </p>
          </div>
          <div className="mv-card">
            <h3>Our Vision</h3>
            <p>
              Our vision is to be the leading travel company that inspires and empowers people worldwide to explore the beauty of our planet responsibly, creating unforgettable journeys that enrich lives and foster meaningful connections.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <h2>Meet the Team</h2>
        <div className="team-grid">
          {team.map((member, idx) => (
            <TeamMemberCard key={idx} {...member} />
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonial-section">
        <h2>Testimonials</h2>
        <div className="testimonial-grid">
          {testimonials.map((item, idx) => (
            <TestimonialCard key={idx} {...item} />
          ))}
        </div>
      </section>

      {/* Office Locations Section */}
      <section className="office-section">
        <h2>Office Locations</h2>
        <div className="office-list">
          <a href="https://goo.gl/maps/YourFirstOfficeGoogleMapsLink" target="_blank" rel="noreferrer" className="office-item">
            <span className="office-location-icon">📍</span>
            <h4>Managluru</h4>
            <p>hampankata,<br />Managluru, India- 574201</p>
          </a>
          <a href="https://goo.gl/maps/YourSecondOfficeGoogleMapsLink" target="_blank" rel="noreferrer" className="office-item">
            <span className="office-location-icon">📍</span>
            <h4>Urban Mumbai</h4>
            <p>bandara,<br />Urban Mumbai, India- 574233</p>
          </a>
          <a href="https://goo.gl/maps/YourThirdOfficeGoogleMapsLink" target="_blank" rel="noreferrer" className="office-item">
            <span className="office-location-icon">📍</span>
            <h4>Bangaluru</h4>
            <p>789 MG Road,<br />Bangaluru, India 560001</p>
          </a>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <h2>FAQs</h2>
        {faqs.map((item, idx) => (
          <FAQItem key={idx} {...item} />
        ))}
      </section>

      {/* Call to Action */}
      <footer className="cta-section">
        <h2>Join Our Team</h2>
        <p>We're hiring passionate developers and designers!</p>
        <button
  className="contact-button"
  onClick={() => (window.location.href = "mailto:joywinlasrado997@gmail.com?subject=Join%20Our%20Team")}
>
  Contact Us
</button>

      </footer>
    </div>
  );
};

export default AboutUs;
