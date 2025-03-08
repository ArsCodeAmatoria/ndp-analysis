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
  
  // Add experimental features
  experimental: {
    serverComponentsExternalPackages: [],
    isrMemoryCacheSize: 0, // Disable ISR cache completely
    outputFileTracingExcludes: {
      '*': [
        'node_modules/@swc/core-linux-x64-gnu',
        'node_modules/@swc/core-linux-x64-musl',
        'node_modules/@esbuild/linux-x64',
      ],
    },
  },
  
  // Add webpack configuration
  webpack: (config) => {
    // Optimize the webpack configuration
    config.watchOptions = {
      ...config.watchOptions,
      ignored: /node_modules/,
    };
    
    // Increase max limit for call stack
    config.optimization = {
      ...config.optimization,
      minimize: true,
    };
    
    // Add support for Framer Motion
    config.module = {
      ...config.module,
      rules: config.module.rules.concat([
        {
          test: /framer-motion/,
          sideEffects: false
        }
      ])
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
  transpilePackages: ["framer-motion"]
};

export default nextConfig; 