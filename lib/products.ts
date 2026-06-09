export type ProductCategory = 'controllers' | 'gateways' | 'sensors' | 'meters'

export const PRODUCT_CATEGORIES: { key: ProductCategory; en: string; zh: string }[] = [
  { key: 'controllers', en: 'Controllers', zh: '控制器' },
  { key: 'gateways', en: 'Gateways', zh: '閘道器' },
  { key: 'sensors', en: 'Sensors', zh: '感測器' },
  { key: 'meters', en: 'Meters', zh: '電錶' },
]

export type Product = {
  slug: string
  category: ProductCategory
  image: string
  relatedSolution: string
  en: { name: string; tagline: string; specs: { label: string; value: string }[] }
  zh: { name: string; tagline: string; specs: { label: string; value: string }[] }
}

export const PRODUCTS: Product[] = [
  {
    slug: 'fan-coil-thermostat-rs485-lora',
    category: 'controllers',
    image: '/products/fcu-thermostat-lora.jpg',
    relatedSolution: 'equipment-monitoring',
    en: {
      name: 'Fan-Coil Thermostat — RS485 / LoRa',
      tagline:
        'Wall-mount fan-coil unit (FCU) thermostat with RS485 (Modbus) or LoRa for remote temperature monitoring and central control.',
      specs: [
        { label: 'Power supply', value: 'AC 220V' },
        { label: 'Communication', value: 'RS485 (Modbus) / LoRa' },
        { label: 'Display', value: 'Room temperature + setpoint, LCD' },
        { label: 'Fan control', value: '3-speed' },
        { label: 'Scheduling', value: 'Weekly time programming' },
        { label: 'Control', value: 'Local + central / remote' },
        { label: 'Mounting', value: 'Wall-mount (86 box)' },
      ],
    },
    zh: {
      name: '風機盤管溫控器 — RS485 / LoRa',
      tagline:
        '壁掛式風機盤管（FCU）溫控器，支援 RS485（Modbus）或 LoRa，可遠端溫度監控與集中控制。',
      specs: [
        { label: '供電', value: 'AC 220V' },
        { label: '通訊', value: 'RS485（Modbus）/ LoRa' },
        { label: '顯示', value: '室內溫度＋設定溫度，LCD' },
        { label: '風機控制', value: '三速' },
        { label: '排程', value: '週時段編程' },
        { label: '控制', value: '本地＋集中／遠端' },
        { label: '安裝', value: '壁掛（86 盒）' },
      ],
    },
  },
  {
    slug: 'fan-coil-controller-0-10v',
    category: 'controllers',
    image: '/products/fcu-controller-0-10v.jpg',
    relatedSolution: 'equipment-monitoring',
    en: {
      name: 'Variable-Speed Fan-Coil Controller — 0-10V',
      tagline:
        'FCU controller with 0-10V output for EC / DC brushless variable-speed fans, with RS485 / LoRa remote monitoring.',
      specs: [
        { label: 'Power supply', value: 'AC 220V' },
        { label: 'Fan output', value: '0-10V (EC / DC brushless)' },
        { label: 'Communication', value: 'RS485 / LoRa' },
        { label: 'Display', value: 'Room temperature + setpoint, LCD' },
        { label: 'Fan control', value: '3-speed / variable' },
        { label: 'Scheduling', value: 'Weekly time programming' },
        { label: 'Control', value: 'Local + central / remote' },
      ],
    },
    zh: {
      name: '變頻風機盤管控制器 — 0-10V',
      tagline:
        '風機盤管控制器，0-10V 輸出可驅動 EC／DC 無刷變頻風機，支援 RS485／LoRa 遠端監控。',
      specs: [
        { label: '供電', value: 'AC 220V' },
        { label: '風機輸出', value: '0-10V（EC／DC 無刷）' },
        { label: '通訊', value: 'RS485 / LoRa' },
        { label: '顯示', value: '室內溫度＋設定溫度，LCD' },
        { label: '風機控制', value: '三速／變頻' },
        { label: '排程', value: '週時段編程' },
        { label: '控制', value: '本地＋集中／遠端' },
      ],
    },
  },
  {
    slug: 'floor-heating-thermostat-wifi',
    category: 'controllers',
    image: '/products/floor-heating-thermostat-wifi.jpg',
    relatedSolution: 'equipment-monitoring',
    en: {
      name: 'WiFi Floor-Heating & Boiler Thermostat',
      tagline:
        'Smart wall thermostat for floor heating and wall-hung boilers — WiFi connected with no gateway required, plus daily and weekly scheduling.',
      specs: [
        { label: 'Power supply', value: 'AC 220V' },
        { label: 'Communication', value: 'WiFi 2.4GHz (no gateway needed)' },
        { label: 'Application', value: 'Floor heating / wall-hung boiler' },
        { label: 'Display', value: 'Room temperature + setpoint, LCD' },
        { label: 'Scheduling', value: 'Daily + weekly programming' },
        { label: 'Control', value: 'Local + app' },
        { label: 'Mounting', value: 'Wall-mount (86 box)' },
      ],
    },
    zh: {
      name: 'WiFi 地暖／壁掛爐溫控器',
      tagline:
        '地暖與壁掛爐用智慧壁掛溫控器，WiFi 直連免閘道器，支援日／週排程。',
      specs: [
        { label: '供電', value: 'AC 220V' },
        { label: '通訊', value: 'WiFi 2.4GHz（免閘道器）' },
        { label: '應用', value: '地暖／壁掛爐' },
        { label: '顯示', value: '室內溫度＋設定溫度，LCD' },
        { label: '排程', value: '日＋週編程' },
        { label: '控制', value: '本地＋App' },
        { label: '安裝', value: '壁掛（86 盒）' },
      ],
    },
  },
]

PRODUCTS.push(
  {
    slug: 'ultrasonic-water-level-sensor',
    category: 'sensors',
    image: '/products/ultrasonic-water-level-sensor.jpg',
    relatedSolution: 'water-monitoring',
    en: {
      name: 'Ultrasonic Water Level Sensor',
      tagline:
        'Non-contact ultrasonic level measurement for tanks, reservoirs and open channels — for remote water level monitoring.',
      specs: [
        { label: 'Measurement', value: 'Ultrasonic (non-contact)' },
        { label: 'Range', value: '0–15 m (model dependent)' },
        { label: 'Output', value: '4-20mA / RS485 (Modbus)' },
        { label: 'Power supply', value: 'DC 24V' },
        { label: 'Display', value: 'LCD' },
        { label: 'Protection', value: 'IP65' },
        { label: 'Mounting', value: 'Top-mount' },
      ],
    },
    zh: {
      name: '超音波水位感測器',
      tagline:
        '非接觸式超音波液位量測,適用水箱、水池與明渠,用於遠端水位監控。',
      specs: [
        { label: '量測方式', value: '超音波（非接觸）' },
        { label: '量程', value: '0–15 m（依型號）' },
        { label: '輸出', value: '4-20mA / RS485（Modbus）' },
        { label: '供電', value: 'DC 24V' },
        { label: '顯示', value: 'LCD' },
        { label: '防護', value: 'IP65' },
        { label: '安裝', value: '頂部安裝' },
      ],
    },
  },
)

PRODUCTS.push(
  {
    slug: 'lora-temperature-humidity-sensor',
    category: 'sensors',
    image: '/products/lora-temp-humidity-sensor.jpg',
    relatedSolution: 'equipment-monitoring',
    en: {
      name: 'LoRa Temperature & Humidity Sensor',
      tagline:
        'Wireless LoRa temperature and humidity monitoring for rooms, cabinets and remote sites — with local LCD and long-range transmission.',
      specs: [
        { label: 'Measurement', value: 'Temperature + Humidity' },
        { label: 'Communication', value: 'LoRa (wireless)' },
        { label: 'Range', value: 'Long-range, km-level (line of sight)' },
        { label: 'Display', value: 'Local LCD' },
        { label: 'Power supply', value: 'Battery / DC' },
        { label: 'Mounting', value: 'Wall-mount' },
      ],
    },
    zh: {
      name: 'LoRa 溫濕度感測器',
      tagline:
        '無線 LoRa 溫濕度監控,適用機房、機櫃與偏遠站點,具備本地 LCD 與長距離傳輸。',
      specs: [
        { label: '量測', value: '溫度＋濕度' },
        { label: '通訊', value: 'LoRa（無線）' },
        { label: '傳輸距離', value: '長距離,公里級（視距）' },
        { label: '顯示', value: '本地 LCD' },
        { label: '供電', value: '電池 / DC' },
        { label: '安裝', value: '壁掛' },
      ],
    },
  },
  {
    slug: 'protocol-gateway-rs485-ethernet',
    category: 'gateways',
    image: '/products/protocol-gateway.jpg',
    relatedSolution: 'equipment-monitoring',
    en: {
      name: 'Protocol Gateway (RS485 ↔ Ethernet)',
      tagline:
        'Industrial DIN-rail protocol gateway bridging RS485 (Modbus) field devices to Ethernet / BACnet — for building, facility and equipment monitoring.',
      specs: [
        { label: 'OS', value: 'Linux' },
        { label: 'Serial', value: '2× RS485' },
        { label: 'Ethernet', value: '1× 10/100M' },
        { label: 'Protocols', value: 'Modbus RTU/TCP, BACnet' },
        { label: 'Power supply', value: 'AC/DC 12–24V' },
        { label: 'Mounting', value: '35mm DIN-rail' },
      ],
    },
    zh: {
      name: '通訊協定閘道器（RS485 ↔ 乙太網路）',
      tagline:
        '工業導軌式協定閘道器,將 RS485（Modbus）現場設備橋接到乙太網路 / BACnet,用於建築、廠務與設備監控。',
      specs: [
        { label: '作業系統', value: 'Linux' },
        { label: '串列埠', value: '2× RS485' },
        { label: '乙太網路', value: '1× 10/100M' },
        { label: '協定', value: 'Modbus RTU/TCP、BACnet' },
        { label: '供電', value: 'AC/DC 12–24V' },
        { label: '安裝', value: '35mm 導軌' },
      ],
    },
  },
)

PRODUCTS.push(
  {
    slug: 'split-core-current-sensor',
    category: 'meters',
    image: '/products/split-core-current-sensor.jpg',
    relatedSolution: 'energy-monitoring',
    en: {
      name: 'Split-Core Current Sensor',
      tagline:
        'Clip-on split-core current sensor for non-invasive energy and load monitoring — install without disconnecting existing wiring.',
      specs: [
        { label: 'Type', value: 'Split-core (clip-on)' },
        { label: 'Input', value: 'AC/DC up to 50A (model dependent)' },
        { label: 'Output', value: '4-20mA / 0-5V / RS485 (model dependent)' },
        { label: 'Accuracy', value: '0.5%' },
        { label: 'Installation', value: 'Clip-on, no rewiring' },
        { label: 'Mounting', value: 'Panel / DIN' },
      ],
    },
    zh: {
      name: '開合式電流感測器',
      tagline:
        '夾扣式開合電流感測器,非侵入式能源與負載監控,免拆既有線路即可安裝。',
      specs: [
        { label: '型式', value: '開合式（夾扣）' },
        { label: '輸入', value: 'AC/DC 最高 50A（依型號）' },
        { label: '輸出', value: '4-20mA / 0-5V / RS485（依型號）' },
        { label: '精度', value: '0.5%' },
        { label: '安裝', value: '夾扣式,免重新佈線' },
        { label: '安裝方式', value: '面板 / 導軌' },
      ],
    },
  },
)

export const PRODUCT_SLUGS = PRODUCTS.map((p) => p.slug)

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug)
}
