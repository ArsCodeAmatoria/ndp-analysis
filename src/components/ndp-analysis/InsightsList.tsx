import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';

interface InsightsListProps {
  insights: string[];
}

export function InsightsList({ insights }: InsightsListProps) {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
  };

  return (
    <motion.ul 
      variants={container}
      initial="hidden"
      animate="show"
      className="space-y-3"
    >
      {insights.map((insight, index) => (
        <motion.li 
          key={index} 
          variants={item}
          className="flex items-start"
        >
          <AlertTriangle className="h-4 w-4 text-white mt-1 mr-2 flex-shrink-0" />
          <span className="text-sm text-gray-300">{insight}</span>
        </motion.li>
      ))}
    </motion.ul>
  );
} 