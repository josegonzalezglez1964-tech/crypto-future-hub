import React from 'react';

export default function Documentacion() {
  
  const handleVolverLimpio = (e) => {
    e.preventDefault();
    // Añadimos una variable de tiempo dinámica para romper la persistencia de posición del navegador de forma radical
    window.location.href = "/?reset=" + Date.now();
  };

  return (
    <div className="min-h-screen bg-[#030712] text-white font-sans selection:bg-[#00f5ff]">
      {/* Barra de Navegación Superior */}
      <header className="w-full border-b border-gray-900 py-4 px-6 flex justify-between items-center bg-[#030712]/80 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center space-x-2">
          <span className="text-xs text-[#00f5ff] font-mono tracking-widest border border-[#00f5ff]/30 px-2 py-0.5 rounded">
            AGENTE IA: ACTIVO
          </span>
        </div>
        
        {/* Enlace tradicional con anulación de caché de scroll mediante parámetros dinámicos */}
        <a 
          href="/"
          onClick={handleVolverLimpio} 
          className="text-xs font-mono text-gray-400 hover:text-[#00f5ff] transition-colors border border-gray-800 hover:border-[#00f5ff]/30 px-3 py-1 rounded no-underline"
        >
          ← VOLVER AL HUB
        </a>
      </header>

      {/* Contenido Principal */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <span className="text-xs font-mono text-[#00f5ff] tracking-widest uppercase bg-[#00f5ff]/10 px-3 py-1 rounded-full">
            Whitepaper Oficial v2.0
          </span>
          <h1 className="text-4xl md:text-5xl font-bold font-sans mt-4 bg-gradient-to-r from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">
            Documentación Técnica
          </h1>
          <p className="text-gray-400 mt-4 text-sm max-w-xl mx-auto">
            Manual operativo y arquitectura descentralizada de la plataforma Crypto Future Hub.
          </p>
        </div>

        {/* Sección 1: Núcleo de la IA */}
        <section className="mb-12 border border-gray-900 bg-[#070a13] rounded-xl p-6 hover:border-[#00f5ff]/20 transition-all">
          <div className="flex items-center space-x-3 mb-4">
            <h2 className="text-xl font-semibold">Análisis Cuántico Predictivo</h2>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Nuestros agentes autónomos escanean los libros de órdenes en tiempo real y los datos en cadena (*on-chain*) de las redes **Bitcoin (BTC), Ethereum (ETH) y Solana (SOL)**. El núcleo procesa patrones de volatilidad para anticipar movimientos líquidos antes de que impacten en el mercado minorista.
          </p>
        </section>

        {/* Sección 2: Wallets Web3 */}
        <section className="mb-12 border border-gray-900 bg-[#070a13] rounded-xl p-6 hover:border-[#00f5ff]/20 transition-all">
          <div className="flex items-center space-x-3 mb-4">
            <h2 className="text-xl font-semibold">Conexión e Identidad Web3</h2>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-3">
            Para desbloquear las funciones Alpha avanzadas y el feed de alertas cuánticas, la plataforma requiere la verificación de identidad criptográfica mediante firma de mensaje.
          </p>
          <div className="bg-[#030712] border border-gray-900 rounded p-3 font-mono text-xs text-gray-500">
            Soporte nativo para: MetaMask (EVM), Phantom (Solana) y WalletConnect.
          </div>
        </section>

        {/* Sección 3: Protocolo */}
        <section className="mb-16 border border-gray-900 bg-[#070a13] rounded-xl p-6 hover:border-[#00f5ff]/20 transition-all">
          <div className="flex items-center space-x-3 mb-4">
            <h2 className="text-xl font-semibold">Transparencia y Seguridad</h2>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">
            Crypto Future Hub opera bajo un protocolo descentralizado abierto. Los algoritmos de escaneo se auditan periódicamente para garantizar la neutralidad de los datos. Esta plataforma no proporciona asesoramiento financiero; automatiza la lectura de datos públicos de la blockchain.
          </p>
        </section>
      </main>

      {/* Pie de Página */}
      <footer className="w-full border-t border-gray-900 py-6 text-center font-mono text-[10px] text-gray-600">
        © 2026 CRYPTO FUTURE HUB // PROTOCOLO DESCENTRALIZADO ABIERTO.
      </footer>
    </div>
  );
}
