/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
}

module.exports = {
    nextConfig,
    images: {
        formats: ['image/avif', 'image/webp'],
        domains: ['localhost', 'strapi.mopsior.pl']
    }
}
  