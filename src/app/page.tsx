import Image from "next/image";
import { TrendingUp, Home as HomeIcon, Pill, Users, Clock, DollarSign, AlertTriangle, Building, Briefcase, Flame, Brain, FileSearch, Shield, LogOut, Globe, Map, GraduationCap, Axe } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <header className="bg-orange-600 text-white p-4 sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Axe className="mr-2" size={24} color="#ffffff" />
            <h1 className="text-2xl font-bold">BC Policy Analysis</h1>
          </div>
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
          <a href="#international-students" className="bg-gray-900 hover:bg-gray-800 p-4 rounded transition-colors flex items-center">
            <GraduationCap size={18} className="mr-2" stroke="#f97316" />
            <span>Diploma Mills</span>
          </a>
          <a href="#illegal-immigration" className="bg-gray-900 hover:bg-gray-800 p-4 rounded transition-colors flex items-center">
            <Map size={18} className="mr-2" stroke="#f97316" />
            <span>Illegal Immigration</span>
          </a>
        </div>

        <section className="mb-12" id="crime-crisis">
          <h2 className="text-3xl font-bold mb-6">Crime Crisis</h2>
          <p className="mb-6 text-gray-300">
            The charts have been temporarily removed for maintenance. Please check back soon.
          </p>
        </section>

        <section className="mb-12" id="immigration-impact">
          <h2 className="text-3xl font-bold mb-6">Immigration Impact</h2>
          <p className="mb-6 text-gray-300">
            The charts have been temporarily removed for maintenance. Please check back soon.
          </p>
        </section>

        <section className="mb-12" id="international-students">
          <h2 className="text-3xl font-bold mb-6">International Students & Diploma Mills</h2>
          <p className="mb-6 text-gray-300">
            The charts have been temporarily removed for maintenance. Please check back soon.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-gray-900 p-6 rounded-lg text-center">
              <span className="text-4xl font-bold text-orange-500 block mb-2">63%</span>
              <p className="text-gray-300">of students do not return to their home countries</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg text-center">
              <span className="text-4xl font-bold text-orange-500 block mb-2">112</span>
              <p className="text-gray-300">identified diploma mills operating in BC</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg text-center">
              <span className="text-4xl font-bold text-orange-500 block mb-2">$4.2B</span>
              <p className="text-gray-300">annual cost to BC taxpayers for non-returning students</p>
            </div>
          </div>
        </section>

        <section className="mb-12" id="illegal-immigration">
          <h2 className="text-3xl font-bold mb-6">Illegal Immigration Crisis</h2>
          <p className="mb-6 text-gray-300">
            The charts have been temporarily removed for maintenance. Please check back soon.
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
              <p className="text-gray-300">Estimated annual cost to BC taxpayers in 2024</p>
            </div>
          </div>
        </section>

        {/* Enhanced Key Findings Section */}
        <section className="mb-12" id="key-findings">
          <h2 className="text-3xl font-bold mb-8 text-center">Key Findings</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
