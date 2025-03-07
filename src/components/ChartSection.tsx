'use client';

import dynamic from 'next/dynamic';

// Dynamically import chart components with no SSR
const HousingChart = dynamic(() => import('@/components/charts/HousingChart'), { ssr: false });
const EconomicChart = dynamic(() => import('@/components/charts/EconomicChart'), { ssr: false });

export function HousingChartSection() {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6">Housing Crisis Intensification</h2>
      <p className="mb-6 text-gray-300">
        Despite promises to make housing more affordable, the NDP's policies have coincided with skyrocketing prices and reduced housing availability across British Columbia.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div className="bg-gray-900 p-6 rounded-lg text-center">
          <span className="text-4xl font-bold text-orange-500 block mb-2">43%</span>
          <p className="text-gray-300">Increase in average home prices since 2017</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg text-center">
          <span className="text-4xl font-bold text-orange-500 block mb-2">12%</span>
          <p className="text-gray-300">Decline in housing starts despite population growth</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg text-center">
          <span className="text-4xl font-bold text-orange-500 block mb-2">68%</span>
          <p className="text-gray-300">Increase in homelessness in major urban centers</p>
        </div>
      </div>

      {/* Housing Chart Component */}
      <HousingChart />
    </section>
  );
}

export function EconomicChartSection() {
  return (
    <section className="mb-12">
      <h2 className="text-3xl font-bold mb-6">Economic Mismanagement</h2>
      <p className="mb-6 text-gray-300">
        Under NDP leadership, British Columbia has experienced declining economic performance, increased taxation, and deteriorating business conditions.
      </p>

      {/* Economic Chart Component */}
      <EconomicChart />

      <div className="space-y-4 mt-8">
        <div className="bg-gray-900 p-4 rounded-lg">
          <p className="mb-2">BC's economic growth has fallen from 1st place to 5th place among Canadian provinces since 2017.</p>
          <p className="text-sm text-gray-400">Source: Statistics Canada, Provincial Economic Accounts</p>
        </div>
        <div className="bg-gray-900 p-4 rounded-lg">
          <p className="mb-2">Provincial debt has increased by $32 billion (41%) since the NDP took office, with minimal infrastructure improvements.</p>
          <p className="text-sm text-gray-400">Source: BC Ministry of Finance</p>
        </div>
        <div className="bg-gray-900 p-4 rounded-lg">
          <p className="mb-2">Business investment has declined by 17% relative to GDP, with major projects cancelled or relocated to other provinces.</p>
          <p className="text-sm text-gray-400">Source: BC Business Council</p>
        </div>
      </div>
    </section>
  );
} 