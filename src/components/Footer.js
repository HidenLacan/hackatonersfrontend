import React from 'react';
import logo from '../images/logo.svg'; // Asegúrate de ajustar la ruta según la ubicación de tu archivo logo.svg
import facebookIcon from '../images/facebook_white.svg';
import instagramIcon from '../images/instagram_white.svg';

const Footer = () => {
  return (
    <footer className="footer" id="social">
      <div className="footer__content">
        <img src={logo} alt="Aqui hay un logo" className="footer__logo"/>
        <div className="footer__social">
          <h3 className="footer__social-heading">Redes sociales</h3>
          <ul className="footer__list">
            <li className="footer__list-item">
              <a href="https://www.facebook.com/tripleten.latam/" className="footer__social-link">
                <img src={facebookIcon} alt="Aqui hay un logo de facebook" className="footer__social-icon"/> Facebook
              </a>
            </li>
            <li className="footer__list-item">
              <a href="https://www.instagram.com/tripleten.latam/" className="footer__social-link">
                <img src={instagramIcon} alt="Aqui hay un logo de instagram" className="footer__social-icon"/> Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="footer__copyright"> Copyright &#169; 2024 Hackathoners</p>
    </footer>
  );
};

export default Footer;
