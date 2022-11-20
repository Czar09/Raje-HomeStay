/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images:{
    domains:["links.papareact.com","cdn.sanity.io"],
  }
}

module.exports = nextConfig
