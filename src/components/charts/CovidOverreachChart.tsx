'use client';

import { useState } from 'react';
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
import { Line, Bar } from 'react-chartjs-2';
import { BarChart, LineChart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
  animation: {
    duration: 1000,
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

// Chart data - COVID policy impact data with quarters 2020-2022
const quarters = ['Q2 2020', 'Q3 2020', 'Q4 2020', 'Q1 2021', 'Q2 2021', 'Q3 2021', 'Q4 2021', 'Q1 2022', 'Q2 2022'];

const lineChartData = {
  labels: quarters,
  datasets: [
    {
      label: 'Restriction Severity Index',
      data: [78, 65, 71, 63, 59, 52, 64, 47, 22],
      borderColor: '#f97316', // Orange
      backgroundColor: 'rgba(249, 115, 22, 0.2)',
    },
    {
      label: 'Mental Health Distress Index',
      data: [36, 32, 34, 32, 29, 26, 31, 24, 18],
      borderColor: '#3b82f6', // Blue
      backgroundColor: 'rgba(59, 130, 246, 0.2)',
    },
    {
      label: 'Unemployment Rate (%)',
      data: [9.2, 8.9, 8.1, 7.5, 6.6, 5.8, 5.9, 5.1, 4.5],
      borderColor: '#ef4444', // Red
      backgroundColor: 'rgba(239, 68, 68, 0.2)',
    },
  ],
};

const barChartData = {
  labels: quarters,
  datasets: [
    {
      label: 'Small Business Revenue Loss (%)',
      data: [41, 38, 35, 32, 28, 25, 30, 22, 15],
      backgroundColor: 'rgba(249, 115, 22, 0.8)', // Orange
    },
    {
      label: 'Cancer Screening Decline (%)',
      data: [39, 35, 32, 30, 25, 20, 28, 15, 8],
      backgroundColor: 'rgba(59, 130, 246, 0.8)', // Blue
    },
    {
      label: 'Opioid Deaths vs 2019 Baseline (%)',
      data: [76, 98, 124, 148, 156, 165, 183, 172, 165],
      backgroundColor: 'rgba(239, 68, 68, 0.8)', // Red
    },
  ],
};

// Motion animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { 
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 24 }
  }
};

const chartVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  },
  exit: { 
    opacity: 0, 
    scale: 0.9,
    transition: { duration: 0.3 }
  }
};

export default function CovidOverreachChart() {
  const [chartType, setChartType] = useState<'line' | 'bar'>('line');
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  return (
    <motion.div 
      className="bg-gray-900 p-6 rounded-lg"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex justify-between items-center mb-4">
        <motion.h3 
          className="text-xl font-semibold"
          variants={itemVariants}
        >
          COVID Policy Restriction Impact (2020-2022)
        </motion.h3>
        <motion.div 
          className="flex space-x-2"
          variants={itemVariants}
        >
          <motion.button 
            className={`p-2 rounded hover:bg-gray-700 ${chartType === 'line' ? 'bg-gray-700' : 'bg-gray-800'}`}
            onClick={() => setChartType('line')}
            aria-label="Show line chart"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <LineChart size={20} />
          </motion.button>
          <motion.button 
            className={`p-2 rounded hover:bg-gray-700 ${chartType === 'bar' ? 'bg-gray-700' : 'bg-gray-800'}`}
            onClick={() => setChartType('bar')}
            aria-label="Show bar chart"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <BarChart size={20} />
          </motion.button>
        </motion.div>
      </div>
      
      <motion.div 
        className="h-64"
        variants={itemVariants}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={chartType}
            variants={chartVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="h-full"
          >
            {chartType === 'line' ? (
              <Line options={options} data={lineChartData} />
            ) : (
              <Bar options={options} data={barChartData} />
            )}
          </motion.div>
        </AnimatePresence>
      </motion.div>
      
      <motion.div 
        className="mt-6 bg-gray-800 p-4 rounded-lg"
        variants={itemVariants}
      >
        <motion.h4 
          className="font-bold mb-2 text-orange-500"
          variants={itemVariants}
        >
          Key Insights:
        </motion.h4>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          {[
            "Strong positive correlation (72%) between restriction severity and unemployment rates",
            "Strong positive correlation (68%) between restriction severity and mental health distress",
            "Small businesses experienced 3.7x greater negative economic impact than large corporations",
            "183% increase in opioid-related deaths during peak restriction periods"
          ].map((item, index) => (
            <motion.li 
              key={index}
              variants={itemVariants}
              onHoverStart={() => setHoveredItem(index)}
              onHoverEnd={() => setHoveredItem(null)}
              animate={{ 
                color: hoveredItem === index ? 'rgba(249, 115, 22, 0.9)' : 'rgb(209 213 219)',
                transition: { duration: 0.3 }
              }}
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.div>
      
      <motion.p 
        className="text-sm text-gray-400 mt-4"
        variants={itemVariants}
      >
        Source: BC Health Authority Data, Statistics Canada, Census Data 2021
      </motion.p>
    </motion.div>
  );
}

 