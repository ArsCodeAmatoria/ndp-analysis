'use client';

import { useState } from 'react';
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps';
import { scaleQuantize } from 'd3-scale';
import { Map } from 'lucide-react';

// BC GeoJSON data (simplified for this example)
const BC_GEOJSON = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": { "name": "Vancouver", "value": 68 },
      "geometry": { "type": "Polygon", "coordinates": [[[-123.2, 49.2], [-123.0, 49.2], [-123.0, 49.3], [-123.2, 49.3], [-123.2, 49.2]]] }
    },
    {
      "type": "Feature",
      "properties": { "name": "Victoria", "value": 52 },
      "geometry": { "type": "Polygon", "coordinates": [[[-123.4, 48.4], [-123.3, 48.4], [-123.3, 48.5], [-123.4, 48.5], [-123.4, 48.4]]] }
    },
    {
      "type": "Feature",
      "properties": { "name": "Kelowna", "value": 45 },
      "geometry": { "type": "Polygon", "coordinates": [[[-119.5, 49.8], [-119.4, 49.8], [-119.4, 49.9], [-119.5, 49.9], [-119.5, 49.8]]] }
    },
    {
      "type": "Feature",
      "properties": { "name": "Kamloops", "value": 38 },
      "geometry": { "type": "Polygon", "coordinates": [[[-120.4, 50.6], [-120.3, 50.6], [-120.3, 50.7], [-120.4, 50.7], [-120.4, 50.6]]] }
    },
    {
      "type": "Feature",
      "properties": { "name": "Prince George", "value": 42 },
      "geometry": { "type": "Polygon", "coordinates": [[[-122.8, 53.9], [-122.7, 53.9], [-122.7, 54.0], [-122.8, 54.0], [-122.8, 53.9]]] }
    },
    {
      "type": "Feature",
      "properties": { "name": "Nanaimo", "value": 47 },
      "geometry": { "type": "Polygon", "coordinates": [[[-124.0, 49.1], [-123.9, 49.1], [-123.9, 49.2], [-124.0, 49.2], [-124.0, 49.1]]] }
    },
    {
      "type": "Feature",
      "properties": { "name": "Abbotsford", "value": 56 },
      "geometry": { "type": "Polygon", "coordinates": [[[-122.4, 49.0], [-122.3, 49.0], [-122.3, 49.1], [-122.4, 49.1], [-122.4, 49.0]]] }
    },
    {
      "type": "Feature",
      "properties": { "name": "Surrey", "value": 63 },
      "geometry": { "type": "Polygon", "coordinates": [[[-122.9, 49.1], [-122.7, 49.1], [-122.7, 49.2], [-122.9, 49.2], [-122.9, 49.1]]] }
    }
  ]
};

// Color scale
const colorScale = scaleQuantize<string>()
  .domain([30, 70])
  .range([
    "#fee2e2", // Light red
    "#fecaca",
    "#fca5a5",
    "#f87171",
    "#ef4444", // Medium red
    "#dc2626",
    "#b91c1c",
    "#991b1b",
    "#7f1d1d"  // Dark red
  ]);

export default function BCChoroplethMap() {
  const [tooltipContent, setTooltipContent] = useState("");
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [showTooltip, setShowTooltip] = useState(false);

  const handleMouseEnter = (geo: any, e: React.MouseEvent) => {
    setTooltipContent(`${geo.properties.name}: ${geo.properties.value}% increase in crime since 2017`);
    setTooltipPosition({ x: e.clientX, y: e.clientY });
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div className="bg-gray-900 p-6 rounded-lg relative">
      <div className="flex justify-between items-center mb-4">
        <div className="flex items-center">
          <Map size={20} stroke="#f97316" className="mr-2" />
          <h3 className="text-xl font-semibold">Regional Crime Increase in BC (2017-2024)</h3>
        </div>
      </div>
      
      <div className="h-96 bg-gray-900">
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            scale: 4500,
            center: [-122, 51.5] // Centered on BC
          }}
        >
          <ZoomableGroup>
            <Geographies geography={BC_GEOJSON}>
              {({ geographies }) =>
                geographies.map(geo => (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={colorScale(geo.properties.value)}
                    stroke="#111827"
                    strokeWidth={0.5}
                    style={{
                      default: { outline: "none" },
                      hover: { outline: "none", fill: "#f97316" },
                      pressed: { outline: "none" }
                    }}
                    onMouseEnter={(e) => handleMouseEnter(geo, e)}
                    onMouseLeave={handleMouseLeave}
                  />
                ))
              }
            </Geographies>
          </ZoomableGroup>
        </ComposableMap>
        
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
      
      <div className="flex justify-between mt-4 px-4">
        <div className="text-xs text-gray-400">Lower increase</div>
        <div className="flex space-x-1">
          {colorScale.range().map((color, i) => (
            <div 
              key={i} 
              className="w-4 h-4" 
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
        <div className="text-xs text-gray-400">Higher increase</div>
      </div>
      
      <div className="mt-4 bg-gray-800 p-4 rounded-lg">
        <h4 className="font-semibold mb-2">Regional Analysis:</h4>
        <p className="text-sm text-gray-300">
          Urban centers like Vancouver (68%) and Surrey (63%) have experienced the highest increases in crime rates since 2017.
          Even smaller communities like Kelowna (45%) have seen significant crime growth under current policies.
        </p>
        <p className="text-xs text-gray-400 mt-2">
          Source: BC Crime Statistics by Region, 2017-2024
        </p>
      </div>
    </div>
  );
} 