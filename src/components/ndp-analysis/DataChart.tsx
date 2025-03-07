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
  ChartOptions
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';
import { DataSeries } from '@/data/ndp-analysis/ndpFailures';

// Register Chart.js components
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

interface DataChartProps {
  dataset: DataSeries;
  type?: 'line' | 'bar';
  className?: string;
}

export function DataChart({ dataset, type = 'line', className = '' }: DataChartProps) {
  // Sort data by year
  const sortedData = [...dataset.data].sort((a, b) => a.year - b.year);
  
  // Extract years and values
  const years = sortedData.map(point => point.year.toString());
  const values = sortedData.map(point => point.value);
  
  // Prepare chart data
  const chartData = {
    labels: years,
    datasets: [
      {
        label: dataset.label,
        data: values,
        borderColor: 'rgb(255, 255, 255)', // White
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        borderWidth: 2,
        pointBackgroundColor: 'rgb(255, 255, 255)',
        pointBorderColor: '#000',
        pointHoverBackgroundColor: '#000',
        pointHoverBorderColor: 'rgb(255, 255, 255)',
        tension: 0.3,
      },
    ],
  };
  
  // Chart options
  const options: ChartOptions<'line' | 'bar'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
        align: 'start' as const,
        labels: {
          color: 'white',
          font: {
            size: 14,
          },
          boxWidth: 15,
          padding: 15,
        },
        title: {
          padding: {
            bottom: 25,
          }
        },
      },
      title: {
        display: false,
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleColor: 'white',
        bodyColor: 'white',
        borderColor: 'rgba(255, 255, 255, 0.5)',
        borderWidth: 1,
        padding: 10,
        displayColors: false,
      },
    },
    scales: {
      x: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.7)',
        },
      },
      y: {
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
        ticks: {
          color: 'rgba(255, 255, 255, 0.7)',
        },
        // Add padding to the top of the chart to prevent overlap with legend
        beginAtZero: true,
      },
    },
    // Add padding to the chart to prevent overlap with legend
    layout: {
      padding: {
        top: 10,
        right: 10,
        bottom: 0,
        left: 10
      }
    }
  };
  
  return (
    <div className={`w-full ${className}`}>
      <div className="h-full">
        {type === 'line' ? (
          <Line data={chartData} options={options} />
        ) : (
          <Bar data={chartData} options={options} />
        )}
      </div>
    </div>
  );
} 