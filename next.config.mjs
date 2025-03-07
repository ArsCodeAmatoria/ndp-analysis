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
  },
  // Removing the static export to allow client-side rendering
  // output: 'export',
  
  // Add experimental features
  experimental: {
    serverComponentsExternalPackages: [],
  },
  
  // Add webpack configuration
  webpack: (config) => {
    return config;
  },
};

export default nextConfig; 