'use client';

import React from 'react';
import { Line } from 'react-chartjs-2';
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
    <div className="bg-gray-800 p-6 rounded-lg mb-6">
      <Line data={data} options={options} />
    </div>
  );
};

export default ChildCrimeChart; 