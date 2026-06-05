"use client";
import React, { useState, useEffect } from 'react';
import { Cpu, ShieldCheck } from 'lucide-react';

export default function MetricBar() {
  // Estados para simular datos dinámicos en vivo
  const [btcChange, setBtcChange] = useState(2.4);
  const [ethGas, setEthGas] = useState(12);

  useEffect(() => {
    // Temporizador para simular el pulso del mercado cada 3 segundos
    const interval = setInterval(() => {
      setBtcChange(prev => +(prev + (Math.random() * 0.4 - 0.2)).toFixed(2));
      setEthGas(prev => Math.max(8, Math.min(45, prev + Math.floor(Math.random() * 3 - 1))));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full bg-[#0b1329] border-b border-cyan-500/20 py-2 px-4 text-xs font-mono tracking-wider text-gray-300 flex items-center justify-between overflow-x-auto gap-4">
      
      {/* Estado Agente */}
      <div className="flex items-center gap-2 shrink-0">
        <Cpu className="text-[#00f5ff] w-4 h-4 animate-pulse" />
        <span>AGENTE IA: <span className="text-[#00f5ff]">ACTIVO (OPTIMIZANDO DEFI)</span></span>
      </div>

      {/* Métricas Cripto en Vivo */}
      <div className="flex items-center gap-6 shrink-0">
        <span className="flex items-center gap-1">
          BTC: 
          <span className={btcChange >= 0 ? "text-green-400" : "text-red-400"}>
            {btcChange >= 0 ? `+${btcChange}` : btcChange}%
          </span>
        </span>
        
        <span className="flex items-center gap-1">
          ETH GAS: <span className="text-[#00f5ff] animate-pulse">{ethGas} Gwei</span>
        </span>
        
        <span className="flex items-center gap-1">
          RWA POOL TVL: <span className="text-[#9d4edd]">$4.2B</span>
        </span>
      </div>

      {/* Seguridad */}
      <div className="flex items-center gap-2 shrink-0">
        <ShieldCheck className="text-green-400 w-4 h-4" />
        <span>CONTRATOS AUDITADOS</span>
      </div>

    </div>
  );
}
