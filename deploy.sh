#!/bin/bash

# Simple deployment script for static site

echo "Starting deployment process..."

# Create a build directory
mkdir -p build

# Copy static files to build directory
cp index.html build/
echo "Copied index.html to build directory"

# If you have any assets, copy them too
if [ -d "public" ]; then
  cp -r public/* build/
  echo "Copied public assets to build directory"
fi

echo "Build complete! The static site is ready in the 'build' directory."
echo ""
echo "Deployment options:"
echo "1. For GitHub Pages: Push the 'build' directory to your gh-pages branch"
echo "2. For Netlify: Connect your repository and set the publish directory to 'build'"
echo "3. For Vercel: Connect your repository and set the output directory to 'build'"
echo ""
echo "For a quick test, you can run: npx serve build"

# Make the script executable
chmod +x deploy.sh 