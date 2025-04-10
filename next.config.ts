import type { NextConfig } from "next";

const directMappings = [
  '_next/static/chunks/8174-c15a74819405bf0e.js',
  '_next/static/chunks/4357-703e9877dcb85ed5.js',
  '_next/static/chunks/pages/summit/2023-11e5f65395741956.js',
  '_next/static/css/37ac3f2f65087241.css',
  '_next/static/chunks/webpack-ded7e1133b9539fc.js',
  '_next/static/chunks/framework-09f5301a99d857c8.js',
  '_next/static/chunks/main-1467fc69bc161e11.js',
  '_next/static/chunks/pages/_app-f1ef4dff536bf3ae.js',
  '_next/static/chunks/df42570e-77c08f778f1cd949.js',
  '_next/static/chunks/6510-7e2445e2b727cef2.js',
  '_next/static/chunks/pages/summit/2025-0057d577a359f38d.js',
  '_next/static/QLEVzHuMPY3oFa0FuoasB/_buildManifest.js',
  '_next/static/QLEVzHuMPY3oFa0FuoasB/_ssgManifest.js',
  '_next/static/media/summit-white.3fc51a93.svg',
  '_next/static/media/hero-placeholder.db9b525d.jpg',
  '_next/static/media/ai_eng_summit_logo.aa06c918.svg',
  '_next/static/media/smolai-black.e7c3fbf2.svg',
  '_next/static/media/logowall.374f7f45.png',
  '_next/static/media/eric-ryan.71fd01b7.jpg',
  '_next/static/media/dedy-kredo.3c623600.jpg',
  '_next/static/media/pedro-tabio.56250c50.jpg',
  '_next/static/media/eugene-yan.a8f7f324.jpg',
  '_next/static/media/yanick.fab1bd5e.jpg',
  '_next/static/css/37ac3f2f65087241.css',
  '_next/static/chunks/webpack-ded7e1133b9539fc.js',
  '_next/static/chunks/framework-09f5301a99d857c8.js',
  '_next/static/chunks/main-1467fc69bc161e11.js',
  '_next/static/chunks/pages/_app-f1ef4dff536bf3ae.js',
  '_next/static/chunks/pages/summit/2025/schedule-c2911769402a39d2.js'
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
        {
          source: '/summit/worldsfair-hero-bg.mp4',
          destination: 'https://aie-summit.vercel.app/worldsfair-hero-bg.mp4',
        }
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
