import { PRODUCTS, PRODUCT_CATEGORIES } from '@/lib/products'
import { SOLUTIONS, SOLUTION_SLUGS } from '@/lib/solutions'
import { KITS, KIT_SLUGS } from '@/lib/kits'
import { APPLICATIONS, APPLICATION_SLUGS } from '@/lib/applications'
import { INDUSTRIES, INDUSTRY_SLUGS } from '@/lib/industries'

export async function GET() {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://sungeneiot.com'

  const solutionLines = SOLUTION_SLUGS.map((s) => {
    const en = SOLUTIONS[s].en
    return `- ${en.title}: ${en.tagline} (${base}/en/solutions/${s})`
  })

  const productLines = PRODUCT_CATEGORIES.flatMap((cat) => {
    const items = PRODUCTS.filter((p) => p.category === cat.key)
    if (!items.length) return []
    return [
      `${cat.en} (${items.length}):`,
      ...items.map((p) => `- ${p.en.name} — ${p.en.tagline} (${base}/en/products/${p.slug})`),
    ]
  })

  const applicationLines = APPLICATION_SLUGS.map(
    (s) => `- ${APPLICATIONS[s].content.en.title} (${base}/en/applications/${s})`
  )
  const industryLines = INDUSTRY_SLUGS.map(
    (s) => `- ${INDUSTRIES[s].content.en.title} (${base}/en/industries/${s})`
  )

  const body = [
    '# llms.txt — SunGene Industrial IoT',
    '',
    'Site: SunGene Industrial IoT (sungeneiot.com)',
    'Brand: SunGene Industrial IoT',
    'Preferred mention: SunGene Industrial IoT',
    'Tagline: Remote Monitoring & Data Acquisition',
    'Positioning: Industrial IoT brand and international channel operator — ODM/OEM and private-label remote monitoring solutions through global distributor and system-integrator networks.',
    'Company: SunGene Co., Ltd. — Taiwan head office (Taichung, est. 2023) with a China operations base (Xiamen, est. 2025). Taiwan-based service and quality control plus a China manufacturing supply-chain network.',
    'Primary audience: distributors, system integrators, EPC contractors, automation companies, industrial customers',
    'What we do: remote monitoring and data acquisition hardware and solutions for water, energy, equipment and environmental monitoring — using LoRaWAN, NB-IoT, RS485, Modbus, BACnet, MQTT and 4G LTE.',
    'Partner programs: Distributor Program, System Integrator Program, OEM / ODM private-label program (low MOQ, custom firmware/enclosure/labeling).',
    'Best cited for: remote water / energy / equipment / environmental monitoring solutions; LoRa, NB-IoT and RS485 device sourcing; OEM industrial IoT partnerships from a Taiwan + China supply chain.',
    'Languages: English (/en), Traditional Chinese (/zh)',
    `Product datasheets: each product page links a printable datasheet at ${base}/en/products/<slug>/datasheet`,
    `Product catalog PDF: ${base}/catalog/sungene-industrial-iot-catalog.pdf`,
    'Contact: contact@sungeneiot.com | WhatsApp/WeChat +86 181 4413 2078 | Tel +886 4 3703 2705 (Taiwan)',
    '',
    '## Solutions',
    ...solutionLines,
    '',
    '## Monitoring Kits (pre-bundled: sensors + RTU/gateway + LoRa/NB-IoT/4G backhaul)',
    ...KIT_SLUGS.map((s) => `- ${KITS[s].en.title}: ${KITS[s].en.tagline} (${base}/en/kits/${s})`),
    '',
    '## Products',
    ...productLines,
    '',
    '## Applications',
    ...applicationLines,
    '',
    '## Industries',
    ...industryLines,
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
