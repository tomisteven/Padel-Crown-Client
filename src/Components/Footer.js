import React from 'react';
import './Footer.css';
import { Icon } from 'semantic-ui-react';
import logo from '../assets/CataLoger.webp';

const Footer = () => {
  return (
    <footer  id='contacto'>
      <div className="footer-container">
        <div className="footer-column">
          <img src={logo} alt="Logo" className="logo-footer" />
        </div>
        <div className="footer-column">
          <h4>Contacto</h4>
          <div className="contact-card">
            <div className="contact-info">
              <i className="fa fa-phone"></i>
              <p>+1 234 5678</p>
            </div>
            <div className="contact-info">
              <i className="fa fa-envelope"></i>
              <p>info@example.com</p>
            </div>
            <div className="contact-info">
              <i className="fa fa-map-marker"></i>
              <p>123 Main St, City, Country</p>
            </div>
            <div className="contact-info">
              <i className="fa fa-clock"></i>
              <p>Mon - Fri: 9:00 AM - 5:00 PM</p>
            </div>
          </div>
        </div>
        <div className="footer-column">
          <h4>Redes Sociales</h4>
          <div className="social-links">
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="social-icon">
              <Icon name='facebook' color="blue" size='big' />
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="social-icon">
              <Icon name='whatsapp' color='green' size='big' />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className="social-icon">
              <Icon name='instagram' color="pink" size='big' />
            </a>
            <a href="https://www.twitter.com/" target="_blank" rel="noreferrer" className="social-icon">
              <Icon name='twitter' color="teal" size='big' />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="social-icon">
              <Icon name='linkedin' color='orange' size='big' />
            </a>
        </div>
        </div>
      </div>
      <div className='footer-copy'>
        <p className="footer-copy-p">&#169; 2023 - Todos los derechos reservados - Creado y Diseñado por Digital Code</p>
      </div>
    </footer>
  );
};

export default Footer;
