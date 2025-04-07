import type { NextConfig } from "next";

const mappings = {
  'https://aie-summit.vercel.app/summit/:path*': [
    '/summit/:path*'
  ],
  'https://aie-summit.vercel.app/worldsfair/:path*': [
    '/worldsfair/:path*',
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
    return {

      beforeFiles: [
        ...Object.entries(mappings).flatMap(([destination, sources]) =>
          sources.map(source => ({
            source,
            destination,
          }))
        ),
        {
          source: '/:path*',
          destination: 'https://aie-summit.vercel.app/:path*',
        }
      ],
      fallback: [
        // Add any manual rewrites below
        {
          source: '/youtube',
          destination: 'https://youtube.com/@aidotengineer',
        }
      ]
    }
  },
};

export default nextConfig;
