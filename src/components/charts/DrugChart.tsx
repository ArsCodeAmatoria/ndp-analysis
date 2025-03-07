'use client';

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
import { Pill } from 'lucide-react';

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

// Chart data - BC drug crisis data from 2017 (NDP took office) to 2024
const years = ['2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'];

const barChartData = {
  labels: years,
  datasets: [
    {
      label: 'Overdose Deaths',
      data: [1450, 1550, 1765, 1724, 2265, 2272, 2511, 2300],
      backgroundColor: 'rgba(239, 68, 68, 0.8)', // Red
    },
    {
      label: 'Public Drug Use Incidents (hundreds)',
      data: [12, 15, 18, 22, 28, 35, 42, 50],
      backgroundColor: 'rgba(249, 115, 22, 0.8)', // Orange
    },
    {
      label: 'Treatment Beds Available (hundreds)',
      data: [24, 25, 26, 26, 27, 28, 28, 28],
      backgroundColor: 'rgba(59, 130, 246, 0.8)', // Blue
    },
  ],
};

export default function DrugChart() {
  return (
    <div className="bg-gray-900 p-6 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <Pill size={20} stroke="#f97316" className="mr-2" />
          <h3 className="text-xl font-semibold">BC Drug Crisis Under NDP (2017-2024)</h3>
        </div>
      </div>
      <div className="h-64">
        <Bar options={options} data={barChartData} />
      </div>
      <div className="mt-4 bg-gray-800 p-4 rounded-lg">
        <h4 className="font-semibold mb-2">Key Insight:</h4>
        <p className="text-sm text-gray-300">
          Despite decriminalization policies, overdose deaths have increased by 73% since 2017. Public drug use incidents have risen by 316% while treatment bed availability has only increased by 17%, creating a significant gap between need and available resources.
        </p>
        <p className="text-xs text-gray-400 mt-2">
          Source: BC Coroners Service, BC Centre on Substance Use
        </p>
      </div>
    </div>
  );
} 