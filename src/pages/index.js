import React, { useState } from 'react';
import MetricBar from '../components/MetricBar';
import Hero from '../components/Hero';
import Subscription from '../components/Subscription';
import ConsolaIA from '../components/ConsolaIA';
import NoticiasPremium from '../components/NoticiasPremium';

export default function Home() {
  // Estado global de la Wallet controlado de forma limpia
  const [walletConectada, setWalletConectada] = useState(false);

  return (
    <div className="min-h-screen bg-[#030712] flex flex-col justify-between selection:bg-[#00f5ff]">
      <div>
        {/* Barra de métricas superiores */}
        <MetricBar />
        
        {/* Sección Hero con estado de la wallet */}
        <Hero walletConectada={walletConectada} setWalletConectada={setWalletConectada} />
        
        {/* Sección de la Consola IA */}
        <section className="py-12 bg-[#030712]">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-4xl font-bold text-white mb-2">Consola de Inteligencia Artificial</h2>
            <p className="text-[#a8a29e] text-sm">Predicciones cuánticas del mercado cripto en tiempo real.</p>
          </div>
          <ConsolaIA />
        </section>

        {/* Sección de Noticias Premium */}
        <NoticiasPremium walletConectada={walletConectada} />

        {/* Modelos de Acceso Premium */}
        <Subscription /> 
      </div>

      {/* Pie de página oficial unificado */}
      <footer className="w-full border-t border-gray-900 py-6 text-center font-mono text-[10px] text-gray-600">
        © 2026 CRYPTO FUTURE HUB // PROTOCOLO DESCENTRALIZADO ABIERTO.
      </footer>
    </div>
  );
}
