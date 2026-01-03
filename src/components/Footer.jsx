import React from 'react';

const socialLinks = [
  {
    icon: 'fab fa-facebook-f',
    link: 'https://www.facebook.com/profile.php?id=61565031476448&mibextid=ZbWKwL',
  },
  {
    icon: 'fab fa-github',
    link: 'https://github.com/tanmay0329',
  },
  {
    icon: 'fab fa-instagram',
    link: 'https://www.instagram.com/_tanmay_bora_',
  },
  {
    icon: 'fab fa-linkedin-in',
    link: 'https://www.linkedin.com/in/tanmay-bora',
  },
  {
    icon: 'fas fa-code', // LeetCode
    link: 'https://leetcode.com/tan_may29',
  },
];

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-bottom">
        <div className="footer-columns">
          {/* Column 1: Brand */}
          <div className="footer-col brand-col">
            <h3 className="footer-brand">Tanmay Bora</h3>
            <p className="footer-desc">
              Passionate about technology, sustainability, and leadership. Always
              driving to learn and grow.
            </p>
            <div className="footer-socials">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col links-col">
            <h3 className="col-heading">Quick Links</h3>
            <ul className="footer-links-list">
              <li>
                <div onClick={() => window.scrollTo(0, 0)}>
                  <a href="/" style={{ pointerEvents: 'none' }}>
                    Home
                  </a>
                </div>
              </li>
              <li>
                <a href="/projects">Projects</a>
              </li>
              <li>
                <a href="/achievements">Achievements</a>
              </li>
              <li>
                <a href="#contact">Contact Me</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="footer-col contact-col">
            <h3 className="col-heading">Contact Us</h3>
            <ul className="footer-contact-list">
              <li>
                <i className="fas fa-envelope"></i>
                <a href="mailto:tanmay.bora221@vit.edu">
                  tanmay.bora221@vit.edu
                </a>
              </li>
              <li>
                <i className="fas fa-phone"></i>
                <span>+91 9404889632</span>
              </li>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                <span>Pune, Maharashtra, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer-copyright">
          <p>
            Copyright © {new Date().getFullYear()} All rights reserved | This
            portfolio website template is created by Tanmay Bora.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
