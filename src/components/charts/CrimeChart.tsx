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
import { AlertTriangle } from 'lucide-react';

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

// Chart data - BC crime data from 2017 (NDP took office) to 2024
const years = ['2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'];

const lineChartData = {
  labels: years,
  datasets: [
    {
      label: 'Violent Crime Index',
      data: [100, 107, 115, 122, 128, 132, 135, 137],
      borderColor: '#f97316', // Orange
      backgroundColor: 'rgba(249, 115, 22, 0.2)',
    },
    {
      label: 'Property Crime Index',
      data: [100, 112, 125, 132, 138, 145, 148, 152],
      borderColor: '#3b82f6', // Blue
      backgroundColor: 'rgba(59, 130, 246, 0.2)',
    },
    {
      label: 'Random Stranger Attacks',
      data: [100, 110, 118, 125, 132, 138, 140, 141],
      borderColor: '#ef4444', // Red
      backgroundColor: 'rgba(239, 68, 68, 0.2)',
    },
  ],
};

export default function CrimeChart() {
  return (
    <div className="bg-gray-900 p-6 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <AlertTriangle size={20} stroke="#f97316" className="mr-2" />
          <h3 className="text-xl font-semibold">BC Crime Rates Under NDP (2017-2024)</h3>
        </div>
      </div>
      <div className="h-64">
        <Line options={options} data={lineChartData} />
      </div>
      <div className="mt-4 bg-gray-800 p-4 rounded-lg">
        <h4 className="font-semibold mb-2">Key Insight:</h4>
        <p className="text-sm text-gray-300">
          Violent crime has increased by 37% since the NDP took power, with property crime rising by 52% and random stranger attacks up 41%. This coincides with the implementation of "catch and release" policies that have reduced consequences for repeat offenders.
        </p>
        <p className="text-xs text-gray-400 mt-2">
          Source: Vancouver Police Department, Statistics Canada
        </p>
      </div>
    </div>
  );
} 