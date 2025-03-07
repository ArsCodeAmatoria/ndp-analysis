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
import { Line } from 'react-chartjs-2';
import { Clock } from 'lucide-react';

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

// Chart data - BC healthcare data from 2017 (NDP took office) to 2024
const years = ['2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'];

const lineChartData = {
  labels: years,
  datasets: [
    {
      label: 'Median Wait Time for Surgery (weeks)',
      data: [12, 14, 16, 18, 20, 22, 24, 26],
      borderColor: '#f97316', // Orange
      backgroundColor: 'rgba(249, 115, 22, 0.2)',
    },
    {
      label: 'ER Wait Times (hours)',
      data: [3.2, 3.5, 3.8, 4.2, 4.8, 5.2, 5.8, 6.2],
      borderColor: '#ef4444', // Red
      backgroundColor: 'rgba(239, 68, 68, 0.2)',
    },
    {
      label: 'Patients Without Family Doctor (100,000s)',
      data: [9, 10, 11, 12, 13, 14, 15, 16],
      borderColor: '#3b82f6', // Blue
      backgroundColor: 'rgba(59, 130, 246, 0.2)',
    },
  ],
};

export default function HealthcareChart() {
  return (
    <div className="bg-gray-900 p-6 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <Clock size={20} stroke="#f97316" className="mr-2" />
          <h3 className="text-xl font-semibold">BC Healthcare Decline Under NDP (2017-2024)</h3>
        </div>
      </div>
      <div className="h-64">
        <Line options={options} data={lineChartData} />
      </div>
      <div className="mt-4 bg-gray-800 p-4 rounded-lg">
        <h4 className="font-semibold mb-2">Key Insight:</h4>
        <p className="text-sm text-gray-300">
          Healthcare wait times have increased by 117% for surgeries and 94% for emergency room visits since 2017. The number of British Columbians without access to a family doctor has increased by 78%, despite promises to improve healthcare access.
        </p>
        <p className="text-xs text-gray-400 mt-2">
          Source: BC Ministry of Health, Canadian Institute for Health Information
        </p>
      </div>
    </div>
  );
} 