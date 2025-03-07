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
import { GraduationCap, Building } from 'lucide-react';

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

// Chart data - BC international student data from 2017 (NDP took office) to 2024
const years = ['2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'];

const barChartData = {
  labels: years,
  datasets: [
    {
      label: 'International Students (thousands)',
      data: [145, 168, 187, 172, 198, 235, 267, 312],
      backgroundColor: 'rgba(249, 115, 22, 0.8)', // Orange
    },
    {
      label: 'Non-Return Rate (%)',
      data: [18, 24, 31, 37, 45, 52, 58, 63],
      backgroundColor: 'rgba(239, 68, 68, 0.8)', // Red
    },
    {
      label: 'Diploma Mills (number)',
      data: [12, 18, 27, 35, 48, 67, 89, 112],
      backgroundColor: 'rgba(59, 130, 246, 0.8)', // Blue
    },
  ],
};

const InternationalStudentChart = () => {
  return (
    <div className="bg-gray-900 p-6 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <GraduationCap size={20} stroke="#f97316" className="mr-2" />
          <h3 className="text-xl font-semibold">International Students & Diploma Mills (2017-2024)</h3>
        </div>
      </div>
      <div className="h-64">
        <Bar options={options} data={barChartData} />
      </div>
      <div className="mt-4 bg-gray-800 p-4 rounded-lg">
        <h4 className="font-semibold mb-2">Key Insight:</h4>
        <p className="text-sm text-gray-300">
          Since 2017, international student numbers in BC have increased by 115%, while the non-return rate (students who don't leave after their visas expire) has risen from 18% to 63%. Simultaneously, the number of identified "diploma mills" has increased by 833%, creating a system ripe for exploitation.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
          <div className="bg-gray-900 p-3 rounded border-l-2 border-orange-600">
            <div className="flex items-center mb-1">
              <GraduationCap size={16} stroke="#f97316" className="mr-2" />
              <h5 className="font-semibold text-sm">Student Visa Exploitation</h5>
            </div>
            <p className="text-xs text-gray-300">
              Student visas have become a primary pathway for permanent settlement, with 63% of international students not returning to their home countries after studies, often transitioning to undocumented status.
            </p>
          </div>
          <div className="bg-gray-900 p-3 rounded border-l-2 border-orange-600">
            <div className="flex items-center mb-1">
              <Building size={16} stroke="#f97316" className="mr-2" />
              <h5 className="font-semibold text-sm">Diploma Mill Proliferation</h5>
            </div>
            <p className="text-xs text-gray-300">
              The number of unaccredited or minimally regulated educational institutions has grown by 833%, with many offering substandard education solely to facilitate immigration rather than education.
            </p>
          </div>
        </div>
        <p className="text-xs text-gray-400 mt-3">
          Source: BC Ministry of Advanced Education, Immigration, Refugees and Citizenship Canada, Educational Quality Assurance Board
        </p>
      </div>
    </div>
  );
};

export default InternationalStudentChart; 