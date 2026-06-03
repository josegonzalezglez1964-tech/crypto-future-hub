import React from 'react';
import { Cpu, ShieldCheck } from 'lucide-react';

export default function MetricBar() {
  return (
    <div className="w-full bg-[#0b1329] border-b border-cyan-500/20 py-2 px-4 text-xs font-mono tracking-wider text-gray-400 flex justify-between items-center gap-4 overflow-x-auto">
      <div className="flex items-center gap-2 shrink-0">
        <Cpu className="text-[#00f5ff] w-4 h-4 animate-pulse" />
        <span>AGENTE IA: <span className="text-[#00f5ff]">ACTIVO (OPTIMIZANDO DEFI)</span></span>
      </div>
      <div className="flex items-center gap-6">
        <span className="flex items-center gap-1">BTC: <span className="text-green-400">+$2.4%</span></span>
        <span className="flex items-center gap-1">ETH GAS: <span className="text-[#00f5ff]">12 Gwei</span></span>
        <span className="flex items-center gap-1 text-[#9d4edd]">RWA POOL TVL: <span>$4.2B</span></span>
      </div>
      <div className="flex items-center gap-2 shrink-0">
        <ShieldCheck className="text-green-400 w-4 h-4" />
        <span>CONTRATOS AUDITADOS</span>
      </div>
    </div>
  );
}
