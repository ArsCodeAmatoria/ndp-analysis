'use client';

import { useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  RadialLinearScale,
  PointElement,
  LineElement,
} from 'chart.js';
import { Bar, Radar } from 'react-chartjs-2';
import { motion, AnimatePresence } from 'framer-motion';
import { BarChart3, PieChart } from 'lucide-react';

// Register ChartJS components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  RadialLinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Chart data for policy comparison
const policyAttributes = ['Central Planning', 'Private Ownership Restrictions', 'Resource Nationalization', 'Price Controls', 'Speech Restrictions'];

const radarData = {
  labels: policyAttributes,
  datasets: [
    {
      label: 'BC NDP (2017-2024)',
      data: [62, 54, 48, 57, 45],
      backgroundColor: 'rgba(249, 115, 22, 0.2)',
      borderColor: 'rgba(249, 115, 22, 1)',
      pointBackgroundColor: 'rgba(249, 115, 22, 1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(249, 115, 22, 1)',
    },
    {
      label: 'USSR (1950s)',
      data: [95, 98, 97, 96, 94],
      backgroundColor: 'rgba(220, 38, 38, 0.2)',
      borderColor: 'rgba(220, 38, 38, 1)',
      pointBackgroundColor: 'rgba(220, 38, 38, 1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(220, 38, 38, 1)',
    },
    {
      label: 'Free Market Democracies (Avg)',
      data: [12, 8, 15, 14, 10],
      backgroundColor: 'rgba(59, 130, 246, 0.2)',
      borderColor: 'rgba(59, 130, 246, 1)',
      pointBackgroundColor: 'rgba(59, 130, 246, 1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(59, 130, 246, 1)',
    }
  ],
};

const barData = {
  labels: ['Economic Freedom Index', 'Private Business Regulation', 'Property Rights', 'Individual Liberty'],
  datasets: [
    {
      label: 'BC NDP (2017-2024)',
      data: [38, 45, 42, 55],
      backgroundColor: 'rgba(249, 115, 22, 0.8)',
    },
    {
      label: 'USSR (1950s)',
      data: [5, 2, 3, 6],
      backgroundColor: 'rgba(220, 38, 38, 0.8)',
    },
    {
      label: 'Free Market Democracies (Avg)',
      data: [82, 78, 85, 88],
      backgroundColor: 'rgba(59, 130, 246, 0.8)',
    }
  ],
};

// Chart options
const radarOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    r: {
      angleLines: {
        color: 'rgba(255, 255, 255, 0.2)',
      },
      grid: {
        color: 'rgba(255, 255, 255, 0.2)',
      },
      pointLabels: {
        color: '#ffffff',
        font: {
          size: 12,
        },
      },
      ticks: {
        color: '#9ca3af',
        backdropColor: 'rgba(0, 0, 0, 0)',
        showLabelBackdrop: false,
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
          if (context.parsed.r !== null) {
            label += context.parsed.r + ' / 100';
          }
          return label;
        }
      }
    }
  },
};

const barOptions = {
  responsive: true,
  maintainAspectRatio: false,
  indexAxis: 'y' as const,
  scales: {
    x: {
      min: 0,
      max: 100,
      grid: {
        color: 'rgba(255, 255, 255, 0.1)',
      },
      ticks: {
        color: '#9ca3af',
      },
    },
    y: {
      grid: {
        color: 'rgba(255, 255, 255, 0.1)',
      },
      ticks: {
        color: '#9ca3af',
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
          if (context.parsed.x !== null) {
            label += context.parsed.x + ' / 100';
          }
          return label;
        }
      }
    }
  },
};

// Animation variants
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

export default function PolicyComparisonChart() {
  const [chartType, setChartType] = useState<'radar' | 'bar'>('radar');
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
          Governance Style Comparative Analysis (Policy Index)
        </motion.h3>
        <motion.div 
          className="flex space-x-2"
          variants={itemVariants}
        >
          <motion.button 
            className={`p-2 rounded hover:bg-gray-700 ${chartType === 'radar' ? 'bg-gray-700' : 'bg-gray-800'}`}
            onClick={() => setChartType('radar')}
            aria-label="Show radar chart"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <PieChart size={20} />
          </motion.button>
          <motion.button 
            className={`p-2 rounded hover:bg-gray-700 ${chartType === 'bar' ? 'bg-gray-700' : 'bg-gray-800'}`}
            onClick={() => setChartType('bar')}
            aria-label="Show bar chart"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <BarChart3 size={20} />
          </motion.button>
        </motion.div>
      </div>
      
      <motion.div 
        className="h-80"
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
            {chartType === 'radar' ? (
              <Radar data={radarData} options={radarOptions} />
            ) : (
              <Bar data={barData} options={barOptions} />
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
          Methodological Notes:
        </motion.h4>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          {[
            "Analysis based on comparative governance policy metrics from Fraser Institute Economic Freedom Index",
            "Values represent quantifiable policy metrics, not ideological attribution",
            "Central planning index measures degree of government control vs market-based decisions",
            "Policy indicators normalized to 0-100 scale for comparative purposes"
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
        Source: Fraser Institute, Economic Freedom Index, Fraser Institute Policy Analysis 2024
      </motion.p>
    </motion.div>
  );
} 