import React from 'react';
import { FaQuestionCircle } from 'react-icons/fa';

const FAQ = () => {
  return (
    <section id="faq" className="py-5">
      <div className="container">
        <div className="text-center mb-5">
        <h2 className="text-primary">FAQ</h2>
          <h2 className="text-primary">Perguntas Frequentes</h2>
          <p className="text-muted">Tire suas dúvidas sobre a alimentação do seu bebê</p>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card shadow-sm">
              <div className="card-body">
                <div className="accordion" id="faqAccordion">
                  <div className="accordion-item border-0 mb-3">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq1">
                        Como calcular a quantidade de fórmula infantil?
                      </button>
                    </h2>
                    <div id="faq1" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                      <div className="accordion-body text-muted">
                        O cálculo é baseado no peso e idade do bebê. Nossa calculadora leva em consideração as recomendações da OMS e sociedades pediátricas para fornecer a quantidade ideal de fórmula por dia.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item border-0 mb-3">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq2">
                        Com que frequência devo alimentar meu bebê?
                      </button>
                    </h2>
                    <div id="faq2" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                      <div className="accordion-body text-muted">
                        A frequência das mamadas varia conforme a idade do bebê. Recém-nascidos precisam mamar a cada 2-3 horas, enquanto bebês mais velhos podem ter intervalos maiores. Nossa calculadora fornece recomendações específicas baseadas na idade do seu bebê.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item border-0 mb-3">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq3">
                        Como preparar a fórmula corretamente?
                      </button>
                    </h2>
                    <div id="faq3" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                      <div className="accordion-body text-muted">
                        Lave bem as mãos, esterilize os utensílios, use água fervida e resfriada a 70°C, adicione a quantidade exata de pó conforme indicado na embalagem. Misture bem e teste a temperatura antes de oferecer ao bebê.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item border-0 mb-3">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq4">
                        Quando devo consultar um pediatra?
                      </button>
                    </h2>
                    <div id="faq4" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                      <div className="accordion-body text-muted">
                        Consulte um pediatra se notar que seu bebê não está ganhando peso adequadamente, apresenta sintomas de alergia, refluxo excessivo, ou se tiver dúvidas sobre a alimentação. O acompanhamento regular com o pediatra é essencial.
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item border-0">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#faq5">
                        Como saber se meu bebê está recebendo fórmula suficiente?
                      </button>
                    </h2>
                    <div id="faq5" className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
                      <div className="accordion-body text-muted">
                        Os sinais de que seu bebê está bem alimentado incluem: ganho de peso adequado, 6-8 fraldas molhadas por dia, estado de alerta satisfatório e sono regular. Em caso de dúvidas, consulte seu pediatra.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 