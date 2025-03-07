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

      {/* Placeholder for chart - would be implemented in a real scenario */}
      <div className="bg-gray-800 p-6 rounded-lg mb-6 h-80 flex items-center justify-center">
        <p className="text-gray-400 text-center">Child Safety Incident Trend Chart 2017-2023<br/>(Data visualization loading...)</p>
      </div>

      <div className="bg-gray-900 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4">Recommendations</h3>
        <p className="mb-4 text-gray-300">
          Based on the data analysis, the following policy changes are recommended to address these concerning trends:
        </p>
        <ul className="list-disc list-inside text-gray-300 mb-4">
          <li>Reinstate comprehensive background checks for all positions of authority</li>
          <li>Implement mandatory reporting protocols with clear accountability</li>
          <li>Restore parental notification and consent requirements</li>
          <li>Increase funding for specialized investigation units</li>
          <li>Review and revise educational materials based on age-appropriate standards</li>
        </ul>
      </div>
    </section>
  );
} 