import { Lang } from '@/lib/i18n'
import { SolutionSlug } from '@/lib/solutions'

export type IndustrySlug =
  | 'water-utilities'
  | 'energy-solar'
  | 'industrial-facilities'
  | 'agriculture'
  | 'telecom-infrastructure'
  | 'environment-smart-city'

export const INDUSTRY_SLUGS: IndustrySlug[] = [
  'water-utilities',
  'energy-solar',
  'industrial-facilities',
  'agriculture',
  'telecom-infrastructure',
  'environment-smart-city',
]

type IndustryContent = {
  title: string
  tagline: string
  pains: string[]
  solutions: string[]
}

type Localized = Record<Lang, IndustryContent>

export type Industry = {
  slug: IndustrySlug
  relatedSolutions: SolutionSlug[]
  content: Localized
}

export const INDUSTRIES: Record<IndustrySlug, Industry> = {
  'water-utilities': {
    slug: 'water-utilities',
    relatedSolutions: ['water-monitoring'],
    content: {
      en: {
        title: 'Water Utilities',
        tagline: 'Remote monitoring for reservoirs, pump stations, tanks and distribution networks.',
        pains: [
          'Assets spread across remote, unmanned sites',
          'Leaks and pump failures found too late',
          'Costly manual rounds just to read levels',
        ],
        solutions: ['Tank level & reservoir monitoring', 'Remote pump monitoring', 'Leak detection & alarms'],
      },
      zh: {
        title: '自來水事業',
        tagline: '為蓄水池、泵站、儲槽與配水管網提供遠端監控。',
        pains: ['資產分散於偏遠無人站點', '漏水與泵浦故障太晚才發現', '只為讀液位就得耗費人力巡檢'],
        solutions: ['水位與蓄水池監控', '泵浦遠端監控', '漏水偵測與告警'],
      },
    },
  },
  'energy-solar': {
    slug: 'energy-solar',
    relatedSolutions: ['energy-monitoring'],
    content: {
      en: {
        title: 'Energy & Solar',
        tagline: 'Generation, metering and yield monitoring for solar sites and energy assets.',
        pains: [
          'Distributed sites underperform silently',
          'No remote view of inverters or meters',
          'Downtime discovered weeks later',
        ],
        solutions: ['Solar site monitoring', 'Remote meter reading', 'Energy data collection'],
      },
      zh: {
        title: '能源與太陽能',
        tagline: '為太陽能場域與能源設備提供發電、計量與發電量監控。',
        pains: ['分散站點默默衰退', '逆變器與電錶無法遠端查看', '停機數週後才發現'],
        solutions: ['太陽能場域監控', '遠端抄表', '能源數據採集'],
      },
    },
  },
  'industrial-facilities': {
    slug: 'industrial-facilities',
    relatedSolutions: ['equipment-monitoring', 'energy-monitoring'],
    content: {
      en: {
        title: 'Industrial Facilities',
        tagline: 'Equipment status, temperature and energy monitoring for factories and plants.',
        pains: [
          'Critical equipment fails without warning',
          'No alarms until the next inspection',
          'Energy and machine data trapped on-site',
        ],
        solutions: ['Equipment & temperature monitoring', 'Alarm notification', 'Energy sub-metering'],
      },
      zh: {
        title: '工業廠務',
        tagline: '為工廠與廠房提供設備狀態、溫度與能源監控。',
        pains: ['關鍵設備毫無預警就故障', '到下次巡檢前都沒有告警', '能源與機台數據困在現場'],
        solutions: ['設備與溫度監控', '告警通知', '能源分錶'],
      },
    },
  },
  'agriculture': {
    slug: 'agriculture',
    relatedSolutions: ['water-monitoring'],
    content: {
      en: {
        title: 'Agriculture',
        tagline: 'Irrigation tanks, pumps and field conditions monitored remotely over LoRa and 4G.',
        pains: [
          'Fields and tanks far from any network',
          'Manual checks across large areas',
          'Water waste from late pump response',
        ],
        solutions: ['Tank level monitoring', 'Remote pump monitoring', 'Field sensor data over LoRa'],
      },
      zh: {
        title: '農業',
        tagline: '透過 LoRa 與 4G 遠端監控灌溉儲槽、泵浦與田間環境。',
        pains: ['田地與儲槽遠離網路', '大面積靠人工巡檢', '泵浦反應慢造成浪費水'],
        solutions: ['水箱液位監控', '泵浦遠端監控', 'LoRa 田間感測數據'],
      },
    },
  },
  'telecom-infrastructure': {
    slug: 'telecom-infrastructure',
    relatedSolutions: ['equipment-monitoring'],
    content: {
      en: {
        title: 'Telecom Infrastructure',
        tagline: 'Site power, temperature and equipment monitoring for towers and remote cabinets.',
        pains: [
          'Unmanned sites over a wide area',
          'Power and cooling faults cause outages',
          'Truck rolls just to check a cabinet',
        ],
        solutions: ['Equipment & temperature monitoring', 'Power & status alarms', 'Remote site data collection'],
      },
      zh: {
        title: '電信基礎設施',
        tagline: '為基地台與遠端機櫃提供站點電力、溫度與設備監控。',
        pains: ['大範圍的無人站點', '電力與散熱故障導致中斷', '只為檢查機櫃就得派車'],
        solutions: ['設備與溫度監控', '電力與狀態告警', '遠端站點數據採集'],
      },
    },
  },
  'environment-smart-city': {
    slug: 'environment-smart-city',
    relatedSolutions: ['environmental-monitoring', 'water-monitoring'],
    content: {
      en: {
        title: 'Environment & Smart City',
        tagline: 'Air quality, weather and environmental sensing networks for cities, campuses and public agencies.',
        pains: [
          'Pollution and weather events missed by spot checks',
          'No real-time, networked environmental data',
          'Compliance reporting relies on manual sampling',
        ],
        solutions: ['Ambient air quality networks', 'Automatic weather station networks', 'Environmental data to city / cloud platforms'],
      },
      zh: {
        title: '環境與智慧城市',
        tagline: '為城市、園區與公部門提供空氣品質、氣象與環境感測網絡。',
        pains: ['抽樣式檢測錯過污染與氣象事件', '缺乏即時、聯網的環境數據', '合規通報仰賴人工採樣'],
        solutions: ['環境空氣品質網絡', '自動氣象站網絡', '環境數據介接城市／雲端平台'],
      },
    },
  },
}

export const getIndustry = (slug: string): Industry | undefined =>
  (INDUSTRY_SLUGS as string[]).includes(slug) ? INDUSTRIES[slug as IndustrySlug] : undefined
