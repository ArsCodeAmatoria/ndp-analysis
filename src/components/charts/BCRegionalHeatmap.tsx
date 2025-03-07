'use client';

import { useRef, useEffect, useState } from 'react';
import { Map } from 'lucide-react';
import * as d3 from 'd3';

// Regional data for BC
const regionalData = [
  { region: "Metro Vancouver", crimeIncrease: 68, population: 2.6, x: 200, y: 480 },
  { region: "Fraser Valley", crimeIncrease: 56, population: 0.9, x: 260, y: 460 },
  { region: "Vancouver Island", crimeIncrease: 52, population: 0.8, x: 150, y: 400 },
  { region: "Thompson-Okanagan", crimeIncrease: 45, population: 0.6, x: 320, y: 380 },
  { region: "Kootenay", crimeIncrease: 38, population: 0.2, x: 400, y: 420 },
  { region: "Cariboo", crimeIncrease: 42, population: 0.2, x: 300, y: 300 },
  { region: "North Coast", crimeIncrease: 36, population: 0.1, x: 150, y: 200 },
  { region: "Nechako", crimeIncrease: 33, population: 0.1, x: 250, y: 200 },
  { region: "Northeast", crimeIncrease: 31, population: 0.1, x: 400, y: 150 }
];

// BC outline coordinates (simplified)
const bcOutline = [
  [100, 500], [150, 450], [200, 500], [300, 500], [350, 450], 
  [400, 450], [450, 400], [450, 300], [400, 200], [350, 150], 
  [300, 100], [200, 100], [150, 150], [100, 200], [50, 300], 
  [50, 400], [100, 500]
];

export default function BCRegionalHeatmap() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [tooltipContent, setTooltipContent] = useState("");
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    if (!svgRef.current) return;

    const width = 500;
    const height = 600;
    const margin = { top: 20, right: 20, bottom: 20, left: 20 };

    // Clear any existing SVG content
    d3.select(svgRef.current).selectAll("*").remove();

    // Create the SVG element
    const svg = d3.select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [0, 0, width, height])
      .style("max-width", "100%")
      .style("height", "auto");

    // Color scale for crime increase
    const colorScale = d3.scaleSequential()
      .domain([30, 70])
      .interpolator(d3.interpolateReds);

    // Draw BC outline
    svg.append("path")
      .datum(bcOutline)
      .attr("fill", "#111827")
      .attr("stroke", "#374151")
      .attr("stroke-width", 2)
      .attr("d", d3.line());

    // Add regions as circles
    svg.selectAll("circle")
      .data(regionalData)
      .join("circle")
      .attr("cx", d => d.x)
      .attr("cy", d => d.y)
      .attr("r", d => Math.sqrt(d.population) * 25) // Size based on population
      .attr("fill", d => colorScale(d.crimeIncrease))
      .attr("stroke", "#111827")
      .attr("stroke-width", 1)
      .attr("opacity", 0.8)
      .on("mouseenter", function(event, d) {
        setTooltipContent(`${d.region}: ${d.crimeIncrease}% crime increase since 2017`);
        setTooltipPosition({ x: event.clientX, y: event.clientY });
        setShowTooltip(true);
        d3.select(this).attr("stroke-width", 3).attr("opacity", 1);
      })
      .on("mousemove", function(event) {
        setTooltipPosition({ x: event.clientX, y: event.clientY });
      })
      .on("mouseleave", function() {
        setShowTooltip(false);
        d3.select(this).attr("stroke-width", 1).attr("opacity", 0.8);
      });

    // Add region labels
    svg.selectAll("text")
      .data(regionalData)
      .join("text")
      .attr("x", d => d.x)
      .attr("y", d => d.y - Math.sqrt(d.population) * 25 - 5)
      .attr("text-anchor", "middle")
      .attr("font-size", "10px")
      .attr("fill", "#ffffff")
      .text(d => d.region);

    // Add a legend
    const legendWidth = 200;
    const legendHeight = 20;
    const legendX = width - legendWidth - margin.right;
    const legendY = height - margin.bottom - 50;

    // Create gradient for legend
    const defs = svg.append("defs");
    const gradient = defs.append("linearGradient")
      .attr("id", "legend-gradient")
      .attr("x1", "0%")
      .attr("x2", "100%")
      .attr("y1", "0%")
      .attr("y2", "0%");

    // Add color stops
    const colorStops = [0, 0.25, 0.5, 0.75, 1];
    colorStops.forEach(stop => {
      gradient.append("stop")
        .attr("offset", `${stop * 100}%`)
        .attr("stop-color", colorScale(30 + stop * 40));
    });

    // Draw legend rectangle
    svg.append("rect")
      .attr("x", legendX)
      .attr("y", legendY)
      .attr("width", legendWidth)
      .attr("height", legendHeight)
      .style("fill", "url(#legend-gradient)");

    // Add legend labels
    svg.append("text")
      .attr("x", legendX)
      .attr("y", legendY - 5)
      .attr("font-size", "10px")
      .attr("fill", "#9ca3af")
      .text("30%");

    svg.append("text")
      .attr("x", legendX + legendWidth)
      .attr("y", legendY - 5)
      .attr("text-anchor", "end")
      .attr("font-size", "10px")
      .attr("fill", "#9ca3af")
      .text("70%");

    svg.append("text")
      .attr("x", legendX + legendWidth / 2)
      .attr("y", legendY - 5)
      .attr("text-anchor", "middle")
      .attr("font-size", "10px")
      .attr("fill", "#9ca3af")
      .text("Crime Increase (%)");

  }, []);

  return (
    <div className="bg-gray-900 p-6 rounded-lg relative">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <Map size={20} stroke="#f97316" className="mr-2" />
          <h3 className="text-xl font-semibold">Regional Crime Increase in BC (2017-2024)</h3>
        </div>
      </div>
      
      <div className="h-[600px] bg-gray-900 flex justify-center">
        <svg ref={svgRef}></svg>
        
        {showTooltip && (
          <div 
            className="absolute bg-gray-800 text-white p-2 rounded text-sm z-10 pointer-events-none"
            style={{ 
              left: tooltipPosition.x - 100, 
              top: tooltipPosition.y - 100,
              maxWidth: "200px"
            }}
          >
            {tooltipContent}
          </div>
        )}
      </div>
      
      <div className="mt-4 bg-gray-800 p-4 rounded-lg">
        <h4 className="font-semibold mb-2">Regional Analysis:</h4>
        <p className="text-sm text-gray-300">
          Urban centers in Metro Vancouver have experienced the highest increases in crime rates (68%) since 2017.
          Even rural areas like the Cariboo region have seen significant crime growth (42%) under current policies.
          The size of each circle represents the region's population, highlighting the widespread impact across BC.
        </p>
        <p className="text-xs text-gray-400 mt-2">
          Source: BC Crime Statistics by Region, 2017-2024
        </p>
      </div>
    </div>
  );
} 