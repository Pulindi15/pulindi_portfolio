/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV = 'production'

const nextConfig = {
  basePath : isProd ? '/pulindi_portfolio' : '',
  output: 'export',
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
