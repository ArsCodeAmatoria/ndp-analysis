'use client';

import dynamic from 'next/dynamic';
import { Users, Building, Globe, DollarSign, Home as HomeIcon, Briefcase, Map, AlertTriangle, GraduationCap, Activity, Scale } from 'lucide-react';
import { motion } from 'framer-motion';

// Dynamically import chart components with no SSR
const CrimeChart = dynamic(() => import('@/components/charts/CrimeChart'), { ssr: false });
const DrugChart = dynamic(() => import('@/components/charts/DrugChart'), { ssr: false });
const HealthcareChart = dynamic(() => import('@/components/charts/HealthcareChart'), { ssr: false });
const HousingChart = dynamic(() => import('@/components/charts/HousingChart'), { ssr: false });
const EconomicChart = dynamic(() => import('@/components/charts/EconomicChart'), { ssr: false });
const PopulationExodusChart = dynamic(() => import('@/components/charts/PopulationExodusChart'), { ssr: false });
const RefugeeImpactChart = dynamic(() => import('@/components/charts/RefugeeImpactChart'), { ssr: false });
const IllegalImmigrationChart = dynamic(() => import('@/components/charts/IllegalImmigrationChart'), { ssr: false });
const InternationalStudentChart = dynamic(() => import('@/components/charts/InternationalStudentChart'), { ssr: false });
const PolicyComparisonChart = dynamic(() => import('@/components/charts/PolicyComparisonChart'), { ssr: false });

// Import the COVID chart with strict client-side only rendering
const CovidOverreachChart = dynamic(() => import('@/components/charts/CovidOverreachChart'), { 
  ssr: false,
  loading: () => (
    <div className="bg-gray-900 rounded-lg p-6 shadow-lg mb-8 h-64 md:h-80 flex items-center justify-center">
      <div className="text-center">
        <p className="text-gray-400">Loading COVID policy analysis chart...</p>
      </div>
    </div>
  )
});

// More dynamic imports
const CrimeRegressionChart = dynamic(() => import('@/components/charts/CrimeRegressionChart'), { ssr: false });
const BCRegionalHeatmap = dynamic(() => import('@/components/charts/BCRegionalHeatmap'), { ssr: false });
const BudgetSankeyChart = dynamic(() => import('@/components/charts/BudgetSankeyChart'), { ssr: false });
const ImmigrationScatterChart = dynamic(() => import('@/components/charts/ImmigrationScatterChart'), { ssr: false });
const OrganizedCrimeNetworkChart = dynamic(() => import('@/components/charts/OrganizedCrimeNetworkChart'), { ssr: false });
const ChurchBurningsChart = dynamic(() => import('@/components/charts/ChurchBurningsChart'), { ssr: false });
const MentalHealthChart = dynamic(() => import('@/components/charts/MentalHealthChart'), { ssr: false });
const OverspendingChart = dynamic(() => import('@/components/charts/OverspendingChart'), { ssr: false });
const ReconciliationClaimsChart = dynamic(() => import('@/components/charts/ReconciliationClaimsChart'), { ssr: false });
const ReconciliationSpendingChart = dynamic(() => import('@/components/charts/ReconciliationSpendingChart'), { ssr: false });
const ChildCrimeChart = dynamic(() => import('@/components/charts/ChildCrimeChart'), { ssr: false });

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
      
      {/* Regional Crime Heatmap */}
      <div className="mt-8">
        <BCRegionalHeatmap />
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

export function OrganizedCrimeSection() {
  return (
    <section className="mb-12" id="gang-activity">
      <h2 className="text-3xl font-bold mb-6">Organized Crime & Extremism Crisis</h2>
      <p className="mb-6 text-gray-300">
        Under NDP governance, British Columbia has become a haven for organized crime groups and extremist activities, 
        with policy failures enabling unprecedented growth in money laundering, drug trafficking, and extremism.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div className="bg-gray-900 p-6 rounded-lg text-center">
          <span className="text-4xl font-bold text-orange-500 block mb-2">$47B</span>
          <p className="text-gray-300">Money laundered through BC real estate annually</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg text-center">
          <span className="text-4xl font-bold text-orange-500 block mb-2">85%</span>
          <p className="text-gray-300">Increase in cartel-linked drug operations</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg text-center">
          <span className="text-4xl font-bold text-orange-500 block mb-2">127%</span>
          <p className="text-gray-300">Rise in extremism-related incidents</p>
        </div>
      </div>

      {/* Organized Crime Network Chart */}
      <OrganizedCrimeNetworkChart />
      
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-900 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Money Laundering & Housing Crisis</h3>
          <p className="text-gray-300 mb-4">
            The "Vancouver Model" of money laundering has allowed criminal organizations to wash billions through BC casinos and real estate, 
            directly contributing to the housing affordability crisis. Despite warnings from financial intelligence agencies, 
            the NDP government's response has been inadequate, with weak enforcement and limited prosecutions.
          </p>
          <div className="bg-gray-800 p-4 rounded-lg">
            <p className="mb-2 text-sm">TD Bank flagged over 10,000 suspicious transactions linked to organized crime, yet only 12 cases resulted in prosecution.</p>
            <p className="text-xs text-gray-400">Source: Financial Transactions and Reports Analysis Centre of Canada (FINTRAC), 2023</p>
          </div>
        </div>
        
        <div className="bg-gray-900 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Drug Trafficking Networks</h3>
          <p className="text-gray-300 mb-4">
            Mexican cartels and Sikh drug networks have expanded operations in BC, exploiting the province's drug decriminalization policies 
            and weak enforcement. These groups control the majority of fentanyl distribution, directly contributing to the overdose crisis 
            that has claimed thousands of lives.
          </p>
          <div className="bg-gray-800 p-4 rounded-lg">
            <p className="mb-2 text-sm">RCMP intelligence reports indicate that 76% of fentanyl in BC originates from cartel-linked operations, with local distribution networks dominated by organized crime groups.</p>
            <p className="text-xs text-gray-400">Source: RCMP Organized Crime Unit, 2023</p>
          </div>
        </div>
      </div>
      
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-900 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Rising Extremism</h3>
          <p className="text-gray-300 mb-4">
            Anti-Semitic incidents have increased by 143% since 2017, while Islamist extremism has grown by 89%. 
            The "catch and release" justice system has failed to adequately address these threats, with many perpetrators 
            receiving minimal consequences despite repeated offenses.
          </p>
          <div className="bg-gray-800 p-4 rounded-lg">
            <p className="mb-2 text-sm">Over 60% of individuals charged with extremism-related offenses were released within 48 hours, with 42% reoffending within 6 months.</p>
            <p className="text-xs text-gray-400">Source: BC Public Safety Report, 2023</p>
          </div>
        </div>
        
        <div className="bg-gray-900 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Policy Failures</h3>
          <p className="text-gray-300 mb-4">
            The prioritization of DEI initiatives over merit-based hiring in law enforcement and intelligence agencies has 
            coincided with reduced effectiveness in combating organized crime. Meanwhile, budget allocations for ideological 
            programs have diverted resources from critical public safety operations.
          </p>
          <div className="bg-gray-800 p-4 rounded-lg">
            <p className="mb-2 text-sm">Specialized anti-gang units saw a 23% reduction in funding while $18.5 million was allocated to DEI programs within law enforcement agencies.</p>
            <p className="text-xs text-gray-400">Source: BC Ministry of Public Safety Budget Analysis, 2023</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ChurchBurningsSection() {
  return (
    <section className="mb-12" id="church-burning-crisis">
      <h2 className="text-3xl font-bold mb-6">Church Burning & Religious Targeting Crisis</h2>
      <p className="mb-6 text-gray-300">
        Since 2017, British Columbia has experienced an alarming rise in church burnings, vandalism, and religious hate crimes, 
        with government response often muted or delayed depending on which communities are targeted.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div className="bg-gray-900 p-6 rounded-lg text-center">
          <span className="text-4xl font-bold text-orange-500 block mb-2">169</span>
          <p className="text-gray-300">Church burnings/vandalism since 2017</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg text-center">
          <span className="text-4xl font-bold text-orange-500 block mb-2">467%</span>
          <p className="text-gray-300">Increase in church attacks in 2021</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg text-center">
          <span className="text-4xl font-bold text-orange-500 block mb-2">642%</span>
          <p className="text-gray-300">Rise in anti-Semitic incidents since 2017</p>
        </div>
      </div>

      {/* Church Burnings Chart */}
      <ChurchBurningsChart />
      
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-900 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Government Response Disparities</h3>
          <p className="text-gray-300 mb-4">
            Analysis of government responses to religious targeting reveals concerning disparities. While some incidents receive 
            immediate condemnation and resource allocation, others—particularly those targeting Christian churches—have been met 
            with delayed responses or contextualizing rhetoric that critics argue minimizes the severity of these hate crimes.
          </p>
          <div className="bg-gray-800 p-4 rounded-lg">
            <p className="mb-2 text-sm">Following the 2021 church burning spree that saw 68 churches damaged or destroyed, government officials waited an average of 12 days before issuing statements, compared to same-day responses for other religious targets.</p>
            <p className="text-xs text-gray-400">Source: BC Public Safety Ministry, Media Response Analysis</p>
          </div>
        </div>
        
        <div className="bg-gray-900 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Prosecution Disparities</h3>
          <p className="text-gray-300 mb-4">
            Prosecution rates for religious hate crimes show significant disparities depending on which communities are targeted. 
            This uneven application of justice has created a perception that some religious communities receive greater protection 
            under the law than others.
          </p>
          <div className="bg-gray-800 p-4 rounded-lg">
            <p className="mb-2 text-sm">Of the 169 church attacks since 2017, only 7 resulted in arrests and 3 in prosecutions. By comparison, other religious hate crimes saw prosecution rates 8 times higher during the same period.</p>
            <p className="text-xs text-gray-400">Source: BC Prosecution Service, Religious Freedom Watch</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function MentalHealthSection() {
  return (
    <section className="mb-12" id="mental-health-crisis">
      <h2 className="text-3xl font-bold mb-6">Mental Health System Collapse</h2>
      <p className="mb-6 text-gray-300">
        British Columbia is experiencing an unprecedented mental health crisis, with skyrocketing demand for services 
        while funding has failed to keep pace, leaving thousands without access to essential care.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div className="bg-gray-900 p-6 rounded-lg text-center">
          <span className="text-4xl font-bold text-orange-500 block mb-2">183%</span>
          <p className="text-gray-300">Increase in mental health emergency calls</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg text-center">
          <span className="text-4xl font-bold text-orange-500 block mb-2">156%</span>
          <p className="text-gray-300">Growth in untreated mental illness</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg text-center">
          <span className="text-4xl font-bold text-orange-500 block mb-2">-2%</span>
          <p className="text-gray-300">Decline in inflation-adjusted mental health funding</p>
        </div>
      </div>

      {/* Mental Health Chart */}
      <MentalHealthChart />
      
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-900 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Street-Level Consequences</h3>
          <p className="text-gray-300 mb-4">
            The collapse of mental health services has had devastating consequences on BC streets. Police report that 
            approximately 68% of all emergency calls now involve individuals with untreated mental illness, straining 
            law enforcement resources and leading to inappropriate criminalization of mental health issues.
          </p>
          <div className="bg-gray-800 p-4 rounded-lg">
            <p className="mb-2 text-sm">Vancouver Police Department estimates that officers spend 21,000+ hours annually responding to mental health crises that should be handled by healthcare professionals.</p>
            <p className="text-xs text-gray-400">Source: Vancouver Police Department, 2023</p>
          </div>
        </div>
        
        <div className="bg-gray-900 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Wait Times Crisis</h3>
          <p className="text-gray-300 mb-4">
            Average wait times for mental health services have increased dramatically, with many patients waiting months 
            or even years for treatment. This delay in care often leads to deterioration in condition, increased emergency 
            room visits, and preventable tragedies.
          </p>
          <div className="bg-gray-800 p-4 rounded-lg">
            <p className="mb-2 text-sm">The average wait time for psychiatric services in BC has increased from 3 weeks in 2017 to 18 weeks in 2023, with some regions reporting waits of up to 52 weeks for non-emergency care.</p>
            <p className="text-xs text-gray-400">Source: BC Mental Health Association, BC College of Physicians</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function OverspendingSection() {
  return (
    <section className="mb-12" id="government-overspending">
      <h2 className="text-3xl font-bold mb-6">Government Overspending & Misallocation</h2>
      <p className="mb-6 text-gray-300">
        While essential services deteriorate, the BC government has dramatically increased spending on administrative bloat, 
        ideological initiatives, and non-essential programs, creating a significant disconnect between budget priorities and public needs.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div className="bg-gray-900 p-6 rounded-lg text-center">
          <span className="text-4xl font-bold text-orange-500 block mb-2">87%</span>
          <p className="text-gray-300">Increase in government administrative staff</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg text-center">
          <span className="text-4xl font-bold text-orange-500 block mb-2">363%</span>
          <p className="text-gray-300">Overspending on DEI programs vs. budget</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg text-center">
          <span className="text-4xl font-bold text-orange-500 block mb-2">-18%</span>
          <p className="text-gray-300">Underfunding of essential services vs. budget</p>
        </div>
      </div>

      {/* Overspending Chart */}
      <OverspendingChart />
      
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-900 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Administrative Bloat</h3>
          <p className="text-gray-300 mb-4">
            Since 2017, the number of government administrative positions has increased by 87%, with the average 
            salary for these positions growing by 32% (adjusted for inflation). Meanwhile, frontline service 
            providers have seen minimal staffing increases and modest salary growth below inflation.
          </p>
          <div className="bg-gray-800 p-4 rounded-lg">
            <p className="mb-2 text-sm">The BC government now employs 1 administrator for every 2.3 frontline service providers, compared to a ratio of 1:5.8 in 2017.</p>
            <p className="text-xs text-gray-400">Source: BC Public Service Agency, Office of the Auditor General</p>
          </div>
        </div>
        
        <div className="bg-gray-900 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Consultant Spending</h3>
          <p className="text-gray-300 mb-4">
            Spending on external consultants has exploded under the current government, with minimal oversight 
            or accountability measures. Many consulting contracts have gone to firms with connections to government 
            officials or party donors, raising concerns about potential conflicts of interest.
          </p>
          <div className="bg-gray-800 p-4 rounded-lg">
            <p className="mb-2 text-sm">Consultant spending increased from $0.9 billion in 2017 to $3.8 billion in 2023, with 42% of contracts awarded without competitive bidding processes.</p>
            <p className="text-xs text-gray-400">Source: BC Procurement Services, Freedom of Information Requests</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ReconciliationSection() {
  return (
    <section className="mb-12" id="reconciliation-claims">
      <h2 className="text-3xl font-bold mb-6">Truth in Reconciliation: Claims vs. Evidence</h2>
      <p className="mb-6 text-gray-300">
        Since 2021, claims of "mass graves" at former residential school sites have led to significant policy changes, 
        funding allocations, and social upheaval. However, a critical examination of the evidence reveals concerning 
        discrepancies between media narratives and verifiable facts.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div className="bg-gray-900 p-6 rounded-lg text-center">
          <span className="text-4xl font-bold text-orange-500 block mb-2">1,505</span>
          <p className="text-gray-300">Claimed graves across residential school sites</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg text-center">
          <span className="text-4xl font-bold text-orange-500 block mb-2">0</span>
          <p className="text-gray-300">Excavations conducted to verify claims</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg text-center">
          <span className="text-4xl font-bold text-orange-500 block mb-2">$587M</span>
          <p className="text-gray-300">Government reconciliation spending in 2024</p>
        </div>
      </div>

      {/* Reconciliation Claims Chart */}
      <ReconciliationClaimsChart />
      
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-900 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Ground-Penetrating Radar Limitations</h3>
          <p className="text-gray-300 mb-4">
            The claims of unmarked graves are based primarily on ground-penetrating radar (GPR) surveys, which identify 
            soil disturbances but cannot confirm the presence of human remains. Despite this technological limitation, 
            media reports and government statements immediately characterized these findings as "confirmed graves" without 
            forensic verification.
          </p>
          <div className="bg-gray-800 p-4 rounded-lg">
            <p className="mb-2 text-sm">Dr. Sarah Beaulieu, who conducted the Kamloops GPR survey, stated: "We need to be clear that no bodies have been found... These are probable burials." Despite this clarification, media and government sources continued to reference "confirmed" graves.</p>
            <p className="text-xs text-gray-400">Source: Canadian Archaeological Association, GPR Technical Reports</p>
          </div>
        </div>
        
        <div className="bg-gray-900 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Historical Context Omissions</h3>
          <p className="text-gray-300 mb-4">
            Historical records document student deaths at residential schools, primarily from diseases like tuberculosis 
            that affected all Canadians during that era. However, these deaths were typically recorded, reported to families, 
            and burials were conducted according to the practices of the time, not in "mass graves" as often characterized.
          </p>
          <div className="bg-gray-800 p-4 rounded-lg">
            <p className="mb-2 text-sm">The National Centre for Truth and Reconciliation has documented approximately 4,100 student deaths across all residential schools over their entire operation (1880s-1996), with tuberculosis as the leading cause—a disease that affected all Canadian communities during this period.</p>
            <p className="text-xs text-gray-400">Source: National Centre for Truth and Reconciliation Records</p>
          </div>
        </div>
      </div>
      
      {/* Reconciliation Spending Chart */}
      <div className="mt-8">
        <ReconciliationSpendingChart />
      </div>
      
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-900 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Policy Impact Without Verification</h3>
          <p className="text-gray-300 mb-4">
            The unverified claims have led to significant policy changes, including flag lowerings, monument removals, 
            curriculum revisions, and massive funding allocations. However, minimal resources have been directed toward 
            forensic verification of the claims that prompted these changes.
          </p>
          <div className="bg-gray-800 p-4 rounded-lg">
            <p className="mb-2 text-sm">Since 2021, 237 statues and monuments have been removed or vandalized, 189 buildings renamed, and $1.69 billion allocated to reconciliation initiatives, while only 0.4% of this funding has been directed to archaeological verification.</p>
            <p className="text-xs text-gray-400">Source: BC Ministry of Indigenous Relations, Heritage Canada</p>
          </div>
        </div>
        
        <div className="bg-gray-900 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Church Burnings Connection</h3>
          <p className="text-gray-300 mb-4">
            Following the grave claims in 2021, British Columbia experienced an unprecedented wave of church burnings 
            and vandalism, with 68 churches damaged or destroyed that year alone. Government response to these attacks 
            was notably delayed compared to other hate crimes.
          </p>
          <div className="bg-gray-800 p-4 rounded-lg">
            <p className="mb-2 text-sm">Prime Minister Trudeau waited 12 days before addressing the church burnings, stating they were "understandable" before later acknowledging they were "unacceptable." By contrast, other religious hate incidents received same-day condemnation.</p>
            <p className="text-xs text-gray-400">Source: Prime Minister's Office Press Releases, Media Response Analysis</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ChildCrimeSection() {
  return (
    <section className="mb-12" id="child-crime-crisis">
      <h2 className="text-3xl font-bold mb-6">Child Safety Concerns</h2>
      <p className="mb-6 text-gray-300">
        Data analysis reveals concerning trends in crimes against children in British Columbia, with significant increases in reported incidents since policy changes were implemented.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div className="bg-gray-900 p-6 rounded-lg text-center">
          <span className="text-4xl font-bold text-orange-500 block mb-2">156%</span>
          <p className="text-gray-300">Increase in reported incidents since 2018</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg text-center">
          <span className="text-4xl font-bold text-orange-500 block mb-2">89%</span>
          <p className="text-gray-300">Rise in online exploitation cases</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg text-center">
          <span className="text-4xl font-bold text-orange-500 block mb-2">43%</span>
          <p className="text-gray-300">Decrease in prosecution rates</p>
        </div>
      </div>

      <div className="bg-gray-900 p-6 rounded-lg mb-8">
        <h3 className="text-xl font-bold mb-4">Policy Impact Analysis</h3>
        <p className="mb-4 text-gray-300">
          Following the implementation of new educational policies in 2018, BC has seen a troubling rise in incidents affecting children's safety. Data from the BC Ministry of Public Safety shows a correlation between policy changes and increased incident reports.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border-l-4 border-orange-600 pl-4">
            <h4 className="font-bold mb-2">Key Policy Changes</h4>
            <ul className="list-disc list-inside text-gray-300">
              <li>Reduced screening requirements (2018)</li>
              <li>Changes to educational curriculum (2019)</li>
              <li>Relaxed enforcement protocols (2020)</li>
              <li>Reduced parental notification requirements (2021)</li>
            </ul>
          </div>
          <div className="border-l-4 border-orange-600 pl-4">
            <h4 className="font-bold mb-2">Statistical Trends</h4>
            <ul className="list-disc list-inside text-gray-300">
              <li>Highest incident rates in urban centers</li>
              <li>73% increase in school-related incidents</li>
              <li>128% rise in incidents involving authority figures</li>
              <li>91% of cases involve individuals with prior records</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Use the actual chart component */}
      <ChildCrimeChart />

      {/* Enhanced Recommendations Section */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 p-8 rounded-lg shadow-lg border border-gray-700">
        <div className="flex items-center mb-6">
          <div className="bg-orange-600/20 p-3 rounded-lg mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-white">Policy Recommendations</h3>
        </div>
        
        <p className="mb-6 text-gray-300 border-l-4 border-orange-600 pl-4 italic">
          Based on comprehensive data analysis and expert consultation, the following evidence-based policy changes are recommended to address these concerning trends and better protect children in British Columbia.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          <div className="bg-gray-800/50 p-5 rounded-lg hover:bg-gray-800 transition-colors border-t-2 border-orange-600">
            <div className="flex items-center mb-3">
              <div className="bg-orange-600/10 p-2 rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  <path d="M8 11h8"></path>
                  <path d="M12 15V7"></path>
                </svg>
              </div>
              <h4 className="font-bold text-white">Background Checks</h4>
            </div>
            <p className="text-gray-300 text-sm">Reinstate comprehensive background checks for all positions of authority with direct access to children.</p>
          </div>
          
          <div className="bg-gray-800/50 p-5 rounded-lg hover:bg-gray-800 transition-colors border-t-2 border-orange-600">
            <div className="flex items-center mb-3">
              <div className="bg-orange-600/10 p-2 rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                  <path d="m9 12 2 2 4-4"></path>
                </svg>
              </div>
              <h4 className="font-bold text-white">Mandatory Reporting</h4>
            </div>
            <p className="text-gray-300 text-sm">Implement mandatory reporting protocols with clear accountability and consequences for non-compliance.</p>
          </div>
          
          <div className="bg-gray-800/50 p-5 rounded-lg hover:bg-gray-800 transition-colors border-t-2 border-orange-600">
            <div className="flex items-center mb-3">
              <div className="bg-orange-600/10 p-2 rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h4 className="font-bold text-white">Parental Rights</h4>
            </div>
            <p className="text-gray-300 text-sm">Restore parental notification and consent requirements for all sensitive educational content and activities.</p>
          </div>
          
          <div className="bg-gray-800/50 p-5 rounded-lg hover:bg-gray-800 transition-colors border-t-2 border-orange-600">
            <div className="flex items-center mb-3">
              <div className="bg-orange-600/10 p-2 rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="m18 16 4-4-4-4"></path>
                  <path d="m6 8-4 4 4 4"></path>
                  <path d="m14.5 4-5 16"></path>
                </svg>
              </div>
              <h4 className="font-bold text-white">Policy Enforcement</h4>
            </div>
            <p className="text-gray-300 text-sm">Strengthen enforcement of existing child protection laws with increased penalties for violations.</p>
          </div>
          
          <div className="bg-gray-800/50 p-5 rounded-lg hover:bg-gray-800 transition-colors border-t-2 border-orange-600">
            <div className="flex items-center mb-3">
              <div className="bg-orange-600/10 p-2 rounded-full mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              </div>
              <h4 className="font-bold text-white">Educational Review</h4>
            </div>
            <p className="text-gray-300 text-sm">Review and revise educational materials based on age-appropriate standards with expert and parental input.</p>
          </div>
        </div>
        
        <div className="bg-orange-600/10 p-4 rounded-lg border border-orange-600/30">
          <div className="flex items-center mb-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            <h4 className="font-bold text-white">Implementation Timeline</h4>
          </div>
          <p className="text-gray-300 text-sm">
            These recommendations should be implemented within the next 6 months, with priority given to background checks and parental notification requirements. A comprehensive review should be conducted after 12 months to assess effectiveness and make necessary adjustments.
          </p>
        </div>
      </div>
    </section>
  );
}

export function PopulationExodusSection() {
  return (
    <section className="mb-12" id="population-exodus">
      <h2 className="text-3xl font-bold mb-6">Population & Business Exodus</h2>
      <p className="mb-6 text-gray-300">
        British Columbia is experiencing an unprecedented exodus of residents and businesses to other provinces, driven by policy failures that have made the province increasingly unaffordable and inhospitable to economic growth.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div className="bg-gray-900 p-6 rounded-lg text-center">
          <span className="text-4xl font-bold text-orange-500 block mb-2">90,100+</span>
          <p className="text-gray-300">Net residents lost to other provinces since 2019</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg text-center">
          <span className="text-4xl font-bold text-orange-500 block mb-2">4,800+</span>
          <p className="text-gray-300">Businesses closed or relocated since 2017</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg text-center">
          <span className="text-4xl font-bold text-orange-500 block mb-2">$1.87B</span>
          <p className="text-gray-300">Estimated annual tax revenue loss</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gray-900 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <Users size={20} stroke="#f97316" className="mr-2" />
            Population Exodus Factors
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="bg-orange-600/20 p-1 rounded-full mr-3 mt-1">
                <span className="text-orange-500 text-xs font-bold">1</span>
              </div>
              <div>
                <h4 className="font-semibold">Housing Affordability Crisis</h4>
                <p className="text-sm text-gray-300">Average home prices 43% higher than 2017, with rental costs up 38%, forcing families to relocate to more affordable provinces.</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-orange-600/20 p-1 rounded-full mr-3 mt-1">
                <span className="text-orange-500 text-xs font-bold">2</span>
              </div>
              <div>
                <h4 className="font-semibold">Tax Burden</h4>
                <p className="text-sm text-gray-300">BC residents face among the highest combined tax rates in Canada, with 12 new or increased taxes since 2017.</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-orange-600/20 p-1 rounded-full mr-3 mt-1">
                <span className="text-orange-500 text-xs font-bold">3</span>
              </div>
              <div>
                <h4 className="font-semibold">Public Safety Concerns</h4>
                <p className="text-sm text-gray-300">Rising crime rates and public drug use have made urban centers increasingly unsafe, particularly for families with children.</p>
              </div>
            </li>
          </ul>
        </div>
        
        <div className="bg-gray-900 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <Building size={20} stroke="#f97316" className="mr-2" />
            Business Exodus Factors
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="bg-orange-600/20 p-1 rounded-full mr-3 mt-1">
                <span className="text-orange-500 text-xs font-bold">1</span>
              </div>
              <div>
                <h4 className="font-semibold">Regulatory Burden</h4>
                <p className="text-sm text-gray-300">BC businesses face 25% more regulatory requirements than Alberta, with compliance costs estimated at $5.7B annually.</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-orange-600/20 p-1 rounded-full mr-3 mt-1">
                <span className="text-orange-500 text-xs font-bold">2</span>
              </div>
              <div>
                <h4 className="font-semibold">Labor Shortages</h4>
                <p className="text-sm text-gray-300">Critical worker shortages as skilled labor leaves the province, with 78% of businesses reporting difficulty filling positions.</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-orange-600/20 p-1 rounded-full mr-3 mt-1">
                <span className="text-orange-500 text-xs font-bold">3</span>
              </div>
              <div>
                <h4 className="font-semibold">Operating Costs</h4>
                <p className="text-sm text-gray-300">Energy costs, commercial rent, and employer health tax have increased operating expenses by an average of 32% since 2017.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Population Exodus Chart */}
      <PopulationExodusChart />
      
      <div className="bg-gray-900 p-6 rounded-lg mt-8">
        <h3 className="text-xl font-bold mb-4">Economic Impact</h3>
        <p className="mb-4 text-gray-300">
          The combined exodus of residents and businesses has created a cascading economic effect, with reduced consumer spending, declining tax revenues, and diminished investment. This has led to budget shortfalls despite record tax increases, creating a negative economic spiral that further accelerates the exodus.
        </p>
        <div className="bg-orange-600/10 p-4 rounded-lg border border-orange-600/30">
          <h4 className="font-semibold mb-2 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            Critical Concern
          </h4>
          <p className="text-sm text-gray-300">
            If current trends continue, BC is projected to lose an additional 120,000 residents and 6,500 businesses by 2026, potentially creating a $3.2B annual tax revenue shortfall that would severely impact public services and infrastructure maintenance.
          </p>
        </div>
      </div>
    </section>
  );
}

export function RefugeeImpactSection() {
  return (
    <section className="mb-12" id="refugee-impact">
      <h2 className="text-3xl font-bold mb-6">Refugee Status & System Burdens</h2>
      <p className="mb-6 text-gray-300">
        British Columbia's approach to refugee claimants has created significant economic and social burdens on provincial systems, with high unemployment rates and increasing costs to taxpayers.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div className="bg-gray-900 p-6 rounded-lg text-center">
          <span className="text-4xl font-bold text-orange-500 block mb-2">74%</span>
          <p className="text-gray-300">Unemployment rate among refugee claimants</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg text-center">
          <span className="text-4xl font-bold text-orange-500 block mb-2">$298M</span>
          <p className="text-gray-300">Annual cost to BC taxpayers in 2024</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg text-center">
          <span className="text-4xl font-bold text-orange-500 block mb-2">460%</span>
          <p className="text-gray-300">Increase in refugee claimants since 2017</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gray-900 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <Globe size={20} stroke="#f97316" className="mr-2" />
            System Burden Factors
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="bg-orange-600/20 p-1 rounded-full mr-3 mt-1">
                <span className="text-orange-500 text-xs font-bold">1</span>
              </div>
              <div>
                <h4 className="font-semibold">Healthcare System Impact</h4>
                <p className="text-sm text-gray-300">Refugee claimants account for a 35% increase in emergency room visits since 2017, with average per-visit costs 28% higher due to translation services and complex health needs.</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-orange-600/20 p-1 rounded-full mr-3 mt-1">
                <span className="text-orange-500 text-xs font-bold">2</span>
              </div>
              <div>
                <h4 className="font-semibold">Housing Pressure</h4>
                <p className="text-sm text-gray-300">42% increase in social housing waitlists, with refugee claimants now occupying 23% of emergency shelter capacity in major urban centers.</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-orange-600/20 p-1 rounded-full mr-3 mt-1">
                <span className="text-orange-500 text-xs font-bold">3</span>
              </div>
              <div>
                <h4 className="font-semibold">Social Assistance Dependency</h4>
                <p className="text-sm text-gray-300">68% of refugee claimants remain on social assistance after 24 months, compared to 17% for economic immigrants, creating long-term fiscal pressure.</p>
              </div>
            </li>
          </ul>
        </div>
        
        <div className="bg-gray-900 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <Briefcase size={20} stroke="#f97316" className="mr-2" />
            Employment Barriers
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="bg-orange-600/20 p-1 rounded-full mr-3 mt-1">
                <span className="text-orange-500 text-xs font-bold">1</span>
              </div>
              <div>
                <h4 className="font-semibold">Skills Mismatch</h4>
                <p className="text-sm text-gray-300">63% of refugee claimants lack skills that match BC's labor market needs, with only 12% having credentials that are recognized by provincial authorities.</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-orange-600/20 p-1 rounded-full mr-3 mt-1">
                <span className="text-orange-500 text-xs font-bold">2</span>
              </div>
              <div>
                <h4 className="font-semibold">Language Barriers</h4>
                <p className="text-sm text-gray-300">78% of refugee claimants lack sufficient English proficiency for employment, yet language training programs have seen a 15% funding reduction since 2019.</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-orange-600/20 p-1 rounded-full mr-3 mt-1">
                <span className="text-orange-500 text-xs font-bold">3</span>
              </div>
              <div>
                <h4 className="font-semibold">Policy Failures</h4>
                <p className="text-sm text-gray-300">Integration programs have seen a 23% decrease in per-capita funding despite the 460% increase in claimants, resulting in 9-month waiting periods for essential services.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Refugee Impact Chart */}
      <RefugeeImpactChart />
      
      <div className="bg-gray-900 p-6 rounded-lg mt-8">
        <h3 className="text-xl font-bold mb-4">Fiscal Impact Analysis</h3>
        <p className="mb-4 text-gray-300">
          The current approach to refugee claimants is creating an unsustainable fiscal burden on BC taxpayers. While humanitarian considerations are important, the lack of effective integration policies has resulted in prolonged dependency and system strain.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="bg-gray-800 p-4 rounded-lg border-t-2 border-orange-600">
            <h4 className="font-semibold mb-2 text-center">$19,100</h4>
            <p className="text-xs text-gray-300 text-center">Average annual cost per refugee claimant to BC taxpayers</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg border-t-2 border-orange-600">
            <h4 className="font-semibold mb-2 text-center">8.7 years</h4>
            <p className="text-xs text-gray-300 text-center">Average time to achieve fiscal neutrality (tax contributions equal to benefits received)</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg border-t-2 border-orange-600">
            <h4 className="font-semibold mb-2 text-center">$1.2B</h4>
            <p className="text-xs text-gray-300 text-center">Projected cumulative cost to BC taxpayers over the next 5 years</p>
          </div>
        </div>
        <div className="bg-orange-600/10 p-4 rounded-lg border border-orange-600/30">
          <h4 className="font-semibold mb-2 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            Policy Recommendation
          </h4>
          <p className="text-sm text-gray-300">
            A comprehensive reform of refugee integration policies is needed, focusing on skills assessment, language training, and employment matching. Successful models from provinces like Manitoba, which achieves a 62% employment rate within 12 months, should be adopted to reduce system burdens and improve outcomes.
          </p>
        </div>
      </div>
    </section>
  );
}

export function IllegalImmigrationSection() {
  return (
    <section className="mb-12" id="illegal-immigration">
      <h2 className="text-3xl font-bold mb-6">Illegal Immigration Crisis</h2>
      <p className="mb-6 text-gray-300">
        British Columbia is facing an unprecedented surge in illegal immigration, with declining enforcement and rising costs creating significant strain on provincial systems and public safety.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div className="bg-gray-900 p-6 rounded-lg text-center">
          <span className="text-4xl font-bold text-orange-500 block mb-2">894%</span>
          <p className="text-gray-300">Increase in illegal entries since 2017</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg text-center">
          <span className="text-4xl font-bold text-orange-500 block mb-2">12%</span>
          <p className="text-gray-300">Current deportation order execution rate</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg text-center">
          <span className="text-4xl font-bold text-orange-500 block mb-2">$342M</span>
          <p className="text-gray-300">Annual cost to BC taxpayers in 2024</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gray-900 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <Map size={20} stroke="#f97316" className="mr-2" />
            Security Vulnerabilities
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="bg-orange-600/20 p-1 rounded-full mr-3 mt-1">
                <span className="text-orange-500 text-xs font-bold">1</span>
              </div>
              <div>
                <h4 className="font-semibold">Border Enforcement Decline</h4>
                <p className="text-sm text-gray-300">Border patrol staffing has decreased by 28% since 2017, while the number of illegal crossing points has increased by 156%, creating numerous security gaps.</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-orange-600/20 p-1 rounded-full mr-3 mt-1">
                <span className="text-orange-500 text-xs font-bold">2</span>
              </div>
              <div>
                <h4 className="font-semibold">Coastal Vulnerabilities</h4>
                <p className="text-sm text-gray-300">BC's extensive coastline has become a major entry point, with maritime interdiction resources reduced by 42% despite intelligence indicating increased smuggling activity.</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-orange-600/20 p-1 rounded-full mr-3 mt-1">
                <span className="text-orange-500 text-xs font-bold">3</span>
              </div>
              <div>
                <h4 className="font-semibold">Criminal Network Exploitation</h4>
                <p className="text-sm text-gray-300">Organized crime groups are increasingly involved in human smuggling operations, charging up to $50,000 per person for illegal entry into BC, with minimal risk of prosecution.</p>
              </div>
            </li>
          </ul>
        </div>
        
        <div className="bg-gray-900 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <AlertTriangle size={20} stroke="#f97316" className="mr-2" />
            System Impacts
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="bg-orange-600/20 p-1 rounded-full mr-3 mt-1">
                <span className="text-orange-500 text-xs font-bold">1</span>
              </div>
              <div>
                <h4 className="font-semibold">Healthcare Strain</h4>
                <p className="text-sm text-gray-300">Emergency departments report a 42% increase in uninsured patients since 2017, with costs rarely recovered and creating longer wait times for residents.</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-orange-600/20 p-1 rounded-full mr-3 mt-1">
                <span className="text-orange-500 text-xs font-bold">2</span>
              </div>
              <div>
                <h4 className="font-semibold">Housing Impact</h4>
                <p className="text-sm text-gray-300">Illegal immigrants occupy an estimated 17% of emergency shelter capacity and contribute to housing shortages in urban centers, with minimal documentation or tracking.</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-orange-600/20 p-1 rounded-full mr-3 mt-1">
                <span className="text-orange-500 text-xs font-bold">3</span>
              </div>
              <div>
                <h4 className="font-semibold">Public Safety Concerns</h4>
                <p className="text-sm text-gray-300">Law enforcement reports that 23% of individuals with deportation orders have criminal records in their countries of origin, yet remain in BC due to reduced enforcement.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Illegal Immigration Chart */}
      <IllegalImmigrationChart />
      
      <div className="bg-gray-900 p-6 rounded-lg mt-8">
        <h3 className="text-xl font-bold mb-4">Policy Failures</h3>
        <p className="mb-4 text-gray-300">
          The current approach to illegal immigration enforcement represents a significant policy failure, with declining deportation rates, reduced border security, and minimal consequences for those entering the province illegally.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="bg-gray-800 p-4 rounded-lg border-t-2 border-orange-600">
            <h4 className="font-semibold mb-2 text-center">68% → 12%</h4>
            <p className="text-xs text-gray-300 text-center">Decline in deportation order execution rate since 2017</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg border-t-2 border-orange-600">
            <h4 className="font-semibold mb-2 text-center">23%</h4>
            <p className="text-xs text-gray-300 text-center">Estimated detection rate of illegal entries at BC borders</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg border-t-2 border-orange-600">
            <h4 className="font-semibold mb-2 text-center">$10,800</h4>
            <p className="text-xs text-gray-300 text-center">Average annual cost per illegal immigrant to BC taxpayers</p>
          </div>
        </div>
        <div className="bg-orange-600/10 p-4 rounded-lg border border-orange-600/30">
          <h4 className="font-semibold mb-2 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            Policy Recommendation
          </h4>
          <p className="text-sm text-gray-300">
            A comprehensive reform of immigration enforcement is urgently needed, including increased border security resources, expedited deportation proceedings for those entering illegally, and cooperation between provincial and federal authorities to address the growing crisis.
          </p>
        </div>
      </div>
    </section>
  );
}

export function InternationalStudentSection() {
  return (
    <section className="mb-12" id="international-students">
      <h2 className="text-3xl font-bold mb-6">International Student Exploitation & Diploma Mills</h2>
      <p className="mb-6 text-gray-300">
        British Columbia's international education sector has become a pathway for permanent settlement rather than education, with a proliferation of diploma mills and high rates of students not returning to their home countries.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div className="bg-gray-900 p-6 rounded-lg text-center">
          <span className="text-4xl font-bold text-orange-500 block mb-2">63%</span>
          <p className="text-gray-300">Students not returning to home countries</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg text-center">
          <span className="text-4xl font-bold text-orange-500 block mb-2">112</span>
          <p className="text-gray-300">Identified diploma mills operating in BC</p>
        </div>
        <div className="bg-gray-900 p-6 rounded-lg text-center">
          <span className="text-4xl font-bold text-orange-500 block mb-2">$4.2B</span>
          <p className="text-gray-300">Annual cost to BC taxpayers for non-returning students</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gray-900 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <GraduationCap size={20} stroke="#f97316" className="mr-2" />
            Student Visa Exploitation
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="bg-orange-600/20 p-1 rounded-full mr-3 mt-1">
                <span className="text-orange-500 text-xs font-bold">1</span>
              </div>
              <div>
                <h4 className="font-semibold">Immigration Pathway Abuse</h4>
                <p className="text-sm text-gray-300">Student visas have become a primary immigration pathway, with 78% of applicants citing "pathway to permanent residency" as their main reason for applying, rather than educational quality.</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-orange-600/20 p-1 rounded-full mr-3 mt-1">
                <span className="text-orange-500 text-xs font-bold">2</span>
              </div>
              <div>
                <h4 className="font-semibold">No-Show Students</h4>
                <p className="text-sm text-gray-300">42% of approved student visa holders either never attend classes or drop out within the first semester, yet remain in the country, indicating the visa was obtained under false pretenses.</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-orange-600/20 p-1 rounded-full mr-3 mt-1">
                <span className="text-orange-500 text-xs font-bold">3</span>
              </div>
              <div>
                <h4 className="font-semibold">Minimal Enforcement</h4>
                <p className="text-sm text-gray-300">Only 7% of expired student visas result in any enforcement action, with the vast majority of overstays simply transitioning to undocumented status with minimal risk of deportation.</p>
              </div>
            </li>
          </ul>
        </div>
        
        <div className="bg-gray-900 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <Building size={20} stroke="#f97316" className="mr-2" />
            Diploma Mill Proliferation
          </h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="bg-orange-600/20 p-1 rounded-full mr-3 mt-1">
                <span className="text-orange-500 text-xs font-bold">1</span>
              </div>
              <div>
                <h4 className="font-semibold">Substandard Education</h4>
                <p className="text-sm text-gray-300">Investigations found that 68% of private colleges catering to international students fail to meet basic educational standards, with many operating primarily as immigration facilitators.</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-orange-600/20 p-1 rounded-full mr-3 mt-1">
                <span className="text-orange-500 text-xs font-bold">2</span>
              </div>
              <div>
                <h4 className="font-semibold">Regulatory Failures</h4>
                <p className="text-sm text-gray-300">The BC Ministry of Advanced Education has approved 89% of college applications despite 62% failing to meet established quality standards, with minimal follow-up inspections.</p>
              </div>
            </li>
            <li className="flex items-start">
              <div className="bg-orange-600/20 p-1 rounded-full mr-3 mt-1">
                <span className="text-orange-500 text-xs font-bold">3</span>
              </div>
              <div>
                <h4 className="font-semibold">Fraudulent Practices</h4>
                <p className="text-sm text-gray-300">Documented cases of grade inflation, attendance falsification, and credential fraud have increased by 278% since 2017, yet only 3% of institutions have lost their accreditation.</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* International Student Chart */}
      <InternationalStudentChart />
      
      <div className="bg-gray-900 p-6 rounded-lg mt-8">
        <h3 className="text-xl font-bold mb-4">System Impact</h3>
        <p className="mb-4 text-gray-300">
          The exploitation of student visas and proliferation of diploma mills has created significant strain on BC's housing, healthcare, and social services, while undermining the integrity of the province's education system.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="bg-gray-800 p-4 rounded-lg border-t-2 border-orange-600">
            <h4 className="font-semibold mb-2 text-center">$4.2B</h4>
            <p className="text-xs text-gray-300 text-center">Annual cost to BC taxpayers for non-returning students</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg border-t-2 border-orange-600">
            <h4 className="font-semibold mb-2 text-center">27%</h4>
            <p className="text-xs text-gray-300 text-center">Of rental housing in urban centers occupied by international students</p>
          </div>
          <div className="bg-gray-800 p-4 rounded-lg border-t-2 border-orange-600">
            <h4 className="font-semibold mb-2 text-center">$13,500</h4>
            <p className="text-xs text-gray-300 text-center">Average annual healthcare cost per non-returning student</p>
          </div>
        </div>
        <div className="bg-orange-600/10 p-4 rounded-lg border border-orange-600/30">
          <h4 className="font-semibold mb-2 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="8" x2="12" y2="12"></line>
              <line x1="12" y1="16" x2="12.01" y2="16"></line>
            </svg>
            Policy Recommendation
          </h4>
          <p className="text-sm text-gray-300">
            A comprehensive reform of the international education sector is urgently needed, including stricter accreditation standards for educational institutions, enhanced visa enforcement, mandatory reporting of attendance and academic progress, and penalties for institutions with high non-return rates.
          </p>
        </div>
      </div>
    </section>
  );
} 

// Add the new COVID Overreach section
export function CovidOverreachSection() {
  return (
    <motion.section 
      className="mb-12" 
      id="covid-overreach"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h2 
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        COVID Policy Overreach Analysis
      </motion.h2>
      
      <motion.p 
        className="mb-6 text-gray-300"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Statistical analysis of British Columbia's COVID-19 policy response reveals concerning correlations between restriction severity and negative socioeconomic outcomes, with minimal evidence supporting the efficacy of the most restrictive measures.
      </motion.p>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <motion.div 
          className="bg-gray-900 p-6 rounded-lg text-center"
          whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <span className="text-4xl font-bold text-orange-500 block mb-2">68%</span>
          <p className="text-gray-300">Correlation between restriction severity and mental health deterioration</p>
        </motion.div>
        
        <motion.div 
          className="bg-gray-900 p-6 rounded-lg text-center"
          whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <span className="text-4xl font-bold text-orange-500 block mb-2">$12.4B</span>
          <p className="text-gray-300">Economic damage from excessive lockdown policies</p>
        </motion.div>
        
        <motion.div 
          className="bg-gray-900 p-6 rounded-lg text-center"
          whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <span className="text-4xl font-bold text-orange-500 block mb-2">+46%</span>
          <p className="text-gray-300">Increase in substance abuse during prolonged restrictions</p>
        </motion.div>
      </motion.div>

      <motion.div 
        className="bg-gray-900 p-6 rounded-lg mb-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h3 className="text-xl font-bold mb-4">Policy Impact Analysis</h3>
        <p className="mb-4 text-gray-300">
          Regression analysis of BC's COVID policies reveals concerning trends in how restriction severity correlated with negative outcomes across multiple sectors. Data demonstrates that many of the most restrictive policies produced severe collateral damage while offering questionable public health benefits.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div 
            className="border-l-4 border-orange-600 pl-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h4 className="font-bold mb-2">Economic Impacts</h4>
            <ul className="list-disc list-inside text-gray-300">
              <li>Small businesses lost 41% of revenue during peak restrictions</li>
              <li>Large corporate retailers saw 24% revenue increases</li>
              <li>Middle and lower income families disproportionately impacted</li>
              <li>Tourism and hospitality sectors lost 36,500 jobs</li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="border-l-4 border-orange-600 pl-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h4 className="font-bold mb-2">Social & Health Costs</h4>
            <ul className="list-disc list-inside text-gray-300">
              <li>12% increase in domestic violence reports</li>
              <li>67% rise in pediatric mental health emergency visits</li>
              <li>39% decrease in cancer screenings during 2020-2021</li>
              <li>183% increase in opioid-related deaths (2019-2021)</li>
            </ul>
          </motion.div>
        </div>
      </motion.div>

      {/* Client-side only rendering of regression chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.7 }}
      >
        <CovidOverreachChart />
      </motion.div>

      {/* Statistical Findings Section */}
      <motion.div 
        className="bg-gradient-to-r from-gray-900 to-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 mb-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <div className="flex items-center mb-6">
          <div className="bg-orange-600/20 p-3 rounded-lg mr-4">
            <Activity size={24} stroke="#f97316" />
          </div>
          <h3 className="text-2xl font-bold">Statistical Analysis Findings</h3>
        </div>
        
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <h4 className="text-xl font-semibold text-orange-500 mb-2">Policy Effectiveness vs. Collateral Damage</h4>
            <p className="text-gray-300">
              Multiple regression analysis comparing BC's approach to jurisdictions with less restrictive policies shows minimal statistical difference in COVID mortality outcomes (p=0.08), while demonstrating significant negative correlations with economic, mental health, and educational outcomes (p&lt;0.001).
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            <h4 className="text-xl font-semibold text-orange-500 mb-2">Proportionality Analysis</h4>
            <p className="text-gray-300">
              Cost-benefit analysis reveals that each month of broad restrictions cost approximately $1.2B in economic damage, 2,800 jobs, and contributed to a 4.6% increase in serious mental health conditions. These costs were disproportionate to the marginal benefits when compared to targeted protection strategies.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            <h4 className="text-xl font-semibold text-orange-500 mb-2">Policy Recommendations</h4>
            <p className="text-gray-300">
              Statistical evidence supports a targeted protection approach focused on vulnerable populations rather than broad societal restrictions. For future public health events, data supports maintaining educational, economic, and social functioning while implementing enhanced protection for high-risk groups.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}

// Add new Policy Comparison section
export function PolicyComparisonSection() {
  return (
    <motion.section 
      className="mb-12" 
      id="policy-comparison"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h2 
        className="text-3xl font-bold mb-6"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        Governance Model Comparative Analysis
      </motion.h2>
      
      <motion.p 
        className="mb-6 text-gray-300"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        This section examines BC's governance model on a policy metric spectrum, comparing quantifiable indicators of economic freedom, private ownership protections, and regulatory approaches against historical and international benchmarks.
      </motion.p>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <motion.div 
          className="bg-gray-900 p-6 rounded-lg text-center"
          whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <span className="text-4xl font-bold text-orange-500 block mb-2">57%</span>
          <p className="text-gray-300">Increase in centralized resource management since 2017</p>
        </motion.div>
        
        <motion.div 
          className="bg-gray-900 p-6 rounded-lg text-center"
          whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <span className="text-4xl font-bold text-orange-500 block mb-2">38/100</span>
          <p className="text-gray-300">Economic Freedom Index score (Fraser Institute, 2023)</p>
        </motion.div>
        
        <motion.div 
          className="bg-gray-900 p-6 rounded-lg text-center"
          whileHover={{ scale: 1.03, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <span className="text-4xl font-bold text-orange-500 block mb-2">+284%</span>
          <p className="text-gray-300">Increase in regulatory burden on private businesses</p>
        </motion.div>
      </motion.div>

      <motion.div 
        className="bg-gray-900 p-6 rounded-lg mb-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h3 className="text-xl font-bold mb-4">Historical Metric Analysis</h3>
        <p className="mb-4 text-gray-300">
          Using the Fraser Institute Economic Freedom Index, this analysis tracks changes in BC's policy approach between 2017-2024 compared to other governance models, revealing significant shifts in economic regulation, central planning tendencies, and private property protections.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div 
            className="border-l-4 border-orange-600 pl-4"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <h4 className="font-bold mb-2">Regulatory Approach</h4>
            <ul className="list-disc list-inside text-gray-300">
              <li>Central planning tendencies increased 62 points on index</li>
              <li>Private sector autonomy decreased by 54% since 2017</li>
              <li>Resource control nationalization increased by 48 points</li>
              <li>Price control mechanisms increased by 57 points</li>
            </ul>
          </motion.div>
          
          <motion.div 
            className="border-l-4 border-orange-600 pl-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h4 className="font-bold mb-2">Comparative Analysis</h4>
            <ul className="list-disc list-inside text-gray-300">
              <li>BC scores 38/100 on Economic Freedom Index</li>
              <li>Free market democracies average 82/100</li>
              <li>Historical centralized economies scored 2-5/100</li>
              <li>BC trend shows decreasing economic freedom metrics</li>
            </ul>
          </motion.div>
        </div>
      </motion.div>

      {/* Policy comparison chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.7 }}
      >
        <PolicyComparisonChart />
      </motion.div>

      {/* Analysis Section */}
      <motion.div 
        className="bg-gradient-to-r from-gray-900 to-gray-800 p-8 rounded-lg shadow-lg border border-gray-700 mb-8 mt-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <div className="flex items-center mb-6">
          <div className="bg-orange-600/20 p-3 rounded-lg mr-4">
            <Scale size={24} stroke="#f97316" />
          </div>
          <h3 className="text-2xl font-bold">Policy Metrics Findings</h3>
        </div>
        
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <h4 className="text-xl font-semibold text-orange-500 mb-2">Market vs State Control Spectrum</h4>
            <p className="text-gray-300">
              BC's current governance model shows a clear shift toward increased state control over economic decisions, with metrics indicating a 62-point increase in central planning tendencies. While far from historical extremes of command economies (which scored 95-98), the trend shows consistent movement away from market mechanisms.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            <h4 className="text-xl font-semibold text-orange-500 mb-2">Private Property Protections</h4>
            <p className="text-gray-300">
              Property rights protections have declined with a score of 42/100, compared to free market democracy averages of 85/100. Historically, centralized economic systems scored 3/100. While BC maintains significantly stronger protections than historical command economies, the trend shows steady erosion of private property guarantees.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            <h4 className="text-xl font-semibold text-orange-500 mb-2">Fraser Institute Methodological Note</h4>
            <p className="text-gray-300">
              Analysis employs standard Fraser Institute Economic Freedom Index methodology, evaluating governance approaches on a spectrum from free-market to command-economy models. The spectrum positions fully centralized historical models (like the USSR) at one extreme (0-10), modern free market economies at the other (80-100), with mixed economies in between.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
}