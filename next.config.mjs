/** @type {import('next').NextConfig} */
const nextConfig = {
  reactCompiler: true,
  experimental: {
    optimizeCss: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [50, 55, 60, 72, 75, 85, 90, 100],
    minimumCacheTTL: 2592000,
  },
  async headers() {
    const headers = [
      {
        // Public image/font assets
        source: '/:path*\\.(jpg|jpeg|png|webp|avif|gif|svg|ico|woff|woff2)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=2592000, stale-while-revalidate=86400' },
        ],
      },
    ];

    if (process.env.NODE_ENV === 'production') {
      headers.unshift({
        // Next.js hashed static chunks — safe to cache forever (content-hashed filenames)
        source: '/_next/static/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      });
    }

    return headers;
  },
};

export default nextConfig;
