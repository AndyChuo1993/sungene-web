/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  async redirects() {
    return [
      // Only legit redirect: old singular /industry/:slug -> live /industries/:slug.
      // Former lead-gen redirects were removed because they pointed at paths that now
      // return 410 in proxy, creating 301 -> 410 chains that waste crawl budget.
      // Those old source URLs are now handled directly by proxy.ts.
      {
        source: '/:lang/industry/:slug',
        destination: '/:lang/industries/:slug',
        permanent: true,
      },
    ]
  },
}
export default nextConfig
