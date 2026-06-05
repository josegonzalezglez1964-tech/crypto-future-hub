import React from 'react';

// Recibimos 'walletConectada' como propiedad desde el index.js
export default function NoticiasPremium({ walletConectada }) {
  const noticias = [
    {
      id: 1,
      categoria: "ALPHA EXCLUSIVO",
      titulo: "Filtración institucional: Fondo de cobertura prepara compra masiva de SOL",
      extracto: "Informes internos sugieren que un consorcio bancario ha completado la infraestructura de custodia para absorber el 3% del suministro circulante...",
      fecha: "Hace 10 min"
    },
    {
      id: 2,
      categoria: "MERCADOS RWA",
      titulo: "Regulación Europea abre la puerta a la tokenización de bienes raíces comerciales",
      extracto: "Un nuevo marco normativo permitirá a las plataformas autorizadas emitir tokens respaldados por propiedades físicas sin restricciones...",
      fecha: "Hace 1 hora"
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto p-4 mt-8 mb-12">
      <div className="flex justify-between items-center mb-6 border-b border-gray-900 pb-4">
        <div>
          <span className="text-xs font-mono text-[#00f5ff] tracking-widest uppercase">Inteligencia de Mercado</span>
          <h3 className="text-xl md:text-2xl font-bold text-white mt-1">Noticias Ocultas Premium</h3>
        </div>
        
        {/* Indicador visual del estado de la suscripción */}
        <div className="text-[10px] font-mono px-3 py-1 rounded bg-gray-900/50 text-gray-400 border border-gray-800">
          STATUS: {walletConectada ? (
            <span className="text-[#00f5ff] font-bold">ALPHA DESBLOQUEADO</span>
          ) : (
            <span className="text-amber-500 font-bold">RESTRINGIDO</span>
          )}
        </div>
      </div>

      <div className="relative">
        {/* El difuminado ahora depende directamente de la wallet conectada */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-500 ${!walletConectada ? 'blur-md pointer-events-none select-none' : ''}`}>
          {noticias.map((noticia) => (
            <div key={noticia.id} className="bg-[#111420] border border-gray-900 rounded-xl p-5 flex flex-col justify-between hover:border-gray-800 transition-colors">
              <div>
                <div className="flex justify-between items-center mb-3">
                  <span className="text-[10px] font-mono bg-amber-500/10 text-amber-500 px-2 py-0.5 rounded">
                    {noticia.categoria}
                  </span>
                  <span className="text-xs text-gray-500 font-mono">{noticia.fecha}</span>
                </div>
                <h4 className="text-base font-bold text-gray-100 mb-2 leading-snug">
                  {noticia.titulo}
                </h4>
                <p className="text-xs text-gray-400 leading-relaxed">
                  {noticia.extracto}
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-gray-900/50 flex items-center justify-between text-[11px] text-[#00f5ff] font-mono">
                <span>Leer informe completo</span>
                <span>→</span>
              </div>
            </div>
          ))}
        </div>

        {/* Muestra el candado si la wallet NO está conectada */}
        {!walletConectada && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-transparent px-4 text-center">
            <div className="bg-[#030712]/90 border border-gray-800 rounded-2xl p-8 max-w-md shadow-2xl backdrop-blur-sm">
              <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500 mb-4 mx-auto text-xl">
                🔒
              </div>
              <h4 className="text-lg font-bold text-white mb-2">Contenido Exclusivo Bloqueado</h4>
              <p className="text-xs text-gray-400 mb-6 leading-relaxed">
                Esta sección contiene información de mercado confidencial. Conecta tu Wallet en la parte superior para verificar tu acceso Alpha.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
