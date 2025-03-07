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
import { Users, Building } from 'lucide-react';

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

// Chart data - BC population and business exodus data from 2017 (NDP took office) to 2024
const years = ['2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'];

const barChartData = {
  labels: years,
  datasets: [
    {
      label: 'Net Interprovincial Migration (thousands)',
      data: [5.9, 3.5, -2.5, -3.7, -12.5, -17.8, -24.3, -29.8],
      backgroundColor: 'rgba(239, 68, 68, 0.8)', // Red
    },
    {
      label: 'Business Closures (hundreds)',
      data: [12, 14, 16, 22, 28, 35, 42, 48],
      backgroundColor: 'rgba(249, 115, 22, 0.8)', // Orange
    },
    {
      label: 'Tax Revenue Loss (millions)',
      data: [25, 35, 48, 67, 95, 128, 156, 187],
      backgroundColor: 'rgba(59, 130, 246, 0.8)', // Blue
    },
  ],
};

export default function PopulationExodusChart() {
  return (
    <div className="bg-gray-900 p-6 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <Users size={20} stroke="#f97316" className="mr-2" />
          <h3 className="text-xl font-semibold">BC Population & Business Exodus (2017-2024)</h3>
        </div>
      </div>
      <div className="h-64">
        <Bar options={options} data={barChartData} />
      </div>
      <div className="mt-4 bg-gray-800 p-4 rounded-lg">
        <h4 className="font-semibold mb-2">Key Insight:</h4>
        <p className="text-sm text-gray-300">
          Since 2019, BC has experienced a dramatic shift from positive to negative interprovincial migration, losing over 90,000 residents to other provinces. Business closures have increased by 300% since 2017, resulting in significant tax revenue losses and economic contraction.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
          <div className="bg-gray-900 p-3 rounded border-l-2 border-orange-600">
            <div className="flex items-center mb-1">
              <Users size={16} stroke="#f97316" className="mr-2" />
              <h5 className="font-semibold text-sm">Population Impact</h5>
            </div>
            <p className="text-xs text-gray-300">
              The exodus has primarily affected working-age taxpayers (25-45), with Alberta and Ontario being the top destinations. Housing costs, taxation, and public safety concerns are cited as primary reasons for leaving.
            </p>
          </div>
          <div className="bg-gray-900 p-3 rounded border-l-2 border-orange-600">
            <div className="flex items-center mb-1">
              <Building size={16} stroke="#f97316" className="mr-2" />
              <h5 className="font-semibold text-sm">Business Impact</h5>
            </div>
            <p className="text-xs text-gray-300">
              Small and medium businesses have been disproportionately affected, with retail, hospitality, and technology sectors seeing the highest closure rates. Regulatory burden, labor shortages, and rising costs are the main factors.
            </p>
          </div>
        </div>
        <p className="text-xs text-gray-400 mt-3">
          Source: Statistics Canada, BC Stats, Canadian Federation of Independent Business
        </p>
      </div>
    </div>
  );
} 