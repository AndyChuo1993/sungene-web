export type KitSlug = 'tank-level-monitoring' | 'weather-agriculture' | 'industrial-environmental'

export const KIT_SLUGS: KitSlug[] = ['tank-level-monitoring', 'weather-agriculture', 'industrial-environmental']

type KitContent = {
  title: string
  tagline: string
  components: string[]
  applications: string[]
  customers: string[]
  partnership: string
}

export type Kit = {
  slug: KitSlug
  relatedSolution: string
  /** Existing catalog products that make up / extend this kit. */
  relatedProducts: string[]
  protocols: string[]
  en: KitContent
  zh: KitContent
}

export const KITS: Record<KitSlug, Kit> = {
  'tank-level-monitoring': {
    slug: 'tank-level-monitoring',
    relatedSolution: 'water-monitoring',
    relatedProducts: [
      'ultrasonic-water-level-sensor',
      'radar-water-level-sensor',
      'electromagnetic-flow-meter',
      'edge-iot-gateway',
      'wireless-comm-gateway',
    ],
    protocols: ['LoRa / NB-IoT / 4G', 'RS485 / Modbus', 'MQTT to SCADA & IoT platforms'],
    en: {
      title: 'Tank & Water Level Monitoring Kit',
      tagline: 'Remote level monitoring for tanks, reservoirs, pump stations and water networks.',
      components: [
        'Water-level sensor — ultrasonic, radar or pressure (RS485 / 4-20mA)',
        'RTU or gateway for data acquisition and remote control',
        'LoRa / NB-IoT / 4G wireless backhaul',
        'Optional pressure and flow sensors',
      ],
      applications: [
        'Water & wastewater utilities',
        'Reservoirs, tanks and ponds',
        'Pump station and borehole monitoring',
        'Irrigation and rural water schemes',
      ],
      customers: ['Water utilities', 'System integrators / SCADA contractors', 'Pump and water-treatment companies'],
      partnership: 'Brand-ready / OEM / neutral packaging. Flexible MOQ. Commercially competitive pricing.',
    },
    zh: {
      title: '水箱與水位監控套件',
      tagline: '水箱、水庫、泵站與供水網絡的遠端水位監控。',
      components: [
        '水位感測器——超音波、雷達或壓力式(RS485 / 4-20mA)',
        'RTU 或閘道器,負責數據採集與遠端控制',
        'LoRa / NB-IoT / 4G 無線回傳',
        '可選配壓力與流量感測器',
      ],
      applications: ['自來水與污水處理', '水庫、水箱與池塘', '泵站與深井監控', '灌溉與鄉村供水系統'],
      customers: ['自來水公司', '系統整合商 / SCADA 承包商', '泵浦與水處理公司'],
      partnership: '可貼牌 / OEM / 中性包裝。彈性最低訂購量。具市場競爭力的價格。',
    },
  },
  'weather-agriculture': {
    slug: 'weather-agriculture',
    relatedSolution: 'environmental-monitoring',
    relatedProducts: [
      'ultrasonic-weather-station',
      'solar-powered-weather-station',
      'soil-moisture-temperature-ec-sensor',
      'tipping-bucket-rain-gauge',
      'edge-iot-gateway',
    ],
    protocols: ['LoRa / NB-IoT / 4G', 'RS485 / Modbus', 'MQTT to SCADA & IoT platforms'],
    en: {
      title: 'Weather & Agriculture Monitoring Kit',
      tagline: 'Field weather, soil and environmental data for agriculture and irrigation.',
      components: [
        'Ultrasonic weather station (wind, temp, humidity, pressure, rain, light)',
        'Soil temperature / moisture / EC / pH sensors',
        'Air temperature & humidity sensor',
        'RTU / gateway with LoRa / 4G backhaul',
      ],
      applications: [
        'Precision agriculture and irrigation',
        'Greenhouses and plantations',
        'Environmental and climate monitoring',
        'Research and government field stations',
      ],
      customers: ['Agtech distributors', 'Irrigation / agriculture system integrators', 'Environmental monitoring companies'],
      partnership: 'Brand-ready / OEM / neutral packaging. Flexible MOQ. Commercially competitive pricing.',
    },
    zh: {
      title: '氣象與農業監測套件',
      tagline: '為農業與灌溉提供田間氣象、土壤與環境數據。',
      components: [
        '超音波氣象站(風、溫度、濕度、氣壓、雨量、光照)',
        '土壤溫度 / 水分 / EC / pH 感測器',
        '空氣溫濕度感測器',
        'RTU / 閘道器,LoRa / 4G 回傳',
      ],
      applications: ['精準農業與灌溉', '溫室與農場', '環境與氣候監測', '研究與政府田間站'],
      customers: ['農業科技經銷商', '灌溉 / 農業系統整合商', '環境監測公司'],
      partnership: '可貼牌 / OEM / 中性包裝。彈性最低訂購量。具市場競爭力的價格。',
    },
  },
  'industrial-environmental': {
    slug: 'industrial-environmental',
    relatedSolution: 'equipment-monitoring',
    relatedProducts: [
      'lora-temperature-humidity-sensor',
      'air-quality-sensor',
      'atmospheric-multiparameter-sensor',
      'vibration-sensor',
      'wireless-comm-gateway',
    ],
    protocols: ['LoRa / NB-IoT / 4G', 'RS485 / Modbus', 'MQTT to SCADA & IoT platforms'],
    en: {
      title: 'Industrial Environmental Monitoring Kit',
      tagline: 'Temperature, humidity, pressure and environment monitoring for industrial sites.',
      components: [
        'Temperature & humidity sensor',
        'Pressure sensor',
        'Environmental sensors (CO2, illumination, air quality — optional)',
        '4G / LoRa gateway with data logging',
      ],
      applications: [
        'Warehouses and cold storage',
        'Factories and equipment rooms',
        'Remote and unmanned sites',
        'Asset and condition monitoring',
      ],
      customers: ['Industrial automation distributors', 'Facility / building system integrators', 'Equipment monitoring companies'],
      partnership: 'Brand-ready / OEM / neutral packaging. Flexible MOQ. Commercially competitive pricing.',
    },
    zh: {
      title: '工業環境監測套件',
      tagline: '工業場域的溫度、濕度、壓力與環境監測。',
      components: [
        '溫濕度感測器',
        '壓力感測器',
        '環境感測器(CO2、照度、空氣品質——可選)',
        '4G / LoRa 閘道器,具數據記錄',
      ],
      applications: ['倉庫與冷鏈倉儲', '工廠與設備機房', '偏遠與無人站點', '資產與狀態監控'],
      customers: ['工業自動化經銷商', '廠務 / 樓宇系統整合商', '設備監控公司'],
      partnership: '可貼牌 / OEM / 中性包裝。彈性最低訂購量。具市場競爭力的價格。',
    },
  },
}

export const getKit = (slug: string): Kit | undefined => KITS[slug as KitSlug]
