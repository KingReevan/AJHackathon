import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: "How do I plan a trip with Travel Tribe?",
      answer: "Simply enter your destination, travel dates, and preferences in our trip planner. Our AI will suggest personalized itineraries that you can customize."
    },
    {
      question: "Can I book flights and hotels through your platform?",
      answer: "Yes! We partner with major travel providers to offer seamless booking experiences for flights, hotels, and activities all in one place."
    },
    {
      question: "Is there a mobile app available?",
      answer: "Our mobile app is available for both iOS and Android, offering all the features of our web platform plus offline access to your itineraries."
    },
    {
      question: "How does the virtual tourism feature work?",
      answer: "Our virtual tours use 360° videos and photos to let you explore destinations from home. Some tours include live guides for interactive experiences."
    },
    {
      question: "What makes Travel Tribe different from other travel sites?",
      answer: "We focus on community-driven recommendations and AI-powered personalization to create truly unique travel experiences tailored just for you."
    }
  ];

  return (
    <section className="faq-section">
      <div className="section-header">
        <h2>Frequently Asked Questions</h2>
        <p>Find quick answers to common questions about our services</p>
      </div>

      <div className="faq-container">
        {faqItems.map((item, index) => (
          <div 
            key={index} 
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
            onClick={() => toggleFAQ(index)}
          >
            <div className="faq-question">
              <h3>{item.question}</h3>
              <span className="faq-icon">
                {activeIndex === index ? '−' : '+'}
              </span>
            </div>
            <div className="faq-answer">
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;