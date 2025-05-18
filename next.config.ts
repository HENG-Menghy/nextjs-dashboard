import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Enable PPR (Partial Prerendering) by adding the 'ppr' option 
  experimental: {
    ppr: 'incremental'
  }

};

export default nextConfig;
