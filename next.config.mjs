/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    KAKAO_KEY: '6d54a1cd7ae69f644a1eaf19f09c235c',
    API_URL: 'http://localhost:3000',
  },
  experimental: {
    largePageDataBytes: 800 * 1000,
  },
}

export default nextConfig
