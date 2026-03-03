/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
  async rewrites() {
    const base = [
      { source: '/case/:slug', destination: '/cases/:slug' },
    ]
    // App Router 的 RSC 與 HMR 在 dev 環境跨域重寫容易失敗（buildId/flight 資料不一致）
    // 僅在顯式開啟 ENABLE_CMS_PROXY 時才啟用反代；否則返回空陣列
    if (process.env.ENABLE_CMS_PROXY === '1' && process.env.CMS_PROXY_TARGET) {
      const cmsHost = process.env.CMS_PROXY_TARGET
      return [
        ...base,
        { source: '/admin/:path*', destination: `${cmsHost}/admin/:path*` },
        { source: '/api/:path*', destination: `${cmsHost}/api/:path*` },
      ]
    }
    return base
  },
}
export default nextConfig
