'use client';

import { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { sankey, sankeyLinkHorizontal } from 'd3-sankey';
import { DollarSign } from 'lucide-react';

// Define the data for the Sankey diagram
const data = {
  nodes: [
    { name: "Tax Revenue" },
    { name: "Federal Transfers" },
    { name: "Natural Resources" },
    { name: "Other Revenue" },
    { name: "Healthcare" },
    { name: "Education" },
    { name: "Social Services" },
    { name: "Debt Servicing" },
    { name: "Infrastructure" },
    { name: "Administration" },
    { name: "Other Spending" }
  ],
  links: [
    { source: 0, target: 4, value: 24.5 }, // Tax Revenue to Healthcare
    { source: 0, target: 5, value: 14.2 }, // Tax Revenue to Education
    { source: 0, target: 6, value: 10.8 }, // Tax Revenue to Social Services
    { source: 0, target: 7, value: 8.5 },  // Tax Revenue to Debt Servicing
    { source: 0, target: 8, value: 6.2 },  // Tax Revenue to Infrastructure
    { source: 0, target: 9, value: 5.3 },  // Tax Revenue to Administration
    { source: 0, target: 10, value: 3.5 }, // Tax Revenue to Other Spending
    
    { source: 1, target: 4, value: 12.3 }, // Federal Transfers to Healthcare
    { source: 1, target: 6, value: 7.8 },  // Federal Transfers to Social Services
    { source: 1, target: 8, value: 4.9 },  // Federal Transfers to Infrastructure
    
    { source: 2, target: 7, value: 3.2 },  // Natural Resources to Debt Servicing
    { source: 2, target: 8, value: 2.8 },  // Natural Resources to Infrastructure
    { source: 2, target: 10, value: 2.0 }, // Natural Resources to Other Spending
    
    { source: 3, target: 9, value: 2.1 },  // Other Revenue to Administration
    { source: 3, target: 10, value: 1.9 }  // Other Revenue to Other Spending
  ]
};

export default function BudgetSankeyChart() {
  const svgRef = useRef<SVGSVGElement>(null);
  
  useEffect(() => {
    if (!svgRef.current) return;
    
    const width = 800;
    const height = 500;
    
    // Clear any existing SVG content
    d3.select(svgRef.current).selectAll("*").remove();
    
    // Create the Sankey generator
    const sankeyGenerator = sankey()
      .nodeWidth(20)
      .nodePadding(10)
      .extent([[1, 1], [width - 1, height - 5]]);
    
    // Format the data for the Sankey diagram
    const sankeyData = sankeyGenerator(data);
    
    // Create the SVG element
    const svg = d3.select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [0, 0, width, height])
      .style("max-width", "100%")
      .style("height", "auto");
    
    // Add links
    svg.append("g")
      .attr("fill", "none")
      .attr("stroke-opacity", 0.5)
      .selectAll("path")
      .data(sankeyData.links)
      .join("path")
      .attr("d", sankeyLinkHorizontal())
      .attr("stroke", d => {
        // Color based on source node
        if (d.source.index === 0) return "#f97316"; // Tax Revenue (orange)
        if (d.source.index === 1) return "#3b82f6"; // Federal Transfers (blue)
        if (d.source.index === 2) return "#10b981"; // Natural Resources (green)
        return "#a855f7"; // Other Revenue (purple)
      })
      .attr("stroke-width", d => Math.max(1, d.width))
      .append("title")
      .text(d => `${d.source.name} → ${d.target.name}\n$${d.value} billion`);
    
    // Add nodes
    const node = svg.append("g")
      .selectAll("rect")
      .data(sankeyData.nodes)
      .join("rect")
      .attr("x", d => d.x0)
      .attr("y", d => d.y0)
      .attr("height", d => d.y1 - d.y0)
      .attr("width", d => d.x1 - d.x0)
      .attr("fill", d => {
        // Color nodes based on type
        if (d.index <= 3) {
          // Revenue nodes
          if (d.index === 0) return "#f97316"; // Tax Revenue (orange)
          if (d.index === 1) return "#3b82f6"; // Federal Transfers (blue)
          if (d.index === 2) return "#10b981"; // Natural Resources (green)
          return "#a855f7"; // Other Revenue (purple)
        } else {
          // Spending nodes
          return "#475569"; // Gray
        }
      })
      .attr("stroke", "#111827")
      .append("title")
      .text(d => `${d.name}\n$${d.value.toFixed(1)} billion`);
    
    // Add labels
    svg.append("g")
      .attr("font-family", "sans-serif")
      .attr("font-size", 10)
      .selectAll("text")
      .data(sankeyData.nodes)
      .join("text")
      .attr("x", d => d.x0 < width / 2 ? d.x1 + 6 : d.x0 - 6)
      .attr("y", d => (d.y1 + d.y0) / 2)
      .attr("dy", "0.35em")
      .attr("text-anchor", d => d.x0 < width / 2 ? "start" : "end")
      .text(d => d.name)
      .attr("fill", "#ffffff")
      .append("tspan")
      .attr("fill", "#9ca3af")
      .attr("x", d => d.x0 < width / 2 ? d.x1 + 6 : d.x0 - 6)
      .attr("dy", "1.2em")
      .text(d => `$${d.value.toFixed(1)}B`);
      
  }, []);

  return (
    <div className="bg-gray-900 p-6 rounded-lg">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <DollarSign size={20} stroke="#f97316" className="mr-2" />
          <h3 className="text-xl font-semibold">BC Budget Flow Analysis (2023-2024)</h3>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <svg ref={svgRef} className="mx-auto"></svg>
      </div>
      
      <div className="mt-4 bg-gray-800 p-4 rounded-lg">
        <h4 className="font-semibold mb-2">Budget Analysis:</h4>
        <p className="text-sm text-gray-300">
          Despite record tax revenue, debt servicing has increased to $11.7 billion annually under NDP governance.
          Healthcare spending has increased by 32% since 2017, yet wait times have grown by 41% in the same period,
          indicating significant inefficiencies in resource allocation.
        </p>
        <p className="text-xs text-gray-400 mt-2">
          Source: BC Ministry of Finance, Budget 2023-2024
        </p>
      </div>
    </div>
  );
} 