import React from 'react';

const Sobre = () => {
  return (
    <section id="sobre" className="py-5">
      <div className="container">
        <h2 className="text-center text-primary mb-5">Sobre o NutriKids</h2>
        <div className="card shadow-sm p-4">
          <p className="text-muted">
            O NutriKids é uma ferramenta desenvolvida para auxiliar pais e responsáveis no cálculo da quantidade adequada de fórmula infantil para seus bebês. Nossa calculadora fornece recomendações personalizadas baseadas na idade e peso do bebê, seguindo as diretrizes nutricionais mais atualizadas.
          </p>
          <div className="row g-4 mt-4">
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <h3 className="text-primary">Precisão</h3>
                  <p className="text-muted mb-0">Cálculos baseados em diretrizes nutricionais atualizadas</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <h3 className="text-primary">Facilidade</h3>
                  <p className="text-muted mb-0">Interface intuitiva e fácil de usar</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center">
                  <h3 className="text-primary">Confiabilidade</h3>
                  <p className="text-muted mb-0">Recomendações seguras e personalizadas</p>
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