/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    domains: ['www.voideconomy.com'],
  },
  
  // Configure build output directory
  distDir: '.next',

  // Enable strict mode for React
  reactStrictMode: true,
  
  // Ensure SSR compatibility with animations
  transpilePackages: ["framer-motion", "chart.js", "react-chartjs-2"],
  
  // Disable server-side rendering for problematic components
  compiler: {
    styledComponents: true
  },
  
  // Disable source maps in production to reduce memory usage
  productionBrowserSourceMaps: false,
  
  // Fix for Maximum call stack size exceeded error
  experimental: {
    // Disable build traces collection which is causing the stack overflow
    outputFileTracingRoot: null,
    outputFileTracingExcludes: {
      '*': [
        'node_modules/**/*',
        '.next/**/*',
      ],
    },
  },
};

export default nextConfig;