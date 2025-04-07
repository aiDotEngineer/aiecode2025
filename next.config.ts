import type { NextConfig } from "next";

const directMappings = [
  '_next/static/chunks/8174-c15a74819405bf0e.js',
  '_next/static/chunks/4357-703e9877dcb85ed5.js',
  '_next/static/chunks/pages/summit/2023-11e5f65395741956.js',
  
  // invalid modifier?
  // '_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fmichele-catasta.36c364ee.jpg&w=1920&q=75'
]

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
  async redirects() {
    return [
      {
        source: '/worldsfair',
        destination: '/', 
        permanent: false,
      },
    ]
  },
  
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
        ...directMappings.map(path => ({
          source: `/${path}`,
          destination: `https://aie-summit.vercel.app/${path}`
        })),
      ],
      afterFiles: [
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
