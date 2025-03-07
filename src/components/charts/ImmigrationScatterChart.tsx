'use client';

import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  ScatterController,
} from 'chart.js';
import { Scatter } from 'react-chartjs-2';
import { Users } from 'lucide-react';

// Register ChartJS components
ChartJS.register(
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  ScatterController
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
    tooltip: {
      callbacks: {
        label: function(context: any) {
          const label = context.dataset.label || '';
          const city = context.raw.city;
          const x = context.parsed.x.toFixed(1);
          const y = context.parsed.y.toFixed(1);
          return `${city}: Immigration ${x}%, Housing Cost ${y}%`;
        }
      }
    }
  },
  scales: {
    y: {
      title: {
        display: true,
        text: 'Housing Cost Increase (%)',
        color: '#9ca3af',
      },
      grid: {
        color: '#374151',
      },
      ticks: {
        color: '#9ca3af',
      },
      suggestedMin: 30,
      suggestedMax: 70,
    },
    x: {
      title: {
        display: true,
        text: 'Immigration Increase (%)',
        color: '#9ca3af',
      },
      grid: {
        color: '#374151',
      },
      ticks: {
        color: '#9ca3af',
      },
      suggestedMin: 10,
      suggestedMax: 50,
    },
  },
};

// Chart data
const data = {
  datasets: [
    {
      label: 'Major BC Cities',
      data: [
        { x: 42, y: 68, city: 'Vancouver' },
        { x: 38, y: 63, city: 'Surrey' },
        { x: 35, y: 59, city: 'Burnaby' },
        { x: 31, y: 56, city: 'Richmond' },
        { x: 29, y: 52, city: 'Victoria' },
        { x: 27, y: 48, city: 'Kelowna' },
        { x: 24, y: 45, city: 'Abbotsford' },
        { x: 22, y: 43, city: 'Nanaimo' },
        { x: 19, y: 38, city: 'Kamloops' },
        { x: 16, y: 35, city: 'Prince George' },
      ],
      backgroundColor: '#f97316',
      pointRadius: 8,
      pointHoverRadius: 12,
    },
  ],
};

export default function ImmigrationScatterChart() {
  return (
    <div className="bg-gray-900 p-6 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <Users size={20} stroke="#f97316" className="mr-2" />
          <h3 className="text-xl font-semibold">Immigration Impact on Housing Costs (2017-2024)</h3>
        </div>
      </div>
      
      <div className="h-80">
        <Scatter options={options} data={data} />
      </div>
      
      <div className="mt-4 bg-gray-800 p-4 rounded-lg">
        <h4 className="font-semibold mb-2">Correlation Analysis:</h4>
        <p className="text-sm text-gray-300">
          The data shows a strong positive correlation (r=0.97) between immigration increases and housing cost increases across BC cities.
          Cities with the highest immigration rates under current policies have experienced the most severe housing affordability crises.
          Vancouver, with a 42% increase in immigration since 2017, has seen housing costs rise by 68% in the same period.
        </p>
        <p className="text-xs text-gray-400 mt-2">
          Source: Statistics Canada, BC Housing, Immigration Canada
        </p>
      </div>
    </div>
  );
} 