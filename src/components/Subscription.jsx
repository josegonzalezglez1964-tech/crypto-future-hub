import React from 'react';
import { CheckCircle2, Zap } from 'lucide-react';

export default function Subscription() {
  const tiers = [
    {
      name: 'Retail Alpha',
      price: '$25',
      period: 'mes',
      desc: 'Para lectores avanzados que buscan tendencias rápidas.',
      features: ['Alertas tempranas vía Telegram/Discord', 'Navegación 100% libre de anuncios', 'Acceso a boletines de analistas'],
      color: 'border-gray-800'
    },
    {
      name: 'Pro Streaming',
      price: '0.0001 ETH',
      period: 'por segundo',
      desc: 'Suscripción fluida en tiempo real con smart contracts.',
      features: ['Paneles de datos on-chain integrados', 'Modelos financieros interactivos', 'Pago por uso exacto (Superfluid)'],
      color: 'border-[#00f5ff] shadow-[0_0_15px_rgba(0,245,255,0.4)]',
      badge: 'RECOMENDADO'
    },
    {
      name: 'DAO Governance Pass',
      price: '1 NFT',
      period: 'Pase de por vida',
      desc: 'Acceso total basado en token de gobernanza.',
      features: ['Voto en auditorías e investigaciones', 'Airdrops exclusivos de proyectos asociados', 'Reembolsos de gas en dApps probadas'],
      color: 'border-[#9d4edd] shadow-[0_0_15px_rgba(157, 78, 221, 0.4)]'
    }
  ];

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto border-t border-gray-900">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-4xl font-bold mb-3 text-white">Modelos de Acceso Premium</h2>
        <p className="text-gray-400 text-sm max-w-lg mx-auto">Elige cómo consumir la información. Desde micro-pagos automatizados hasta pases en formato NFT corporativos.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {tiers.map((tier, idx) => (
          <div key={idx} className={`bg-[#0b1329] border rounded-xl p-6 relative flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1 ${tier.color}`}>
            {tier.badge && (
              <span className="absolute -top-3 right-4 bg-[#00f5ff] text-[#030712] text-[10px] font-mono font-black px-2 py-0.5 rounded">
                {tier.badge}
              </span>
            )}
            <div>
              <h3 className="text-xl font-bold text-white font-mono mb-2 flex items-center gap-2">
                {tier.badge && <Zap className="w-4 h-4 text-[#00f5ff] fill-[#00f5ff]" />}
                {tier.name}
              </h3>
              <p className="text-gray-400 text-xs mb-6 min-h-[32px]">{tier.desc}</p>
              <div className="mb-6">
                <span className="text-3xl font-black text-white font-mono">{tier.price}</span>
                <span className="text-gray-500 text-xs font-mono"> / {tier.period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {tier.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-gray-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>
            <button className="w-full py-2.5 rounded-lg bg-gray-900 border border-gray-700 hover:border-gray-500 text-white font-mono text-xs transition-colors">
              ADQUIRIR ACCESO
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
