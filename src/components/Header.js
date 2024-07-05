import React from 'react';
import logo from '../images/logo.svg'; // Asegúrate de ajustar la ruta según la ubicación de tu archivo logo.svg

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="Aqui esta el logo" className="nav__logo"/>
      <nav className="nav">
        <ul className="nav__links">
          <li><a href="#nosotros" className="nav__link">Nuestra misión</a></li>
          <li><a href="#results" className="nav__link">Resultados</a></li>
          <li><a href="#team" className="nav__link">¿Quiénes somos?</a></li>
          <li><a href="#social" className="nav__link">Redes Sociales</a></li>
        </ul>
      </nav>
      <h1 className="header__title">
        <span className="header__span-accent">Segmentación de Clientes</span> Hackathoners
      </h1>
    </header>
  );
};

export default Header;
