import type { NextConfig } from "next";

const directMappings = [
  // nextjs has bugs when proxying to other nextjs apps via rewrites
  // to do with rate limiting and image optimization allowlist domains 
  // (we think based on chat with leerob)
  // so we manually map some files
  // so that they never have any doubt where to go

  // Summit 2025
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
  '_next/static/chunks/pages/summit/2025/schedule-c2911769402a39d2.js',
  '_next/static/media/pieter.d6b49a9b.png',
  '_next/static/media/nlw.231ddb7b.png',
  '_next/static/media/ksenia.ba3218e7.png',
  '_next/static/media/feb19-leadership-reception.b0a04a89.jpg',
  '_next/static/media/feb19-leadership-expo.cf2f7f37.jpg',
  '_next/static/media/feb20-leadership-session.33acfba7.jpg',
  '_next/static/media/feb20-leadeship.a4cb0c13.jpg',
  '_next/static/media/feb21-agent-session.fe0e77f0.jpg',
  '_next/static/media/feb21-agent-expo.6d37d303.jpg',
  '_next/static/media/feb22-workshops.34e18b59.jpg',
  '_next/static/media/feb22-livestream.ddcb5dc8.jpg',
  '/_next/static/chunks/4586-d6006eda16565b4e.js',

  // WF 2024
  '_next/static/chunks/pages/worldsfair/2024/schedule-18de57a17e174374.js',
  '_next/static/chunks/1973-628f65e8815bd92c.js',
  '_next/static/chunks/4586-d6006eda16565b4e.js',
  '_next/static/css/37ac3f2f65087241.css',
  '_next/static/chunks/webpack-ded7e1133b9539fc.js',
  '_next/static/chunks/framework-09f5301a99d857c8.js',
  '_next/static/chunks/main-1467fc69bc161e11.js',
  '_next/static/chunks/pages/_app-f1ef4dff536bf3ae.js',
  '_next/static/chunks/fa23c161-30ce7d8e0759d8ae.js',
  '_next/static/chunks/f0845887-4e6c7f6a52b4a0d9.js',
  '_next/static/chunks/df42570e-77c08f778f1cd949.js',
  '_next/static/chunks/5ffe69ac-4f088ef99810fc68.js',
  '_next/static/chunks/2b7766e5-f91fdab42332837b.js',
  '_next/static/chunks/8174-c15a74819405bf0e.js',
  '_next/static/chunks/1309-7ca815b0b6226217.js',
  '_next/static/chunks/1789-854d42a8ea190aca.js',
  '_next/static/chunks/1132-bbaf647ceaa772ea.js',
  '_next/static/chunks/6510-7e2445e2b727cef2.js',
  '_next/static/chunks/pages/worldsfair/2024-20dabe4c728b69d6.js',
  '_next/static/QLEVzHuMPY3oFa0FuoasB/_buildManifest.js',
  '_next/static/QLEVzHuMPY3oFa0FuoasB/_ssgManifest.js',
  '_next/static/media/hero-placeholder.9446ab11.jpg',
  '_next/static/media/rag.9c35b023.jpg',
  '_next/static/media/gpus-and-inference.12af667f.jpg',
  '_next/static/media/leadership.eb09300c.jpg',
  '_next/static/media/Mona-Sans.var.37e1d48f.woff2',
  '_next/static/media/worldsfair-white.cd2881ed.svg',
  '_next/static/media/microsoft-gray-text.ca0b46a0.svg',
  '_next/static/media/smolai-black.e7c3fbf2.svg',
  '_next/static/media/logowall.374f7f45.png',
  '_next/static/media/eric-ryan.71fd01b7.jpg',
  '_next/static/media/dedy-kredo.3c623600.jpg',
  '_next/static/media/pedro-tabio.56250c50.jpg',
  '_next/static/media/eugene-yan.a8f7f324.jpg',
  '_next/static/media/yanick.fab1bd5e.jpg',

  // summit 2023
  '_next/static/chunks/pages/summit/2023/schedule-3440b9292a036354.js',
  '_next/static/media/michele-catasta.36c364ee.jpg',
  '_next/static/media/toran-bruce-richards.d44c5bc0.jpg',
  '_next/static/media/logan-kilpatrick.84e6594e.jpg',
  '_next/static/media/simon-fish.9494bc27.jpg',
  '_next/static/media/shreya-rajpal.9ff1dd45.png',
  '_next/static/media/simon-willison.0f0176f8.png',
  '_next/static/media/mario-rodriguez.7fb92b85.jpg',
  '_next/static/media/amelia-wattenberger.31ece45f.jpg',
  '_next/static/media/eugene-yan.a8f7f324.jpg',
  '_next/static/media/harrison-chase.6bfcd7d0.png',
  '_next/static/media/jerry-liu.6ed13a0c.png',
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
          // have to use regexes because these invalidate when aie repo rebuilds
          source: '/_next/data/:hash([A-Za-z0-9]+)/en/summit/2025/:path*',
          destination: 'https://aie-summit.vercel.app/_next/data/:hash/en/summit/2025/:path*',
        },
        {
          source: '/_next/data/:hash([A-Za-z0-9]+)/en/worldsfair/2024/:path*',
          destination: 'https://aie-summit.vercel.app/_next/data/:hash/en/summit/2024/:path*',
        },
        {
          source: '/_next/data/:hash([A-Za-z0-9]+)/en/summit/2023/:path*',
          destination: 'https://aie-summit.vercel.app/_next/data/:hash/en/summit/2023/:path*',
        },
        {
          source: '/_next/static/chunks/pages/summit/2025/schedule/:path*',
          destination: 'https://aie-summit.vercel.app/_next/static/chunks/pages/summit/2025/schedule/:path*',
        },
        {
          source: '/_next/data/QLEVzHuMPY3oFa0FuoasB/en/worldsfair/2024/schedule/:path*',
          destination: 'https://aie-summit.vercel.app/_next/data/QLEVzHuMPY3oFa0FuoasB/en/worldsfair/2024/schedule/:path*',
        },
        {
          source: '/_next/static/chunks/pages/worldsfair/2024/:path*',
          destination: 'https://aie-summit.vercel.app/_next/static/chunks/pages/worldsfair/2024/:path*',
        },
        {
          source: '/summit/worldsfair-hero-bg.mp4',
          destination: 'https://aie-summit.vercel.app/worldsfair-hero-bg.mp4',
        },
        {
          source: '/llm.txt',
          destination: '/llms.txt',
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
