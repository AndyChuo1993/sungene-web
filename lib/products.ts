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

PRODUCTS.push(
  {
    slug: 'modular-remote-io-system',
    category: 'gateways',
    image: '/products/modular-remote-io.jpg',
    relatedSolution: 'equipment-monitoring',
    en: {
      name: 'Modular Remote I/O System',
      tagline:
        'Expandable DIN-rail remote I/O with PROFINET, EtherCAT and Modbus TCP couplers — for distributed data acquisition and control across facilities.',
      specs: [
        { label: 'Couplers', value: 'PROFINET / EtherCAT / Modbus TCP' },
        { label: 'Modules', value: 'DI / DO / AI / AO, expandable' },
        { label: 'Ports', value: '2× RJ45 + USB-C config' },
        { label: 'Power supply', value: 'DC 24V' },
        { label: 'Mounting', value: '35mm DIN-rail' },
      ],
    },
    zh: {
      name: '模組化遠端 I/O 系統',
      tagline:
        '可擴充導軌式遠端 I/O,支援 PROFINET、EtherCAT 與 Modbus TCP 耦合器,適用廠區分散式數據採集與控制。',
      specs: [
        { label: '耦合器', value: 'PROFINET / EtherCAT / Modbus TCP' },
        { label: '模組', value: 'DI / DO / AI / AO,可擴充' },
        { label: '埠', value: '2× RJ45 + USB-C 設定' },
        { label: '供電', value: 'DC 24V' },
        { label: '安裝', value: '35mm 導軌' },
      ],
    },
  },
)

PRODUCTS.push(
  {
    slug: 'solar-powered-weather-station',
    category: 'sensors',
    image: '/products/solar-weather-station.jpg',
    relatedSolution: 'energy-monitoring',
    en: {
      name: 'Solar-Powered Weather Station',
      tagline:
        'Self-powered environmental monitoring station with ultrasonic weather sensor and solar panel — wind, rain, temperature, humidity and light for remote, solar and agricultural sites.',
      specs: [
        { label: 'Parameters', value: 'Wind, rain, temperature, humidity, light' },
        { label: 'Sensor', value: 'Ultrasonic weather sensor' },
        { label: 'Power', value: 'Solar panel + battery (off-grid)' },
        { label: 'Communication', value: 'RS485 / LoRa / 4G (model dependent)' },
        { label: 'Enclosure', value: 'Outdoor, IP65' },
        { label: 'Mounting', value: 'Pole-mount' },
      ],
    },
    zh: {
      name: '太陽能氣象站',
      tagline:
        '自供電環境監測站,結合超音波氣象感測器與太陽能板,量測風、雨、溫度、濕度與光照,適用偏遠、太陽能與農業場域。',
      specs: [
        { label: '量測參數', value: '風、雨、溫度、濕度、光照' },
        { label: '感測器', value: '超音波氣象感測器' },
        { label: '供電', value: '太陽能板＋電池（離網）' },
        { label: '通訊', value: 'RS485 / LoRa / 4G（依型號）' },
        { label: '外殼', value: '戶外,IP65' },
        { label: '安裝', value: '立桿安裝' },
      ],
    },
  },
)

PRODUCTS.push(
  {
    slug: 'water-quality-ph-sensor',
    category: 'sensors',
    image: '/products/water-quality-ph-sensor.jpg',
    relatedSolution: 'water-monitoring',
    en: {
      name: 'Water Quality pH Sensor',
      tagline:
        'Industrial pH electrode with RS485 / 4-20mA output for continuous water-quality monitoring in tanks, treatment plants and process water.',
      specs: [
        { label: 'Parameter', value: 'pH (ORP / EC variants available)' },
        { label: 'Range', value: 'pH 0–14' },
        { label: 'Output', value: 'RS485 (Modbus) / 4-20mA' },
        { label: 'Cable', value: 'Industrial sealed cable' },
        { label: 'Application', value: 'Tanks, treatment, process water' },
      ],
    },
    zh: {
      name: '水質 pH 感測器',
      tagline:
        '工業級 pH 電極,RS485 / 4-20mA 輸出,適用水箱、水處理廠與製程水的連續水質監控。',
      specs: [
        { label: '量測參數', value: 'pH（另有 ORP / EC 型）' },
        { label: '量程', value: 'pH 0–14' },
        { label: '輸出', value: 'RS485（Modbus）/ 4-20mA' },
        { label: '線材', value: '工業級密封線' },
        { label: '應用', value: '水箱、水處理、製程水' },
      ],
    },
  },
)

PRODUCTS.push(
  {
    slug: 'vibration-sensor',
    category: 'sensors',
    image: '/products/vibration-sensor.jpg',
    relatedSolution: 'equipment-monitoring',
    en: {
      name: 'Vibration Sensor',
      tagline:
        'Industrial vibration sensor with 4-20mA / RS485 output for pump, motor and rotating-equipment condition monitoring and alarms.',
      specs: [
        { label: 'Measurement', value: 'Vibration (velocity / acceleration)' },
        { label: 'Output', value: '4-20mA / RS485 (Modbus)' },
        { label: 'Application', value: 'Pumps, motors, fans, rotating equipment' },
        { label: 'Function', value: 'Condition monitoring + alarm' },
        { label: 'Mounting', value: 'Stud / magnetic base' },
        { label: 'Enclosure', value: 'Industrial metal' },
      ],
    },
    zh: {
      name: '振動感測器',
      tagline:
        '工業級振動感測器,4-20mA / RS485 輸出,適用泵浦、馬達與旋轉設備的狀態監控與告警。',
      specs: [
        { label: '量測', value: '振動（速度／加速度）' },
        { label: '輸出', value: '4-20mA / RS485（Modbus）' },
        { label: '應用', value: '泵浦、馬達、風機、旋轉設備' },
        { label: '功能', value: '狀態監控＋告警' },
        { label: '安裝', value: '螺柱／磁吸底座' },
        { label: '外殼', value: '工業金屬' },
      ],
    },
  },
  {
    slug: 'electromagnetic-flow-meter',
    category: 'meters',
    image: '/products/electromagnetic-flow-meter.png',
    relatedSolution: 'water-monitoring',
    en: {
      name: 'Electromagnetic Flow Meter',
      tagline:
        'Flanged electromagnetic flow meter with RS485 / 4-20mA output for water and conductive-liquid flow measurement in pipelines.',
      specs: [
        { label: 'Measurement', value: 'Electromagnetic' },
        { label: 'Medium', value: 'Water / conductive liquids' },
        { label: 'Output', value: '4-20mA / RS485 (Modbus)' },
        { label: 'Connection', value: 'Flanged (DN model dependent)' },
        { label: 'Display', value: 'Local LCD' },
        { label: 'Protection', value: 'IP65 / IP68' },
      ],
    },
    zh: {
      name: '電磁流量計',
      tagline:
        '法蘭式電磁流量計,RS485 / 4-20mA 輸出,適用管路中水與導電液體的流量量測。',
      specs: [
        { label: '量測方式', value: '電磁式' },
        { label: '介質', value: '水／導電液體' },
        { label: '輸出', value: '4-20mA / RS485（Modbus）' },
        { label: '連接', value: '法蘭（口徑依型號）' },
        { label: '顯示', value: '本地 LCD' },
        { label: '防護', value: 'IP65 / IP68' },
      ],
    },
  },
)

PRODUCTS.push(
  {
    slug: 'three-phase-energy-meter',
    category: 'meters',
    image: '/products/three-phase-energy-meter.jpg',
    relatedSolution: 'energy-monitoring',
    en: {
      name: 'Three-Phase Smart Energy Meter',
      tagline:
        'Three-phase four-wire kWh energy meter with RS485 (Modbus) for remote energy data collection and sub-metering across facilities.',
      specs: [
        { label: 'Type', value: 'Three-phase four-wire' },
        { label: 'Voltage', value: '3×230/400V' },
        { label: 'Current', value: '3×10(100)A' },
        { label: 'Communication', value: 'RS485 (Modbus)' },
        { label: 'Standards', value: 'IEC 62052 / 62053' },
        { label: 'Display', value: 'LCD, Class 1' },
      ],
    },
    zh: {
      name: '三相智慧電錶',
      tagline:
        '三相四線 kWh 電能表,RS485（Modbus）輸出,適用廠區遠端能源數據採集與分戶計量。',
      specs: [
        { label: '型式', value: '三相四線' },
        { label: '電壓', value: '3×230/400V' },
        { label: '電流', value: '3×10(100)A' },
        { label: '通訊', value: 'RS485（Modbus）' },
        { label: '標準', value: 'IEC 62052 / 62053' },
        { label: '顯示', value: 'LCD,Class 1' },
      ],
    },
  },
  {
    slug: 'water-leak-detection-alarm',
    category: 'sensors',
    image: '/products/water-leak-alarm.jpg',
    relatedSolution: 'water-monitoring',
    en: {
      name: 'Water Leak Detection Alarm',
      tagline:
        'Wireless water leak detection alarm with probe and app notification — instant alerts for leaks under tanks, pumps and equipment.',
      specs: [
        { label: 'Detection', value: 'Water leak (probe / cable)' },
        { label: 'Alert', value: 'Local siren + app push' },
        { label: 'Communication', value: 'WiFi (app)' },
        { label: 'Power', value: 'Battery' },
        { label: 'Settings', value: 'On/off, sensitivity' },
        { label: 'Application', value: 'Pump rooms, server rooms, basements' },
      ],
    },
    zh: {
      name: '漏水偵測警報器',
      tagline:
        '無線漏水偵測警報器,附探頭與 App 通知,水箱、泵浦與設備底部漏水即時告警。',
      specs: [
        { label: '偵測', value: '漏水（探頭／感測線）' },
        { label: '警報', value: '本地警報聲＋App 推播' },
        { label: '通訊', value: 'WiFi（App）' },
        { label: '電源', value: '電池' },
        { label: '設定', value: '開關、靈敏度' },
        { label: '應用', value: '泵浦房、機房、地下室' },
      ],
    },
  },
)

PRODUCTS.push(
  {
    slug: 'edge-iot-gateway',
    category: 'gateways',
    image: '/products/edge-iot-gateway.jpg',
    relatedSolution: 'equipment-monitoring',
    en: {
      name: 'Edge IoT Gateway',
      tagline:
        'Multi-interface edge IoT gateway / controller with 4G, WiFi, GPS, RS485/RS232 and Ethernet — for on-site data acquisition, edge computing and cloud uplink.',
      specs: [
        { label: 'Connectivity', value: '4G / WiFi / GPS / Ethernet (WAN+LAN)' },
        { label: 'Serial', value: 'RS485 / RS232' },
        { label: 'Interfaces', value: 'USB, Type-C, HDMI' },
        { label: 'OS', value: 'Linux (edge computing)' },
        { label: 'Power supply', value: 'DC 12–24V' },
        { label: 'Mounting', value: 'DIN-rail' },
      ],
    },
    zh: {
      name: '邊緣運算物聯網閘道器',
      tagline:
        '多介面邊緣物聯網閘道器／控制器,整合 4G、WiFi、GPS、RS485/RS232 與乙太網路,適用現場數據採集、邊緣運算與雲端上傳。',
      specs: [
        { label: '連線', value: '4G / WiFi / GPS / 乙太網路（WAN+LAN）' },
        { label: '串列埠', value: 'RS485 / RS232' },
        { label: '介面', value: 'USB、Type-C、HDMI' },
        { label: '作業系統', value: 'Linux（邊緣運算）' },
        { label: '供電', value: 'DC 12–24V' },
        { label: '安裝', value: '導軌式' },
      ],
    },
  },
)

export const PRODUCT_SLUGS = PRODUCTS.map((p) => p.slug)

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug)
}
