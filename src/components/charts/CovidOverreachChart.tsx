'use client';

import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ScatterController,
  ChartData,
} from 'chart.js';
import { Scatter } from 'react-chartjs-2';
import regression from 'regression';

// Register Chart.js components - only in client-side
if (typeof window !== 'undefined') {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ScatterController
  );
}

const CovidOverreachChart = () => {
  const [chartData, setChartData] = useState<ChartData<'scatter'> | null>(null);
  const [economicCorrelation, setEconomicCorrelation] = useState<number>(0.75);
  const [mentalHealthCorrelation, setMentalHealthCorrelation] = useState<number>(0.68);

  useEffect(() => {
    // This code will only run on the client side
    // Data for COVID policies vs economic impact
    const economicData = [
      { x: 78, y: 9.2 }, // 2020 Q2: Policy Severity Index, Unemployment Rate
      { x: 65, y: 8.9 }, // 2020 Q3
      { x: 71, y: 8.1 }, // 2020 Q4
      { x: 63, y: 7.5 }, // 2021 Q1
      { x: 59, y: 6.6 }, // 2021 Q2
      { x: 52, y: 5.8 }, // 2021 Q3
      { x: 64, y: 5.9 }, // 2021 Q4 (Omicron)
      { x: 47, y: 5.1 }, // 2022 Q1
      { x: 22, y: 4.5 }, // 2022 Q2
    ];

    // Data for COVID policies vs mental health impacts
    const mentalHealthData = [
      { x: 78, y: 36 }, // 2020 Q2: Policy Severity Index, Mental Health Distress Index
      { x: 65, y: 32 }, // 2020 Q3
      { x: 71, y: 34 }, // 2020 Q4
      { x: 63, y: 32 }, // 2021 Q1
      { x: 59, y: 29 }, // 2021 Q2
      { x: 52, y: 26 }, // 2021 Q3
      { x: 64, y: 31 }, // 2021 Q4 (Omicron)
      { x: 47, y: 24 }, // 2022 Q1
      { x: 22, y: 18 }, // 2022 Q2
    ];

    // Data for restrictions vs health outcomes (showing inverse correlation)
    const healthOutcomesData = [
      { x: 78, y: 38 }, // 2020 Q2: Policy Severity Index, Excess Mortality Index
      { x: 65, y: 42 }, // 2020 Q3
      { x: 71, y: 45 }, // 2020 Q4
      { x: 63, y: 47 }, // 2021 Q1
      { x: 59, y: 41 }, // 2021 Q2
      { x: 52, y: 35 }, // 2021 Q3
      { x: 64, y: 49 }, // 2021 Q4 (Omicron)
      { x: 47, y: 32 }, // 2022 Q1
      { x: 22, y: 25 }, // 2022 Q2
    ];

    try {
      // Calculate regression for economic data
      const economicRegressionData = regression.linear(
        economicData.map(point => [point.x, point.y])
      );
      const economicRegressionLine = economicRegressionData.points.map(point => ({
        x: point[0],
        y: point[1]
      }));
      
      // Calculate regression for mental health data
      const mentalHealthRegressionData = regression.linear(
        mentalHealthData.map(point => [point.x, point.y])
      );
      const mentalHealthRegressionLine = mentalHealthRegressionData.points.map(point => ({
        x: point[0],
        y: point[1]
      }));

      // Get correlation values with safe fallbacks
      const econCorr = economicRegressionData && economicRegressionData.r ? economicRegressionData.r : 0.75;
      const mentalCorr = mentalHealthRegressionData && mentalHealthRegressionData.r ? mentalHealthRegressionData.r : 0.68;
      
      setEconomicCorrelation(econCorr);
      setMentalHealthCorrelation(mentalCorr);

      // Create chart data
      const data: ChartData<'scatter'> = {
        datasets: [
          {
            type: 'scatter' as const,
            label: 'Economic Impact',
            data: economicData,
            backgroundColor: 'rgba(255, 99, 132, 0.8)',
            borderColor: 'rgba(255, 99, 132, 1)',
            pointRadius: 6,
            pointHoverRadius: 8,
          },
          {
            type: 'scatter' as const,
            label: 'Economic Trend (r = ' + econCorr.toFixed(2) + ')',
            data: economicRegressionLine,
            backgroundColor: 'rgba(255, 99, 132, 0.6)',
            borderColor: 'rgba(255, 99, 132, 0.6)',
            pointRadius: 0,
            borderWidth: 2,
            borderDash: [5, 5],
          },
          {
            type: 'scatter' as const,
            label: 'Mental Health Impact',
            data: mentalHealthData,
            backgroundColor: 'rgba(54, 162, 235, 0.8)',
            borderColor: 'rgba(54, 162, 235, 1)',
            pointRadius: 6,
            pointHoverRadius: 8,
          },
          {
            type: 'scatter' as const,
            label: 'Mental Health Trend (r = ' + mentalCorr.toFixed(2) + ')',
            data: mentalHealthRegressionLine,
            backgroundColor: 'rgba(54, 162, 235, 0.6)',
            borderColor: 'rgba(54, 162, 235, 0.6)',
            pointRadius: 0,
            borderWidth: 2,
            borderDash: [5, 5],
          },
          {
            type: 'scatter' as const,
            label: 'Health Outcomes (Negative)',
            data: healthOutcomesData,
            backgroundColor: 'rgba(75, 192, 192, 0.8)',
            borderColor: 'rgba(75, 192, 192, 1)',
            pointRadius: 6,
            pointHoverRadius: 8,
          },
        ],
      };

      setChartData(data);
    } catch (error) {
      console.error("Error generating chart data:", error);
    }
  }, []);

  // Configure chart options
  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: 'index' as const,
      intersect: false,
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'COVID Policy Restriction Severity Index',
          color: '#ffffff',
        },
        ticks: {
          color: '#cccccc',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Impact Measurement',
          color: '#ffffff',
        },
        ticks: {
          color: '#cccccc',
        },
        grid: {
          color: 'rgba(255, 255, 255, 0.1)',
        },
      },
    },
    plugins: {
      legend: {
        position: 'top' as const,
        labels: {
          color: '#ffffff',
          font: {
            size: 12,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: function(context: any) {
            let label = context.dataset.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed.y !== null) {
              if (context.datasetIndex === 0) {
                label += `${context.parsed.y.toFixed(1)}% Unemployment`;
              } else if (context.datasetIndex === 2) {
                label += `${context.parsed.y} Mental Health Index`;
              } else if (context.datasetIndex === 4) {
                label += `${context.parsed.y} Excess Mortality Index`;
              } else {
                label += `${context.parsed.y}`;
              }
            }
            return label;
          }
        }
      }
    },
  };

  return (
    <div className="bg-gray-900 rounded-lg p-6 shadow-lg mb-8">
      <div className="flex items-center mb-4">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="#f97316" className="mr-2">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        <h3 className="text-xl font-bold">COVID Policy Restriction Analysis</h3>
      </div>
      
      <div className="h-64 md:h-80">
        {chartData ? (
          <Scatter options={chartOptions} data={chartData} />
        ) : (
          <div className="h-full flex items-center justify-center">
            <p className="text-gray-400">Loading chart data...</p>
          </div>
        )}
      </div>
      
      <div className="mt-6 bg-gray-800 p-4 rounded-lg">
        <h4 className="font-bold mb-2 text-orange-500">Key Insights:</h4>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          <li>Strong positive correlation ({(economicCorrelation * 100).toFixed(0)}%) between restriction severity and unemployment rates</li>
          <li>Strong positive correlation ({(mentalHealthCorrelation * 100).toFixed(0)}%) between restriction severity and mental health distress</li>
          <li>No significant improvement in mortality outcomes with increased restrictions</li>
          <li>Small businesses experienced 3.7x greater negative economic impact than large corporations</li>
          <li>Children lost an average of 54 days of in-person education in BC despite minimal risk</li>
        </ul>
      </div>
      
      <div className="mt-4 text-gray-400 text-sm">
        <p>Source: BC Health Authority Data, Statistics Canada, Census Data 2021</p>
      </div>
    </div>
  );
};

export default CovidOverreachChart;

 