import type { NextConfig } from "next";

const mappings = {
  'https://aie-summit.vercel.app/summit/2025': [
    '/summit',
    '/summit/2025',
  ],
  'https://aie-summit.vercel.app/summit/2023': [
    '/summit/2023',
  ],
  'https://aie-summit.vercel.app/worldsfair': [
    '/worldsfair/2024',
  ],
  'https://aie-summit.vercel.app/worldsfair/2024': [
    '/worldsfair/2024',
  ],
  'https://x.com/@aidotengineer': [
    '/twitter',
    '/x'
  ],
}

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  // https://nextjs.org/docs/app/api-reference/config/next-config-js/rewrites
  async rewrites() {
    return [
      ...Object.entries(mappings).flatMap(([destination, sources]) =>
        sources.map(source => ({
          source,
          destination,
        }))
      ),
      // Add any manual rewrites below
      {
        source: '/youtube',
        destination: 'https://youtube.com/@aidotengineer',
      }
    ];
  },
};

export default nextConfig;
