import React, { useState } from 'react';

const Contato = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    mensagem: ''
  });

  const handleFormChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('Dados do formulário:', formData);
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setFormData({
      nome: '',
      email: '',
      mensagem: ''
    });
  };

  return (
    <section id="contato" className="py-5">
      <div className="container">
        <h2 className="text-center text-primary mb-5">SAC - Atendimento</h2>
        <div className="card shadow-sm">
          <div className="card-body">
            <div className="row">
              <div className="col-md-6">
                <form onSubmit={handleFormSubmit}>
                  <div className="mb-3">
                    <label htmlFor="nome" className="form-label">Nome</label>
                    <input 
                      type="text" 
                      className="form-control"
                      id="nome" 
                      value={formData.nome}
                      onChange={handleFormChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">E-mail</label>
                    <input 
                      type="email" 
                      className="form-control"
                      id="email" 
                      value={formData.email}
                      onChange={handleFormChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="mensagem" className="form-label">Mensagem</label>
                    <textarea 
                      className="form-control"
                      id="mensagem" 
                      rows="4"
                      value={formData.mensagem}
                      onChange={handleFormChange}
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary w-100">Enviar Mensagem</button>
                </form>
              </div>
              <div className="col-md-6">
                <div className="h-100 d-flex flex-column justify-content-center">
                  <h3 className="text-primary mb-4">Outras formas de contato</h3>
                  <p className="text-muted mb-2">
                    <i className="bi bi-envelope me-2"></i>
                    Email: contato@nutrikids.com
                  </p>
                  <p className="text-muted mb-2">
                    <i className="bi bi-telephone me-2"></i>
                    Telefone: (11) 1234-5678
                  </p>
                  <p className="text-muted">
                    <i className="bi bi-clock me-2"></i>
                    Horário de atendimento: Seg-Sex, 8h às 18h
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contato; 