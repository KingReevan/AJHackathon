import React from 'react';
import PropTypes from 'prop-types';
import './Footer.css';

const Footer = ({ sections, copyrightText, logo }) => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {logo && (
          <div className="footer-logo">
            <img src={logo.src} alt={logo.alt} />
          </div>
        )}
        
        <div className="footer-sections">
          {sections.map((section, index) => (
            <div key={index} className="footer-section">
              <h3 className="footer-section-title">{section.title}</h3>
              {section.links ? (
                <ul className="footer-links">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a href={link.url} target={link.external ? "_blank" : "_self"} rel="noopener noreferrer">
                        {link.icon && <span className="footer-icon">{link.icon}</span>}
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="footer-content">{section.content}</p>
              )}
            </div>
          ))}
        </div>
        
        <div className="footer-bottom">
          <p>{copyrightText}</p>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  sections: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      links: PropTypes.arrayOf(
        PropTypes.shape({
          text: PropTypes.string.isRequired,
          url: PropTypes.string.isRequired,
          external: PropTypes.bool,
          icon: PropTypes.node,
        })
      ),
      content: PropTypes.string,
    })
  ).isRequired,
  copyrightText: PropTypes.string.isRequired,
  logo: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }),
};

Footer.defaultProps = {
  copyrightText: `© ${new Date().getFullYear()} My App. All rights reserved.`,
};

export default Footer;