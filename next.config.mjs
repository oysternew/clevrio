/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
      remotePatterns: [
          {
              protocol: 'https',
              hostname: 'dxp.onreman.tech',
              port: '', // Ostavite prazno ako ne koristite port
              pathname: '/**', // Možete prilagoditi putanju ako je potrebno
          },
      ],
  },
};

export default nextConfig; // Ispravna sintaksa za ES module