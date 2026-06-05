import React, { useState, useEffect, useRef } from 'react';

export default function ConsolaIA() {
  const [logs, setLogs] = useState([]);
  const [input, setInput] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const terminalEndRef = useRef(null);

  useEffect(() => {
    const initSecuence = [
      "🤖 [INFO] Inicializando Núcleo de IA Quantum...",
      "🔗 [OK] Conexión establecida con redes Blockchain principales.",
      "📊 [INFO] Escaneando patrones en BTC, ETH y SOL...",
      "💻 Terminal lista. Escribe un comando (ej: /analizar, /prediccion, /limpiar):"
    ];

    initSecuence.forEach((msg, index) => {
      setTimeout(() => {
        setLogs(prev => [...prev, msg]);
      }, index * 500);
    });
  }, []);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [logs]);

  const ejecutarComando = (e) => {
    e.preventDefault();
    if (!input.trim() || isAnalyzing) return;

    const userQuery = input.trim();
    setLogs(prev => [...prev, `> ${userQuery}`]);
    setInput("");
    setIsAnalyzing(true);

    setTimeout(() => {
      let respuesta = "";
      const queryLower = userQuery.toLowerCase();

      if (queryLower.includes("analizar") || queryLower.includes("/analizar")) {
        respuesta = "🤖 [IA] Alertas detectadas: Ballenas moviendo capital en redes de Capa 2. RSI en zona neutral. Recomiendo precaución a corto plazo.";
      } else if (queryLower.includes("prediccion") || queryLower.includes("/prediccion")) {
        respuesta = "🔮 [IA PROYECCIÓN] Redes neuronales estiman volatilidad del ±4.8% en las próximas 12 horas debido a liquidaciones masivas.";
      } else if (queryLower.includes("limpiar") || queryLower.includes("/limpiar")) {
        setLogs(["💻 Terminal limpia. Introduce un nuevo comando:"]);
        setIsAnalyzing(false);
        return;
      } else {
        respuesta = `🤖 [IA COMPRENDIDO] Procesando consulta sobre "${userQuery}"... Algoritmos sugieren acumulación silenciosa en tokens de Inteligencia Artificial.`;
      }

      setLogs(prev => [...prev, respuesta]);
      setIsAnalyzing(false);
    }, 1000);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      {/* Cabecera de la Terminal */}
      <div className="bg-[#1c1917] border border-[#44403c] rounded-t-xl p-3 flex items-center justify-between">
        <div className="flex gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
          <span className="w-3 h-3 rounded-full bg-green-500"></span>
        </div>
        <span className="font-mono text-xs text-[#a8a29e]">crypto-future-hub-ia-terminal_v1.0</span>
        <div className="w-10"></div>
      </div>

      {/* Caja Negra Unificada */}
      <div className="bg-[#0c0a09] border-x border-b border-[#44403c] rounded-b-xl p-6 flex flex-col justify-between h-[450px]">
        
        {/* Historial de comandos en la parte superior con Scroll independiente */}
        <div className="flex-1 overflow-y-auto font-mono text-sm text-[#f5f5f4] flex flex-col gap-2 mb-4 pr-2">
          {logs.map((log, i) => (
            <div key={i} className={log.startsWith(">") ? "text-[#f59e0b]" : log.includes("[IA]") ? "text-[#10b981]" : "text-[#a8a29e]"}>
              {log}
            </div>
          ))}
          {isAnalyzing && <div className="text-[#f59e0b] animate-pulse">🤖 IA pensando...</div>}
          <div ref={terminalEndRef} />
        </div>

        {/* Formulario integrado directamente abajo del fondo negro */}
        <form onSubmit={ejecutarComando} className="flex gap-2 border-t border-[#44403c] pt-4">
          <span className="text-[#f59e0b] font-mono flex items-center text-sm pl-1">&gt;</span>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Escribe un comando o tu pregunta aquí..."
            className="flex-1 bg-transparent text-sm text-[#f5f5f4] focus:outline-none font-mono placeholder:text-gray-700"
            disabled={isAnalyzing}
          />
          <button type="submit" disabled={isAnalyzing} className="bg-[#f59e0b] hover:bg-[#d97706] text-black font-semibold text-xs px-4 py-2 rounded font-mono transition-colors disabled:opacity-50">
            EJECUTAR
          </button>
        </form>

      </div>
    </div>
  );
}
