import { Lang } from '@/lib/i18n'

export type ResourceSlug =
  | 'rs485-remote-monitoring-gateway'
  | 'lorawan-water-tank-monitoring'
  | 'nb-iot-energy-monitoring'
  | 'modbus-data-acquisition-gateway'
  | 'solar-site-monitoring-iot'
  | 'industrial-iot-remote-monitoring'

export const RESOURCE_SLUGS: ResourceSlug[] = [
  'rs485-remote-monitoring-gateway',
  'lorawan-water-tank-monitoring',
  'nb-iot-energy-monitoring',
  'modbus-data-acquisition-gateway',
  'solar-site-monitoring-iot',
  'industrial-iot-remote-monitoring',
]

type ResourceContent = {
  title: string
  description: string
  intent: string
  sections: { heading: string; body: string }[]
  bullets: string[]
  products: string[]
  technologies: string[]
  relatedLinks: { label: string; href: string }[]
}

export type Resource = {
  slug: ResourceSlug
  content: Record<Lang, ResourceContent>
}

export const RESOURCES: Record<ResourceSlug, Resource> = {
  'rs485-remote-monitoring-gateway': {
    slug: 'rs485-remote-monitoring-gateway',
    content: {
      en: {
        title: 'RS485 Remote Monitoring Gateway',
        description:
          'How an RS485 remote monitoring gateway connects Modbus meters, sensors and controllers to cloud dashboards, SCADA and alarm workflows.',
        intent:
          'Use this guide when a site already has RS485 / Modbus field devices but needs remote visibility without replacing the installed equipment.',
        sections: [
          {
            heading: 'Where RS485 gateways fit',
            body:
              'RS485 remains common in energy meters, water sensors, temperature controllers, pump panels and industrial instruments. A gateway reads those local devices, normalizes the data and forwards it through Ethernet, 4G, LoRa or NB-IoT backhaul.',
          },
          {
            heading: 'Typical architecture',
            body:
              'Field devices connect to the gateway over RS485 using Modbus RTU. The gateway polls registers, timestamps values, buffers data during network loss and publishes readings to a cloud platform, SCADA system or customer server.',
          },
          {
            heading: 'What to specify',
            body:
              'Confirm the number of RS485 ports, device count, register map, power supply, enclosure rating, backhaul network, local alarm needs and whether the project needs MQTT, Modbus TCP, BACnet or a private API.',
          },
        ],
        bullets: ['RS485 / Modbus RTU polling', '4G, Ethernet, LoRa or NB-IoT uplink', 'Cloud dashboard and alarm integration', 'Suitable for retrofit monitoring projects'],
        products: ['Protocol Gateway (RS485 to Ethernet)', 'Edge IoT Gateway', 'Wireless Communication Gateway'],
        technologies: ['RS485', 'Modbus RTU', 'Modbus TCP', 'MQTT', '4G LTE'],
        relatedLinks: [
          { label: 'Equipment Monitoring Solution', href: '/solutions/equipment-monitoring' },
          { label: 'Industrial IoT Products', href: '/products' },
        ],
      },
      zh: {
        title: 'RS485 遠端監控閘道器',
        description: '說明 RS485 遠端監控閘道器如何把 Modbus 電表、感測器與控制器接到雲端平台、SCADA 與告警流程。',
        intent: '適合既有現場已經有 RS485 / Modbus 設備，但希望不汰換設備就能做遠端監控的專案。',
        sections: [
          {
            heading: 'RS485 閘道器適用情境',
            body:
              'RS485 仍廣泛用在電表、水位水質感測器、溫濕度控制器、泵浦盤與工業儀表。閘道器負責讀取現場資料、整理格式，並透過乙太網路、4G、LoRa 或 NB-IoT 傳回平台。',
          },
          {
            heading: '典型架構',
            body:
              '現場設備以 RS485 / Modbus RTU 連到閘道器。閘道器定時讀取暫存器、加上時間戳、在斷線時暫存資料，並把數據送到雲端平台、SCADA 或客戶伺服器。',
          },
          {
            heading: '規劃時要確認',
            body:
              '需先確認 RS485 埠數、設備數量、暫存器表、供電、外殼防護、上行網路、現場告警方式，以及是否需要 MQTT、Modbus TCP、BACnet 或私有 API。',
          },
        ],
        bullets: ['RS485 / Modbus RTU 輪詢', '4G、乙太網路、LoRa 或 NB-IoT 上行', '雲端儀表板與告警整合', '適合既有設備改造監控'],
        products: ['RS485 轉乙太網路協定閘道器', '邊緣 IoT 閘道器', '無線通訊閘道器'],
        technologies: ['RS485', 'Modbus RTU', 'Modbus TCP', 'MQTT', '4G LTE'],
        relatedLinks: [
          { label: '設備監控解決方案', href: '/solutions/equipment-monitoring' },
          { label: '工業 IoT 產品', href: '/products' },
        ],
      },
    },
  },
  'lorawan-water-tank-monitoring': {
    slug: 'lorawan-water-tank-monitoring',
    content: {
      en: {
        title: 'LoRaWAN Water Tank Monitoring',
        description:
          'A practical architecture for remote water tank level monitoring using LoRaWAN sensors, gateways, alarms and cloud dashboards.',
        intent:
          'Use LoRaWAN for tank farms, rural sites and distributed facilities where long range, low power and low wiring cost matter.',
        sections: [
          {
            heading: 'Why LoRaWAN works for tanks',
            body:
              'Tank level monitoring often needs battery-powered sensors across large sites. LoRaWAN supports long-range transmission with low power consumption, so each tank can report level, battery and alarm status without trenching new cables.',
          },
          {
            heading: 'Recommended sensor choices',
            body:
              'Ultrasonic or radar level sensors are suitable for non-contact tank measurement. Submersible level transmitters can be used when the medium and installation conditions allow direct contact.',
          },
          {
            heading: 'Alarm logic',
            body:
              'High level, low level, rapid drop and no-data alarms are usually more valuable than raw values alone. Alerts should reach operators by app, email or SMS and include tank ID, location and current level.',
          },
        ],
        bullets: ['Long-range low-power tank telemetry', 'High / low level alarm notification', 'Works for water, wastewater and chemical tanks', 'Gateway options for private or public networks'],
        products: ['Ultrasonic Water Level Sensor', 'Radar Water Level Sensor', 'Wireless Communication Gateway'],
        technologies: ['LoRaWAN', 'RS485', '4-20mA', 'MQTT'],
        relatedLinks: [
          { label: 'Tank Level Monitoring', href: '/applications/tank-level-monitoring' },
          { label: 'Water Monitoring Solution', href: '/solutions/water-monitoring' },
        ],
      },
      zh: {
        title: 'LoRaWAN 水槽液位遠端監控',
        description: '以 LoRaWAN 感測器、閘道器、告警與雲端儀表板建立水槽液位遠端監控架構。',
        intent: '適合水槽分散、距離遠、拉線成本高，且希望以低功耗方式回傳液位資料的場域。',
        sections: [
          {
            heading: '為什麼水槽適合 LoRaWAN',
            body:
              '水槽監控常需要在大範圍場域布建電池式感測器。LoRaWAN 具備長距離與低功耗特性，可讓每個水槽回傳液位、電量與告警狀態，降低重新配線成本。',
          },
          {
            heading: '感測器選型',
            body:
              '非接觸量測可選超音波或雷達液位感測器；若介質與安裝條件允許，也可使用投入式液位傳送器。',
          },
          {
            heading: '告警設計',
            body:
              '高液位、低液位、快速下降與無資料告警通常比單純數值更有價值。告警需包含水槽編號、位置與即時液位，並推送到 App、Email 或簡訊。',
          },
        ],
        bullets: ['長距離低功耗液位回傳', '高低液位告警', '適用清水、污水與化學槽', '可搭配私有或公共 LoRaWAN 網路'],
        products: ['超音波水位感測器', '雷達水位感測器', '無線通訊閘道器'],
        technologies: ['LoRaWAN', 'RS485', '4-20mA', 'MQTT'],
        relatedLinks: [
          { label: '水槽液位監控', href: '/applications/tank-level-monitoring' },
          { label: '水務監控解決方案', href: '/solutions/water-monitoring' },
        ],
      },
    },
  },
  'nb-iot-energy-monitoring': {
    slug: 'nb-iot-energy-monitoring',
    content: {
      en: {
        title: 'NB-IoT Energy Monitoring',
        description:
          'How NB-IoT energy meters and gateways support remote sub-metering, consumption reporting and energy alarms for distributed sites.',
        intent:
          'NB-IoT is useful when meters are spread across locations where WiFi or wired Ethernet is not reliable and data volume is modest.',
        sections: [
          {
            heading: 'Best-fit projects',
            body:
              'NB-IoT energy monitoring fits substations, utility rooms, retail branches, farms, charging areas and distributed solar sites where energy data is needed daily or hourly.',
          },
          {
            heading: 'Metering architecture',
            body:
              'A smart energy meter measures voltage, current, power, power factor and kWh. Data is sent through an NB-IoT module or through an RS485 collector with cellular uplink.',
          },
          {
            heading: 'Commercial value',
            body:
              'Remote metering reduces manual reading, supports tenant billing, detects abnormal consumption and gives operators a cleaner view of distributed energy performance.',
          },
        ],
        bullets: ['Remote sub-metering without local broadband', 'Consumption trends and abnormal-use alarms', 'Useful for solar, buildings and distributed facilities', 'Works with direct meters or RS485 meter clusters'],
        products: ['Wireless IoT Energy Meter', 'DIN-Rail Three-Phase Energy Meter', 'Wireless Communication Gateway'],
        technologies: ['NB-IoT', 'RS485', 'Modbus', 'MQTT'],
        relatedLinks: [
          { label: 'Remote Meter Reading', href: '/applications/remote-meter-reading' },
          { label: 'Energy Monitoring Solution', href: '/solutions/energy-monitoring' },
        ],
      },
      zh: {
        title: 'NB-IoT 能源監控',
        description: '說明 NB-IoT 電表與閘道器如何支援分散場域的遠端抄表、用電報表與能源告警。',
        intent: '適合電表分散、現場沒有穩定 WiFi 或有線網路，且資料量以小量定時回傳為主的能源監控專案。',
        sections: [
          {
            heading: '適用專案',
            body:
              'NB-IoT 能源監控適合配電室、商店分點、農場、充電區、分散式太陽能與遠端站點，特別是需要每日或每小時取得用電資料的場景。',
          },
          {
            heading: '電表架構',
            body:
              '智慧電表量測電壓、電流、功率、功率因數與 kWh。資料可由內建 NB-IoT 模組直接上傳，也可由 RS485 採集器集中讀取後透過行動網路回傳。',
          },
          {
            heading: '商務價值',
            body:
              '遠端抄表可減少人工巡檢、支援租戶計費、偵測異常用電，並讓管理者更清楚掌握分散場域的能源績效。',
          },
        ],
        bullets: ['不依賴現場寬頻的遠端分表', '用電趨勢與異常告警', '適用太陽能、建築與分散設施', '可用於單表或 RS485 電表群'],
        products: ['無線 IoT 電表', 'DIN 導軌三相電表', '無線通訊閘道器'],
        technologies: ['NB-IoT', 'RS485', 'Modbus', 'MQTT'],
        relatedLinks: [
          { label: '遠端抄表', href: '/applications/remote-meter-reading' },
          { label: '能源監控解決方案', href: '/solutions/energy-monitoring' },
        ],
      },
    },
  },
  'modbus-data-acquisition-gateway': {
    slug: 'modbus-data-acquisition-gateway',
    content: {
      en: {
        title: 'Modbus Data Acquisition Gateway',
        description:
          'A buyer-focused guide to Modbus data acquisition gateways for industrial sensors, meters, controllers and remote I/O.',
        intent:
          'Use this guide when the search intent is a gateway that can collect field data from many Modbus devices and send it to higher-level systems.',
        sections: [
          {
            heading: 'What the gateway does',
            body:
              'A Modbus data acquisition gateway works as the bridge between field devices and management systems. It reads Modbus RTU or TCP points, maps registers into named values and forwards data to cloud, SCADA, BMS or local servers.',
          },
          {
            heading: 'Register-map readiness',
            body:
              'The most important preparation is a clean register map: device address, function code, register address, scale, unit and polling interval. This reduces commissioning time and avoids data interpretation errors.',
          },
          {
            heading: 'Integration options',
            body:
              'Projects may need Modbus TCP server mode, MQTT publish, HTTP API, CSV export or BACnet conversion. SunGene can align gateway firmware and labels for distributor or OEM programs.',
          },
        ],
        bullets: ['Modbus RTU / TCP data collection', 'Register mapping and scaling', 'Cloud, SCADA, BMS and API integration', 'OEM firmware and private-label options'],
        products: ['Protocol Gateway (RS485 to Ethernet)', 'Modular Remote I/O System', 'Edge IoT Gateway'],
        technologies: ['Modbus RTU', 'Modbus TCP', 'RS485', 'Ethernet', 'BACnet', 'MQTT'],
        relatedLinks: [
          { label: 'Equipment Monitoring Solution', href: '/solutions/equipment-monitoring' },
          { label: 'Partner Programs', href: '/partners' },
        ],
      },
      zh: {
        title: 'Modbus 資料採集閘道器',
        description: '面向採購與系統整合需求，說明 Modbus 資料採集閘道器如何連接感測器、電表、控制器與遠端 I/O。',
        intent: '適合搜尋需求是「從多個 Modbus 設備採集資料，再送到上層系統」的閘道器專案。',
        sections: [
          {
            heading: '閘道器的角色',
            body:
              'Modbus 資料採集閘道器是現場設備與管理系統之間的橋樑。它讀取 Modbus RTU 或 TCP 點位，把暫存器轉成具名數值，再送到雲端、SCADA、BMS 或本地伺服器。',
          },
          {
            heading: '暫存器表準備',
            body:
              '導入前最重要的是整理清楚暫存器表，包含設備位址、功能碼、暫存器位置、倍率、單位與輪詢週期，這能縮短調試時間並避免資料解讀錯誤。',
          },
          {
            heading: '系統整合方式',
            body:
              '專案可能需要 Modbus TCP server、MQTT 發布、HTTP API、CSV 匯出或 BACnet 轉換。SunGene 可依通路或 OEM 專案調整韌體與標籤。',
          },
        ],
        bullets: ['Modbus RTU / TCP 資料採集', '暫存器對應與倍率處理', '雲端、SCADA、BMS 與 API 整合', 'OEM 韌體與貼牌選項'],
        products: ['RS485 轉乙太網路協定閘道器', '模組化遠端 I/O 系統', '邊緣 IoT 閘道器'],
        technologies: ['Modbus RTU', 'Modbus TCP', 'RS485', 'Ethernet', 'BACnet', 'MQTT'],
        relatedLinks: [
          { label: '設備監控解決方案', href: '/solutions/equipment-monitoring' },
          { label: '合作夥伴方案', href: '/partners' },
        ],
      },
    },
  },
  'solar-site-monitoring-iot': {
    slug: 'solar-site-monitoring-iot',
    content: {
      en: {
        title: 'Solar Site Monitoring IoT',
        description:
          'Remote IoT monitoring for solar sites: generation meters, inverter status, weather data, alarms and distributed portfolio visibility.',
        intent:
          'Use this resource when a buyer needs solar monitoring hardware for remote or distributed photovoltaic assets.',
        sections: [
          {
            heading: 'Data needed at a solar site',
            body:
              'Useful solar monitoring combines generation data, inverter status, irradiance, weather conditions, cabinet temperature and communication health. Together these signals reveal underperformance faster than monthly billing data.',
          },
          {
            heading: 'Connectivity choices',
            body:
              'RS485 / Modbus is common between meters, inverters and weather sensors. A gateway then uploads data by 4G, Ethernet or LoRaWAN depending on site network conditions.',
          },
          {
            heading: 'Operational outcomes',
            body:
              'Operators can compare expected and actual yield, identify downtime, dispatch cleaning or repair work and report portfolio performance to customers or investors.',
          },
        ],
        bullets: ['Generation and inverter monitoring', 'Weather and irradiance context', '4G uplink for remote PV sites', 'Alarms for downtime and underperformance'],
        products: ['DIN-Rail Three-Phase Energy Meter', 'Solar-Powered Weather Station', 'Edge IoT Gateway'],
        technologies: ['RS485', 'Modbus', '4G LTE', 'LoRaWAN', 'MQTT'],
        relatedLinks: [
          { label: 'Solar Site Monitoring', href: '/applications/solar-site-monitoring' },
          { label: 'Energy Monitoring Solution', href: '/solutions/energy-monitoring' },
        ],
      },
      zh: {
        title: '太陽能場域 IoT 監控',
        description: '太陽能場域遠端 IoT 監控，涵蓋發電電表、逆變器狀態、氣象資料、告警與分散案場管理。',
        intent: '適合需要為遠端或分散式光伏資產尋找監控硬體與閘道器的採購與整合商。',
        sections: [
          {
            heading: '太陽能場域需要哪些資料',
            body:
              '有效的太陽能監控通常包含發電量、逆變器狀態、日照、氣象條件、箱體溫度與通訊狀態。這些資料能比月結帳單更早發現發電不足。',
          },
          {
            heading: '通訊選擇',
            body:
              '電表、逆變器與氣象感測器之間常用 RS485 / Modbus。閘道器再依現場網路條件，透過 4G、乙太網路或 LoRaWAN 上傳。',
          },
          {
            heading: '營運價值',
            body:
              '管理者可比較預期與實際發電、找出停機時間、安排清洗或維修，並向客戶或投資方回報案場績效。',
          },
        ],
        bullets: ['發電與逆變器監控', '氣象與日照資料補充', '遠端光伏場域 4G 上行', '停機與發電不足告警'],
        products: ['DIN 導軌三相電表', '太陽能供電氣象站', '邊緣 IoT 閘道器'],
        technologies: ['RS485', 'Modbus', '4G LTE', 'LoRaWAN', 'MQTT'],
        relatedLinks: [
          { label: '太陽能場域監控', href: '/applications/solar-site-monitoring' },
          { label: '能源監控解決方案', href: '/solutions/energy-monitoring' },
        ],
      },
    },
  },
  'industrial-iot-remote-monitoring': {
    slug: 'industrial-iot-remote-monitoring',
    content: {
      en: {
        title: 'Industrial IoT Remote Monitoring',
        description:
          'A practical overview of Industrial IoT remote monitoring systems for water, energy, equipment and environmental data acquisition.',
        intent:
          'This page clarifies SunGene Industrial IoT positioning for buyers, distributors, system integrators and AI search systems.',
        sections: [
          {
            heading: 'What SunGene provides',
            body:
              'SunGene Industrial IoT provides hardware and solution bundles for remote monitoring and data acquisition. The focus is devices, gateways, sensors, meters, monitoring kits and channel programs, not export lead generation or buyer-list services.',
          },
          {
            heading: 'Core system layers',
            body:
              'A typical system includes sensors or meters, RS485 / Modbus or wireless field communication, an edge gateway, backhaul through 4G, Ethernet, LoRaWAN or NB-IoT, and dashboards or customer platforms for alarms and reporting.',
          },
          {
            heading: 'Partner-ready delivery',
            body:
              'SunGene supports distributors, system integrators and OEM / ODM partners with product selection, private-label options, low-MOQ programs and export-ready documentation.',
          },
        ],
        bullets: ['Remote monitoring hardware and kits', 'Water, energy, equipment and environmental monitoring', 'Distributor, system integrator and OEM / ODM programs', 'Canonical brand: SunGene Industrial IoT'],
        products: ['Edge IoT Gateway', 'Wireless IoT Energy Meter', 'Water Quality pH Sensor'],
        technologies: ['LoRaWAN', 'NB-IoT', 'RS485', 'Modbus', 'MQTT', '4G LTE'],
        relatedLinks: [
          { label: 'Remote Monitoring Solutions', href: '/solutions' },
          { label: 'Partner Programs', href: '/partners' },
        ],
      },
      zh: {
        title: '工業 IoT 遠端監控',
        description: '整理工業 IoT 遠端監控系統在水務、能源、設備與環境資料採集上的典型架構。',
        intent: '此頁用來清楚說明 SunGene Industrial IoT 的品牌定位，方便採購、通路、系統整合商與 AI 搜尋正確理解。',
        sections: [
          {
            heading: 'SunGene 提供什麼',
            body:
              'SunGene Industrial IoT 提供遠端監控與資料採集的硬體及方案組合，重點是設備、閘道器、感測器、電表、監控套件與通路合作，不是外貿開發、買家名單或行銷外包服務。',
          },
          {
            heading: '核心系統層',
            body:
              '典型系統包含感測器或電表、RS485 / Modbus 或無線現場通訊、邊緣閘道器、4G / 乙太網路 / LoRaWAN / NB-IoT 上行，以及負責告警與報表的平台。',
          },
          {
            heading: '適合合作夥伴交付',
            body:
              'SunGene 支援通路商、系統整合商與 OEM / ODM 夥伴，提供產品選型、貼牌選項、低 MOQ 合作與出口所需文件。',
          },
        ],
        bullets: ['遠端監控硬體與套件', '水務、能源、設備與環境監控', '通路、系統整合與 OEM / ODM 合作', '標準品牌稱呼：SunGene Industrial IoT'],
        products: ['邊緣 IoT 閘道器', '無線 IoT 電表', '水質 pH 感測器'],
        technologies: ['LoRaWAN', 'NB-IoT', 'RS485', 'Modbus', 'MQTT', '4G LTE'],
        relatedLinks: [
          { label: '遠端監控解決方案', href: '/solutions' },
          { label: '合作夥伴方案', href: '/partners' },
        ],
      },
    },
  },
}
