import React, { useState } from 'react';
import { Wallet, Terminal } from 'lucide-react';

export default function Hero() {
  const [connected, setConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState('');

  const connectWallet = () => {
    if (!connected) {
      setConnected(true);
      setWalletAddress('0x71C...49a3');
    } else {
      setConnected(false);
      setWalletAddress('');
    }
  };

  return (
    <section className="relative pt-20 pb-16 px-6 max-w-7xl mx-auto flex flex-col items-center text-center z-10">
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
            connected 
              ? 'bg-transparent border-green-500 text-green-400 shadow-[0_0_10px_rgba(34,197,94,0.2)]' 
              : 'bg-[#00f5ff] border-transparent text-[#030712] hover:shadow-[0_0_15px_rgba(0,245,255,0.4)]'
          }`}
        >
          <Wallet className="w-4 h-4" />
          {connected ? walletAddress : 'CONECTAR WALLET'}
        </button>

        <button className="w-full sm:w-auto px-6 py-3 rounded-lg bg-[#0b1329] border border-gray-700 hover:border-[#9d4edd] text-gray-300 font-mono text-sm flex items-center justify-center gap-2 transition-all duration-300">
          <Terminal className="w-4 h-4" />
          DOCUMENTACIÓN
        </button>
      </div>
    </section>
  );
}
