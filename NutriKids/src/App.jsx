import React from 'react'
import { useState, useEffect } from 'react'
import './App.css'
import 'animate.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Sobre from './components/Sobre'
import Calculadora from './components/Calculadora'
import FAQ from './components/FAQ'
import Contato from './components/Contato'

function App() {
  return (
    <>
      <div className="min-vh-100 d-flex flex-column">
        <Header />
        <main className="container-fluid py-5 flex-grow-1">
          <Sobre />
          <div className="section-divider"></div>
          <Calculadora />
          <div className="section-divider"></div>
          <FAQ />
          <div className="section-divider"></div>
          <Contato />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App 