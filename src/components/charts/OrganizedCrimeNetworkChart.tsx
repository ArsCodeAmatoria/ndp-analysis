'use client';

import { useRef, useEffect, useState } from 'react';
import * as d3 from 'd3';
import { Network } from 'lucide-react';

// Define the data for the network graph
const nodes = [
  // Criminal Organizations
  { id: 1, name: "Mexican Cartels", group: 1, size: 25 },
  { id: 2, name: "Sikh Drug Networks", group: 1, size: 22 },
  { id: 3, name: "Money Laundering Operations", group: 1, size: 20 },
  { id: 4, name: "Extremist Groups", group: 1, size: 18 },
  { id: 5, name: "Chinese Triads", group: 1, size: 20 },
  
  // Policy Failures
  { id: 6, name: "Catch & Release Justice", group: 2, size: 18 },
  { id: 7, name: "Drug Decriminalization", group: 2, size: 18 },
  { id: 8, name: "Weak Money Laundering Laws", group: 2, size: 18 },
  { id: 9, name: "Reduced Police Funding", group: 2, size: 18 },
  { id: 10, name: "DEI Over Merit Hiring", group: 2, size: 18 },
  
  // Outcomes
  { id: 11, name: "Fentanyl Crisis", group: 3, size: 15 },
  { id: 12, name: "Housing Affordability Crisis", group: 3, size: 15 },
  { id: 13, name: "Rising Extremism", group: 3, size: 15 },
  { id: 14, name: "Public Safety Decline", group: 3, size: 15 },
  { id: 15, name: "Organized Crime Growth", group: 3, size: 15 }
];

const links = [
  // Mexican Cartels connections
  { source: 1, target: 11, value: 8 }, // Fentanyl Crisis
  { source: 1, target: 7, value: 6 },  // Drug Decriminalization
  { source: 1, target: 15, value: 5 }, // Organized Crime Growth
  
  // Sikh Drug Networks connections
  { source: 2, target: 11, value: 8 }, // Fentanyl Crisis
  { source: 2, target: 7, value: 6 },  // Drug Decriminalization
  { source: 2, target: 15, value: 5 }, // Organized Crime Growth
  { source: 2, target: 14, value: 4 }, // Public Safety Decline
  
  // Money Laundering Operations connections
  { source: 3, target: 8, value: 8 },  // Weak Money Laundering Laws
  { source: 3, target: 12, value: 7 }, // Housing Affordability Crisis
  { source: 3, target: 5, value: 5 },  // Chinese Triads
  
  // Extremist Groups connections
  { source: 4, target: 13, value: 8 }, // Rising Extremism
  { source: 4, target: 14, value: 6 }, // Public Safety Decline
  { source: 4, target: 6, value: 5 },  // Catch & Release Justice
  
  // Chinese Triads connections
  { source: 5, target: 3, value: 7 },  // Money Laundering Operations
  { source: 5, target: 12, value: 6 }, // Housing Affordability Crisis
  { source: 5, target: 15, value: 5 }, // Organized Crime Growth
  
  // Policy Failures connections
  { source: 6, target: 14, value: 7 }, // Catch & Release -> Public Safety Decline
  { source: 7, target: 11, value: 8 }, // Drug Decriminalization -> Fentanyl Crisis
  { source: 8, target: 12, value: 7 }, // Weak Money Laundering Laws -> Housing Affordability
  { source: 9, target: 14, value: 7 }, // Reduced Police Funding -> Public Safety Decline
  { source: 9, target: 15, value: 6 }, // Reduced Police Funding -> Organized Crime Growth
  { source: 10, target: 13, value: 5 }, // DEI Over Merit -> Rising Extremism
  
  // Additional connections
  { source: 6, target: 15, value: 6 }, // Catch & Release -> Organized Crime Growth
  { source: 7, target: 1, value: 5 },  // Drug Decriminalization -> Mexican Cartels
  { source: 7, target: 2, value: 5 },  // Drug Decriminalization -> Sikh Drug Networks
  { source: 8, target: 3, value: 7 },  // Weak Money Laundering Laws -> Money Laundering Operations
  { source: 9, target: 13, value: 5 }, // Reduced Police Funding -> Rising Extremism
];

// Color scale for different groups
const colors = ["#ef4444", "#f97316", "#3b82f6"];

export default function OrganizedCrimeNetworkChart() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [tooltipContent, setTooltipContent] = useState("");
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    if (!svgRef.current) return;

    const width = 800;
    const height = 600;

    // Clear any existing SVG content
    d3.select(svgRef.current).selectAll("*").remove();

    // Create the SVG element
    const svg = d3.select(svgRef.current)
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [0, 0, width, height])
      .style("max-width", "100%")
      .style("height", "auto");

    // Create a force simulation
    const simulation = d3.forceSimulation(nodes)
      .force("link", d3.forceLink(links).id((d: any) => d.id).distance(100))
      .force("charge", d3.forceManyBody().strength(-400))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collision", d3.forceCollide().radius((d: any) => d.size + 10));

    // Add links
    const link = svg.append("g")
      .selectAll("line")
      .data(links)
      .join("line")
      .attr("stroke", "#374151")
      .attr("stroke-opacity", 0.6)
      .attr("stroke-width", (d: any) => Math.sqrt(d.value));

    // Create a group for each node
    const node = svg.append("g")
      .selectAll("g")
      .data(nodes)
      .join("g")
      .call(d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended))
      .on("mouseenter", (event: any, d: any) => {
        setTooltipContent(d.name);
        setTooltipPosition({ x: event.clientX, y: event.clientY });
        setShowTooltip(true);
      })
      .on("mousemove", (event: any) => {
        setTooltipPosition({ x: event.clientX, y: event.clientY });
      })
      .on("mouseleave", () => {
        setShowTooltip(false);
      });

    // Add circles to nodes
    node.append("circle")
      .attr("r", (d: any) => d.size)
      .attr("fill", (d: any) => colors[d.group - 1])
      .attr("stroke", "#111827")
      .attr("stroke-width", 1.5);

    // Add labels to nodes
    node.append("text")
      .text((d: any) => d.name)
      .attr("x", 0)
      .attr("y", (d: any) => d.size + 5)
      .attr("text-anchor", "middle")
      .attr("font-size", "10px")
      .attr("fill", "#ffffff")
      .attr("pointer-events", "none");

    // Add legend
    const legend = svg.append("g")
      .attr("transform", `translate(${width - 180}, 20)`);

    const legendItems = [
      { color: colors[0], label: "Criminal Organizations" },
      { color: colors[1], label: "Policy Failures" },
      { color: colors[2], label: "Outcomes" }
    ];

    legendItems.forEach((item, i) => {
      const legendItem = legend.append("g")
        .attr("transform", `translate(0, ${i * 25})`);

      legendItem.append("rect")
        .attr("width", 15)
        .attr("height", 15)
        .attr("fill", item.color);

      legendItem.append("text")
        .attr("x", 25)
        .attr("y", 12)
        .attr("font-size", "12px")
        .attr("fill", "#ffffff")
        .text(item.label);
    });

    // Update positions on each tick of the simulation
    simulation.on("tick", () => {
      link
        .attr("x1", (d: any) => d.source.x)
        .attr("y1", (d: any) => d.source.y)
        .attr("x2", (d: any) => d.target.x)
        .attr("y2", (d: any) => d.target.y);

      node.attr("transform", (d: any) => `translate(${d.x},${d.y})`);
    });

    // Drag functions
    function dragstarted(event: any) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      event.subject.fx = event.subject.x;
      event.subject.fy = event.subject.y;
    }

    function dragged(event: any) {
      event.subject.fx = event.x;
      event.subject.fy = event.y;
    }

    function dragended(event: any) {
      if (!event.active) simulation.alphaTarget(0);
      event.subject.fx = null;
      event.subject.fy = null;
    }

    return () => {
      simulation.stop();
    };
  }, []);

  return (
    <div className="bg-gray-900 p-6 rounded-lg relative">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <Network size={20} stroke="#f97316" className="mr-2" />
          <h3 className="text-xl font-semibold">Organized Crime & Policy Failure Network</h3>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <div className="h-[600px] bg-gray-900 flex justify-center relative">
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
      </div>
      
      <div className="mt-4 bg-gray-800 p-4 rounded-lg">
        <h4 className="font-semibold mb-2">Network Analysis:</h4>
        <p className="text-sm text-gray-300">
          This network visualization reveals the interconnections between organized crime groups, policy failures, and their outcomes in BC. 
          Mexican cartels and Sikh drug networks have expanded operations following drug decriminalization policies, 
          while money laundering operations have flourished due to weak financial regulations, contributing to the housing affordability crisis.
          The "catch and release" justice system has enabled the growth of extremist groups and general public safety decline.
        </p>
        <p className="text-xs text-gray-400 mt-2">
          Source: BC Crime Intelligence Reports, RCMP, Financial Transactions and Reports Analysis Centre of Canada (FINTRAC)
        </p>
      </div>
    </div>
  );
} 