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
import { DollarSign } from 'lucide-react';

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
  interaction: {
    mode: 'index' as const,
    intersect: false,
  },
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
      type: 'linear' as const,
      display: true,
      position: 'left' as const,
      grid: {
        color: '#374151',
      },
      ticks: {
        color: '#9ca3af',
        callback: function(value: any) {
          return '$' + value + 'M';
        }
      },
      title: {
        display: true,
        text: 'Government Spending (Millions $)',
        color: '#9ca3af',
      }
    },
    y1: {
      type: 'linear' as const,
      display: true,
      position: 'right' as const,
      grid: {
        drawOnChartArea: false,
      },
      ticks: {
        color: '#9ca3af',
      },
      title: {
        display: true,
        text: 'Media Articles',
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
const labels = ['2019', '2020', '2021', '2022', '2023', '2024'];

const data = {
  labels,
  datasets: [
    {
      label: 'Reconciliation Funding',
      data: [25, 38, 209, 378, 452, 587],
      borderColor: '#f97316', // Orange
      backgroundColor: 'rgba(249, 115, 22, 0.2)',
      yAxisID: 'y',
    },
    {
      label: 'Media Articles on "Mass Graves"',
      data: [12, 18, 1842, 1256, 876, 642],
      borderColor: '#ef4444', // Red
      backgroundColor: 'rgba(239, 68, 68, 0.2)',
      yAxisID: 'y1',
    },
    {
      label: 'Excavation/Forensic Investigation Funding',
      data: [0, 0, 2, 3, 1, 0],
      borderColor: '#3b82f6', // Blue
      backgroundColor: 'rgba(59, 130, 246, 0.2)',
      yAxisID: 'y',
    }
  ],
};

export default function ReconciliationSpendingChart() {
  return (
    <div className="bg-gray-900 p-6 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <DollarSign size={20} stroke="#f97316" className="mr-2" />
          <h3 className="text-xl font-semibold">Reconciliation Spending vs. Investigation Funding</h3>
        </div>
      </div>
      
      <div className="h-80">
        <Line options={options} data={data} />
      </div>
      
      <div className="mt-4 bg-gray-800 p-4 rounded-lg">
        <h4 className="font-semibold mb-2">Key Insight:</h4>
        <p className="text-sm text-gray-300">
          Following the 2021 claims of mass graves, government reconciliation funding increased by 2,248% over five years, 
          reaching $587 million in 2024. However, only $6 million total (approximately 0.4% of reconciliation funding) 
          was allocated to actual forensic investigations or excavations to verify the claims. Media coverage spiked dramatically 
          in 2021 with over 1,800 articles referencing "mass graves," despite no physical evidence being uncovered.
        </p>
        <p className="text-xs text-gray-400 mt-2">
          Source: BC Ministry of Indigenous Relations, Federal Department of Crown-Indigenous Relations, Media Analysis Database
        </p>
      </div>
    </div>
  );
} 