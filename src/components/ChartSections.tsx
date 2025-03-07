'use client';

import dynamic from 'next/dynamic';

// Dynamically import chart components with no SSR
const CrimeChart = dynamic(() => import('@/components/charts/CrimeChart'), { ssr: false });
const DrugChart = dynamic(() => import('@/components/charts/DrugChart'), { ssr: false });
const HealthcareChart = dynamic(() => import('@/components/charts/HealthcareChart'), { ssr: false });
const HousingChart = dynamic(() => import('@/components/charts/HousingChart'), { ssr: false });
const EconomicChart = dynamic(() => import('@/components/charts/EconomicChart'), { ssr: false });

// Advanced charts
const CrimeRegressionChart = dynamic(() => import('@/components/charts/CrimeRegressionChart'), { ssr: false });
const BCChoroplethMap = dynamic(() => import('@/components/charts/BCChoroplethMap'), { ssr: false });
const BudgetSankeyChart = dynamic(() => import('@/components/charts/BudgetSankeyChart'), { ssr: false });
const ImmigrationScatterChart = dynamic(() => import('@/components/charts/ImmigrationScatterChart'), { ssr: false });

export function CrimeChartSection() {
  return (
    <section className="mb-12" id="crime-crisis">
      <h2 className="text-3xl font-bold mb-6">Public Safety Crisis</h2>
      <p className="mb-6 text-gray-300">
        Under NDP governance, British Columbia has experienced an unprecedented rise in crime rates, with violent offenses reaching historic highs in major urban centers.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div className="bg-gray-900 p-6 rounded-lg text-center">
          <span className="text-4xl font-bold text-orange-500 block mb-2">37%</span>
          <p className="text-gray-300">Increase in violent crime since 2017</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg text-center">
          <span className="text-4xl font-bold text-orange-500 block mb-2">52%</span>
          <p className="text-gray-300">Rise in property crime in Vancouver</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg text-center">
          <span className="text-4xl font-bold text-orange-500 block mb-2">41%</span>
          <p className="text-gray-300">Increase in random stranger attacks</p>
        </div>
      </div>

      {/* Crime Chart Component */}
      <CrimeChart />
      
      {/* Crime Regression Chart */}
      <div className="mt-8">
        <CrimeRegressionChart />
      </div>
      
      {/* Regional Crime Map */}
      <div className="mt-8">
        <BCChoroplethMap />
      </div>
    </section>
  );
}

export function DrugChartSection() {
  return (
    <section className="mb-12" id="drug-epidemic">
      <h2 className="text-3xl font-bold mb-6">Drug Crisis Escalation</h2>
      <p className="mb-6 text-gray-300">
        The NDP's approach to drug decriminalization has coincided with a dramatic increase in public drug use, overdose deaths, and associated crime.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div className="bg-gray-900 p-6 rounded-lg text-center">
          <span className="text-4xl font-bold text-orange-500 block mb-2">2,511</span>
          <p className="text-gray-300">Overdose deaths in 2023 alone</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg text-center">
          <span className="text-4xl font-bold text-orange-500 block mb-2">316%</span>
          <p className="text-gray-300">Increase in public drug use incidents</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg text-center">
          <span className="text-4xl font-bold text-orange-500 block mb-2">189%</span>
          <p className="text-gray-300">Rise in drug-related property crime</p>
        </div>
      </div>

      {/* Drug Chart Component */}
      <DrugChart />
    </section>
  );
}

export function ImmigrationChartSection() {
  return (
    <section className="mb-12" id="immigration-impact">
      <h2 className="text-3xl font-bold mb-6">Immigration Impact Analysis</h2>
      <p className="mb-6 text-gray-300">
        Rapid population growth through immigration without corresponding infrastructure and housing development has contributed to multiple crises across British Columbia.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div className="bg-gray-900 p-6 rounded-lg text-center">
          <span className="text-4xl font-bold text-orange-500 block mb-2">42%</span>
          <p className="text-gray-300">Immigration increase in Vancouver since 2017</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg text-center">
          <span className="text-4xl font-bold text-orange-500 block mb-2">12%</span>
          <p className="text-gray-300">Decline in housing starts despite population growth</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg text-center">
          <span className="text-4xl font-bold text-orange-500 block mb-2">0.4%</span>
          <p className="text-gray-300">Rental vacancy rate in major urban centers</p>
        </div>
      </div>

      {/* Immigration Scatter Chart */}
      <ImmigrationScatterChart />
    </section>
  );
}

export function HealthcareChartSection() {
  return (
    <section className="mb-12" id="healthcare-collapse">
      <h2 className="text-3xl font-bold mb-6">Healthcare System Collapse</h2>
      <p className="mb-6 text-gray-300">
        Despite increased healthcare spending, BC's healthcare system has deteriorated significantly under NDP governance, with longer wait times and reduced access to care.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div className="bg-gray-900 p-6 rounded-lg text-center">
          <span className="text-4xl font-bold text-orange-500 block mb-2">117%</span>
          <p className="text-gray-300">Increase in surgical wait times</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg text-center">
          <span className="text-4xl font-bold text-orange-500 block mb-2">1.6M</span>
          <p className="text-gray-300">British Columbians without a family doctor</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg text-center">
          <span className="text-4xl font-bold text-orange-500 block mb-2">94%</span>
          <p className="text-gray-300">Increase in ER wait times</p>
        </div>
      </div>

      {/* Healthcare Chart Component */}
      <HealthcareChart />
    </section>
  );
}

export function HousingChartSection() {
  return (
    <section className="mb-12" id="housing-crisis">
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
    <section className="mb-12" id="economic-decline">
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
      
      {/* Budget Sankey Chart */}
      <div className="mt-8">
        <BudgetSankeyChart />
      </div>
    </section>
  );
} 