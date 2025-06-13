import React, { useState, useCallback } from "react";
import calculatorData from "../data/calculatorData.json";
import {
  FaCalculator,
  FaBaby,
  FaWeight,
  FaHistory,
  FaTrash,
} from "react-icons/fa";
import "../styles/main.scss";

const Calculadora = () => {
  const [bebeInfo, setBebeInfo] = useState(() => {
    const dadosSalvos = localStorage.getItem("bebeInfo");
    return dadosSalvos
      ? JSON.parse(dadosSalvos)
      : {
          idade: "",
          unidadeIdade: "dias",
          peso: "",
          unidadePeso: "kg",
          resultado: null,
        };
  });

  // Salvar dados no localStorage sempre que houver mudanças
  React.useEffect(() => {
    localStorage.setItem("bebeInfo", JSON.stringify(bebeInfo));
  }, [bebeInfo]);

  const converterParaDias = useCallback((valor, unidade) => {
    if (!valor) return 0;
    const numero = parseFloat(valor);
    return numero * calculatorData.conversoesUnidades.idade[unidade];
  }, []);

  const converterParaKg = useCallback((valor, unidade) => {
    if (!valor) return 0;
    const numero = parseFloat(valor);
    return numero * calculatorData.conversoesUnidades.peso[unidade];
  }, []);

  const calcularFormula = useCallback((idadeDias, pesoKg) => {
    // Usar calculatorData diretamente
    const faixaEtaria =
      calculatorData.faixasEtarias.find(
        (faixa) => idadeDias <= faixa.diasMaximos
      ) ||
      calculatorData.faixasEtarias[calculatorData.faixasEtarias.length - 1];

    const totalDiario = pesoKg * faixaEtaria.mlPorKg;
    const volumePorMamada = Math.round(totalDiario / faixaEtaria.mamadasPorDia);

    return {
      totalDiario: Math.round(totalDiario),
      mamadas: faixaEtaria.mamadasPorDia,
      volumePorMamada,
      mensagem: faixaEtaria.mensagem.replace("{idade}", idadeDias),
    };
  }, []);

  const handleInputChange = useCallback((e) => {
    const { name, value } = e.target;
    setBebeInfo((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleCalculate = useCallback(
    (e) => {
      e.preventDefault();

      const idade = parseFloat(bebeInfo.idade);
      const peso = parseFloat(bebeInfo.peso);

      if (isNaN(idade) || isNaN(peso) || idade <= 0 || peso <= 0) {
        setBebeInfo((prev) => ({ ...prev, resultado: null }));
        alert("Por favor, insira valores válidos para idade e peso.");
        return;
      }

      const idadeEmDias = converterParaDias(
        bebeInfo.idade,
        bebeInfo.unidadeIdade
      );
      const pesoEmKg = converterParaKg(bebeInfo.peso, bebeInfo.unidadePeso);
      const resultadoObj = calcularFormula(idadeEmDias, pesoEmKg);

      if (!resultadoObj) return;

      let mensagem = [];

      mensagem.push(
        `Seu bebê deve ingerir cerca de ${resultadoObj.totalDiario} ml de fórmula infantil por dia.`
      );
      mensagem.push(resultadoObj.mensagem);
      mensagem.push(
        `Recomendamos ${resultadoObj.mamadas} mamadas por dia, com aproximadamente ${resultadoObj.volumePorMamada} ml por mamada.`
      );
      mensagem.push("Você deve alimentá-lo a cada 2-3 horas durante o dia.");

      setBebeInfo((prev) => ({ ...prev, resultado: mensagem }));
    },
    [bebeInfo, converterParaDias, converterParaKg, calcularFormula]
  );

  const handleLimpar = useCallback(() => {
    setBebeInfo({
      idade: "",
      unidadeIdade: "dias",
      peso: "",
      unidadePeso: "kg",
      resultado: null,
    });
    localStorage.removeItem("bebeInfo");
  }, []);

  return (
    <section className="calculator-section">
      <div className="container">
        <div className="calculator-title">
          <FaCalculator
            className="text-primary mb-3"
            style={{ fontSize: "3rem" }}
          />
          <h2>Calculadora de Fórmula Infantil</h2>
          <p>Calcule a quantidade ideal de fórmula para seu bebê</p>
        </div>

        <div className="calculator-card">
          <form onSubmit={handleCalculate}>
            <div className="row g-4">
              <div className="col-md-6">
                <div className="form-group">
                  <label
                    htmlFor="idade"
                    className="form-label d-flex align-items-center gap-2"
                  >
                    <FaBaby className="text-primary" />
                    Idade do Bebê
                  </label>
                  <div className="input-group">
                    <input
                      type="number"
                      className="form-control border-end-0"
                      id="idade"
                      name="idade"
                      value={bebeInfo.idade}
                      onChange={handleInputChange}
                      min="0"
                      placeholder="Idade"
                      required
                      style={{ borderRadius: "8px 0 0 8px" }}
                    />
                    <select
                      className="form-select border-start-0"
                      name="unidadeIdade"
                      value={bebeInfo.unidadeIdade}
                      onChange={handleInputChange}
                      style={{ borderRadius: "0 8px 8px 0" }}
                    >
                      <option value="dias">dias</option>
                      <option value="semanas">semanas</option>
                      <option value="meses">meses</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="col-md-6">
                <div className="form-group">
                  <label
                    htmlFor="peso"
                    className="form-label d-flex align-items-center gap-2"
                  >
                    <FaWeight className="text-primary" />
                    Peso do Bebê
                  </label>
                  <div className="input-group">
                    <input
                      type="number"
                      className="form-control border-end-0"
                      id="peso"
                      name="peso"
                      value={bebeInfo.peso}
                      onChange={handleInputChange}
                      min="0"
                      step="0.1"
                      placeholder="Peso"
                      required
                      style={{ borderRadius: "8px 0 0 8px" }}
                    />
                    <select
                      className="form-select border-start-0"
                      name="unidadePeso"
                      value={bebeInfo.unidadePeso}
                      onChange={handleInputChange}
                      style={{ borderRadius: "0 8px 8px 0" }}
                    >
                      <option value="kg">quilos (kg)</option>
                      <option value="g">gramas (g)</option>
                      <option value="lb">libras (lb)</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="button-group">
              <button
                type="submit"
                className="btn-primary"
                style={{ maxWidth: "200px" }}
              >
                <FaCalculator className="me-2" />
                Calcular
              </button>
              <button
                type="button"
                className="btn-outline"
                onClick={handleLimpar}
              >
                <FaTrash className="me-2" />
                Limpar
              </button>
            </div>

            {bebeInfo.resultado && (
              <div className="calculator-result">
                <h3>
                  <FaHistory className="text-primary" />
                  Resultado
                </h3>
                {bebeInfo.resultado.map((linha, index) => (
                  <p key={index} className="text-muted mb-2">
                    {linha}
                  </p>
                ))}
                <div
                  className="alert alert-info mt-3 border-0"
                  style={{
                    backgroundColor: "rgba(13, 110, 253, 0.1)",
                  }}
                >
                  <p className="mb-0">
                    Lembre-se de que a quantidade de fórmula infantil calculada
                    aqui é apenas uma estimativa, cada bebê é único. Se você
                    tiver alguma preocupação com a dieta do seu bebê, converse
                    com seu pediatra.
                  </p>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Calculadora;
