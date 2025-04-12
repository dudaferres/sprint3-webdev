import React from 'react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky-top">
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand text-primary fw-bold fs-4" href="#home">
            NutriKids
          </a>
          <button 
            className="navbar-toggler" 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarNav"
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link text-dark fw-medium px-3" href="#sobre">Sobre</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark fw-medium px-3" href="#calculadora">Calculadora</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark fw-medium px-3" href="#faq">FAQ</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-dark fw-medium px-3" href="#contato">Contato</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header; 