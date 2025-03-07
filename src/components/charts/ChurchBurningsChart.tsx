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
import { Flame } from 'lucide-react';

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
        text: 'Number of Incidents',
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
const labels = ['2017', '2018', '2019', '2020', '2021', '2022', '2023'];

const data = {
  labels,
  datasets: [
    {
      label: 'Church Burnings/Vandalism',
      data: [3, 5, 8, 12, 68, 42, 31],
      backgroundColor: '#ef4444', // Red
    },
    {
      label: 'Anti-Christian Hate Crimes',
      data: [7, 12, 18, 24, 53, 47, 39],
      backgroundColor: '#f97316', // Orange
    },
    {
      label: 'Anti-Semitic Incidents',
      data: [12, 18, 25, 32, 47, 68, 89],
      backgroundColor: '#3b82f6', // Blue
    },
  ],
};

export default function ChurchBurningsChart() {
  return (
    <div className="bg-gray-900 p-6 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <Flame size={20} stroke="#f97316" className="mr-2" />
          <h3 className="text-xl font-semibold">Religious Targeting in BC (2017-2023)</h3>
        </div>
      </div>
      
      <div className="h-80">
        <Bar options={options} data={data} />
      </div>
      
      <div className="mt-4 bg-gray-800 p-4 rounded-lg">
        <h4 className="font-semibold mb-2">Key Insight:</h4>
        <p className="text-sm text-gray-300">
          Church burnings and vandalism spiked dramatically in 2021, with 68 incidents recorded—a 467% increase from 2020. 
          This coincided with government rhetoric that critics argue inflamed tensions against religious institutions. 
          Meanwhile, anti-Semitic incidents have shown a consistent upward trend, reaching record levels in 2023 with 
          minimal government response or condemnation.
        </p>
        <p className="text-xs text-gray-400 mt-2">
          Source: BC Hate Crimes Unit, Religious Freedom Watch, B'nai Brith Canada
        </p>
      </div>
    </div>
  );
} 