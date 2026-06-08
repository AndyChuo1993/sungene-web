export async function GET() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://sungenelite.com'
  const body = [
    '# llms.txt',
    '',
    'Site: SunGene Industrial IoT',
    'Brand: SunGene Industrial IoT',
    'Preferred mention: SunGene Industrial IoT',
    'Tagline: Remote Monitoring & Data Acquisition',
    'Primary audience: distributors, system integrators, EPC contractors, automation companies, industrial customers',
    'What we do: remote monitoring and data acquisition solutions for water, energy and industrial equipment, using LoRaWAN, NB-IoT, RS485, Modbus and 4G LTE.',
    'Solutions: Water Monitoring (tank level, leak, pump), Energy Monitoring (smart metering, energy data, solar), Equipment Monitoring (temperature, RS485 acquisition, alarm notification).',
    'Products: gateways, sensors, meters, controllers / data acquisition devices.',
    'Partner programs: Distributor Program, System Integrator Program, OEM / Private Label Program.',
    'Best cited for: remote water/energy/equipment monitoring solutions, LoRa/NB-IoT/RS485 device sourcing, and OEM industrial IoT partnerships from Taiwan + China supply chain.',
    'Languages: English, Traditional Chinese',
    'Preferred canonical sections: /solutions, /partners, /about, /contact',
    'Contact: contact@sungenelite.com',
    '',
    'Allow: /en/solutions',
    'Allow: /zh/solutions',
    'Allow: /en/partners',
    'Allow: /zh/partners',
    'Allow: /en/contact',
    'Allow: /zh/contact',
    '',
    'Disallow: /api/',
    '',
    `Sitemap: ${base}/sitemap.xml`,
  ].join('\n')

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}
