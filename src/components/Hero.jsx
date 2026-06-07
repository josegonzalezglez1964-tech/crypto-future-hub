"use client";
import React, { useState } from 'react';
import { Wallet, X } from 'lucide-react';

export default function Hero({ walletConectada, setWalletConectada }) {
  // Estado local para controlar si la documentación está abierta o cerrada
  const [docAbierta, setDocAbierta] = useState(false);
  
  const connectWallet = () => {
    setWalletConectada(!walletConectada);
  };

  const walletAddress = '0x71C...49a3';

  return (
    <section className="relative pt-20 pb-16 px-6 max-w-7xl mx-auto flex flex-col items-center text-center z-10 min-h-[60vh]">
      <div className="absolute inset-0 cyber-grid opacity-60 -z-10" />
      
      <span className="px-3 py-1 text-xs font-mono text-[#00f5ff] border border-[#00f5ff]/30 bg-[#00f5ff]/10 rounded-full uppercase tracking-widest mb-6 animate-pulse">
        Plataforma Inteligente v2.6
      </span>

      <h1 className="text-4xl md:text-6xl font-black tracking-tight text-white mb-6 leading-tight">
        El Medio Viral de Criptomonedas <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00f5ff] to-[#9d4edd] filter drop-shadow-[0_0_10px_rgba(0,245,255,0.3)]">
          Impulsado por Agentes IA
        </span>
      </h1>

      <p className="text-gray-400 max-w-2xl text-sm md:text-base mb-10 leading-relaxed">
        Accede a análisis en cadena en tiempo real, tokenización de activos del mundo real (RWA) y flujos de información automatizados. Conecta tu identidad Web3 para desbloquear Alpha.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md">
        <button 
          onClick={connectWallet}
          className={`w-full sm:w-auto px-6 py-3 rounded-lg font-mono text-sm font-bold flex items-center justify-center gap-2 transition-all duration-300 border ${
            walletConectada 
              ? 'bg-transparent border-green-500 text-green-400 shadow-[0_0_10px_rgba(34,197,94,0.2)]' 
              : 'bg-[#00f5ff] border-transparent text-[#030712] hover:shadow-[0_0_15px_rgba(0,245,255,0.4)]'
          }`}
        >
          <Wallet className="w-4 h-4" />
          {walletConectada ? walletAddress : 'CONECTAR WALLET'}
        </button>

        {/* Botón que ahora abre el Panel Flotante */}
        <button 
          onClick={() => setDocAbierta(true)}
          className="w-full sm:w-auto px-6 py-3 rounded-lg font-mono text-sm font-bold text-gray-400 bg-transparent border border-gray-800 hover:border-[#00f5ff]/40 hover:text-[#00f5ff] hover:shadow-[0_0_15px_rgba(0,245,255,0.1)] transition-all duration-300"
        >
          DOCUMENTACIÓN
        </button>
      </div>

      {/* 🛡️ PANEL FLOTANTE DE LA DOCUMENTACIÓN (MODAL WEB3) */}
      {docAbierta && (
        <div className="fixed inset-0 bg-[#030712]/95 backdrop-blur-lg z-50 flex justify-center items-center p-4 overflow-y-auto">
          <div className="bg-[#070a13] border border-gray-800 rounded-2xl max-w-3xl w-full max-h-[85vh] overflow-y-auto p-6 md:p-8 relative shadow-[0_0_50px_rgba(0,245,255,0.1)] text-left">
            
            {/* Botón de cerrar flotante */}
            <button 
              onClick={() => setDocAbierta(false)}
              className="absolute top-4 right-4 text-gray-500 hover:text-[#00f5ff] transition-colors p-1 border border-gray-900 hover:border-[#00f5ff]/20 rounded-lg"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Cabecera del Modal */}
            <div className="text-center mb-8 border-b border-gray-900 pb-6">
              <span className="text-[10px] font-mono text-[#00f5ff] tracking-widest uppercase bg-[#00f5ff]/10 px-2.5 py-0.5 rounded-full">
                Whitepaper Oficial v2.0 // AGENTE IA ACTIVO
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-white mt-3">
                Documentación Técnica
              </h2>
            </div>

            {/* Cuerpo de la Documentación */}
            <div className="space-y-6 text-sm text-gray-400 leading-relaxed">
              <section className="border-l-2 border-[#00f5ff]/30 pl-4">
                <h3 className="text-white font-semibold text-base mb-1">Análisis Cuántico Predictivo</h3>
                <p>Nuestros agentes autónomos escanean los libros de órdenes en tiempo real y los datos en cadena (on-chain) de las redes Bitcoin, Ethereum y Solana para anticipar movimientos líquidos antes de que impacten en el mercado minorista.</p>
              </section>

              <section className="border-l-2 border-[#9d4edd]/30 pl-4">
                <h3 className="text-white font-semibold text-base mb-1">Conexión e Identidad Web3</h3>
                <p>Para desbloquear las funciones Alpha avanzadas y el feed de alertas cuánticas, la plataforma requiere la verificación de identidad criptográfica mediante firma de mensaje segura.</p>
              </section>

              <section className="border-l-2 border-gray-800 pl-4">
                <h3 className="text-white font-semibold text-base mb-1">Transparencia y Seguridad</h3>
                <p>Crypto Future Hub opera bajo un protocolo descentralizado abierto. Los algoritmos de escaneo se auditan periódicamente para garantizar la neutralidad de los datos. Esta plataforma automatiza la lectura de datos públicos de la blockchain.</p>
              </section>
            </div>

            {/* Botón de Cierre Inferior */}
            <div className="mt-8 border-t border-gray-900 pt-4 flex justify-end">
              <button 
                onClick={() => setDocAbierta(false)}
                className="px-4 py-2 rounded-lg font-mono text-xs font-bold text-white bg-gray-900 hover:bg-gray-800 transition-colors border border-gray-800"
              >
                CERRAR DOCUMENTACIÓN
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
