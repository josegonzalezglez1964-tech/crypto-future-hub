import React from 'react';
import MetricBar from '@/components/MetricBar';
import Hero from '@/components/Hero';
import Subscription from '@/components/Subscription';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#030712] flex flex-col justify-between selection:bg-[#00f5ff] selection:text-[#030712]">
      <div>
        <MetricBar />
        <Hero />
        <Subscription />
      </div>
      <footer className="w-full border-t border-gray-900 py-6 text-center font-mono text-[10px] text-gray-600">
        © 2026 CRYPTO FUTURE HUB // PROTOCOLO DESCENTRALIZADO ABIERTO.
      </footer>
    </div>
  );
}
