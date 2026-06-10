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

export const PRODUCTS: Product[] = []

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
  {
    slug: 'ultrasonic-weather-station',
    category: 'sensors',
    image: '/products/weather-station-ultrasonic.jpg',
    relatedSolution: 'environmental-monitoring',
    en: {
      name: 'Ultrasonic Weather Station',
      tagline:
        'All-in-one ultrasonic weather sensor measuring wind speed, wind direction, temperature, humidity and air pressure — no moving parts, with RS485 Modbus output.',
      specs: [
        { label: 'Parameters', value: 'Wind speed & direction, temperature, humidity, pressure (optional light / rainfall)' },
        { label: 'Wind speed', value: '0–60 m/s' },
        { label: 'Wind direction', value: '0–360°' },
        { label: 'Measurement', value: 'Ultrasonic, no moving parts' },
        { label: 'Output', value: 'RS485 (Modbus RTU)' },
        { label: 'Power supply', value: '12–24 VDC' },
        { label: 'Protection', value: 'IP65, pole mount' },
      ],
    },
    zh: {
      name: '超音波氣象站',
      tagline:
        '一體式超音波氣象感測器，量測風速、風向、溫度、濕度與氣壓——無機械轉動件，RS485 Modbus 輸出。',
      specs: [
        { label: '量測參數', value: '風速、風向、溫度、濕度、氣壓（可選照度／雨量）' },
        { label: '風速', value: '0–60 m/s' },
        { label: '風向', value: '0–360°' },
        { label: '量測方式', value: '超音波，無機械轉動件' },
        { label: '輸出', value: 'RS485（Modbus RTU）' },
        { label: '供電', value: '12–24 VDC' },
        { label: '防護', value: 'IP65，抱桿安裝' },
      ],
    },
  },
  {
    slug: 'wind-speed-direction-sensor',
    category: 'sensors',
    image: '/products/wind-speed-direction-sensor.jpg',
    relatedSolution: 'environmental-monitoring',
    en: {
      name: 'Wind Speed & Direction Sensor',
      tagline:
        'Combined anemometer and wind vane for accurate wind speed and direction, with RS485 / 4–20 mA / pulse output options.',
      specs: [
        { label: 'Wind speed range', value: '0–60 m/s' },
        { label: 'Wind speed accuracy', value: '±0.3 m/s' },
        { label: 'Wind direction', value: '0–360°, 16 directions' },
        { label: 'Output', value: 'RS485 (Modbus) / 4–20 mA / voltage / pulse' },
        { label: 'Power supply', value: '5–24 VDC' },
        { label: 'Material', value: 'Aluminium alloy, IP65' },
      ],
    },
    zh: {
      name: '風速風向感測器',
      tagline:
        '風速計與風向標一體,精準量測風速與風向,提供 RS485／4–20 mA／脈衝等輸出。',
      specs: [
        { label: '風速範圍', value: '0–60 m/s' },
        { label: '風速精度', value: '±0.3 m/s' },
        { label: '風向', value: '0–360°,16 方位' },
        { label: '輸出', value: 'RS485（Modbus）／4–20 mA／電壓／脈衝' },
        { label: '供電', value: '5–24 VDC' },
        { label: '材質', value: '鋁合金,IP65' },
      ],
    },
  },
  {
    slug: 'tipping-bucket-rain-gauge',
    category: 'sensors',
    image: '/products/tipping-bucket-rain-gauge.jpg',
    relatedSolution: 'environmental-monitoring',
    en: {
      name: 'Tipping-Bucket Rain Gauge',
      tagline:
        'Tipping-bucket rainfall sensor with 0.1 mm resolution and RS485 / pulse output for weather and hydrology stations.',
      specs: [
        { label: 'Resolution', value: '0.1 mm' },
        { label: 'Measurement', value: 'Tipping bucket' },
        { label: 'Max intensity', value: '≥ 4 mm/min' },
        { label: 'Caliber', value: 'Φ200 mm' },
        { label: 'Output', value: 'RS485 (Modbus) / pulse' },
        { label: 'Power supply', value: '5–24 VDC' },
      ],
    },
    zh: {
      name: '翻斗式雨量計',
      tagline:
        '翻斗式雨量感測器,解析度 0.1 mm,提供 RS485／脈衝輸出,適用氣象與水文站。',
      specs: [
        { label: '解析度', value: '0.1 mm' },
        { label: '量測方式', value: '翻斗式' },
        { label: '最大雨強', value: '≥ 4 mm/min' },
        { label: '承水口徑', value: 'Φ200 mm' },
        { label: '輸出', value: 'RS485（Modbus）／脈衝' },
        { label: '供電', value: '5–24 VDC' },
      ],
    },
  },
  {
    slug: 'pyranometer-solar-radiation-sensor',
    category: 'sensors',
    image: '/products/pyranometer-solar-radiation.jpg',
    relatedSolution: 'energy-monitoring',
    en: {
      name: 'Pyranometer (Solar Radiation Sensor)',
      tagline:
        'PV-grade pyranometer measuring total solar radiation (0–2000 W/m²) for solar plants, agriculture and meteorology.',
      specs: [
        { label: 'Range', value: '0–2000 W/m²' },
        { label: 'Spectral range', value: '300–3000 nm' },
        { label: 'Accuracy', value: '±5%' },
        { label: 'Output', value: 'RS485 (Modbus) / 4–20 mA / 0–5 V' },
        { label: 'Power supply', value: '5–24 VDC' },
        { label: 'Protection', value: 'IP65' },
      ],
    },
    zh: {
      name: '日射計（太陽輻射感測器）',
      tagline:
        '光伏級日射計,量測總太陽輻射(0–2000 W/m²),適用太陽能電廠、農業與氣象。',
      specs: [
        { label: '量程', value: '0–2000 W/m²' },
        { label: '光譜範圍', value: '300–3000 nm' },
        { label: '精度', value: '±5%' },
        { label: '輸出', value: 'RS485（Modbus）／4–20 mA／0–5 V' },
        { label: '供電', value: '5–24 VDC' },
        { label: '防護', value: 'IP65' },
      ],
    },
  },
  {
    slug: 'soil-moisture-temperature-ec-sensor',
    category: 'sensors',
    image: '/products/soil-moisture-temp-ec-sensor.jpg',
    relatedSolution: 'environmental-monitoring',
    en: {
      name: 'Soil Moisture, Temperature & EC Sensor',
      tagline:
        'Buried 3-in-1 soil probe measuring volumetric moisture, temperature and electrical conductivity (EC) with RS485 Modbus output.',
      specs: [
        { label: 'Parameters', value: 'Moisture, temperature, EC' },
        { label: 'Moisture', value: '0–100%, ±2–3%' },
        { label: 'Temperature', value: '-40–80 °C' },
        { label: 'EC range', value: '0–20000 µS/cm' },
        { label: 'Output', value: 'RS485 (Modbus)' },
        { label: 'Power supply', value: '5–24 VDC' },
        { label: 'Probe', value: 'Stainless steel, IP68' },
      ],
    },
    zh: {
      name: '土壤水分／溫度／EC 感測器',
      tagline:
        '埋入式三合一土壤探針,量測體積含水率、溫度與電導度(EC),RS485 Modbus 輸出。',
      specs: [
        { label: '量測參數', value: '水分、溫度、EC' },
        { label: '水分', value: '0–100%,±2–3%' },
        { label: '溫度', value: '-40–80 °C' },
        { label: 'EC 量程', value: '0–20000 µS/cm' },
        { label: '輸出', value: 'RS485（Modbus）' },
        { label: '供電', value: '5–24 VDC' },
        { label: '探針', value: '不鏽鋼,IP68' },
      ],
    },
  },
  {
    slug: 'air-quality-sensor',
    category: 'sensors',
    image: '/products/air-quality-sensor.jpg',
    relatedSolution: 'environmental-monitoring',
    en: {
      name: 'Air Quality Sensor',
      tagline:
        'Outdoor multi-parameter air quality sensor monitoring PM2.5/PM10, CO₂, temperature and humidity, with RS485 Modbus output.',
      specs: [
        { label: 'Parameters', value: 'PM2.5 / PM10, CO₂, temperature, humidity (optional CO / SO₂ / NO₂ / O₃ / noise)' },
        { label: 'PM range', value: '0–1000 µg/m³' },
        { label: 'CO₂ range', value: '0–5000 ppm' },
        { label: 'Output', value: 'RS485 (Modbus)' },
        { label: 'Power supply', value: '12–24 VDC' },
        { label: 'Housing', value: 'Louvered, IP65, wall / pole mount' },
      ],
    },
    zh: {
      name: '空氣品質感測器',
      tagline:
        '戶外多參數空氣品質感測器,監測 PM2.5/PM10、CO₂、溫度與濕度,RS485 Modbus 輸出。',
      specs: [
        { label: '量測參數', value: 'PM2.5／PM10、CO₂、溫度、濕度（可選 CO／SO₂／NO₂／O₃／噪音）' },
        { label: 'PM 量程', value: '0–1000 µg/m³' },
        { label: 'CO₂ 量程', value: '0–5000 ppm' },
        { label: '輸出', value: 'RS485（Modbus）' },
        { label: '供電', value: '12–24 VDC' },
        { label: '外殼', value: '百葉式,IP65,壁掛／抱桿' },
      ],
    },
  },
  {
    slug: 'dissolved-oxygen-sensor',
    category: 'sensors',
    image: '/products/dissolved-oxygen-sensor.jpg',
    relatedSolution: 'water-monitoring',
    en: {
      name: 'Dissolved Oxygen Sensor',
      tagline:
        'Online fluorescence (optical) dissolved-oxygen sensor for aquaculture, wastewater and surface water — RS485 Modbus, no membrane or electrolyte.',
      specs: [
        { label: 'Method', value: 'Fluorescence (optical)' },
        { label: 'DO range', value: '0–20 mg/L' },
        { label: 'Accuracy', value: '±0.3 mg/L' },
        { label: 'Temperature', value: '0–60 °C' },
        { label: 'Output', value: 'RS485 (Modbus) / 4–20 mA' },
        { label: 'Power supply', value: '9–24 VDC' },
        { label: 'Protection', value: 'IP68' },
      ],
    },
    zh: {
      name: '溶氧感測器',
      tagline:
        '線上式螢光(光學)溶氧感測器,適用水產養殖、污水與地表水監測——RS485 Modbus,免膜片與電解液。',
      specs: [
        { label: '量測方式', value: '螢光（光學）' },
        { label: '溶氧量程', value: '0–20 mg/L' },
        { label: '精度', value: '±0.3 mg/L' },
        { label: '溫度', value: '0–60 °C' },
        { label: '輸出', value: 'RS485（Modbus）／4–20 mA' },
        { label: '供電', value: '9–24 VDC' },
        { label: '防護', value: 'IP68' },
      ],
    },
  },
  {
    slug: 'turbidity-sensor',
    category: 'sensors',
    image: '/products/turbidity-sensor.jpg',
    relatedSolution: 'water-monitoring',
    en: {
      name: 'Turbidity Sensor',
      tagline:
        'Online optical turbidity sensor (90° scattered light) for drinking water, wastewater and environmental monitoring — RS485 Modbus.',
      specs: [
        { label: 'Range', value: '0–1000 NTU (optional 0–4000)' },
        { label: 'Method', value: '90° scattered light' },
        { label: 'Accuracy', value: '±5%' },
        { label: 'Output', value: 'RS485 (Modbus) / 4–20 mA' },
        { label: 'Power supply', value: '9–24 VDC' },
        { label: 'Protection', value: 'IP68, immersion' },
      ],
    },
    zh: {
      name: '濁度感測器',
      tagline:
        '線上式光學濁度感測器(90° 散射光),適用飲用水、污水與環境監測——RS485 Modbus。',
      specs: [
        { label: '量程', value: '0–1000 NTU(可選 0–4000)' },
        { label: '量測方式', value: '90° 散射光' },
        { label: '精度', value: '±5%' },
        { label: '輸出', value: 'RS485（Modbus）／4–20 mA' },
        { label: '供電', value: '9–24 VDC' },
        { label: '防護', value: 'IP68,浸入式' },
      ],
    },
  },
  {
    slug: 'water-conductivity-ec-sensor',
    category: 'sensors',
    image: '/products/water-conductivity-ec-sensor.jpg',
    relatedSolution: 'water-monitoring',
    en: {
      name: 'Water Conductivity (EC) Sensor',
      tagline:
        'Online conductivity / TDS / salinity sensor for water and wastewater monitoring — RS485 Modbus output.',
      specs: [
        { label: 'Range', value: '0–20000 µS/cm (optional higher)' },
        { label: 'Accuracy', value: '±1.5% FS' },
        { label: 'Temperature', value: '0–60 °C' },
        { label: 'Output', value: 'RS485 (Modbus) / 4–20 mA' },
        { label: 'Power supply', value: '9–24 VDC' },
        { label: 'Protection', value: 'IP68' },
      ],
    },
    zh: {
      name: '水質電導度（EC）感測器',
      tagline:
        '線上式電導度／TDS／鹽度感測器,適用給水與污水監測——RS485 Modbus 輸出。',
      specs: [
        { label: '量程', value: '0–20000 µS/cm(可選更高)' },
        { label: '精度', value: '±1.5% FS' },
        { label: '溫度', value: '0–60 °C' },
        { label: '輸出', value: 'RS485（Modbus）／4–20 mA' },
        { label: '供電', value: '9–24 VDC' },
        { label: '防護', value: 'IP68' },
      ],
    },
  },
  {
    slug: 'radar-water-level-sensor',
    category: 'sensors',
    image: '/products/radar-water-level-sensor.jpg',
    relatedSolution: 'water-monitoring',
    en: {
      name: 'Radar Water Level Sensor',
      tagline:
        'Non-contact radar level sensor for rivers, reservoirs, channels and tanks — unaffected by foam, vapour or fouling, with RS485 Modbus output.',
      specs: [
        { label: 'Method', value: 'Non-contact radar (FMCW)' },
        { label: 'Range', value: '0–30 m (model dependent)' },
        { label: 'Accuracy', value: '±3 mm' },
        { label: 'Output', value: 'RS485 (Modbus) / 4–20 mA' },
        { label: 'Power supply', value: '12–24 VDC' },
        { label: 'Protection', value: 'IP67' },
      ],
    },
    zh: {
      name: '雷達水位感測器',
      tagline:
        '非接觸式雷達水位感測器,適用河川、水庫、渠道與儲槽——不受泡沫、蒸氣或結垢影響,RS485 Modbus 輸出。',
      specs: [
        { label: '量測方式', value: '非接觸式雷達（FMCW）' },
        { label: '量程', value: '0–30 m（依型號）' },
        { label: '精度', value: '±3 mm' },
        { label: '輸出', value: 'RS485（Modbus）／4–20 mA' },
        { label: '供電', value: '12–24 VDC' },
        { label: '防護', value: 'IP67' },
      ],
    },
  },
  {
    slug: 'atmospheric-multiparameter-sensor',
    category: 'sensors',
    image: '/products/atmospheric-multiparameter-sensor.jpg',
    relatedSolution: 'environmental-monitoring',
    en: {
      name: 'Atmospheric Multi-Parameter Sensor',
      tagline:
        'Compact radiation-shielded sensor measuring air temperature, humidity, barometric pressure, illuminance and CO₂ — RS485 Modbus output.',
      specs: [
        { label: 'Parameters', value: 'Temperature, humidity, pressure, illuminance, CO₂' },
        { label: 'Temperature', value: '-40–80 °C' },
        { label: 'Pressure', value: '300–1100 hPa' },
        { label: 'CO₂ range', value: '0–5000 ppm' },
        { label: 'Output', value: 'RS485 (Modbus)' },
        { label: 'Power supply', value: '12–24 VDC' },
        { label: 'Housing', value: 'Radiation shield, IP65' },
      ],
    },
    zh: {
      name: '大氣多參數感測器',
      tagline:
        '緊湊型百葉防輻射罩感測器,量測氣溫、濕度、氣壓、照度與 CO₂——RS485 Modbus 輸出。',
      specs: [
        { label: '量測參數', value: '溫度、濕度、氣壓、照度、CO₂' },
        { label: '溫度', value: '-40–80 °C' },
        { label: '氣壓', value: '300–1100 hPa' },
        { label: 'CO₂ 量程', value: '0–5000 ppm' },
        { label: '輸出', value: 'RS485（Modbus）' },
        { label: '供電', value: '12–24 VDC' },
        { label: '外殼', value: '防輻射百葉罩,IP65' },
      ],
    },
  },
  {
    slug: 'leaf-wetness-sensor',
    category: 'sensors',
    image: '/products/leaf-wetness-sensor.jpg',
    relatedSolution: 'environmental-monitoring',
    en: {
      name: 'Leaf Wetness Sensor',
      tagline:
        'Surface leaf-wetness sensor for crop disease forecasting and smart irrigation in greenhouses and orchards — RS485 Modbus output.',
      specs: [
        { label: 'Measurement', value: 'Leaf surface wetness / dew' },
        { label: 'Output range', value: '0–100% wetness' },
        { label: 'Temperature', value: '-40–80 °C' },
        { label: 'Output', value: 'RS485 (Modbus)' },
        { label: 'Power supply', value: '12–24 VDC' },
        { label: 'Protection', value: 'IP65' },
      ],
    },
    zh: {
      name: '葉面濕度感測器',
      tagline:
        '葉面結露／濕潤感測器,用於作物病害預測與溫室、果園智慧灌溉——RS485 Modbus 輸出。',
      specs: [
        { label: '量測', value: '葉面濕潤／結露' },
        { label: '輸出範圍', value: '0–100% 濕潤度' },
        { label: '溫度', value: '-40–80 °C' },
        { label: '輸出', value: 'RS485（Modbus）' },
        { label: '供電', value: '12–24 VDC' },
        { label: '防護', value: 'IP65' },
      ],
    },
  },
)

PRODUCTS.push(
  {
    slug: 'multifunction-power-meter',
    category: 'meters',
    image: '/products/multifunction-power-meter.jpg',
    relatedSolution: 'energy-monitoring',
    en: {
      name: 'Multifunction Power Meter',
      tagline:
        'Panel-mount three-phase multifunction power meter measuring voltage, current, power, power factor, frequency and energy, with RS485 Modbus for remote energy monitoring and sub-metering.',
      specs: [
        { label: 'Measurement', value: 'V, A, kW, kvar, PF, Hz, kWh (three-phase)' },
        { label: 'Accuracy', value: 'Class 0.5S (energy)' },
        { label: 'Communication', value: 'RS485 (Modbus RTU)' },
        { label: 'Inputs', value: 'Via CT / direct (model dependent)' },
        { label: 'Display', value: 'Backlit LCD' },
        { label: 'I/O', value: 'Optional DI / DO / 4-20mA' },
        { label: 'Mounting', value: 'Panel-mount (72 / 96 / 120 mm)' },
      ],
    },
    zh: {
      name: '多功能電力儀表',
      tagline:
        '面板式三相多功能電力儀表,量測電壓、電流、功率、功率因數、頻率與電能,RS485 Modbus 輸出,適用遠端能源監控與分項計量。',
      specs: [
        { label: '量測', value: 'V、A、kW、kvar、PF、Hz、kWh（三相）' },
        { label: '精度', value: 'Class 0.5S（電能）' },
        { label: '通訊', value: 'RS485（Modbus RTU）' },
        { label: '輸入', value: '經 CT／直接接入（依型號）' },
        { label: '顯示', value: '背光 LCD' },
        { label: 'I/O', value: '可選 DI／DO／4-20mA' },
        { label: '安裝', value: '面板式（72／96／120 mm）' },
      ],
    },
  },
  {
    slug: 'temperature-humidity-controller',
    category: 'controllers',
    image: '/products/temperature-humidity-controller.jpg',
    relatedSolution: 'equipment-monitoring',
    en: {
      name: 'Temperature & Humidity Controller',
      tagline:
        'Switchgear and cabinet temperature & humidity controller that drives heaters and fans to prevent condensation, with RS485 Modbus for remote monitoring — DIN-rail and panel-mount versions.',
      specs: [
        { label: 'Measurement', value: 'Temperature + humidity (multi-channel models)' },
        { label: 'Control', value: 'Heater + fan outputs (condensation / anti-dew)' },
        { label: 'Communication', value: 'RS485 (Modbus RTU)' },
        { label: 'Display', value: 'LED, setpoint & alarm' },
        { label: 'Power supply', value: 'AC/DC wide range (model dependent)' },
        { label: 'Application', value: 'Switchgear, ring main units, cabinets' },
        { label: 'Mounting', value: 'DIN-rail / panel-mount' },
      ],
    },
    zh: {
      name: '溫濕度控制器',
      tagline:
        '開關櫃／機櫃溫濕度控制器,驅動加熱器與風扇防止凝露結露,RS485 Modbus 輸出可遠端監控——提供導軌式與面板式。',
      specs: [
        { label: '量測', value: '溫度＋濕度（多路型號）' },
        { label: '控制', value: '加熱器＋風扇輸出（防凝露／除濕）' },
        { label: '通訊', value: 'RS485（Modbus RTU）' },
        { label: '顯示', value: 'LED,設定值與告警' },
        { label: '供電', value: 'AC/DC 寬範圍（依型號）' },
        { label: '應用', value: '開關櫃、環網櫃、機櫃' },
        { label: '安裝', value: '導軌式／面板式' },
      ],
    },
  },
)

PRODUCTS.push(
  {
    slug: 'wireless-iot-energy-meter',
    category: 'meters',
    image: '/products/wireless-iot-energy-meter.jpg',
    relatedSolution: 'energy-monitoring',
    en: {
      name: 'Wireless IoT Energy Meter',
      tagline:
        'DIN-rail three-phase energy meter with built-in wireless (4G / LoRa / WiFi) for direct cloud upload — no separate gateway needed, ideal for distributed sub-metering and remote sites.',
      specs: [
        { label: 'Measurement', value: 'V, A, kW, PF, kWh (three-phase)' },
        { label: 'Wireless', value: '4G / LoRa / WiFi (model dependent)' },
        { label: 'Wired', value: 'RS485 (Modbus) optional' },
        { label: 'Cloud', value: 'Direct platform upload, no gateway' },
        { label: 'Input', value: 'Direct or via CT' },
        { label: 'Display', value: 'LCD' },
        { label: 'Mounting', value: '35mm DIN-rail' },
      ],
    },
    zh: {
      name: '無線物聯網電錶',
      tagline:
        '導軌式三相電能表,內建無線(4G／LoRa／WiFi)直接上傳雲端——免額外閘道器,適用分散式分項計量與偏遠站點。',
      specs: [
        { label: '量測', value: 'V、A、kW、PF、kWh（三相）' },
        { label: '無線', value: '4G／LoRa／WiFi（依型號）' },
        { label: '有線', value: '可選 RS485（Modbus）' },
        { label: '雲端', value: '直連平台上傳,免閘道器' },
        { label: '輸入', value: '直接接入或經 CT' },
        { label: '顯示', value: 'LCD' },
        { label: '安裝', value: '35mm 導軌' },
      ],
    },
  },
  {
    slug: 'din-rail-energy-meter',
    category: 'meters',
    image: '/products/din-rail-energy-meter.jpg',
    relatedSolution: 'energy-monitoring',
    en: {
      name: 'DIN-Rail Three-Phase Energy Meter',
      tagline:
        'Compact DIN-rail three-phase multifunction energy meter with RS485 Modbus — for panel sub-metering in solar, EV-charging, building and industrial energy management.',
      specs: [
        { label: 'Type', value: 'Three-phase multifunction, DIN-rail' },
        { label: 'Measurement', value: 'V, A, kW, kvar, PF, Hz, kWh' },
        { label: 'Accuracy', value: 'Class 0.5S (energy)' },
        { label: 'Communication', value: 'RS485 (Modbus RTU)' },
        { label: 'Input', value: 'Direct 80A / via CT (model dependent)' },
        { label: 'Display', value: 'Backlit LCD' },
        { label: 'Mounting', value: '35mm DIN-rail (7 modules)' },
      ],
    },
    zh: {
      name: '導軌式三相電能表',
      tagline:
        '小型導軌式三相多功能電能表,RS485 Modbus 輸出——適用太陽能、充電樁、建築與工業能源管理的盤內分項計量。',
      specs: [
        { label: '型式', value: '三相多功能,導軌式' },
        { label: '量測', value: 'V、A、kW、kvar、PF、Hz、kWh' },
        { label: '精度', value: 'Class 0.5S（電能）' },
        { label: '通訊', value: 'RS485（Modbus RTU）' },
        { label: '輸入', value: '直接 80A／經 CT（依型號）' },
        { label: '顯示', value: '背光 LCD' },
        { label: '安裝', value: '35mm 導軌（7 模數）' },
      ],
    },
  },
  {
    slug: 'wireless-comm-gateway',
    category: 'gateways',
    image: '/products/wireless-comm-gateway.jpg',
    relatedSolution: 'energy-monitoring',
    en: {
      name: 'Wireless Communication Gateway',
      tagline:
        'DIN-rail wireless data terminal that collects RS485 / Modbus meter data and uploads it over 4G / LoRa to the cloud — the uplink for distributed energy and equipment monitoring.',
      specs: [
        { label: 'Function', value: 'RS485 data acquisition + wireless uplink' },
        { label: 'Wireless', value: '4G / LoRa (model dependent)' },
        { label: 'Serial', value: 'RS485 (Modbus RTU)' },
        { label: 'Indicators', value: 'Link / signal (RSSI) / comm LEDs' },
        { label: 'Power supply', value: 'Wide-range AC/DC' },
        { label: 'Mounting', value: '35mm DIN-rail' },
      ],
    },
    zh: {
      name: '無線通訊閘道器',
      tagline:
        '導軌式無線數據終端,採集 RS485／Modbus 電錶數據並透過 4G／LoRa 上傳雲端——分散式能源與設備監控的上行通道。',
      specs: [
        { label: '功能', value: 'RS485 數據採集＋無線上傳' },
        { label: '無線', value: '4G／LoRa（依型號）' },
        { label: '串列埠', value: 'RS485（Modbus RTU）' },
        { label: '指示燈', value: 'Link／訊號(RSSI)／通訊 LED' },
        { label: '供電', value: '寬範圍 AC/DC' },
        { label: '安裝', value: '35mm 導軌' },
      ],
    },
  },
)

PRODUCTS.push(
  {
    slug: 'electrical-fire-monitor',
    category: 'meters',
    image: '/products/electrical-fire-monitor.jpg',
    relatedSolution: 'equipment-monitoring',
    en: {
      name: 'Electrical Fire Monitor (Residual Current)',
      tagline:
        'DIN-rail electrical fire monitoring unit that continuously watches residual (leakage) current and circuit temperature, alarming on faults — with RS485 Modbus for remote electrical-safety monitoring of distribution boxes and cabinets.',
      specs: [
        { label: 'Monitoring', value: 'Residual current + temperature (multi-channel)' },
        { label: 'Function', value: 'Leakage / over-temperature alarm, electrical fire prevention' },
        { label: 'Communication', value: 'RS485 (Modbus RTU)' },
        { label: 'Display', value: 'LCD + status indicators' },
        { label: 'Alarm', value: 'Audible + relay output' },
        { label: 'Application', value: 'Distribution boxes, cabinets, switchgear' },
        { label: 'Mounting', value: '35mm DIN-rail' },
      ],
    },
    zh: {
      name: '電氣火災監控器（剩餘電流式）',
      tagline:
        '導軌式電氣火災監控裝置,持續監測剩餘(漏電)電流與回路溫度並於異常時告警,RS485 Modbus 輸出,適用配電箱與機櫃的遠端電氣安全監控。',
      specs: [
        { label: '監測', value: '剩餘電流＋溫度（多路）' },
        { label: '功能', value: '漏電／過溫告警,預防電氣火災' },
        { label: '通訊', value: 'RS485（Modbus RTU）' },
        { label: '顯示', value: 'LCD ＋狀態指示燈' },
        { label: '告警', value: '聲響＋繼電器輸出' },
        { label: '應用', value: '配電箱、機櫃、開關櫃' },
        { label: '安裝', value: '35mm 導軌' },
      ],
    },
  },
)

export const PRODUCT_SLUGS = PRODUCTS.map((p) => p.slug)

export function getProduct(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug)
}
