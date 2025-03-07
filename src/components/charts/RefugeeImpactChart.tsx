'use client';

import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { Globe, DollarSign } from 'lucide-react';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// Chart options
const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top' as const,
      labels: {
        color: '#ffffff',
      },
    },
    title: {
      display: false,
    },
  },
  scales: {
    y: {
      grid: {
        color: '#374151',
      },
      ticks: {
        color: '#9ca3af',
      },
    },
    x: {
      grid: {
        color: '#374151',
      },
      ticks: {
        color: '#9ca3af',
      },
    },
  },
};

// Chart data - BC refugee data from 2017 (NDP took office) to 2024
const years = ['2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'];

const barChartData = {
  labels: years,
  datasets: [
    {
      label: 'Refugee Claimants (thousands)',
      data: [2.8, 4.5, 6.2, 5.8, 7.3, 9.8, 12.4, 15.7],
      backgroundColor: 'rgba(249, 115, 22, 0.8)', // Orange
    },
    {
      label: 'Unemployment Rate (%)',
      data: [42, 48, 53, 58, 62, 67, 71, 74],
      backgroundColor: 'rgba(239, 68, 68, 0.8)', // Red
    },
    {
      label: 'Annual Cost (millions $)',
      data: [45, 72, 98, 112, 145, 187, 235, 298],
      backgroundColor: 'rgba(59, 130, 246, 0.8)', // Blue
    },
  ],
};

const RefugeeImpactChart: React.FC = () => {
  return (
    <div className="bg-gray-900 p-6 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <Globe size={20} stroke="#f97316" className="mr-2" />
          <h3 className="text-xl font-semibold">Refugee Status & Economic Impact (2017-2024)</h3>
        </div>
      </div>
      <div className="h-64">
        <Bar options={options} data={barChartData} />
      </div>
      <div className="mt-4 bg-gray-800 p-4 rounded-lg">
        <h4 className="font-semibold mb-2">Key Insight:</h4>
        <p className="text-sm text-gray-300">
          Since 2017, BC has seen a 460% increase in refugee claimants, with unemployment rates among this population rising from 42% to 74%. The annual cost to provincial systems has increased by 562%, creating significant strain on healthcare, housing, and social services.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
          <div className="bg-gray-900 p-3 rounded border-l-2 border-orange-600">
            <div className="flex items-center mb-1">
              <Globe size={16} stroke="#f97316" className="mr-2" />
              <h5 className="font-semibold text-sm">Integration Challenges</h5>
            </div>
            <p className="text-xs text-gray-300">
              Language barriers, lack of skills recognition, and inadequate integration programs have resulted in persistently high unemployment rates among refugee populations, with 74% remaining unemployed after 12 months.
            </p>
          </div>
          <div className="bg-gray-900 p-3 rounded border-l-2 border-orange-600">
            <div className="flex items-center mb-1">
              <DollarSign size={16} stroke="#f97316" className="mr-2" />
              <h5 className="font-semibold text-sm">System Impacts</h5>
            </div>
            <p className="text-xs text-gray-300">
              The increased demand has resulted in a 35% rise in emergency room visits, a 42% increase in social housing waitlists, and a 28% increase in social assistance caseloads since 2017.
            </p>
          </div>
        </div>
        <p className="text-xs text-gray-400 mt-3">
          Source: Immigration, Refugees and Citizenship Canada, BC Ministry of Social Development and Poverty Reduction
        </p>
      </div>
    </div>
  );
};

export default RefugeeImpactChart; 