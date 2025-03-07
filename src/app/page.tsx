import Image from "next/image";
import { TrendingUp, Home as HomeIcon, Pill, Users, Clock, DollarSign, AlertTriangle, Building, Briefcase, Flame, Brain, FileSearch, Shield, LogOut, Globe, Map, GraduationCap } from "lucide-react";
import { 
  CrimeChartSection, 
  DrugChartSection, 
  HealthcareChartSection, 
  HousingChartSection, 
  EconomicChartSection,
  ImmigrationChartSection,
  OrganizedCrimeSection,
  ChurchBurningsSection,
  MentalHealthSection,
  OverspendingSection,
  ReconciliationSection,
  ChildCrimeSection,
  PopulationExodusSection,
  RefugeeImpactSection,
  IllegalImmigrationSection,
  InternationalStudentSection
} from "@/components/ChartSections";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <header className="bg-orange-600 text-white p-4 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">BC Policy Analysis</h1>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#key-findings" className="hover:underline">Key Findings</a></li>
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
          <a href="#crime-crisis" className="bg-gray-900 hover:bg-gray-800 p-4 rounded transition-colors flex items-center">
            <AlertTriangle size={18} className="mr-2" stroke="#f97316" />
            <span>Crime Crisis</span>
          </a>
          <a href="#immigration-impact" className="bg-gray-900 hover:bg-gray-800 p-4 rounded transition-colors flex items-center">
            <Users size={18} className="mr-2" stroke="#f97316" />
            <span>Immigration Impact</span>
          </a>
          <a href="#drug-epidemic" className="bg-gray-900 hover:bg-gray-800 p-4 rounded transition-colors flex items-center">
            <Pill size={18} className="mr-2" stroke="#f97316" />
            <span>Drug Epidemic</span>
          </a>
          <a href="#gang-activity" className="bg-gray-900 hover:bg-gray-800 p-4 rounded transition-colors flex items-center">
            <Users size={18} className="mr-2" stroke="#f97316" />
            <span>Gang Activity</span>
          </a>
          <a href="#housing-crisis" className="bg-gray-900 hover:bg-gray-800 p-4 rounded transition-colors flex items-center">
            <HomeIcon size={18} className="mr-2" stroke="#f97316" />
            <span>Housing Crisis</span>
          </a>
          <a href="#healthcare-collapse" className="bg-gray-900 hover:bg-gray-800 p-4 rounded transition-colors flex items-center">
            <Clock size={18} className="mr-2" stroke="#f97316" />
            <span>Healthcare Collapse</span>
          </a>
          <a href="#church-burning-crisis" className="bg-gray-900 hover:bg-gray-800 p-4 rounded transition-colors flex items-center">
            <Flame size={18} className="mr-2" stroke="#f97316" />
            <span>Church Burnings</span>
          </a>
          <a href="#mental-health-crisis" className="bg-gray-900 hover:bg-gray-800 p-4 rounded transition-colors flex items-center">
            <Brain size={18} className="mr-2" stroke="#f97316" />
            <span>Mental Health Crisis</span>
          </a>
          <a href="#government-overspending" className="bg-gray-900 hover:bg-gray-800 p-4 rounded transition-colors flex items-center">
            <DollarSign size={18} className="mr-2" stroke="#f97316" />
            <span>Overspending</span>
          </a>
          <a href="#reconciliation-claims" className="bg-gray-900 hover:bg-gray-800 p-4 rounded transition-colors flex items-center">
            <FileSearch size={18} className="mr-2" stroke="#f97316" />
            <span>Reconciliation Claims</span>
          </a>
          <a href="#economic-decline" className="bg-gray-900 hover:bg-gray-800 p-4 rounded transition-colors flex items-center">
            <Briefcase size={18} className="mr-2" stroke="#f97316" />
            <span>Economic Decline</span>
          </a>
          <a href="#child-crime-crisis" className="bg-gray-900 hover:bg-gray-800 p-4 rounded transition-colors flex items-center">
            <Shield size={18} className="mr-2" stroke="#f97316" />
            <span>Child Safety Crisis</span>
          </a>
          <a href="#population-exodus" className="bg-gray-900 hover:bg-gray-800 p-4 rounded transition-colors flex items-center">
            <LogOut size={18} className="mr-2" stroke="#f97316" />
            <span>Population Exodus</span>
          </a>
          <a href="#refugee-impact" className="bg-gray-900 hover:bg-gray-800 p-4 rounded transition-colors flex items-center">
            <Globe size={18} className="mr-2" stroke="#f97316" />
            <span>Refugee Burdens</span>
          </a>
          <a href="#illegal-immigration" className="bg-gray-900 hover:bg-gray-800 p-4 rounded transition-colors flex items-center">
            <Map size={18} className="mr-2" stroke="#f97316" />
            <span>Illegal Immigration</span>
          </a>
          <a href="#international-students" className="bg-gray-900 hover:bg-gray-800 p-4 rounded transition-colors flex items-center">
            <GraduationCap size={18} className="mr-2" stroke="#f97316" />
            <span>Diploma Mills</span>
          </a>
        </div>

        {/* Crime Chart Section */}
        <CrimeChartSection />

        {/* Immigration Chart Section */}
        <ImmigrationChartSection />

        {/* Organized Crime Section */}
        <OrganizedCrimeSection />

        {/* Drug Chart Section */}
        <DrugChartSection />

        {/* Child Crime Section */}
        <ChildCrimeSection />

        {/* Population Exodus Section */}
        <PopulationExodusSection />

        {/* Refugee Impact Section */}
        <RefugeeImpactSection />

        {/* Illegal Immigration Section */}
        <IllegalImmigrationSection />

        {/* International Student Section */}
        <InternationalStudentSection />

        {/* Church Burnings Section */}
        <ChurchBurningsSection />

        {/* Reconciliation Section */}
        <ReconciliationSection />

        {/* Mental Health Section */}
        <MentalHealthSection />

        {/* Housing Chart Section */}
        <HousingChartSection />

        {/* Healthcare Chart Section */}
        <HealthcareChartSection />

        {/* Overspending Section */}
        <OverspendingSection />

        {/* Economic Chart Section */}
        <EconomicChartSection />

        {/* Enhanced Key Findings Section */}
        <section className="mb-12" id="key-findings">
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
            
            {/* Church Burnings Finding */}
            <div className="bg-gray-900 rounded-lg p-6 border-l-4 border-orange-600 hover:bg-gray-800 transition-colors">
              <div className="flex items-start mb-4">
                <div className="bg-orange-600/20 p-3 rounded-lg mr-4">
                  <Flame size={24} stroke="#f97316" />
                </div>
                <h3 className="text-xl font-semibold">Church Burnings</h3>
              </div>
              <p className="text-gray-300">Church burnings and vandalism increased by <span className="text-orange-500 font-bold">467%</span> in 2021 with minimal government response</p>
            </div>
            
            {/* Mental Health Finding */}
            <div className="bg-gray-900 rounded-lg p-6 border-l-4 border-orange-600 hover:bg-gray-800 transition-colors">
              <div className="flex items-start mb-4">
                <div className="bg-orange-600/20 p-3 rounded-lg mr-4">
                  <Brain size={24} stroke="#f97316" />
                </div>
                <h3 className="text-xl font-semibold">Mental Health</h3>
              </div>
              <p className="text-gray-300">Mental health emergency calls increased by <span className="text-orange-500 font-bold">183%</span> while funding decreased by <span className="text-orange-500 font-bold">2%</span></p>
            </div>
            
            {/* Reconciliation Finding */}
            <div className="bg-gray-900 rounded-lg p-6 border-l-4 border-orange-600 hover:bg-gray-800 transition-colors">
              <div className="flex items-start mb-4">
                <div className="bg-orange-600/20 p-3 rounded-lg mr-4">
                  <FileSearch size={24} stroke="#f97316" />
                </div>
                <h3 className="text-xl font-semibold">Reconciliation Claims</h3>
              </div>
              <p className="text-gray-300">Despite <span className="text-orange-500 font-bold">1,505</span> claimed graves at residential schools, <span className="text-orange-500 font-bold">0</span> excavations have been conducted to verify these claims</p>
            </div>
            
            {/* Overspending Finding */}
            <div className="bg-gray-900 rounded-lg p-6 border-l-4 border-orange-600 hover:bg-gray-800 transition-colors">
              <div className="flex items-start mb-4">
                <div className="bg-orange-600/20 p-3 rounded-lg mr-4">
                  <DollarSign size={24} stroke="#f97316" />
                </div>
                <h3 className="text-xl font-semibold">Overspending</h3>
              </div>
              <p className="text-gray-300">DEI program spending exceeded budget by <span className="text-orange-500 font-bold">363%</span> while essential services were underfunded by <span className="text-orange-500 font-bold">18%</span></p>
            </div>

            {/* Child Safety Finding */}
            <div className="bg-gray-900 rounded-lg p-6 border-l-4 border-orange-600 hover:bg-gray-800 transition-colors">
              <div className="flex items-start mb-4">
                <div className="bg-orange-600/20 p-3 rounded-lg mr-4">
                  <Shield size={24} stroke="#f97316" />
                </div>
                <h3 className="text-xl font-semibold">Child Safety Crisis</h3>
              </div>
              <p className="text-gray-300">Child safety incidents increased by <span className="text-orange-500 font-bold">156%</span> following policy changes, while prosecution rates fell by <span className="text-orange-500 font-bold">43%</span></p>
            </div>

            {/* Population Exodus Finding */}
            <div className="bg-gray-900 rounded-lg p-6 border-l-4 border-orange-600 hover:bg-gray-800 transition-colors">
              <div className="flex items-start mb-4">
                <div className="bg-orange-600/20 p-3 rounded-lg mr-4">
                  <LogOut size={24} stroke="#f97316" />
                </div>
                <h3 className="text-xl font-semibold">Population Exodus</h3>
              </div>
              <p className="text-gray-300">BC has lost <span className="text-orange-500 font-bold">90,100+</span> residents to other provinces since 2019, with <span className="text-orange-500 font-bold">4,800+</span> businesses closing or relocating</p>
            </div>

            {/* Refugee Impact Finding */}
            <div className="bg-gray-900 rounded-lg p-6 border-l-4 border-orange-600 hover:bg-gray-800 transition-colors">
              <div className="flex items-start mb-4">
                <div className="bg-orange-600/20 p-3 rounded-lg mr-4">
                  <Globe size={24} stroke="#f97316" />
                </div>
                <h3 className="text-xl font-semibold">Refugee Burdens</h3>
              </div>
              <p className="text-gray-300">Refugee claimants have a <span className="text-orange-500 font-bold">74%</span> unemployment rate, costing taxpayers <span className="text-orange-500 font-bold">$298M</span> annually with minimal integration success</p>
            </div>

            {/* Illegal Immigration Finding */}
            <div className="bg-gray-900 rounded-lg p-6 border-l-4 border-orange-600 hover:bg-gray-800 transition-colors">
              <div className="flex items-start mb-4">
                <div className="bg-orange-600/20 p-3 rounded-lg mr-4">
                  <Map size={24} stroke="#f97316" />
                </div>
                <h3 className="text-xl font-semibold">Illegal Immigration</h3>
              </div>
              <p className="text-gray-300">Illegal entries have increased by <span className="text-orange-500 font-bold">894%</span> since 2017, while deportation order execution has fallen from <span className="text-orange-500 font-bold">68%</span> to just <span className="text-orange-500 font-bold">12%</span></p>
            </div>

            {/* International Student Finding */}
            <div className="bg-gray-900 rounded-lg p-6 border-l-4 border-orange-600 hover:bg-gray-800 transition-colors">
              <div className="flex items-start mb-4">
                <div className="bg-orange-600/20 p-3 rounded-lg mr-4">
                  <GraduationCap size={24} stroke="#f97316" />
                </div>
                <h3 className="text-xl font-semibold">Diploma Mills</h3>
              </div>
              <p className="text-gray-300"><span className="text-orange-500 font-bold">63%</span> of international students don't return home, while <span className="text-orange-500 font-bold">112</span> diploma mills operate with minimal oversight, costing taxpayers <span className="text-orange-500 font-bold">$4.2B</span> annually</p>
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
