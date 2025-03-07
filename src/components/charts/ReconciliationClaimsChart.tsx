'use client';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { FileSearch } from 'lucide-react';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
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
      title: {
        display: true,
        text: 'Number of Graves',
        color: '#9ca3af',
      }
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

// Chart data
const labels = [
  'Kamloops',
  'Cranbrook',
  'Marieval',
  'Williams Lake',
  'Kuper Island',
  'Brandon'
];

const data = {
  labels,
  datasets: [
    {
      label: 'Initial Media Claims',
      data: [215, 182, 751, 93, 160, 104],
      backgroundColor: '#ef4444', // Red
    },
    {
      label: 'Confirmed Excavated Graves',
      data: [0, 0, 0, 0, 0, 0],
      backgroundColor: '#3b82f6', // Blue
    },
    {
      label: 'Documented Historical Deaths',
      data: [51, 38, 44, 25, 29, 70],
      backgroundColor: '#f97316', // Orange
    }
  ],
};

export default function ReconciliationClaimsChart() {
  return (
    <div className="bg-gray-900 p-6 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <FileSearch size={20} stroke="#f97316" className="mr-2" />
          <h3 className="text-xl font-semibold">Residential School Grave Claims vs. Evidence</h3>
        </div>
      </div>
      
      <div className="h-80">
        <Bar options={options} data={data} />
      </div>
      
      <div className="mt-4 bg-gray-800 p-4 rounded-lg">
        <h4 className="font-semibold mb-2">Key Insight:</h4>
        <p className="text-sm text-gray-300">
          Despite widespread media claims of thousands of unmarked graves at residential school sites, no excavations have been 
          conducted to confirm these claims. Ground-penetrating radar identified soil disturbances that were immediately reported 
          as "confirmed graves" without forensic verification. Historical records document student deaths primarily from disease 
          (particularly tuberculosis), which affected all Canadians during that era, but at numbers far lower than claimed.
        </p>
        <p className="text-xs text-gray-400 mt-2">
          Source: National Centre for Truth and Reconciliation, Historical Archives, Department of Indian Affairs Annual Reports
        </p>
      </div>
    </div>
  );
} 