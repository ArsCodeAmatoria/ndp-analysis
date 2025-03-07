'use client';

import { useState } from 'react';
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
import { Line, Bar } from 'react-chartjs-2';
import { BarChart, LineChart } from 'lucide-react';

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

// Chart data - BC housing data from 2017 (NDP took office) to 2024
const years = ['2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'];

const lineChartData = {
  labels: years,
  datasets: [
    {
      label: 'Vancouver Home Price Index',
      data: [100, 105, 102, 108, 125, 143, 138, 143],
      borderColor: '#f97316', // Orange
      backgroundColor: 'rgba(249, 115, 22, 0.2)',
    },
    {
      label: 'Median Household Income',
      data: [100, 102, 104, 105, 106, 108, 110, 112],
      borderColor: '#3b82f6', // Blue
      backgroundColor: 'rgba(59, 130, 246, 0.2)',
    },
    {
      label: 'Homelessness Index',
      data: [100, 112, 125, 138, 148, 155, 162, 168],
      borderColor: '#ef4444', // Red
      backgroundColor: 'rgba(239, 68, 68, 0.2)',
    },
  ],
};

const barChartData = {
  labels: years,
  datasets: [
    {
      label: 'Housing Starts (% change)',
      data: [0, -2, -3, -1, -2, -3, -1, 0],
      backgroundColor: 'rgba(249, 115, 22, 0.8)', // Orange
    },
    {
      label: 'Rental Vacancy Rate (%)',
      data: [1.1, 1.0, 0.9, 0.8, 0.7, 0.6, 0.5, 0.4],
      backgroundColor: 'rgba(59, 130, 246, 0.8)', // Blue
    },
  ],
};

export default function HousingChart() {
  const [chartType, setChartType] = useState<'line' | 'bar'>('line');

  return (
    <div className="bg-gray-900 p-6 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-semibold">BC Housing Crisis Under NDP (2017-2024)</h3>
        <div className="flex space-x-2">
          <button 
            className={`p-2 rounded hover:bg-gray-700 ${chartType === 'line' ? 'bg-gray-700' : 'bg-gray-800'}`}
            onClick={() => setChartType('line')}
            aria-label="Show line chart"
          >
            <LineChart size={20} />
          </button>
          <button 
            className={`p-2 rounded hover:bg-gray-700 ${chartType === 'bar' ? 'bg-gray-700' : 'bg-gray-800'}`}
            onClick={() => setChartType('bar')}
            aria-label="Show bar chart"
          >
            <BarChart size={20} />
          </button>
        </div>
      </div>
      <div className="h-64">
        {chartType === 'line' ? (
          <Line options={options} data={lineChartData} />
        ) : (
          <Bar options={options} data={barChartData} />
        )}
      </div>
      <p className="text-sm text-gray-400 mt-4">
        Source: BC Real Estate Association, Statistics Canada, BC Housing
      </p>
    </div>
  );
} 