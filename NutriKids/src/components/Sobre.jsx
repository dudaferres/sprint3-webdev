import React from "react";

const Sobre = () => {
  return (
    <section className="about-section">
      <div className="container">
        <div className="about-title">
          <h2>Sobre o NutriKids</h2>
        </div>
        <div className="about-card">
          <p>
            O NutriKids é uma ferramenta desenvolvida para auxiliar pais e
            responsáveis no cálculo da quantidade adequada de fórmula infantil
            para seus bebês. Nossa calculadora fornece recomendações
            personalizadas baseadas na idade e peso do bebê, seguindo as
            diretrizes nutricionais mais atualizadas.
          </p>
          <div className="about-features">
            <div className="row g-4">
              <div className="col-md-4">
                <div className="feature-card">
                  <h3>Precisão</h3>
                  <p>
                    Cálculos baseados em diretrizes nutricionais atualizadas
                  </p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="feature-card">
                  <h3>Facilidade</h3>
                  <p>Interface intuitiva e fácil de usar</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="feature-card">
                  <h3>Confiabilidade</h3>
                  <p>Recomendações seguras e personalizadas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
