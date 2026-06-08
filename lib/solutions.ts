import { Lang } from '@/lib/i18n'

export type SolutionSlug = 'water-monitoring' | 'energy-monitoring' | 'equipment-monitoring'

export const SOLUTION_SLUGS: SolutionSlug[] = [
  'water-monitoring',
  'energy-monitoring',
  'equipment-monitoring',
]

type SolutionContent = {
  title: string
  tagline: string
  problem: string
  capabilities: string[]
  products: string[]
  industries: string[]
}

type Localized = Record<Lang, SolutionContent>

export const SOLUTIONS: Record<SolutionSlug, Localized> = {
  'water-monitoring': {
    en: {
      title: 'Water Monitoring',
      tagline: 'Remote tank level, leak and pump monitoring for water utilities and facilities.',
      problem:
        'Water assets are often spread across remote sites with no easy way to see levels, leaks or pump status until something fails. Manual reading is slow and reactive.',
      capabilities: ['Tank Level Monitoring', 'Water Leak Detection', 'Pump Monitoring & Alarm'],
      products: ['LoRa / NB-IoT Water Level Sensor', 'Wireless Gateway', 'Leak Detection Sensor'],
      industries: ['Water Utilities', 'Industrial Facilities', 'Agriculture'],
    },
    zh: {
      title: '水監控',
      tagline: '為自來水與廠務提供水位、漏水與泵浦的遠端監控。',
      problem:
        '水資產常分散在偏遠站點，水位、漏水或泵浦狀態往往要等到出問題才會發現。人工抄表既慢又被動。',
      capabilities: ['水位監控', '漏水偵測', '泵浦監控與告警'],
      products: ['LoRa / NB-IoT 水位感測器', '無線閘道器', '漏水偵測感測器'],
      industries: ['自來水事業', '工業廠務', '農業'],
    },
  },
  'energy-monitoring': {
    en: {
      title: 'Energy Monitoring',
      tagline: 'Smart metering, energy data collection and solar site monitoring.',
      problem:
        'Energy and solar assets generate data that rarely reaches the people who need it. Without remote metering you cannot spot loss, downtime or underperformance in time.',
      capabilities: ['Smart Metering', 'Energy Data Collection', 'Solar Site Monitoring'],
      products: ['Smart Energy Meter', 'Current Transformer (CT)', 'Wireless Gateway'],
      industries: ['Energy & Solar', 'Industrial Facilities', 'Telecom Infrastructure'],
    },
    zh: {
      title: '能源監控',
      tagline: '智慧電錶、能源數據採集與太陽能場域監控。',
      problem:
        '能源與太陽能設備產生的數據往往無法即時送到需要的人手上。缺乏遠端計量，就無法即時發現損耗、停機或效能不足。',
      capabilities: ['智慧計量', '能源數據採集', '太陽能場域監控'],
      products: ['智慧電錶', '比流器（CT）', '無線閘道器'],
      industries: ['能源與太陽能', '工業廠務', '電信基礎設施'],
    },
  },
  'equipment-monitoring': {
    en: {
      title: 'Equipment Monitoring',
      tagline: 'Temperature, RS485 data acquisition and alarm notification for remote assets.',
      problem:
        'Critical equipment often sits far from the control room. Operators need temperature, status and alarms pushed to them — not discovered on the next site visit.',
      capabilities: ['Temperature Monitoring', 'RS485 / Modbus Data Acquisition', 'Alarm Notification'],
      products: ['RS485 Data Collector', 'Temperature Sensor', 'Wireless Gateway'],
      industries: ['Industrial Facilities', 'Telecom Infrastructure', 'Energy & Solar'],
    },
    zh: {
      title: '設備監控',
      tagline: '溫度、RS485 數據採集與遠端資產的告警通知。',
      problem:
        '關鍵設備往往遠離控制室。維運人員需要溫度、狀態與告警主動推送，而不是等到下次到場才發現異常。',
      capabilities: ['溫度監控', 'RS485 / Modbus 數據採集', '告警通知'],
      products: ['RS485 數據採集器', '溫度感測器', '無線閘道器'],
      industries: ['工業廠務', '電信基礎設施', '能源與太陽能'],
    },
  },
}
