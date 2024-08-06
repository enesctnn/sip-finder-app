import path from 'path';
/** @type {import('next').NextConfig} */

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(process.cwd(), 'app/styles')],
    prependData: `@import "variables.scss";`,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.thecocktaildb.com',
      },
    ],
  },
};

export default nextConfig;
