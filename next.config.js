/** @type {import('next').NextConfig} */
const nextConfig = {
  // ضيف السطر ده هنا
  transpilePackages: ['three', '@react-three/fiber', '@react-three/drei', 'troika-three-text'],
}

module.exports = nextConfig