import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

export const footerConfig = {
  logo: {
    src: '/logo.png',
    alt: 'Company Logo',
  },
  sections: [
    {
      title: 'Quick Links',
      links: [
        { text: 'Home', url: '/' },
        { text: 'Features', url: '/features' },
        { text: 'About', url: '/about' },
        { text: 'Contact', url: '/contact' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { text: 'Documentation', url: '/docs', external: true },
        { text: 'API Reference', url: '/api-docs', external: true },
        { text: 'Tutorials', url: '/tutorials' },
      ],
    },
    {
      title: 'Connect',
      links: [
        { text: 'GitHub', url: 'https://github.com/KingReevan', external: true, icon: <FaGithub /> },
        { text: 'LinkedIn', url: 'https://linkedin.com/company', external: true, icon: <FaLinkedin /> },
        { text: 'Twitter', url: 'https://twitter.com/yourhandle', external: true, icon: <FaTwitter /> },
        { text: 'Email Us', url: 'mailto:contact@example.com', icon: <FaEnvelope /> },
      ],
    },
    {
      title: 'About Us',
      content: 'We build amazing web applications using the MERN stack. Our team is dedicated to creating high-quality software solutions.',
    },
  ],
  copyrightText: `© ${new Date().getFullYear()} Your Awesome App. All rights reserved.`,
};