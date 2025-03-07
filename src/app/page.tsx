import Image from "next/image";
import { HousingChartSection, EconomicChartSection } from "@/components/ChartSection";
import { TrendingUp, Home as HomeIcon, Pill, Users, Clock, DollarSign } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <header className="bg-orange-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">BC Policy Analysis</h1>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Analysis</a></li>
              <li><a href="#" className="hover:underline">About</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="flex-grow container mx-auto p-4">
        <section className="mb-12 text-center py-8">
          <h2 className="text-4xl font-bold mb-4">BC Policy Failure Analysis</h2>
          <p className="text-xl max-w-3xl mx-auto text-gray-300">
            Data-driven analysis of policy failures in British Columbia under NDP governance, highlighting the need for accountability and reform.
          </p>
        </section>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <a href="#" className="bg-gray-900 hover:bg-gray-800 p-4 rounded transition-colors">Crime Crisis</a>
          <a href="#" className="bg-gray-900 hover:bg-gray-800 p-4 rounded transition-colors">Immigration Impact</a>
          <a href="#" className="bg-gray-900 hover:bg-gray-800 p-4 rounded transition-colors">Drug Epidemic</a>
          <a href="#" className="bg-gray-900 hover:bg-gray-800 p-4 rounded transition-colors">Gang Activity</a>
          <a href="#" className="bg-gray-900 hover:bg-gray-800 p-4 rounded transition-colors">Housing Crisis</a>
          <a href="#" className="bg-gray-900 hover:bg-gray-800 p-4 rounded transition-colors">Healthcare Collapse</a>
          <a href="#" className="bg-gray-900 hover:bg-gray-800 p-4 rounded transition-colors">Corruption Cases</a>
          <a href="#" className="bg-gray-900 hover:bg-gray-800 p-4 rounded transition-colors">Economic Decline</a>
        </div>

        <section className="mb-12">
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

          <div className="bg-gray-900 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-semibold mb-4">Catch and Release Justice System</h3>
            <p className="mb-4 text-gray-300">
              The NDP's "catch and release" approach to criminal justice has resulted in repeat offenders cycling through the system with minimal consequences, endangering public safety.
            </p>
            <div className="space-y-4">
              <div className="bg-gray-800 p-4 rounded-lg">
                <p className="mb-2">Over 40% of violent offenders in Vancouver had 10+ prior convictions at time of arrest.</p>
                <p className="text-sm text-gray-400">Source: Vancouver Police Department, 2023</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <p className="mb-2">The average prolific offender in BC is released back into the community within 2.5 days of arrest.</p>
                <p className="text-sm text-gray-400">Source: BC Prosecution Service</p>
              </div>
            </div>
          </div>
        </section>

        {/* Housing Chart Section (Client Component) */}
        <HousingChartSection />

        <section className="mb-12">
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

          <div className="bg-gray-900 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-semibold mb-4">Failed Decriminalization Experiment</h3>
            <p className="mb-4 text-gray-300">
              The NDP's decriminalization policy has turned public spaces into open-air drug scenes while failing to provide adequate treatment options.
            </p>
            <div className="space-y-4">
              <div className="bg-gray-800 p-4 rounded-lg">
                <p className="mb-2">Only 2,800 treatment beds available for an estimated 125,000+ problematic drug users in BC.</p>
                <p className="text-sm text-gray-400">Source: BC Centre on Substance Use</p>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <p className="mb-2">78% of businesses in downtown Vancouver report negative impacts from public drug use.</p>
                <p className="text-sm text-gray-400">Source: Vancouver Business Improvement Association</p>
              </div>
            </div>
          </div>
        </section>

        {/* Economic Chart Section (Client Component) */}
        <EconomicChartSection />

        {/* Enhanced Key Findings Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Key Findings</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Crime Finding */}
            <div className="bg-gray-900 rounded-lg p-6 border-l-4 border-orange-600 hover:bg-gray-800 transition-colors">
              <div className="flex items-start mb-4">
                <div className="bg-orange-600/20 p-3 rounded-lg mr-4">
                  <TrendingUp size={24} stroke="#f97316" />
                </div>
                <h3 className="text-xl font-semibold">Crime Surge</h3>
              </div>
              <p className="text-gray-300">Violent crime has increased by <span className="text-orange-500 font-bold">37%</span> province-wide since the NDP took power in 2017</p>
            </div>
            
            {/* Housing Finding */}
            <div className="bg-gray-900 rounded-lg p-6 border-l-4 border-orange-600 hover:bg-gray-800 transition-colors">
              <div className="flex items-start mb-4">
                <div className="bg-orange-600/20 p-3 rounded-lg mr-4">
                  <HomeIcon size={24} stroke="#f97316" />
                </div>
                <h3 className="text-xl font-semibold">Housing Crisis</h3>
              </div>
              <p className="text-gray-300">Housing costs have risen by <span className="text-orange-500 font-bold">43%</span> while housing starts have declined by <span className="text-orange-500 font-bold">12%</span></p>
            </div>
            
            {/* Drug Finding */}
            <div className="bg-gray-900 rounded-lg p-6 border-l-4 border-orange-600 hover:bg-gray-800 transition-colors">
              <div className="flex items-start mb-4">
                <div className="bg-orange-600/20 p-3 rounded-lg mr-4">
                  <Pill size={24} stroke="#f97316" />
                </div>
                <h3 className="text-xl font-semibold">Drug Epidemic</h3>
              </div>
              <p className="text-gray-300">BC has the highest rate of drug overdose deaths in Canada, with minimal improvement despite policy changes</p>
            </div>
            
            {/* Crime Groups Finding */}
            <div className="bg-gray-900 rounded-lg p-6 border-l-4 border-orange-600 hover:bg-gray-800 transition-colors">
              <div className="flex items-start mb-4">
                <div className="bg-orange-600/20 p-3 rounded-lg mr-4">
                  <Users size={24} stroke="#f97316" />
                </div>
                <h3 className="text-xl font-semibold">Organized Crime</h3>
              </div>
              <p className="text-gray-300">Organized crime groups have expanded operations amid relaxed enforcement policies</p>
            </div>
            
            {/* Healthcare Finding */}
            <div className="bg-gray-900 rounded-lg p-6 border-l-4 border-orange-600 hover:bg-gray-800 transition-colors">
              <div className="flex items-start mb-4">
                <div className="bg-orange-600/20 p-3 rounded-lg mr-4">
                  <Clock size={24} stroke="#f97316" />
                </div>
                <h3 className="text-xl font-semibold">Healthcare Delays</h3>
              </div>
              <p className="text-gray-300">Healthcare wait times have increased by <span className="text-orange-500 font-bold">41%</span> for essential surgeries and procedures</p>
            </div>
            
            {/* Tax Finding */}
            <div className="bg-gray-900 rounded-lg p-6 border-l-4 border-orange-600 hover:bg-gray-800 transition-colors">
              <div className="flex items-start mb-4">
                <div className="bg-orange-600/20 p-3 rounded-lg mr-4">
                  <DollarSign size={24} stroke="#f97316" />
                </div>
                <h3 className="text-xl font-semibold">Tax Burden</h3>
              </div>
              <p className="text-gray-300">Tax burden on middle-class families has increased while services have deteriorated</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 p-6 text-center text-gray-400">
        <div className="container mx-auto">
          <p className="mb-4">© {new Date().getFullYear()} BC Policy Analysis. All rights reserved.</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Use</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
