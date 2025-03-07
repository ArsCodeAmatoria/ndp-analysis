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
  indexAxis: 'y' as const,
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

// Chart data
const data = {
  labels: [
    'Provincial Debt Increase', 
    'Business Investment Decline', 
    'Tax Burden Increase', 
    'Healthcare Wait Times', 
    'Homelessness Increase',
    'Drug Overdose Deaths'
  ],
  datasets: [
    {
      label: 'Percentage Change Since 2017 (%)',
      data: [41, 17, 23, 41, 68, 89],
      backgroundColor: 'rgba(249, 115, 22, 0.8)', // Orange
    },
  ],
};

export default function EconomicChart() {
  return (
    <div className="bg-gray-900 p-6 rounded-lg">
      <h3 className="text-xl font-semibold mb-4">BC's Decline Under NDP Governance (2017-2024)</h3>
      <div className="h-80">
        <Bar options={options} data={data} />
      </div>
      <p className="text-sm text-gray-400 mt-4">
        Source: BC Ministry of Finance, Statistics Canada, BC Business Council, BC Health Ministry
      </p>
    </div>
  );
} 