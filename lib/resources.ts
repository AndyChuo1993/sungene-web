import { Lang } from '@/lib/i18n'

export type ResourceSlug =
  | 'rs485-remote-monitoring-gateway'
  | 'lorawan-water-tank-monitoring'
  | 'nb-iot-energy-monitoring'
  | 'modbus-data-acquisition-gateway'
  | 'solar-site-monitoring-iot'
  | '4g-lte-agricultural-industrial-monitoring-package'
  | 'modular-weather-station-package'
  | 'solar-weather-station-power-system'
  | 'lorawan-eu868-gateway-rs485-modbus-node'
  | 'industrial-iot-remote-monitoring'

export const RESOURCE_SLUGS: ResourceSlug[] = [
  'rs485-remote-monitoring-gateway',
  'lorawan-water-tank-monitoring',
  'nb-iot-energy-monitoring',
  'modbus-data-acquisition-gateway',
  'solar-site-monitoring-iot',
  '4g-lte-agricultural-industrial-monitoring-package',
  'modular-weather-station-package',
  'solar-weather-station-power-system',
  'lorawan-eu868-gateway-rs485-modbus-node',
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
  faqs: { q: string; a: string }[]
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
        faqs: [
          {
            q: 'Is RS485 the same as Modbus RTU?',
            a: 'No. RS485 is the physical electrical interface, while Modbus RTU is a communication protocol commonly used over RS485 wiring.',
          },
          {
            q: 'Can this be used for a complete monitoring package?',
            a: 'Yes. The gateway can be supplied alone or bundled with sensors, meters, enclosure, power accessories, dashboard and alarm setup.',
          },
          {
            q: 'What information is needed for a quotation?',
            a: 'Please share the target country, device count, sensor or meter list, register map, network type, power source, certificate needs, quantity and timeline.',
          },
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
        faqs: [
          {
            q: 'RS485 和 Modbus RTU 是一樣的嗎？',
            a: '不是。RS485 是實體電氣介面，Modbus RTU 是常跑在 RS485 配線上的通訊協定。',
          },
          {
            q: '可以做成完整監控套件嗎？',
            a: '可以。閘道器可單獨供應，也可搭配感測器、電表、箱體、供電配件、儀表板與告警設定。',
          },
          {
            q: '報價前需要哪些資料？',
            a: '建議提供目標國家、設備數量、感測器或電表清單、暫存器表、網路方式、供電、認證需求、數量與時程。',
          },
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
        faqs: [
          {
            q: 'Can SunGene provide only the LoRaWAN gateway?',
            a: 'Yes. We can supply gateway-only hardware or a complete tank monitoring package with sensors, nodes, dashboard and alarm configuration.',
          },
          {
            q: 'How do we confirm LoRaWAN frequency support?',
            a: 'Confirm the deployment country and required regional plan such as EU868, AS923 or US915 before samples or firmware labels are finalized.',
          },
          {
            q: 'Do you provide payload decoder support?',
            a: 'For LoRaWAN nodes, SunGene can help define payload fields and provide decoder guidance for supported network servers when project details are confirmed.',
          },
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
        faqs: [
          {
            q: 'SunGene 可以只提供 LoRaWAN 閘道器嗎？',
            a: '可以。可單獨提供閘道器，也可提供包含感測器、節點、儀表板與告警設定的完整水槽監控套件。',
          },
          {
            q: '如何確認 LoRaWAN 頻段支援？',
            a: '需先確認部署國家與區域頻段規劃，例如 EU868、AS923 或 US915，再確認樣品與韌體標示。',
          },
          {
            q: '是否支援 payload decoder？',
            a: '針對 LoRaWAN 節點，SunGene 可依確認後的專案需求協助定義 payload 欄位，並提供相容網路伺服器的 decoder 建議。',
          },
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
        faqs: [
          {
            q: 'When is NB-IoT better than 4G LTE?',
            a: 'NB-IoT is suitable for small, periodic energy data where coverage is available and power consumption must stay low. 4G LTE is better for higher data volume or richer gateway functions.',
          },
          {
            q: 'Can the system connect existing RS485 meters?',
            a: 'Yes. Existing RS485 / Modbus meters can often be collected by a cellular gateway when register maps and wiring conditions are available.',
          },
          {
            q: 'Is SunGene a SaaS-only platform provider?',
            a: 'No. SunGene focuses on monitoring hardware, gateway bundles and OEM / ODM solution packages; dashboards can be included when required.',
          },
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
        faqs: [
          {
            q: '什麼情況適合 NB-IoT 而不是 4G LTE？',
            a: 'NB-IoT 適合小量、定時的能源資料，且現場有可用覆蓋、需要低功耗的情境。若資料量較高或閘道器功能較複雜，4G LTE 通常更合適。',
          },
          {
            q: '可以接既有 RS485 電表嗎？',
            a: '可以。若有暫存器表與現場配線資訊，既有 RS485 / Modbus 電表通常可由行動網路閘道器集中採集。',
          },
          {
            q: 'SunGene 是純 SaaS 平台商嗎？',
            a: '不是。SunGene 主要提供監控硬體、閘道器組合與 OEM / ODM 方案；如專案需要，可搭配儀表板。',
          },
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
        faqs: [
          {
            q: 'What is needed before Modbus gateway configuration?',
            a: 'A register map is the key input: slave address, function code, register address, data type, scale, unit and polling interval.',
          },
          {
            q: 'Can one gateway support Modbus RTU and Modbus TCP?',
            a: 'Many gateway projects use both. The final configuration depends on port count, master/server role, polling load and upstream system requirements.',
          },
          {
            q: 'Can SunGene support OEM or private-label gateway programs?',
            a: 'Yes. SunGene supports distributors and OEM / ODM partners with product selection, firmware labels, documentation and export-ready packaging.',
          },
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
        faqs: [
          {
            q: '設定 Modbus 閘道器前需要準備什麼？',
            a: '最重要的是暫存器表，包含站號、功能碼、暫存器位址、資料型別、倍率、單位與輪詢週期。',
          },
          {
            q: '一台閘道器可以同時支援 Modbus RTU 和 Modbus TCP 嗎？',
            a: '許多專案會同時使用兩者。最終配置取決於埠數、主從角色、輪詢負載與上層系統需求。',
          },
          {
            q: 'SunGene 支援 OEM 或貼牌閘道器合作嗎？',
            a: '支援。SunGene 可協助通路與 OEM / ODM 夥伴做產品選型、韌體標示、文件與出口包裝。',
          },
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
        faqs: [
          {
            q: 'What data is usually monitored at a solar site?',
            a: 'Common points include generation meter values, inverter status, irradiance, weather data, cabinet temperature, communication status and downtime alarms.',
          },
          {
            q: 'Can this work at remote sites without broadband?',
            a: 'Yes. A 4G LTE gateway is often used for remote PV sites, while RS485 / Modbus stays local between meters, inverters and weather sensors.',
          },
          {
            q: 'Can solar monitoring include its own power system?',
            a: 'Yes. For off-grid sensors or weather stations, SunGene can help specify solar panel, MPPT controller, LiFePO4 battery and enclosure requirements.',
          },
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
        faqs: [
          {
            q: '太陽能場域通常監控哪些資料？',
            a: '常見點位包含發電電表、逆變器狀態、日照、氣象資料、箱體溫度、通訊狀態與停機告警。',
          },
          {
            q: '沒有寬頻的遠端場域可以使用嗎？',
            a: '可以。遠端光伏案場常用 4G LTE 閘道器上傳，現場電表、逆變器與氣象感測器之間則保留 RS485 / Modbus。',
          },
          {
            q: '太陽能監控可以包含自供電系統嗎？',
            a: '可以。針對離網感測器或氣象站，SunGene 可協助規劃太陽能板、MPPT 控制器、LiFePO4 電池與箱體需求。',
          },
        ],
      },
    },
  },
  '4g-lte-agricultural-industrial-monitoring-package': {
    slug: '4g-lte-agricultural-industrial-monitoring-package',
    content: {
      en: {
        title: '4G LTE Agricultural and Industrial Monitoring Package',
        description:
          'A practical evaluation package for agriculture and industrial monitoring projects using RS485 / Modbus sensors, 4G LTE gateways, dashboard alerts and outdoor power options.',
        intent:
          'Use this resource when a buyer needs a complete pilot package rather than a single sensor: field devices, gateway, enclosure, dashboard, alarm workflow and stable power. Solar power can be specified when the site is remote.',
        sections: [
          {
            heading: 'What belongs in an evaluation package',
            body:
              'A useful evaluation package includes the selected RS485 or Modbus sensors, a 4G LTE gateway, SIM-ready connectivity, outdoor enclosure, surge protection, power accessories, dashboard access and a basic alarm configuration. This lets the buyer test the end-to-end workflow before scaling. ',
          },
          {
            heading: 'Agriculture and industrial data points',
            body:
              'Typical measurements include water level, pressure, flow, pH, conductivity, soil or air conditions, weather data, pump status, equipment run state and energy consumption. The final list should be driven by the site process and reporting needs.',
          },
          {
            heading: 'Power and enclosure planning',
            body:
              'Outdoor deployments should specify mains power availability, solar option, battery autonomy, enclosure rating, cable glands and maintenance access. For remote farms or utility sites, stable power design is as important as the sensor choice.',
          },
        ],
        bullets: ['Complete pilot package for remote sites', 'RS485 / Modbus sensors with 4G LTE backhaul', 'Dashboard, alarms and customer-cloud options', 'Outdoor enclosure and solar-ready power design'],
        products: ['Edge IoT Gateway', 'Protocol Gateway (RS485 to Ethernet)', 'Water Quality pH Sensor', 'DIN-Rail Three-Phase Energy Meter'],
        technologies: ['4G LTE', 'RS485', 'Modbus RTU', 'MQTT', 'Dashboard alerts', 'IP66 enclosure', 'Solar optional'],
        relatedLinks: [
          { label: 'Environmental Monitoring Solution', href: '/solutions/environmental-monitoring' },
          { label: 'Equipment Monitoring Solution', href: '/solutions/equipment-monitoring' },
          { label: 'Smart Agriculture Monitoring', href: '/applications/smart-agriculture-monitoring' },
        ],
        faqs: [
          {
            q: 'Can SunGene provide a complete evaluation package?',
            a: 'Yes. A package can include sensors, gateway, outdoor box, power accessories, dashboard, alarm configuration and project documentation for pilot testing.',
          },
          {
            q: 'What information is needed before selecting the gateway?',
            a: 'Please share target country, LTE bands if known, sensor list, RS485 / Modbus register maps, platform requirement, power source, quantity and timeline.',
          },
          {
            q: 'Can the system send data to a customer cloud?',
            a: 'Yes. Projects can use dashboard access, MQTT, Modbus TCP, HTTP API or customer-cloud integration depending on the gateway model and firmware scope.',
          },
        ],
      },
      zh: {
        title: '4G LTE 農業與工業監控套件',
        description: '以 RS485 / Modbus 感測器、4G LTE 閘道器、儀表板告警與戶外供電選項組成農業與工業監控評估套件。',
        intent: '適合買家需要完整試點套件，而不是單一感測器的情境：現場設備、閘道器、箱體、儀表板、告警流程與穩定供電；遠端場域可評估太陽能供電。',
        sections: [
          {
            heading: '評估套件應包含什麼',
            body:
              '有用的評估套件通常包含選定的 RS485 或 Modbus 感測器、4G LTE 閘道器、可放 SIM 的通訊方案、戶外箱、防浪湧保護、供電配件、儀表板帳號與基本告警設定，方便買家先驗證端到端流程再擴大部署。',
          },
          {
            heading: '農業與工業常見點位',
            body:
              '常見量測包含水位、壓力、流量、pH、導電度、土壤或空氣條件、氣象資料、泵浦狀態、設備運轉狀態與用電量。最終清單應依現場流程與報表需求決定。',
          },
          {
            heading: '供電與箱體規劃',
            body:
              '戶外部署需確認市電、太陽能選項、電池續航、箱體防護等級、線纜接頭與維護方式。對遠端農場或公用設施來說，穩定供電和感測器選型同樣重要。',
          },
        ],
        bullets: ['遠端場域完整試點套件', 'RS485 / Modbus 感測器搭配 4G LTE 上行', '儀表板、告警與客戶雲選項', '戶外箱與太陽能可選供電設計'],
        products: ['邊緣 IoT 閘道器', 'RS485 轉乙太網路協定閘道器', '水質 pH 感測器', 'DIN 導軌三相電表'],
        technologies: ['4G LTE', 'RS485', 'Modbus RTU', 'MQTT', '儀表板告警', 'IP66 箱體', '太陽能可選'],
        relatedLinks: [
          { label: '環境監控解決方案', href: '/solutions/environmental-monitoring' },
          { label: '設備監控解決方案', href: '/solutions/equipment-monitoring' },
          { label: '智慧農業監控', href: '/applications/smart-agriculture-monitoring' },
        ],
        faqs: [
          {
            q: 'SunGene 可以提供完整評估套件嗎？',
            a: '可以。套件可包含感測器、閘道器、戶外箱、供電配件、儀表板、告警設定與試點文件。',
          },
          {
            q: '選閘道器前需要哪些資料？',
            a: '請提供目標國家、已知 LTE 頻段、感測器清單、RS485 / Modbus 暫存器表、平台需求、供電方式、數量與時程。',
          },
          {
            q: '資料可以送到客戶自己的雲端嗎？',
            a: '可以。依閘道器型號與韌體範圍，可支援儀表板、MQTT、Modbus TCP、HTTP API 或客戶雲整合。',
          },
        ],
      },
    },
  },
  'modular-weather-station-package': {
    slug: 'modular-weather-station-package',
    content: {
      en: {
        title: 'Modular Weather Station Package',
        description:
          'How to specify a modular weather station package with RS485 weather sensors, MPPT solar charging, LiFePO4 battery, M12 waterproof cables and IP66 / IP67 enclosure options.',
        intent:
          'Use this guide when a buyer needs a configurable weather monitoring kit instead of a fixed all-in-one station.',
        sections: [
          {
            heading: 'Modular station design',
            body:
              'A modular weather station separates sensors, power, enclosure, pole mounting, cabling and gateway choice. This makes it easier to match different projects, such as agriculture, solar sites, environmental monitoring and industrial yards.',
          },
          {
            heading: 'Sensor and cabling choices',
            body:
              'Common RS485 weather sensors include wind speed, wind direction, rainfall, temperature, humidity, pressure, irradiance and soil conditions. M12 waterproof cables and labeled connectors reduce field wiring mistakes.',
          },
          {
            heading: 'Power and enclosure options',
            body:
              'Outdoor stations often use solar panel, MPPT charge controller, LiFePO4 battery and IP66 / IP67 enclosure. The battery and panel should be sized by sensor load, gateway load, reporting interval and autonomy days.',
          },
        ],
        bullets: ['RS485 weather sensor combinations', 'MPPT and LiFePO4 solar power options', 'M12 waterproof cabling', 'IP66 / IP67 outdoor enclosure planning'],
        products: ['Solar-Powered Weather Station', 'Edge IoT Gateway', 'Wireless Communication Gateway'],
        technologies: ['RS485', 'Modbus RTU', 'M12', 'IP66', 'IP67', 'MPPT', 'LiFePO4'],
        relatedLinks: [
          { label: 'Weather Station Monitoring', href: '/applications/weather-station-monitoring' },
          { label: 'Environmental Monitoring Solution', href: '/solutions/environmental-monitoring' },
          { label: 'Solar Power System Guide', href: '/resources/solar-weather-station-power-system' },
        ],
        faqs: [
          {
            q: 'Is this a fixed weather station model?',
            a: 'No. The package is modular, so sensors, gateway, enclosure, cable length and power design can be adjusted for the site.',
          },
          {
            q: 'Can RS485 weather sensors use Modbus RTU?',
            a: 'Yes. Many RS485 weather sensors communicate with Modbus RTU, but the exact register map should be confirmed before integration.',
          },
          {
            q: 'What should be specified for quotation?',
            a: 'Please provide sensor parameters, installation country, reporting interval, power availability, enclosure needs, cable length, quantity and certification requirements.',
          },
        ],
      },
      zh: {
        title: '模組化氣象站套件',
        description: '說明如何規劃模組化氣象站套件，包含 RS485 氣象感測器、MPPT 太陽能充電、LiFePO4 電池、M12 防水線與 IP66 / IP67 箱體。',
        intent: '適合買家需要可配置氣象監控套件，而不是固定一體式氣象站的情境。',
        sections: [
          {
            heading: '模組化氣象站設計',
            body:
              '模組化氣象站會把感測器、供電、箱體、立桿安裝、線纜與閘道器分開規劃，方便對應農業、太陽能案場、環境監測與工業園區等不同專案。',
          },
          {
            heading: '感測器與線纜選擇',
            body:
              '常見 RS485 氣象感測器包含風速、風向、雨量、溫度、濕度、氣壓、日照與土壤條件。M12 防水線與標示接頭可降低現場接線錯誤。',
          },
          {
            heading: '供電與箱體選項',
            body:
              '戶外氣象站常搭配太陽能板、MPPT 充電控制器、LiFePO4 電池與 IP66 / IP67 箱體。電池與太陽能板需依感測器負載、閘道器負載、回傳間隔與續航天數計算。',
          },
        ],
        bullets: ['RS485 氣象感測器組合', 'MPPT 與 LiFePO4 太陽能供電選項', 'M12 防水線纜', 'IP66 / IP67 戶外箱體規劃'],
        products: ['太陽能供電氣象站', '邊緣 IoT 閘道器', '無線通訊閘道器'],
        technologies: ['RS485', 'Modbus RTU', 'M12', 'IP66', 'IP67', 'MPPT', 'LiFePO4'],
        relatedLinks: [
          { label: '氣象站監控', href: '/applications/weather-station-monitoring' },
          { label: '環境監控解決方案', href: '/solutions/environmental-monitoring' },
          { label: '太陽能供電系統指南', href: '/resources/solar-weather-station-power-system' },
        ],
        faqs: [
          {
            q: '這是固定型號氣象站嗎？',
            a: '不是。此套件採模組化規劃，可依現場調整感測器、閘道器、箱體、線長與供電設計。',
          },
          {
            q: 'RS485 氣象感測器可以用 Modbus RTU 嗎？',
            a: '可以。許多 RS485 氣象感測器使用 Modbus RTU，但整合前仍需確認實際暫存器表。',
          },
          {
            q: '報價前應提供哪些資料？',
            a: '請提供感測項目、安裝國家、回傳間隔、供電條件、箱體需求、線長、數量與認證需求。',
          },
        ],
      },
    },
  },
  'solar-weather-station-power-system': {
    slug: 'solar-weather-station-power-system',
    content: {
      en: {
        title: 'Solar Weather Station Power System',
        description:
          'A guide to sizing solar panel, RS485 MPPT controller, LiFePO4 battery and outdoor protection for remote weather station and monitoring equipment.',
        intent:
          'Use this page when the main project risk is not the sensor itself, but keeping the weather station, gateway and communication module powered reliably outdoors.',
        sections: [
          {
            heading: 'Start from the load budget',
            body:
              'Power design starts with the average and peak load of sensors, gateway, communication module and any heater or auxiliary device. Reporting interval and sleep mode behavior affect the real daily energy requirement.',
          },
          {
            heading: 'MPPT and battery selection',
            body:
              'An RS485 MPPT controller can expose charging voltage, current, battery status and fault data to the monitoring gateway. LiFePO4 batteries are commonly selected for cycle life and stability in outdoor monitoring applications.',
          },
          {
            heading: 'Outdoor protection',
            body:
              'The power system should consider IP-rated enclosure, ventilation, cable glands, fuse protection, surge protection, mounting angle, theft prevention and maintenance access.',
          },
        ],
        bullets: ['Solar panel and battery autonomy sizing', 'RS485 MPPT controller monitoring', 'LiFePO4 battery for outdoor stations', 'Protection design for remote sites'],
        products: ['Solar-Powered Weather Station', 'Edge IoT Gateway', 'Wireless Communication Gateway'],
        technologies: ['Solar power', 'MPPT', 'LiFePO4', 'RS485', 'DC power', 'IP66 enclosure'],
        relatedLinks: [
          { label: 'Modular Weather Station Package', href: '/resources/modular-weather-station-package' },
          { label: 'Weather Station Monitoring', href: '/applications/weather-station-monitoring' },
          { label: 'Solar Site Monitoring IoT', href: '/resources/solar-site-monitoring-iot' },
        ],
        faqs: [
          {
            q: 'How many autonomy days should be planned?',
            a: 'It depends on local weather, service expectations and site criticality. Buyers should share load data, reporting interval and required backup days for sizing.',
          },
          {
            q: 'Why use an RS485 MPPT controller?',
            a: 'RS485 allows the gateway to read charging status, battery voltage, current and faults, so power health can be monitored remotely.',
          },
          {
            q: 'Can this power system be bundled with sensors and gateway?',
            a: 'Yes. SunGene can specify power accessories together with weather sensors, outdoor enclosure, gateway and dashboard requirements.',
          },
        ],
      },
      zh: {
        title: '氣象站太陽能供電系統',
        description: '說明遠端氣象站與監控設備如何規劃太陽能板、RS485 MPPT 控制器、LiFePO4 電池與戶外保護。',
        intent: '適合專案主要風險不是感測器本身，而是如何讓氣象站、閘道器與通訊模組在戶外穩定供電的情境。',
        sections: [
          {
            heading: '先計算負載',
            body:
              '供電設計需先掌握感測器、閘道器、通訊模組，以及加熱器或其他輔助設備的平均與峰值負載。回傳間隔與休眠模式會影響實際每日耗電。',
          },
          {
            heading: 'MPPT 與電池選型',
            body:
              'RS485 MPPT 控制器可把充電電壓、電流、電池狀態與故障資料提供給監控閘道器。LiFePO4 電池常用於戶外監控，原因是循環壽命與穩定性較適合長期部署。',
          },
          {
            heading: '戶外保護',
            body:
              '供電系統需考慮防護箱、散熱、防水接頭、保險絲、防浪湧、安裝角度、防盜與維護便利性。',
          },
        ],
        bullets: ['太陽能板與電池續航計算', 'RS485 MPPT 控制器監控', '戶外氣象站 LiFePO4 電池', '遠端場域保護設計'],
        products: ['太陽能供電氣象站', '邊緣 IoT 閘道器', '無線通訊閘道器'],
        technologies: ['太陽能供電', 'MPPT', 'LiFePO4', 'RS485', 'DC 供電', 'IP66 箱體'],
        relatedLinks: [
          { label: '模組化氣象站套件', href: '/resources/modular-weather-station-package' },
          { label: '氣象站監控', href: '/applications/weather-station-monitoring' },
          { label: '太陽能場域 IoT 監控', href: '/resources/solar-site-monitoring-iot' },
        ],
        faqs: [
          {
            q: '應規劃幾天備援續航？',
            a: '需依當地天候、服務要求與場域重要性決定。建議提供負載資料、回傳間隔與所需備援天數，才能計算規格。',
          },
          {
            q: '為什麼要用 RS485 MPPT 控制器？',
            a: 'RS485 可讓閘道器讀取充電狀態、電池電壓、電流與故障資料，方便遠端監控供電健康狀態。',
          },
          {
            q: '供電系統可以和感測器、閘道器一起出套件嗎？',
            a: '可以。SunGene 可把供電配件與氣象感測器、戶外箱、閘道器及儀表板需求一起規劃。',
          },
        ],
      },
    },
  },
  'lorawan-eu868-gateway-rs485-modbus-node': {
    slug: 'lorawan-eu868-gateway-rs485-modbus-node',
    content: {
      en: {
        title: 'LoRaWAN EU868 Gateway and RS485 Modbus Node',
        description:
          'A buyer guide for EU868 LoRaWAN gateways and RS485 Modbus nodes, including ChirpStack integration, payload decoder planning, sample evaluation, MOQ and certification checks.',
        intent:
          'Use this resource when a European distributor or integrator needs to confirm EU868 frequency, CE / RED / RoHS readiness and LoRaWAN network-server compatibility before samples.',
        sections: [
          {
            heading: 'Gateway and RS485 node architecture',
            body:
              'A LoRaWAN RS485 node reads Modbus RTU devices in the field and sends selected values to a LoRaWAN gateway. The gateway forwards data to a network server such as ChirpStack or another supported platform.',
          },
          {
            heading: 'EU868 and compliance checks',
            body:
              'European projects should confirm EU868 regional parameters, antenna needs, enclosure requirements, CE / RED / RoHS documentation, warranty expectations and sample configuration before purchase.',
          },
          {
            heading: 'Decoder and sample evaluation',
            body:
              'Payload decoder planning should identify data fields, scaling, units, alarm flags and uplink interval. For sample orders, define the test register map and network server in advance so evaluation time is not wasted.',
          },
        ],
        bullets: ['EU868 LoRaWAN gateway and node planning', 'RS485 / Modbus RTU device collection', 'ChirpStack and payload decoder readiness', 'Samples, MOQ, warranty and RMA questions'],
        products: ['Wireless Communication Gateway', 'Protocol Gateway (RS485 to Ethernet)', 'Edge IoT Gateway'],
        technologies: ['LoRaWAN EU868', 'RS485', 'Modbus RTU', 'ChirpStack', 'Payload decoder', 'CE', 'RED', 'RoHS'],
        relatedLinks: [
          { label: 'LoRaWAN Water Tank Monitoring', href: '/resources/lorawan-water-tank-monitoring' },
          { label: 'Water Monitoring Solution', href: '/solutions/water-monitoring' },
          { label: 'Partner Programs', href: '/partners' },
        ],
        faqs: [
          {
            q: 'How do we confirm EU868 support?',
            a: 'Share the target country and required regional plan. SunGene can then confirm model, firmware setting, antenna and documentation scope for EU868 projects.',
          },
          {
            q: 'Can the node read any RS485 Modbus sensor?',
            a: 'The node can support many Modbus RTU devices, but compatibility depends on register map, polling interval, power budget and payload size.',
          },
          {
            q: 'Can you provide ChirpStack payload decoder guidance?',
            a: 'Yes. For supported nodes, SunGene can help define payload fields and decoder logic after the measurement points and scaling are confirmed.',
          },
        ],
      },
      zh: {
        title: 'LoRaWAN EU868 閘道器與 RS485 Modbus 節點',
        description: '面向歐洲採購與整合商，說明 EU868 LoRaWAN 閘道器、RS485 Modbus 節點、ChirpStack 整合、payload decoder、樣品、MOQ 與認證確認。',
        intent: '適合歐洲通路或系統整合商在樣品前確認 EU868 頻段、CE / RED / RoHS 文件與 LoRaWAN 網路伺服器相容性。',
        sections: [
          {
            heading: '閘道器與 RS485 節點架構',
            body:
              'LoRaWAN RS485 節點在現場讀取 Modbus RTU 設備，並把選定資料送到 LoRaWAN 閘道器。閘道器再把資料轉發到 ChirpStack 或其他相容網路伺服器。',
          },
          {
            heading: 'EU868 與合規確認',
            body:
              '歐洲專案應先確認 EU868 區域參數、天線需求、箱體要求、CE / RED / RoHS 文件、保固期待與樣品配置，再安排採購。',
          },
          {
            heading: 'Decoder 與樣品評估',
            body:
              'Payload decoder 需先定義資料欄位、倍率、單位、告警旗標與上傳週期。樣品測試前也應確認測試暫存器表與網路伺服器，以免浪費評估時間。',
          },
        ],
        bullets: ['EU868 LoRaWAN 閘道器與節點規劃', 'RS485 / Modbus RTU 設備採集', 'ChirpStack 與 payload decoder 準備', '樣品、MOQ、保固與 RMA 問題'],
        products: ['無線通訊閘道器', 'RS485 轉乙太網路協定閘道器', '邊緣 IoT 閘道器'],
        technologies: ['LoRaWAN EU868', 'RS485', 'Modbus RTU', 'ChirpStack', 'Payload decoder', 'CE', 'RED', 'RoHS'],
        relatedLinks: [
          { label: 'LoRaWAN 水槽液位監控', href: '/resources/lorawan-water-tank-monitoring' },
          { label: '水務監控解決方案', href: '/solutions/water-monitoring' },
          { label: '合作夥伴方案', href: '/partners' },
        ],
        faqs: [
          {
            q: '如何確認支援 EU868？',
            a: '請提供目標國家與需要的區域頻段規劃。SunGene 可再確認型號、韌體設定、天線與 EU868 專案文件範圍。',
          },
          {
            q: '節點可以讀任何 RS485 Modbus 感測器嗎？',
            a: '節點可支援多種 Modbus RTU 設備，但相容性取決於暫存器表、輪詢週期、供電預算與 payload 大小。',
          },
          {
            q: '可以提供 ChirpStack payload decoder 建議嗎？',
            a: '可以。針對支援的節點，SunGene 可在量測點與倍率確認後協助定義 payload 欄位與 decoder 邏輯。',
          },
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
        faqs: [
          {
            q: 'Is SunGene Industrial IoT a lead-generation or buyer-list service?',
            a: 'No. SunGene Industrial IoT provides remote monitoring hardware, sensors, gateways, monitoring kits and OEM / ODM solution support.',
          },
          {
            q: 'Are you a SaaS platform provider?',
            a: 'SunGene is not a SaaS-only provider. We focus on hardware and solution bundles, with dashboards or customer-cloud integration available when required.',
          },
          {
            q: 'Can buyers request gateway-only or complete monitoring packages?',
            a: 'Both are possible. SunGene can support gateway-only procurement, sensor bundles, outdoor enclosures, power accessories, dashboards and alarm workflows.',
          },
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
        faqs: [
          {
            q: 'SunGene Industrial IoT 是外貿開發或買家名單服務嗎？',
            a: '不是。SunGene Industrial IoT 提供遠端監控硬體、感測器、閘道器、監控套件與 OEM / ODM 方案支援。',
          },
          {
            q: '你們是 SaaS 平台商嗎？',
            a: 'SunGene 不是純 SaaS 平台商。我們以硬體與方案組合為核心，必要時可搭配儀表板或客戶雲整合。',
          },
          {
            q: '可以只買閘道器，或採購完整監控套件嗎？',
            a: '兩者都可以。SunGene 可支援單買閘道器，也可提供感測器組合、戶外箱、供電配件、儀表板與告警流程。',
          },
        ],
      },
    },
  },
}
