# NutriKids - Sprint 4 Webdev

Calculadora de Fórmula Infantil desenvolvida em React, com estilização moderna usando SASS e Bootstrap. O projeto auxilia pais e responsáveis a calcular a quantidade ideal de fórmula para bebês, seguindo recomendações nutricionais.

---

## 🚀 Funcionalidades

- **Calculadora de Fórmula Infantil:**  
  Informe idade e peso do bebê para obter recomendações personalizadas de quantidade de fórmula, mamadas e volume por mamada.
- **FAQ:**  
  Perguntas frequentes sobre alimentação infantil.
- **Sobre:**  
  Informações sobre o projeto e seus diferenciais.
- **Contato:**  
  Formulário para dúvidas e sugestões.
- **Design Responsivo:**  
  Visual moderno, responsivo e acessível.
- **Estilização:**  
  Uso de SASS e Bootstrap para personalização e organização dos estilos.
- **Consumo de API Local:**  
  Dados de cálculo são consumidos de um arquivo JSON externo, simulando uma API.

---

## 🛠️ Tecnologias Utilizadas

- [React](https://react.dev/)
- [Bootstrap](https://getbootstrap.com/)
- [React Bootstrap](https://react-bootstrap.github.io/)
- [SASS/SCSS](https://sass-lang.com/)
- [Vite](https://vitejs.dev/) (ou outro bundler, se aplicável)

---

## 📁 Estrutura do Projeto

```
NutriKids/
├── public/
│   └── ... (assets públicos)
├── src/
│   ├── components/
│   │   ├── Calculadora.jsx
│   │   ├── FAQ.jsx
│   │   ├── Sobre.jsx
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── Contato.jsx
│   ├── data/
│   │   └── calculatorData.json
│   ├── styles/
│   │   ├── main.scss
│   │   └── components/
│   │       ├── _calculator.scss
│   │       ├── _faq.scss
│   │       ├── _about.scss
│   │       ├── _header.scss
│   │       └── _footer.scss
│   ├── App.jsx
│   └── main.jsx
└── README.md
```

---

## ⚙️ Como rodar o projeto

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/seu-usuario/nutrikids.git
   cd nutrikids
   ```

2. **Instale as dependências:**

   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Rode o projeto:**

   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. **Acesse no navegador:**  
   Normalmente em [http://localhost:5173](http://localhost:5173) (ou porta indicada no terminal).

---

## 📦 Consumo de API Local

O arquivo `src/data/calculatorData.json` simula uma API local, sendo importado diretamente nos componentes React para fornecer as regras de cálculo da fórmula infantil.

---

## 📋 Requisitos Atendidos

- Estrutura de componentes React
- Estilização com Bootstrap e SASS
- Consumo de dados externos via JSON (API local)
- Estrutura semântica e acessível (W3C)
- Criação própria e autoral
- Versionamento com Git/GitHub

---

## 💌 Autoras

- Gabriela Queiroga - RM 560035  
- Maria Eduarda Ferrés - RM 560418
  
---

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
