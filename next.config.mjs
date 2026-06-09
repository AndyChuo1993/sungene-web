/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  async redirects() {
    return [
      // Only legit redirect: old singular /industry/:slug → live /industries/:slug.
      // All former lead-gen redirects were removed — they pointed at paths that now
      // return 410 in middleware, creating 301→410 chains that waste crawl budget.
      // Those old source URLs are now handled directly (410/410-pattern) in middleware.ts.
      {
        source: '/:lang/industry/:slug',
        destination: '/:lang/industries/:slug',
        permanent: true,
      },
    ]
  },
}
export default nextConfig