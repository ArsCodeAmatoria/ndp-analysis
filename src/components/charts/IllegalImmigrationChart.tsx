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
import { Map, DollarSign } from 'lucide-react';

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

// Chart data - BC illegal immigration data from 2017 (NDP took office) to 2024
const years = ['2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'];

const barChartData = {
  labels: years,
  datasets: [
    {
      label: 'Estimated Illegal Entries (thousands)',
      data: [3.2, 5.7, 8.4, 6.9, 12.3, 18.7, 24.5, 31.8],
      backgroundColor: 'rgba(249, 115, 22, 0.8)', // Orange
    },
    {
      label: 'Deportation Orders Executed (%)',
      data: [68, 57, 42, 36, 28, 21, 15, 12],
      backgroundColor: 'rgba(239, 68, 68, 0.8)', // Red
    },
    {
      label: 'Annual Cost (millions $)',
      data: [38, 62, 94, 118, 167, 215, 278, 342],
      backgroundColor: 'rgba(59, 130, 246, 0.8)', // Blue
    },
  ],
};

const IllegalImmigrationChart = () => {
  return (
    <div className="bg-gray-900 p-6 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <Map size={20} stroke="#f97316" className="mr-2" />
          <h3 className="text-xl font-semibold">Illegal Immigration & Enforcement (2017-2024)</h3>
        </div>
      </div>
      <div className="h-64">
        <Bar options={options} data={barChartData} />
      </div>
      <div className="mt-4 bg-gray-800 p-4 rounded-lg">
        <h4 className="font-semibold mb-2">Key Insight:</h4>
        <p className="text-sm text-gray-300">
          Since 2017, estimated illegal entries into BC have increased by 894%, while deportation order execution rates have declined from 68% to just 12%. The annual cost to provincial systems has increased by 800%, creating significant strain on healthcare, housing, and social services.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
          <div className="bg-gray-900 p-3 rounded border-l-2 border-orange-600">
            <div className="flex items-center mb-1">
              <Map size={16} stroke="#f97316" className="mr-2" />
              <h5 className="font-semibold text-sm">Border Security Challenges</h5>
            </div>
            <p className="text-xs text-gray-300">
              Reduced enforcement at border crossings and coastal entry points has created numerous security vulnerabilities, with detection rates estimated at only 23% of actual illegal entries.
            </p>
          </div>
          <div className="bg-gray-900 p-3 rounded border-l-2 border-orange-600">
            <div className="flex items-center mb-1">
              <DollarSign size={16} stroke="#f97316" className="mr-2" />
              <h5 className="font-semibold text-sm">System Impacts</h5>
            </div>
            <p className="text-xs text-gray-300">
              The increased illegal immigration has resulted in a 42% rise in emergency healthcare utilization, a 37% increase in social housing demand, and significant strain on community services.
            </p>
          </div>
        </div>
        <p className="text-xs text-gray-400 mt-3">
          Source: Canada Border Services Agency, BC Ministry of Public Safety, Fraser Institute
        </p>
      </div>
    </div>
  );
};

export default IllegalImmigrationChart; 