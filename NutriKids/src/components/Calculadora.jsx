import React, { useState, useEffect } from 'react';
import { FaCalculator, FaBaby, FaWeight, FaHistory, FaTrash } from 'react-icons/fa';

const Calculadora = () => {
  const [bebeInfo, setBebeInfo] = useState(() => {
    const savedData = localStorage.getItem('bebeInfo');
    return savedData ? JSON.parse(savedData) : {
      idade: '',
      unidadeIdade: 'dias',
      peso: '',
      unidadePeso: 'kg',
      resultado: null
    };
  });

  // Salvar dados no localStorage sempre que houver mudanças
  useEffect(() => {
    localStorage.setItem('bebeInfo', JSON.stringify(bebeInfo));
  }, [bebeInfo]);

  const converterParaDias = (valor, unidade) => {
    if (!valor) return 0;
    const numero = parseFloat(valor);
    switch (unidade) {
      case 'dias':
        return numero;
      case 'semanas':
        return numero * 7;
      case 'meses':
        return numero * 30;
      default:
        return numero;
    }
  };

  const converterParaKg = (valor, unidade) => {
    if (!valor) return 0;
    const numero = parseFloat(valor);
    switch (unidade) {
      case 'kg':
        return numero;
      case 'g':
        return numero / 1000;
      case 'lb':
        return numero * 0.45359237;
      default:
        return numero;
    }
  };

  const calcularFormula = (idadeDias, pesoKg) => {
    let mlPorKg;
    let mamadas;

    if (idadeDias <= 4) {
      mlPorKg = 45;
      mamadas = 8;
    } else if (idadeDias <= 90) {
      mlPorKg = 150;
      mamadas = 6;
    } else if (idadeDias <= 180) {
      mlPorKg = 130;
      mamadas = 5;
    } else if (idadeDias <= 270) {
      mlPorKg = 110;
      mamadas = 4;
    } else {
      mlPorKg = 100;
      mamadas = 3;
    }

    const totalDiario = pesoKg * mlPorKg;
    const volumePorMamada = Math.round(totalDiario / mamadas);

    return {
      totalDiario: Math.round(totalDiario),
      mamadas,
      volumePorMamada
    };
  };

  const handleCalculate = (e) => {
    e.preventDefault();
    
    const idade = parseFloat(bebeInfo.idade);
    const peso = parseFloat(bebeInfo.peso);

    if (isNaN(idade) || isNaN(peso) || idade <= 0 || peso <= 0) {
      setBebeInfo(prev => ({ ...prev, resultado: null }));
      alert("Por favor, insira valores válidos para idade e peso.");
      return;
    }

    const idadeEmDias = converterParaDias(bebeInfo.idade, bebeInfo.unidadeIdade);
    const pesoEmKg = converterParaKg(bebeInfo.peso, bebeInfo.unidadePeso);
    const resultado = calcularFormula(idadeEmDias, pesoEmKg);
    
    let mensagem = [];
    
    mensagem.push(`Seu bebê deve ingerir cerca de ${resultado.totalDiario} ml de fórmula infantil por dia.`);
    
    if (idadeEmDias <= 4) {
      mensagem.push(`Como seu bebê tem ${idadeEmDias} dias, ele pode beber entre 30-60 ml/kg por dia.`);
      mensagem.push(`Recomendamos ${resultado.mamadas} mamadas por dia, com aproximadamente ${resultado.volumePorMamada} ml por mamada.`);
    } else if (idadeEmDias <= 90) {
      mensagem.push(`Como seu bebê tem ${idadeEmDias} dias, ele deve beber cerca de 150 ml/kg por dia.`);
      mensagem.push(`Recomendamos ${resultado.mamadas} mamadas por dia, com aproximadamente ${resultado.volumePorMamada} ml por mamada.`);
    } else if (idadeEmDias <= 180) {
      mensagem.push(`Como seu bebê tem ${idadeEmDias} dias, ele deve beber cerca de 130 ml/kg por dia.`);
      mensagem.push(`Recomendamos ${resultado.mamadas} mamadas por dia, com aproximadamente ${resultado.volumePorMamada} ml por mamada.`);
    } else if (idadeEmDias <= 270) {
      mensagem.push(`Como seu bebê tem ${idadeEmDias} dias, ele deve beber cerca de 110 ml/kg por dia.`);
      mensagem.push(`Recomendamos ${resultado.mamadas} mamadas por dia, com aproximadamente ${resultado.volumePorMamada} ml por mamada.`);
    } else {
      mensagem.push(`Como seu bebê tem ${idadeEmDias} dias, ele deve beber cerca de 100 ml/kg por dia.`);
      mensagem.push(`Recomendamos ${resultado.mamadas} mamadas por dia, com aproximadamente ${resultado.volumePorMamada} ml por mamada.`);
    }

    mensagem.push("Você deve alimentá-lo a cada 2-3 horas durante o dia.");
    
    setBebeInfo(prev => ({ ...prev, resultado: mensagem }));
  };

  const handleLimpar = () => {
    setBebeInfo({
      idade: '',
      unidadeIdade: 'dias',
      peso: '',
      unidadePeso: 'kg',
      resultado: null
    });
    localStorage.removeItem('bebeInfo');
  };

  return (
    <section id="calculadora" className="py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="text-center mb-5">
              <FaCalculator className="text-primary mb-3" style={{ fontSize: '3rem' }} />
              <h2 className="text-primary">Calculadora de Fórmula Infantil</h2>
              <p className="text-muted">Calcule a quantidade ideal de fórmula para seu bebê</p>
            </div>
            <div className="card shadow-sm border-0" style={{ borderRadius: '15px' }}>
              <div className="card-body p-4">
                <form onSubmit={handleCalculate}>
                  <div className="row g-4">
                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="idade" className="form-label d-flex align-items-center gap-2">
                          <FaBaby className="text-primary" />
                          Idade do Bebê
                        </label>
                        <div className="input-group">
                          <input 
                            type="number" 
                            className="form-control border-end-0"
                            id="idade" 
                            value={bebeInfo.idade}
                            onChange={(e) => setBebeInfo(prev => ({ ...prev, idade: e.target.value }))}
                            min="0" 
                            placeholder="Idade"
                            required
                            style={{ borderRadius: '8px 0 0 8px' }}
                          />
                          <select 
                            className="form-select border-start-0"
                            value={bebeInfo.unidadeIdade}
                            onChange={(e) => setBebeInfo(prev => ({ ...prev, unidadeIdade: e.target.value }))}
                            style={{ borderRadius: '0 8px 8px 0' }}
                          >
                            <option value="dias">dias</option>
                            <option value="semanas">semanas</option>
                            <option value="meses">meses</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="mb-3">
                        <label htmlFor="peso" className="form-label d-flex align-items-center gap-2">
                          <FaWeight className="text-primary" />
                          Peso do Bebê
                        </label>
                        <div className="input-group">
                          <input 
                            type="number" 
                            className="form-control border-end-0"
                            id="peso" 
                            value={bebeInfo.peso}
                            onChange={(e) => setBebeInfo(prev => ({ ...prev, peso: e.target.value }))}
                            min="0" 
                            step="0.1"
                            placeholder="Peso"
                            required
                            style={{ borderRadius: '8px 0 0 8px' }}
                          />
                          <select 
                            className="form-select border-start-0"
                            value={bebeInfo.unidadePeso}
                            onChange={(e) => setBebeInfo(prev => ({ ...prev, unidadePeso: e.target.value }))}
                            style={{ borderRadius: '0 8px 8px 0' }}
                          >
                            <option value="kg">quilos (kg)</option>
                            <option value="g">gramas (g)</option>
                            <option value="lb">libras (lb)</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex justify-content-center gap-3 mt-4">
                    <button type="submit" className="btn btn-primary px-4" style={{ maxWidth: '200px' }}>
                      <FaCalculator className="me-2" />
                      Calcular
                    </button>
                    <button type="button" className="btn btn-outline-secondary" onClick={handleLimpar}>
                      <FaTrash className="me-2" />
                      Limpar
                    </button>
                  </div>

                  {bebeInfo.resultado && (
                    <div className="mt-4 animate__animated animate__fadeIn">
                      <div className="card bg-light border-0 shadow-sm">
                        <div className="card-body">
                          <h5 className="card-title d-flex align-items-center gap-2 mb-3">
                            <FaHistory className="text-primary" />
                            Resultado
                          </h5>
                          {bebeInfo.resultado.map((linha, index) => (
                            <p key={index} className="text-muted mb-2">{linha}</p>
                          ))}
                          <div className="alert alert-info mt-3 border-0" style={{ backgroundColor: 'rgba(13, 110, 253, 0.1)' }}>
                            <p className="mb-0">
                              Lembre-se de que a quantidade de fórmula infantil calculada aqui é apenas uma estimativa, cada bebê é único. 
                              Se você tiver alguma preocupação com a dieta do seu bebê, converse com seu pediatra.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculadora; 