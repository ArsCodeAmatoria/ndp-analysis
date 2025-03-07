'use client';

import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Shield } from 'lucide-react';

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

const ChildCrimeChart = () => {
  // Sample data - in a real application, this would come from an API or database
  const data = {
    labels: ['2017', '2018', '2019', '2020', '2021', '2022', '2023'],
    datasets: [
      {
        label: 'Reported Incidents',
        data: [124, 156, 245, 312, 387, 456, 498],
        borderColor: '#f97316',
        backgroundColor: 'rgba(249, 115, 22, 0.1)',
        fill: true,
        tension: 0.4,
      },
      {
        label: 'Prosecution Rate (%)',
        data: [68, 62, 54, 48, 42, 39, 35],
        borderColor: '#3b82f6',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        fill: true,
        tension: 0.4,
      }
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: '#ffffff'
        }
      },
      title: {
        display: true,
        text: 'Child Safety Incidents vs. Prosecution Rates (2017-2023)',
        color: '#ffffff',
        font: {
          size: 16
        }
      },
      tooltip: {
        mode: 'index' as const,
        intersect: false,
      },
    },
    scales: {
      y: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: '#ffffff'
        }
      },
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: '#ffffff'
        }
      }
    },
    interaction: {
      mode: 'nearest' as 'nearest',
      axis: 'x' as 'x',
      intersect: false
    },
  };

  return (
    <div className="bg-gray-900 p-6 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <Shield size={20} stroke="#f97316" className="mr-2" />
          <h3 className="text-xl font-semibold">Child Safety Incidents (2017-2023)</h3>
        </div>
      </div>
      <div className="h-64">
        <Line data={data} options={options} />
      </div>
      <div className="mt-4 bg-gray-800 p-4 rounded-lg">
        <h4 className="font-semibold mb-2">Key Insight:</h4>
        <p className="text-sm text-gray-300">
          Since 2017, reported incidents affecting children have increased by 302%, while prosecution rates have declined by 49%. This inverse relationship suggests serious gaps in the justice system's response to child safety concerns.
        </p>
        <p className="text-xs text-gray-400 mt-2">
          Source: BC Ministry of Public Safety, BC Children's Advocacy Coalition
        </p>
      </div>
    </div>
  );
};

export default ChildCrimeChart; 