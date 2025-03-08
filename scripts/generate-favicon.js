// This script uses sharp to convert SVG to various icon formats
// To use this script:
// 1. Install sharp: npm install sharp
// 2. Run: node scripts/generate-favicon.js

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const SVG_PATH = path.join(__dirname, '../public/favicon.svg');
const OUTPUT_DIR = path.join(__dirname, '../public');

async function generateIcons() {
  try {
    const svgBuffer = fs.readFileSync(SVG_PATH);
    
    // Generate favicon.ico (multiple sizes in one ICO file)
    await sharp(svgBuffer)
      .resize(16, 16)
      .toFile(path.join(OUTPUT_DIR, 'favicon-16x16.png'));
    
    await sharp(svgBuffer)
      .resize(32, 32)
      .toFile(path.join(OUTPUT_DIR, 'favicon-32x32.png'));
    
    // Note: For a true .ico file, you'd need a library like 'png-to-ico'
    // This is a simplified example that creates PNGs
    
    // Generate apple-touch-icon.png
    await sharp(svgBuffer)
      .resize(180, 180)
      .toFile(path.join(OUTPUT_DIR, 'apple-touch-icon.png'));
    
    console.log('Favicon images generated successfully!');
  } catch (error) {
    console.error('Error generating favicon images:', error);
  }
}

generateIcons(); 