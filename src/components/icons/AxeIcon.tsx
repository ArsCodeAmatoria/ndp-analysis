import { Axe } from 'lucide-react';
import React from 'react';

interface AxeIconProps {
  size?: number;
  color?: string;
  className?: string;
}

export const AxeIcon: React.FC<AxeIconProps> = ({ 
  size = 24, 
  color = '#f97316',  // Orange color to match the favicon
  className = '' 
}) => {
  return (
    <Axe size={size} color={color} className={className} />
  );
};

export default AxeIcon; 