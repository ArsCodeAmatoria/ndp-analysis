/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Warning: This allows production builds to successfully complete even if
    // your project has TypeScript errors.
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    domains: ['www.voideconomy.com'],
  },
  // Removing the static export to allow client-side rendering
  // output: 'export',
  
  // Simplified experimental features
  experimental: {
    // Remove isrMemoryCacheSize as it might be causing issues
    optimizeCss: true, // Enable CSS optimization
  },
  
  // Simplified webpack configuration
  webpack: (config) => {
    // Optimize the webpack configuration
    config.watchOptions = {
      ...config.watchOptions,
      ignored: /node_modules/,
    };
    
    return config;
  },

  // Add domain configuration
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
    ];
  },
  
  // Configure build output directory
  distDir: '.next',

  // Enable strict mode for React
  reactStrictMode: true,
  
  // Ensure SSR compatibility with animations
  transpilePackages: ["framer-motion", "chart.js", "react-chartjs-2"],
  
  // Disable server-side rendering for problematic components
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  },
  
  // Disable source maps in production to reduce memory usage
  productionBrowserSourceMaps: false,
};

export default nextConfig; 