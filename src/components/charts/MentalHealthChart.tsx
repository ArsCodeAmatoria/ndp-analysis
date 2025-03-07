'use client';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Brain } from 'lucide-react';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
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
        text: 'Percentage Increase (2017 = 100%)',
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
      fill: true,
      label: 'Mental Health Emergency Calls',
      data: [100, 115, 132, 168, 215, 247, 283],
      borderColor: '#f97316', // Orange
      backgroundColor: 'rgba(249, 115, 22, 0.2)',
      tension: 0.3,
    },
    {
      fill: true,
      label: 'Untreated Mental Illness',
      data: [100, 112, 128, 157, 189, 223, 256],
      borderColor: '#ef4444', // Red
      backgroundColor: 'rgba(239, 68, 68, 0.2)',
      tension: 0.3,
    },
    {
      fill: true,
      label: 'Mental Health Funding (Adjusted for Inflation)',
      data: [100, 102, 105, 108, 106, 103, 98],
      borderColor: '#3b82f6', // Blue
      backgroundColor: 'rgba(59, 130, 246, 0.2)',
      tension: 0.3,
    },
  ],
};

export default function MentalHealthChart() {
  return (
    <div className="bg-gray-900 p-6 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <Brain size={20} stroke="#f97316" className="mr-2" />
          <h3 className="text-xl font-semibold">Mental Health Crisis in BC (2017-2023)</h3>
        </div>
      </div>
      
      <div className="h-80">
        <Line options={options} data={data} />
      </div>
      
      <div className="mt-4 bg-gray-800 p-4 rounded-lg">
        <h4 className="font-semibold mb-2">Key Insight:</h4>
        <p className="text-sm text-gray-300">
          Mental health emergency calls have increased by 183% since 2017, while the number of individuals with untreated 
          mental illness has grown by 156%. Despite this crisis, inflation-adjusted mental health funding has actually 
          decreased by 2% since 2017, with resources diverted to other government priorities. This has left thousands 
          of vulnerable British Columbians without access to essential mental health services.
        </p>
        <p className="text-xs text-gray-400 mt-2">
          Source: BC Ministry of Health, BC Mental Health Association, BC Emergency Services
        </p>
      </div>
    </div>
  );
} 