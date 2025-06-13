import React from "react";
import { Container, Row, Col, Accordion } from "react-bootstrap";

const FAQ = () => {
  const faqItems = [
    {
      question: "Como calcular a quantidade correta de fórmula?",
      answer:
        "A quantidade de fórmula varia de acordo com a idade e peso do bebê. Use nossa calculadora para obter a medida exata baseada nas características do seu bebê.",
    },
    {
      question: "Com que frequência devo alimentar meu bebê?",
      answer:
        "Recém-nascidos geralmente precisam ser alimentados a cada 2-3 horas. Conforme o bebê cresce, o intervalo entre as mamadas aumenta. Consulte um pediatra para orientações específicas.",
    },
    {
      question: "Como preparar a fórmula corretamente?",
      answer:
        "Siga sempre as instruções do fabricante. Use água fervida e resfriada, meça a quantidade exata de pó e água, e agite bem até dissolver completamente.",
    },
    {
      question: "Posso guardar a fórmula preparada?",
      answer:
        "A fórmula preparada deve ser consumida em até 1 hora à temperatura ambiente ou em até 24 horas se refrigerada. Nunca congele a fórmula preparada.",
    },
    {
      question: "Como saber se meu bebê está recebendo nutrição suficiente?",
      answer:
        "Observe os sinais de saciedade, ganho de peso adequado, e número de fraldas molhadas por dia. Consulte um pediatra regularmente para acompanhamento do desenvolvimento.",
    },
  ];

  return (
    <section className="faq-section" id="faq">
      <Container>
        <div className="faq-title">
          <h2>Perguntas Frequentes</h2>
          <p>Tire suas dúvidas sobre alimentação infantil</p>
        </div>
        <Row className="justify-content-center">
          <Col lg={8}>
            <div className="faq-card">
              <Accordion className="faq-accordion">
                {faqItems.map((item, index) => (
                  <Accordion.Item key={index} eventKey={index.toString()}>
                    <Accordion.Header>{item.question}</Accordion.Header>
                    <Accordion.Body>{item.answer}</Accordion.Body>
                  </Accordion.Item>
                ))}
              </Accordion>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default FAQ;
