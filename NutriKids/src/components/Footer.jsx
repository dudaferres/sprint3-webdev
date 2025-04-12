import React from 'react';
import { Icon } from '@iconify/react';

const Footer = () => {
  return (
    <footer>
      <div className="container py-5">
        <div className="row g-4">
          <div className="col-md-4">
            <h3>NutriKids</h3>
            <p className="text-muted mb-4">
              Ajudando pais a cuidarem melhor da nutrição de seus bebês com informações precisas e confiáveis.
            </p>
            <div className="social-links d-flex gap-3">
              <a href="#" aria-label="Facebook">
                <Icon icon="mdi:facebook" width="20" height="20" className="icon" />
              </a>
              <a href="#" aria-label="Instagram">
                <Icon icon="mdi:instagram" width="20" height="20" className="icon" />
              </a>
              <a href="#" aria-label="Twitter">
                <Icon icon="mdi:twitter" width="20" height="20" className="icon" />
              </a>
            </div>
          </div>
          
          <div className="col-md-4">
            <h3>Links Rápidos</h3>
            <ul className="list-unstyled quick-links">
              <li><a href="#sobre" className="text-muted">Sobre Nós</a></li>
              <li><a href="#calculadora" className="text-muted">Calculadora</a></li>
              <li><a href="#faq" className="text-muted">Perguntas Frequentes</a></li>
              <li><a href="#contato" className="text-muted">Contato</a></li>
            </ul>
          </div>
          
          <div className="col-md-4">
            <h3>Contato</h3>
            <ul className="list-unstyled contact-info">
              <li>
                <Icon icon="mdi:phone" className="icon" />
                <span>(11) 1234-5678</span>
              </li>
              <li>
                <Icon icon="mdi:email" className="icon" />
                <span>contato@nutrikids.com</span>
              </li>
              <li>
                <Icon icon="mdi:map-marker" className="icon" />
                <span>São Paulo, SP</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="copyright">
        <div className="container">
          <p className="text-center text-muted mb-0">
            © {new Date().getFullYear()} NutriKids. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 