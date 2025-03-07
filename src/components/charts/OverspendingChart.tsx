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
import { DollarSign } from 'lucide-react';

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
        callback: function(value: any) {
          return '$' + value + 'B';
        }
      },
      title: {
        display: true,
        text: 'Billions of Dollars',
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
  'Essential Services',
  'DEI Programs',
  'Administrative Bloat',
  'Foreign Aid',
  'Climate Initiatives',
  'Ideological Projects',
  'Consultant Fees'
];

const data = {
  labels,
  datasets: [
    {
      label: 'Budgeted Amount',
      data: [12.5, 0.8, 1.2, 0.5, 2.1, 1.3, 0.9],
      backgroundColor: '#3b82f6', // Blue
    },
    {
      label: 'Actual Spending',
      data: [10.2, 3.7, 4.8, 2.9, 5.6, 4.2, 3.8],
      backgroundColor: '#ef4444', // Red
    },
  ],
};

export default function OverspendingChart() {
  return (
    <div className="bg-gray-900 p-6 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <DollarSign size={20} stroke="#f97316" className="mr-2" />
          <h3 className="text-xl font-semibold">BC Government Spending Priorities (2023-2024)</h3>
        </div>
      </div>
      
      <div className="h-80">
        <Bar options={options} data={data} />
      </div>
      
      <div className="mt-4 bg-gray-800 p-4 rounded-lg">
        <h4 className="font-semibold mb-2">Key Insight:</h4>
        <p className="text-sm text-gray-300">
          While essential services like healthcare and public safety were underfunded by $2.3 billion compared to their budgeted amounts, 
          spending on DEI programs exceeded budget by 363%, administrative costs by 300%, and ideological projects by 223%. 
          This misallocation of resources has contributed to deteriorating public services while government bureaucracy has expanded dramatically.
        </p>
        <p className="text-xs text-gray-400 mt-2">
          Source: BC Ministry of Finance, BC Budget Analysis, Office of the Auditor General
        </p>
      </div>
    </div>
  );
} 