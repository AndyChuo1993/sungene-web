import { Lang } from '@/lib/i18n'
import { SolutionSlug } from '@/lib/solutions'

export type ApplicationSlug =
  | 'tank-level-monitoring'
  | 'pump-monitoring'
  | 'solar-site-monitoring'
  | 'remote-meter-reading'
  | 'equipment-alarm-notification'

export const APPLICATION_SLUGS: ApplicationSlug[] = [
  'tank-level-monitoring',
  'pump-monitoring',
  'solar-site-monitoring',
  'remote-meter-reading',
  'equipment-alarm-notification',
]

type ApplicationContent = {
  title: string
  tagline: string
  intent: string
  how: string[]
  products: string[]
  technologies: string[]
}

type Localized = Record<Lang, ApplicationContent>

export type Application = {
  slug: ApplicationSlug
  solution: SolutionSlug
  content: Localized
}

export const APPLICATIONS: Record<ApplicationSlug, Application> = {
  'tank-level-monitoring': {
    slug: 'tank-level-monitoring',
    solution: 'water-monitoring',
    content: {
      en: {
        title: 'Tank Level Monitoring',
        tagline: 'Remote tank level monitoring for water, fuel and chemical tanks — no more manual dipping.',
        intent:
          'Tanks at remote or unmanned sites are hard to read. Without remote level data you risk dry runs, overflows and wasted truck rolls just to check a gauge.',
        how: [
          'A level sensor (submersible, ultrasonic or radar) measures the tank continuously.',
          'A LoRa / NB-IoT / 4G gateway sends readings from the site to the cloud.',
          'Operators see live levels and get high / low alarms by app or email.',
        ],
        products: ['LoRa / NB-IoT Level Sensor', 'Ultrasonic Level Sensor', 'Wireless Gateway'],
        technologies: ['LoRaWAN', 'NB-IoT', '4G LTE', 'RS485'],
      },
      zh: {
        title: '水箱液位監控',
        tagline: '水、燃料與化學儲槽的遠端液位監控 —— 不必再人工量測。',
        intent:
          '偏遠或無人站點的儲槽不易讀取。缺乏遠端液位數據，容易發生空轉、溢流，或只是為了看一眼液位就得派車。',
        how: [
          '液位感測器（投入式、超音波或雷達）持續量測槽體。',
          'LoRa／NB-IoT／4G 閘道器把站點讀數送上雲端。',
          '維運人員可即時看到液位，並透過 App 或 Email 收到高／低液位告警。',
        ],
        products: ['LoRa／NB-IoT 液位感測器', '超音波液位感測器', '無線閘道器'],
        technologies: ['LoRaWAN', 'NB-IoT', '4G LTE', 'RS485'],
      },
    },
  },
  'pump-monitoring': {
    slug: 'pump-monitoring',
    solution: 'water-monitoring',
    content: {
      en: {
        title: 'Remote Pump Monitoring',
        tagline: 'Monitor pump run status, faults and flow remotely — catch failures before they flood or run dry.',
        intent:
          'Pump stations are often far from the control room. A failed or dry-running pump can go unnoticed for hours, causing flooding, supply loss or burnt motors.',
        how: [
          'Sensors and the pump controller report run / stop status, current and faults over RS485 or dry contacts.',
          'A gateway forwards the data and pushes alarms when a pump trips or runs dry.',
          'Teams respond from a phone instead of a site visit.',
        ],
        products: ['RS485 Data Collector', 'Wireless Gateway', 'Current / Status Sensor'],
        technologies: ['RS485', 'Modbus', 'LoRaWAN', '4G LTE'],
      },
      zh: {
        title: '泵浦遠端監控',
        tagline: '遠端監控泵浦運轉狀態、故障與流量 —— 在淹水或空轉前就抓到異常。',
        intent:
          '泵站常遠離控制室。泵浦故障或空轉可能數小時無人察覺，導致淹水、供水中斷或馬達燒毀。',
        how: [
          '感測器與泵浦控制器透過 RS485 或乾接點回報運轉／停止狀態、電流與故障。',
          '閘道器轉送數據，並在泵浦跳脫或空轉時推送告警。',
          '團隊用手機即可掌握，不必親自到場。',
        ],
        products: ['RS485 數據採集器', '無線閘道器', '電流／狀態感測器'],
        technologies: ['RS485', 'Modbus', 'LoRaWAN', '4G LTE'],
      },
    },
  },
  'solar-site-monitoring': {
    slug: 'solar-site-monitoring',
    solution: 'energy-monitoring',
    content: {
      en: {
        title: 'Solar Site Monitoring',
        tagline: 'Remote monitoring of solar generation, inverters and energy yield across distributed sites.',
        intent:
          'Distributed solar assets underperform silently. Without remote yield and inverter data you cannot tell a dirty panel from a failed string until the monthly bill.',
        how: [
          'Energy meters and inverters are read over RS485 / Modbus for generation and status.',
          'A gateway uploads yield, power and fault data from each site.',
          'Underperformance and downtime trigger alerts so you act in days, not weeks.',
        ],
        products: ['Smart Energy Meter', 'RS485 Data Collector', 'Wireless Gateway'],
        technologies: ['RS485', 'Modbus', '4G LTE', 'LoRaWAN'],
      },
      zh: {
        title: '太陽能場域監控',
        tagline: '跨分散站點遠端監控太陽能發電、逆變器與發電量。',
        intent:
          '分散式太陽能設備常默默衰退。缺乏遠端發電量與逆變器數據，你無法分辨是面板髒了還是某串故障，直到月底帳單才發現。',
        how: [
          '透過 RS485／Modbus 讀取電錶與逆變器的發電量與狀態。',
          '閘道器上傳各站點的發電量、功率與故障數據。',
          '效能不足與停機觸發告警，讓你在數天內、而非數週後處理。',
        ],
        products: ['智慧電錶', 'RS485 數據採集器', '無線閘道器'],
        technologies: ['RS485', 'Modbus', '4G LTE', 'LoRaWAN'],
      },
    },
  },
  'remote-meter-reading': {
    slug: 'remote-meter-reading',
    solution: 'energy-monitoring',
    content: {
      en: {
        title: 'Remote Meter Reading',
        tagline: 'Automatic remote reading of electricity, water and energy meters — no more manual rounds.',
        intent:
          'Manual meter reading is slow, error-prone and expensive. Tenants, sub-meters and remote sites need accurate consumption data without sending someone to read a dial.',
        how: [
          'Meters are read over RS485 / Modbus or pulse outputs by a data collector.',
          'A LoRa / NB-IoT / 4G gateway uploads readings on a schedule.',
          'Consumption, sub-metering and billing data are available remotely.',
        ],
        products: ['Smart Energy Meter', 'RS485 Data Collector', 'Wireless Gateway'],
        technologies: ['RS485', 'Modbus', 'NB-IoT', 'LoRaWAN'],
      },
      zh: {
        title: '遠端抄表',
        tagline: '電錶、水錶與能源表的遠端自動抄表 —— 不必再人工巡檢。',
        intent:
          '人工抄表既慢、易錯又昂貴。租戶、分錶與偏遠站點需要準確的用量數據，卻不該每次都派人去看錶。',
        how: [
          '數據採集器透過 RS485／Modbus 或脈衝輸出讀取各式錶具。',
          'LoRa／NB-IoT／4G 閘道器依排程上傳讀數。',
          '用量、分錶與計費數據皆可遠端取得。',
        ],
        products: ['智慧電錶', 'RS485 數據採集器', '無線閘道器'],
        technologies: ['RS485', 'Modbus', 'NB-IoT', 'LoRaWAN'],
      },
    },
  },
  'equipment-alarm-notification': {
    slug: 'equipment-alarm-notification',
    solution: 'equipment-monitoring',
    content: {
      en: {
        title: 'Equipment Alarm Notification',
        tagline: 'Push temperature, status and fault alarms from remote equipment straight to your team.',
        intent:
          'Critical equipment fails quietly when nobody is watching. Operators need alarms pushed to them — not discovered on the next site visit.',
        how: [
          'Temperature, door, power and status sensors connect over RS485 or digital inputs.',
          'A gateway monitors thresholds and pushes alarms by app, email or SMS.',
          'Faults are escalated immediately so downtime is measured in minutes.',
        ],
        products: ['Temperature Sensor', 'RS485 Data Collector', 'Wireless Gateway'],
        technologies: ['RS485', 'Modbus', 'LoRaWAN', '4G LTE'],
      },
      zh: {
        title: '設備告警通知',
        tagline: '把遠端設備的溫度、狀態與故障告警直接推送給你的團隊。',
        intent:
          '無人看顧時，關鍵設備往往默默故障。維運人員需要告警主動推送，而不是等到下次到場才發現。',
        how: [
          '溫度、門禁、電源與狀態感測器透過 RS485 或數位輸入連接。',
          '閘道器監控門檻值，並透過 App、Email 或簡訊推送告警。',
          '故障即時升級，停機時間以分鐘計。',
        ],
        products: ['溫度感測器', 'RS485 數據採集器', '無線閘道器'],
        technologies: ['RS485', 'Modbus', 'LoRaWAN', '4G LTE'],
      },
    },
  },
}

export const getApplicationsForSolution = (solution: SolutionSlug) =>
  APPLICATION_SLUGS.map((s) => APPLICATIONS[s]).filter((a) => a.solution === solution)
