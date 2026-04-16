import { Lang } from '@/lib/i18n'

type LocalizedText = Record<Lang, string>

type InsightCard = {
  title: LocalizedText
  body: LocalizedText
}

type PageInsight = {
  deepDiveTitle: LocalizedText
  deepDiveIntro: LocalizedText
  deepDiveCards: InsightCard[]
  checklistTitle: LocalizedText
  checklistItems: LocalizedText[]
}

type InsightMap = Record<string, PageInsight>

const marketInsights: InsightMap = {
  'united-states': {
    deepDiveTitle: {
      zh: '美國市場不是單一買家池',
      cn: '美国市场不是单一买家池',
      en: 'The US market is not one buyer pool',
    },
    deepDiveIntro: {
      zh: '同樣是美國市場，品牌商、進口商與區域經銷商的採購判斷點完全不同。若內容與開發信仍用同一套說法，通常只會拿到低品質回覆。',
      cn: '同样是美国市场，品牌商、进口商与区域经销商的采购判断点完全不同。若内容与开发信仍用同一套说法，通常只会拿到低品质回复。',
      en: 'Brands, importers, and regional distributors evaluate suppliers differently. If the page and outreach use one generic pitch, reply quality usually drops.',
    },
    deepDiveCards: [
      {
        title: { zh: '品牌商', cn: '品牌商', en: 'Brands' },
        body: {
          zh: '更在意差異化、包裝、供貨穩定與品牌風險，不只看價格。',
          cn: '更在意差异化、包装、供货稳定与品牌风险，不只看价格。',
          en: 'Care more about differentiation, packaging, supply consistency, and brand risk than pure price.',
        },
      },
      {
        title: { zh: '進口商', cn: '进口商', en: 'Importers' },
        body: {
          zh: '重視交期、MOQ、文件完整度與是否能快速判斷可否導入。',
          cn: '重视交期、MOQ、文件完整度与是否能快速判断可否导入。',
          en: 'Focus on lead time, MOQ, documentation, and how quickly they can evaluate fit.',
        },
      },
      {
        title: { zh: '區域經銷商', cn: '区域经销商', en: 'Regional distributors' },
        body: {
          zh: '會先看你能否幫他賣得動，包含品項結構、利潤空間與售後支援。',
          cn: '会先看你能否帮他卖得动，包含品项结构、利润空间与售后支援。',
          en: 'Need to know whether your offer can move in market, including assortment, margin, and after-sales support.',
        },
      },
    ],
    checklistTitle: {
      zh: '美國頁面應回答的 4 件事',
      cn: '美国页面应回答的 4 件事',
      en: '4 things a US page should answer',
    },
    checklistItems: [
      {
        zh: '你的主打產品是否用買家熟悉的應用場景描述，而不是只列規格。',
        cn: '你的主打产品是否用买家熟悉的应用场景描述，而不是只列规格。',
        en: 'Describe the product in buyer-facing use cases, not only internal specs.',
      },
      {
        zh: '是否清楚寫出 MOQ、交期、驗證方式與既有案例。',
        cn: '是否清楚写出 MOQ、交期、验证方式与既有案例。',
        en: 'State MOQ, lead time, validation approach, and proof clearly.',
      },
      {
        zh: '是否區分品牌商、進口商、經銷商三種不同 CTA。',
        cn: '是否区分品牌商、进口商、经销商三种不同 CTA。',
        en: 'Separate CTAs for brands, importers, and distributors.',
      },
      {
        zh: '是否放入能降低風險的供應穩定與品質承諾資訊。',
        cn: '是否放入能降低风险的供货稳定与品质承诺资讯。',
        en: 'Include supply stability and quality assurances that reduce perceived risk.',
      },
    ],
  },
  germany: {
    deepDiveTitle: {
      zh: '德國買家先看可驗證性',
      cn: '德国买家先看可验证性',
      en: 'German buyers screen for verifiability first',
    },
    deepDiveIntro: {
      zh: '德國頁面若只談價格優勢，通常無法進入認真評估。內容要先讓買家確認你具備文件、流程與導入紀律。',
      cn: '德国页面若只谈价格优势，通常无法进入认真评估。内容要先让买家确认你具备文件、流程与导入纪律。',
      en: 'A Germany page that only talks price rarely gets serious evaluation. Buyers first need evidence of documentation, process, and onboarding discipline.',
    },
    deepDiveCards: [
      {
        title: { zh: '文件門檻', cn: '文件门槛', en: 'Documentation gate' },
        body: {
          zh: 'CE、RoHS、REACH、測試報告與規格表，最好在第一屏就能被看見。',
          cn: 'CE、RoHS、REACH、测试报告与规格表，最好在第一屏就能被看见。',
          en: 'CE, RoHS, REACH, test reports, and spec sheets should be visible early on the page.',
        },
      },
      {
        title: { zh: '導入流程', cn: '导入流程', en: 'Onboarding process' },
        body: {
          zh: '買家會想知道樣品、測試、驗證、量產切換怎麼走，不只看產品介紹。',
          cn: '买家会想知道样品、测试、验证、量产切换怎么走，不只看产品介绍。',
          en: 'Buyers want to understand samples, tests, validation, and production ramp-up, not just the product itself.',
        },
      },
      {
        title: { zh: '長期合作', cn: '长期合作', en: 'Long-term fit' },
        body: {
          zh: '頁面要傳達你不是一次性供應商，而是可持續配合的工業夥伴。',
          cn: '页面要传达你不是一次性供应商，而是可持续配合的工业伙伴。',
          en: 'The page should position you as a long-term industrial partner, not a one-off vendor.',
        },
      },
    ],
    checklistTitle: {
      zh: '德國頁面加分清單',
      cn: '德国页面加分清单',
      en: 'Germany page checklist',
    },
    checklistItems: [
      {
        zh: '把合規文件與可提供的驗證條件寫在明顯位置。',
        cn: '把合规文件与可提供的验证条件写在明显位置。',
        en: 'Make compliance documents and validation options obvious.',
      },
      {
        zh: '放入導入週期、樣品流程與品質管控節點。',
        cn: '放入导入周期、样品流程与品质管控节点。',
        en: 'Show onboarding timeline, sample flow, and QC checkpoints.',
      },
      {
        zh: '用產業聚落或應用場景切內容，而不是只講公司簡介。',
        cn: '用产业聚落或应用场景切内容，而不是只讲公司简介。',
        en: 'Structure content by cluster or use case rather than generic company background.',
      },
      {
        zh: '避免誇大式文案，改用數據、案例與流程證據。',
        cn: '避免夸大式文案，改用数据、案例与流程证据。',
        en: 'Avoid hype; lead with data, cases, and process proof.',
      },
    ],
  },
  japan: {
    deepDiveTitle: {
      zh: '日本頁重點在信任節奏',
      cn: '日本页重点在信任节奏',
      en: 'Japan pages win on trust cadence',
    },
    deepDiveIntro: {
      zh: '日本市場不會因一封信就快速成交。頁面與訊息必須協助買家逐步建立信任，讓第一次回覆變得容易。',
      cn: '日本市场不会因一封信就快速成交。页面与讯息必须协助买家逐步建立信任，让第一次回复变得容易。',
      en: 'Japan rarely converts from one message alone. The page and outreach should make the first low-risk reply easy and trustworthy.',
    },
    deepDiveCards: [
      {
        title: { zh: '細節一致', cn: '细节一致', en: 'Detail consistency' },
        body: {
          zh: '文案、規格、交期與聯絡方式若前後不一致，會直接削弱可信度。',
          cn: '文案、规格、交期与联络方式若前后不一致，会直接削弱可信度。',
          en: 'Inconsistency across copy, specs, lead time, and contacts quickly undermines trust.',
        },
      },
      {
        title: { zh: '禮貌入口', cn: '礼貌入口', en: 'Polite entry point' },
        body: {
          zh: '比起強 CTA，更適合先提供資料、樣品條件或初步可行性討論。',
          cn: '比起强 CTA，更适合先提供资料、样品条件或初步可行性讨论。',
          en: 'A softer CTA around documents, samples, or feasibility works better than a hard sell.',
        },
      },
      {
        title: { zh: '長期配合', cn: '长期配合', en: 'Long-term compatibility' },
        body: {
          zh: '買家會評估供應穩定、回覆品質與合作細節，不只是一筆交易。',
          cn: '买家会评估供货稳定、回复品质与合作细节，不只是一笔交易。',
          en: 'Buyers assess supply stability, response quality, and collaboration discipline, not only one transaction.',
        },
      },
    ],
    checklistTitle: {
      zh: '日本頁面該補的內容',
      cn: '日本页面该补的内容',
      en: 'What a Japan page should include',
    },
    checklistItems: [
      {
        zh: '用結構化段落說明產品定位、規格、驗證方式與交期。',
        cn: '用结构化段落说明产品定位、规格、验证方式与交期。',
        en: 'Use structured sections for positioning, specs, validation, and lead time.',
      },
      {
        zh: '提供可下載資料或樣品討論入口，降低第一次回覆門檻。',
        cn: '提供可下载资料或样品讨论入口，降低第一次回复门槛。',
        en: 'Offer downloadable assets or a sample discussion CTA to lower reply friction.',
      },
      {
        zh: '避免過度強勢銷售語氣，改為清楚、節制、可驗證。',
        cn: '避免过度强势销售语气，改为清楚、节制、可验证。',
        en: 'Keep tone clear, restrained, and verifiable rather than aggressively promotional.',
      },
      {
        zh: '寫出合作流程，讓買家知道第一步之後會發生什麼。',
        cn: '写出合作流程，让买家知道第一步之后会发生什么。',
        en: 'Spell out the process so buyers know what happens after the first response.',
      },
    ],
  },
  'middle-east': {
    deepDiveTitle: {
      zh: '中東市場要先講合作模型',
      cn: '中东市场要先讲合作模型',
      en: 'Middle East pages should explain the partnership model first',
    },
    deepDiveIntro: {
      zh: '很多中東買家不只看產品本身，而是先看你適合做代理、專案供應還是通路合作。這個頁面若沒有先說清楚，容易被視為泛用內容。',
      cn: '很多中东买家不只看产品本身，而是先看你适合做代理、专案供应还是通路合作。这个页面若没有先说清楚，容易被视为泛用内容。',
      en: 'Many Middle East buyers first evaluate whether you fit an agency, project, or distribution model. Without that framing, the page feels generic.',
    },
    deepDiveCards: [
      {
        title: { zh: '代理合作', cn: '代理合作', en: 'Agency model' },
        body: {
          zh: '適合需要在地拓展與關係經營的品類，內容要說明區域支持與保護。',
          cn: '适合需要在地拓展与关系经营的品类，内容要说明区域支持与保护。',
          en: 'Useful for categories that need local relationship building; explain territory and support clearly.',
        },
      },
      {
        title: { zh: '專案通路', cn: '专案通路', en: 'Project channel' },
        body: {
          zh: '若涉及 EPC 或工程案，買家更在意交付能力、文件與專案配合彈性。',
          cn: '若涉及 EPC 或工程案，买家更在意交付能力、文件与专案配合弹性。',
          en: 'For EPC or project work, buyers look harder at delivery capability, documentation, and execution flexibility.',
        },
      },
      {
        title: { zh: '即時溝通', cn: '即时沟通', en: 'Fast communication' },
        body: {
          zh: '很多機會仰賴快速回覆與第二觸點，單靠 Email 常不夠。',
          cn: '很多机会仰赖快速回复与第二触点，单靠 Email 常不够。',
          en: 'Many opportunities depend on fast replies and secondary touchpoints; email alone is often not enough.',
        },
      },
    ],
    checklistTitle: {
      zh: '中東頁面檢查表',
      cn: '中东页面检查表',
      en: 'Middle East page checklist',
    },
    checklistItems: [
      {
        zh: '先定義你要找代理、經銷商還是專案型買家。',
        cn: '先定义你要找代理、经销商还是专案型买家。',
        en: 'Define whether you are targeting agents, distributors, or project buyers.',
      },
      {
        zh: '放入合作模式、交付能力與付款／風險控管資訊。',
        cn: '放入合作模式、交付能力与付款／风险控管资讯。',
        en: 'Include partnership model, delivery capability, and payment/risk controls.',
      },
      {
        zh: '用國家別或應用別區分內容，而不是把整個中東當成同一市場。',
        cn: '用国家别或应用别区分内容，而不是把整个中东当成同一市场。',
        en: 'Differentiate by country or use case instead of treating the region as one market.',
      },
      {
        zh: '設計快速諮詢 CTA，因為回覆速度很重要。',
        cn: '设计快速咨询 CTA，因为回复速度很重要。',
        en: 'Use a fast-response CTA because response time matters.',
      },
    ],
  },
  'southeast-asia': {
    deepDiveTitle: {
      zh: '東南亞不是單一區域策略',
      cn: '东南亚不是单一区域策略',
      en: 'SEA should not be treated as one regional strategy',
    },
    deepDiveIntro: {
      zh: 'Google 會把泛用的東南亞頁面視為模板內容。真正有價值的是把不同國家的採購習慣、通路成熟度與付款風險講清楚。',
      cn: 'Google 会把泛用的东南亚页面视为模板内容。真正有价值的是把不同国家的采购习惯、通路成熟度与付款风险讲清楚。',
      en: 'Google tends to treat generic SEA pages as template content. The stronger version explains differences in buying behavior, channel maturity, and payment risk by country.',
    },
    deepDiveCards: [
      {
        title: { zh: '印尼／越南工廠端', cn: '印尼／越南工厂端', en: 'Factory-side buyers' },
        body: {
          zh: '常看交期、價格與供應穩定，對回覆速度也更敏感。',
          cn: '常看交期、价格与供货稳定，对回复速度也更敏感。',
          en: 'Often prioritize lead time, price, and supply reliability, with higher sensitivity to response speed.',
        },
      },
      {
        title: { zh: '泰國／馬來西亞通路', cn: '泰国／马来西亚通路', en: 'Channel-led buyers' },
        body: {
          zh: '更需要你說明利潤空間、產品組合與後續支援。',
          cn: '更需要你说明利润空间、产品组合与后续支援。',
          en: 'Need clearer messaging around margins, assortment, and follow-on support.',
        },
      },
      {
        title: { zh: '信任建立', cn: '信任建立', en: 'Trust building' },
        body: {
          zh: '小單、快速樣品與即時通訊往往比長篇公司介紹更有效。',
          cn: '小单、快速样品与即时通讯往往比长篇公司介绍更有效。',
          en: 'Small trial orders, fast samples, and quick messaging often outperform long corporate pages.',
        },
      },
    ],
    checklistTitle: {
      zh: '東南亞頁面要更具體的地方',
      cn: '东南亚页面要更具体的地方',
      en: 'Where SEA pages need specificity',
    },
    checklistItems: [
      {
        zh: '區分國家別或買家類型，而不是只講整體區域機會。',
        cn: '区分国家别或买家类型，而不是只讲整体区域机会。',
        en: 'Differentiate by country or buyer type instead of broad regional opportunity.',
      },
      {
        zh: '寫出付款風險、樣品策略與小單切入方式。',
        cn: '写出付款风险、样品策略与小单切入方式。',
        en: 'Address payment risk, sampling strategy, and small-order entry paths.',
      },
      {
        zh: '將 Email、WhatsApp 或即時聯絡作為內容設計的一部分。',
        cn: '将 Email、WhatsApp 或即时联络作为内容设计的一部分。',
        en: 'Design the page around both email and fast messaging channels.',
      },
      {
        zh: '補上當地常見通路與採購角色，降低內容同質性。',
        cn: '补上当地常见通路与采购角色，降低内容同质性。',
        en: 'Add local channel structures and buyer roles to reduce templated similarity.',
      },
    ],
  },
  europe: {
    deepDiveTitle: {
      zh: '歐洲頁不能只等於德國頁放大版',
      cn: '欧洲页不能只等于德国页放大版',
      en: 'A Europe page cannot be a scaled-up Germany page',
    },
    deepDiveIntro: {
      zh: '如果歐洲頁只複製德國頁邏輯，Google 很容易判成重複。歐洲頁應該講多國市場下的共同門檻與內容分流策略。',
      cn: '如果欧洲页只复制德国页逻辑，Google 很容易判成重复。欧洲页应该讲多国市场下的共同门槛与内容分流策略。',
      en: 'If the Europe page just mirrors the Germany page, Google will likely treat it as duplicate. It should cover shared barriers across multiple countries and how messaging branches by market.',
    },
    deepDiveCards: [
      {
        title: { zh: '多語與多國差異', cn: '多语与多国差异', en: 'Multi-country variation' },
        body: {
          zh: '英語可先切入，但不同國家對在地語言、文件與回覆節奏期待不同。',
          cn: '英语可先切入，但不同国家对在地语言、文件与回复节奏期待不同。',
          en: 'English can open doors, but countries differ on language, documentation, and follow-up expectations.',
        },
      },
      {
        title: { zh: '共同信任門檻', cn: '共同信任门槛', en: 'Shared trust threshold' },
        body: {
          zh: '合規、品質與案例證據，是歐洲多數市場共同的第一層門檻。',
          cn: '合规、品质与案例证据，是欧洲多数市场共同的第一层门槛。',
          en: 'Compliance, quality, and case proof are first-layer filters across most European markets.',
        },
      },
      {
        title: { zh: '內容分流', cn: '内容分流', en: 'Content branching' },
        body: {
          zh: '歐洲總頁應把流量導向更細的國家或產業頁，而不是自己承載所有搜尋意圖。',
          cn: '欧洲总页应把流量导向更细的国家或产业页，而不是自己承载所有搜索意图。',
          en: 'The Europe page should route traffic into narrower country or industry pages rather than trying to answer every search intent itself.',
        },
      },
    ],
    checklistTitle: {
      zh: '歐洲頁該有的差異化',
      cn: '欧洲页该有的差异化',
      en: 'How to differentiate a Europe page',
    },
    checklistItems: [
      {
        zh: '說清楚哪些要求是歐洲共通，哪些需要再切到國家頁。',
        cn: '说清楚哪些要求是欧洲共通，哪些需要再切到国家页。',
        en: 'Separate Europe-wide requirements from country-specific detail.',
      },
      {
        zh: '把合規與證據放在前段，不要只談區域商機。',
        cn: '把合规与证据放在前段，不要只谈区域商机。',
        en: 'Lead with compliance and proof, not only market opportunity.',
      },
      {
        zh: '加上內部分流到德國或其他關鍵國家頁的語境。',
        cn: '加上内部分流到德国或其他关键国家页的语境。',
        en: 'Create stronger internal branching to Germany and other key country pages.',
      },
      {
        zh: '避免與德國頁用同一組句型與策略描述。',
        cn: '避免与德国页用同一组句型与策略描述。',
        en: 'Avoid reusing the same sentence patterns and strategy framing as the Germany page.',
      },
    ],
  },
}

const industryInsights: InsightMap = {
  machinery: {
    deepDiveTitle: {
      zh: '機械頁的核心不是設備名稱，而是導入場景',
      cn: '机械页的核心不是设备名称，而是导入场景',
      en: 'Machinery pages should sell the onboarding scenario, not only the machine name',
    },
    deepDiveIntro: {
      zh: '機械買家常同時評估技術適配、導入成本與停線風險。頁面若只列產品規格，Google 與買家都會覺得內容過薄。',
      cn: '机械买家常同时评估技术适配、导入成本与停线风险。页面若只列产品规格，Google 与买家都会觉得内容过薄。',
      en: 'Machinery buyers evaluate technical fit, onboarding cost, and downtime risk together. Pages that only list specs feel thin to both Google and buyers.',
    },
    deepDiveCards: [
      {
        title: { zh: '導入前評估', cn: '导入前评估', en: 'Pre-onboarding evaluation' },
        body: {
          zh: '寫出適用產線、工件條件與既有設備搭配方式，比單純列型號更有說服力。',
          cn: '写出适用产线、工件条件与既有设备搭配方式，比单纯列型号更有说服力。',
          en: 'Explain production context, workpiece conditions, and installed-base fit instead of listing model numbers alone.',
        },
      },
      {
        title: { zh: '試機與驗證', cn: '试机与验证', en: 'Trials and validation' },
        body: {
          zh: '買家在意的是你怎麼協助試機、收集結果、降低導入風險。',
          cn: '买家在意的是你怎么协助试机、收集结果、降低导入风险。',
          en: 'Buyers care about how you support trials, gather results, and lower onboarding risk.',
        },
      },
      {
        title: { zh: '售後支援', cn: '售后支援', en: 'After-sales support' },
        body: {
          zh: '維護、備品、遠端支援能力，會直接影響成交判斷。',
          cn: '维护、备品、远端支援能力，会直接影响成交判断。',
          en: 'Maintenance, spare parts, and remote support have direct impact on close probability.',
        },
      },
    ],
    checklistTitle: {
      zh: '機械頁內容補強點',
      cn: '机械页内容补强点',
      en: 'Machinery page checklist',
    },
    checklistItems: [
      { zh: '寫出適用產線與應用，而非只列設備名稱。', cn: '写出适用产线与应用，而非只列设备名称。', en: 'Lead with production use cases rather than machine labels only.' },
      { zh: '補上試機、導入、驗證流程。', cn: '补上试机、导入、验证流程。', en: 'Add trial, onboarding, and validation workflow.' },
      { zh: '放入交期、安裝與售後支援能力。', cn: '放入交期、安装与售后支援能力。', en: 'Include lead time, installation, and after-sales capability.' },
      { zh: '用案例證明設備不是紙上規格。', cn: '用案例证明设备不是纸上规格。', en: 'Use cases to prove performance beyond specs.' },
    ],
  },
  electronics: {
    deepDiveTitle: {
      zh: '電子頁要同時對工程與採購說話',
      cn: '电子页要同时对工程与采购说话',
      en: 'Electronics pages must speak to both engineering and procurement',
    },
    deepDiveIntro: {
      zh: '電子產業若只談價格，工程不會理你；若只談規格，採購不會回你。頁面內容必須同時回答技術可用性與供應穩定性。',
      cn: '电子产业若只谈价格，工程不会理你；若只谈规格，采购不会回你。页面内容必须同时回答技术可用性与供货稳定性。',
      en: 'If the page only talks price, engineering ignores it; if it only talks specs, procurement ignores it. It needs to answer both technical fit and supply stability.',
    },
    deepDiveCards: [
      {
        title: { zh: '工程端', cn: '工程端', en: 'Engineering side' },
        body: {
          zh: '更在意規格、驗證、替代料可行性與設計導入風險。',
          cn: '更在意规格、验证、替代料可行性与设计导入风险。',
          en: 'Focuses on specs, validation, second-source feasibility, and design-in risk.',
        },
      },
      {
        title: { zh: '採購端', cn: '采购端', en: 'Procurement side' },
        body: {
          zh: '更在意交期、MOQ、供應韌性與 EOL 風險。',
          cn: '更在意交期、MOQ、供应韧性与 EOL 风险。',
          en: 'Focuses on lead time, MOQ, supply resilience, and EOL risk.',
        },
      },
      {
        title: { zh: '文件證據', cn: '文件证据', en: 'Document proof' },
        body: {
          zh: 'Datasheet、測試報告、認證與 cross-reference 資料，是提高回覆率的關鍵。',
          cn: 'Datasheet、测试报告、认证与 cross-reference 资料，是提高回复率的关键。',
          en: 'Datasheets, test reports, certifications, and cross-reference assets are central to reply quality.',
        },
      },
    ],
    checklistTitle: {
      zh: '電子頁內容檢查',
      cn: '电子页内容检查',
      en: 'Electronics page checklist',
    },
    checklistItems: [
      { zh: '分清工程與採購的內容切點。', cn: '分清工程与采购的内容切点。', en: 'Separate engineering vs procurement messaging.' },
      { zh: '補上規格、驗證與供應資訊三組證據。', cn: '补上规格、验证与供应资讯三组证据。', en: 'Provide spec, validation, and supply-side proof.' },
      { zh: '說明替代料或導入可行性。', cn: '说明替代料或导入可行性。', en: 'Address second-source or qualification feasibility.' },
      { zh: '避免只寫通用 B2B 口號。', cn: '避免只写通用 B2B 口号。', en: 'Avoid generic B2B slogans with no technical value.' },
    ],
  },
  plastic: {
    deepDiveTitle: {
      zh: '塑膠頁關鍵在一致性與量產穩定',
      cn: '塑胶页关键在一致性与量产稳定',
      en: 'Plastics pages should emphasize consistency and scale stability',
    },
    deepDiveIntro: {
      zh: '塑膠件買家最怕的是每批不一致、打樣後量產失真、以及導入溝通成本。頁面需要把製程穩定與品質管理講清楚。',
      cn: '塑胶件买家最怕的是每批不一致、打样后量产失真、以及导入沟通成本。页面需要把制程稳定与品质管理讲清楚。',
      en: 'Plastic-part buyers worry most about inconsistency, sampling-to-mass-production gaps, and communication overhead. The page should clearly explain process stability and quality control.',
    },
    deepDiveCards: [
      {
        title: { zh: '材料與配方', cn: '材料与配方', en: 'Material control' },
        body: {
          zh: '買家會在意材質、追溯、替代料與環保要求是否可控。',
          cn: '买家会在意材质、追溯、替代料与环保要求是否可控。',
          en: 'Buyers care whether material, traceability, substitution, and sustainability requirements are controllable.',
        },
      },
      {
        title: { zh: '打樣到量產', cn: '打样到量产', en: 'Sample-to-mass flow' },
        body: {
          zh: '要說明打樣、修正、量產轉換節奏，降低買家導入焦慮。',
          cn: '要说明打样、修正、量产转换节奏，降低买家导入焦虑。',
          en: 'Explain sample, revision, and production transition steps to reduce adoption anxiety.',
        },
      },
      {
        title: { zh: '良率與檢驗', cn: '良率与检验', en: 'Yield and inspection' },
        body: {
          zh: '一致性數據、檢驗節點與出貨標準，會比形容詞更能提升信任。',
          cn: '一致性数据、检验节点与出货标准，会比形容词更能提升信任。',
          en: 'Consistency metrics, inspection points, and shipping criteria build more trust than adjectives.',
        },
      },
    ],
    checklistTitle: {
      zh: '塑膠頁強化清單',
      cn: '塑胶页强化清单',
      en: 'Plastics page checklist',
    },
    checklistItems: [
      { zh: '說清楚材質、追溯與品質控制。', cn: '说清楚材质、追溯与品质控制。', en: 'Clarify material control, traceability, and QC.' },
      { zh: '補上打樣到量產的轉換流程。', cn: '补上打样到量产的转换流程。', en: 'Show the sample-to-production transition.' },
      { zh: '用應用場景而不是代工空話描述價值。', cn: '用应用场景而不是代工空话描述价值。', en: 'Use application scenarios rather than generic OEM claims.' },
      { zh: '增加良率、檢驗或交期的可信證據。', cn: '增加良率、检验或交期的可信证据。', en: 'Add credible proof around yield, inspection, or lead time.' },
    ],
  },
  chemical: {
    deepDiveTitle: {
      zh: '化工頁先過文件門檻，才有詢價',
      cn: '化工页先过文件门槛，才有询价',
      en: 'Chemical pages need to clear the documentation gate before winning inquiries',
    },
    deepDiveIntro: {
      zh: '化工買家通常不是先問價格，而是先確認文件、運輸與風險控制是否完整。內容若沒回答這些問題，就容易被當成低信任模板。',
      cn: '化工买家通常不是先问价格，而是先确认文件、运输与风险控制是否完整。内容若没回答这些问题，就容易被当成低信任模板。',
      en: 'Chemical buyers usually do not start with price. They first check documentation, shipping, and risk controls. Pages that skip these look low-trust and templated.',
    },
    deepDiveCards: [
      {
        title: { zh: '文件完整度', cn: '文件完整度', en: 'Documentation readiness' },
        body: {
          zh: 'MSDS、TDS、COA、包裝與危險品條件，應在頁面中被具體點名。',
          cn: 'MSDS、TDS、COA、包装与危险品条件，应在页面中被具体点名。',
          en: 'MSDS, TDS, COA, packaging, and hazmat conditions should be explicitly referenced.',
        },
      },
      {
        title: { zh: '運輸限制', cn: '运输限制', en: 'Shipping constraints' },
        body: {
          zh: '不同化學品的物流條件與交付方式差異很大，這本身就是內容差異化來源。',
          cn: '不同化学品的物流条件与交付方式差异很大，这本身就是内容差异化来源。',
          en: 'Shipping constraints differ widely by product type and can become a strong content differentiator.',
        },
      },
      {
        title: { zh: '試樣導入', cn: '试样导入', en: 'Trial quantities' },
        body: {
          zh: '買家更願意先從試樣、少量驗證與配方測試開始。',
          cn: '买家更愿意先从试样、少量验证与配方测试开始。',
          en: 'Buyers often prefer to start with samples, trial quantities, or formulation validation.',
        },
      },
    ],
    checklistTitle: {
      zh: '化工頁必備內容',
      cn: '化工页必备内容',
      en: 'Chemical page checklist',
    },
    checklistItems: [
      { zh: '把文件清單與合規條件寫在頁面中。', cn: '把文件清单与合规条件写在页面中。', en: 'List documents and compliance conditions on-page.' },
      { zh: '區分產品應用與運輸限制。', cn: '区分产品应用与运输限制。', en: 'Separate application context and shipping constraints.' },
      { zh: '增加試樣或小量導入的說明。', cn: '增加试样或小量导入的说明。', en: 'Explain sample or trial-order paths.' },
      { zh: '用風險控管語言，而不是一般行銷詞。', cn: '用风险控管语言，而不是一般行销词。', en: 'Use risk-control language rather than generic marketing copy.' },
    ],
  },
  medical: {
    deepDiveTitle: {
      zh: '醫療頁面要降低臨床與合規風險感',
      cn: '医疗页面要降低临床与合规风险感',
      en: 'Medical pages need to reduce perceived clinical and compliance risk',
    },
    deepDiveIntro: {
      zh: '醫療買家不會因漂亮文案而下單。他們先看的是驗證、品質系統與供應穩定。這正是頁面需要強化的獨特內容。',
      cn: '医疗买家不会因漂亮文案而下单。他们先看的是验证、质量系统与供货稳定。这正是页面需要强化的独特内容。',
      en: 'Medical buyers do not convert on polished copy alone. They first evaluate validation, quality systems, and supply stability, which should define the page.',
    },
    deepDiveCards: [
      {
        title: { zh: '驗證與證照', cn: '验证与证照', en: 'Validation and certification' },
        body: {
          zh: 'ISO13485、測試、批次控制與文件一致性，都是早期信任建立的核心。',
          cn: 'ISO13485、测试、批次控制与文件一致性，都是早期信任建立的核心。',
          en: 'ISO13485, testing, batch control, and documentation consistency form the trust baseline.',
        },
      },
      {
        title: { zh: '供應穩定', cn: '供货稳定', en: 'Supply stability' },
        body: {
          zh: '醫療端常更重視供貨不中斷，而不是追最低價格。',
          cn: '医疗端常更重视供货不中断，而不是追最低价格。',
          en: 'Medical buyers often prioritize continuity of supply over lowest cost.',
        },
      },
      {
        title: { zh: '導入條件', cn: '导入条件', en: 'Onboarding conditions' },
        body: {
          zh: '頁面應該清楚指出試單、驗證與長期合作的切換條件。',
          cn: '页面应该清楚指出试单、验证与长期合作的切换条件。',
          en: 'The page should explain how trial orders, validation, and long-term supply phases connect.',
        },
      },
    ],
    checklistTitle: {
      zh: '醫療頁差異化清單',
      cn: '医疗页差异化清单',
      en: 'Medical page checklist',
    },
    checklistItems: [
      { zh: '先講驗證、品質系統與風險控制。', cn: '先讲验证、质量系统与风险控制。', en: 'Lead with validation, quality systems, and risk control.' },
      { zh: '補上供應穩定與批次一致性的證據。', cn: '补上供货稳定与批次一致性的证据。', en: 'Show proof of stable supply and batch consistency.' },
      { zh: '說清楚試單到正式導入的流程。', cn: '说清楚试单到正式导入的流程。', en: 'Clarify the path from trial to formal onboarding.' },
      { zh: '避免用一般工業頁的語氣複製貼上。', cn: '避免用一般工业页的语气复制贴上。', en: 'Avoid reusing generic industrial tone on medical pages.' },
    ],
  },
  automotive: {
    deepDiveTitle: {
      zh: '車用頁重點是供應鏈適配',
      cn: '车用页重点是供应链适配',
      en: 'Automotive pages should focus on supply-chain fit',
    },
    deepDiveIntro: {
      zh: '車用買家不只在看單一零件，而是在看你能不能進入既有供應鏈節奏。這類頁面若沒有說明導入、驗證與量產條件，很容易顯得空泛。',
      cn: '车用买家不只在看单一零件，而是在看你能不能进入既有供应链节奏。这类页面若没有说明导入、验证与量产条件，很容易显得空泛。',
      en: 'Automotive buyers are not evaluating only a part. They are evaluating whether you can fit an existing supply-chain rhythm. Without onboarding and validation detail, the page feels vague.',
    },
    deepDiveCards: [
      {
        title: { zh: '體系門檻', cn: '体系门槛', en: 'System threshold' },
        body: {
          zh: 'IATF、檢驗流程與品質紀錄，是進場前的基本門檻。',
          cn: 'IATF、检验流程与品质纪录，是进场前的基本门槛。',
          en: 'IATF, inspection process, and quality records are baseline entry requirements.',
        },
      },
      {
        title: { zh: '專案節奏', cn: '专案节奏', en: 'Project cadence' },
        body: {
          zh: '需求確認、樣品、測試、試單與量產切換，最好有一條清楚路徑。',
          cn: '需求确认、样品、测试、试单与量产切换，最好有一条清楚路径。',
          en: 'Requirement confirmation, samples, testing, trial, and production ramp should follow a visible path.',
        },
      },
      {
        title: { zh: '穩定供應', cn: '稳定供货', en: 'Stable delivery' },
        body: {
          zh: '交期波動、備援與供應韌性，是車用採購會反覆確認的問題。',
          cn: '交期波动、备援与供应韧性，是车用采购会反复确认的问题。',
          en: 'Lead-time variance, fallback plans, and supply resilience are reviewed repeatedly in automotive sourcing.',
        },
      },
    ],
    checklistTitle: {
      zh: '車用頁應補的內容',
      cn: '车用页应补的内容',
      en: 'Automotive page checklist',
    },
    checklistItems: [
      { zh: '說明品質體系與檢驗能力。', cn: '说明品质体系与检验能力。', en: 'Explain quality systems and inspection capability.' },
      { zh: '呈現專案式導入流程。', cn: '呈现专案式导入流程。', en: 'Present a project-style onboarding sequence.' },
      { zh: '加入穩定供應與風險管理資訊。', cn: '加入稳定供货与风险管理资讯。', en: 'Include stable supply and risk-management detail.' },
      { zh: '讓 Tier 1 / Tier 2 / 維修通路的語境有區分。', cn: '让 Tier 1 / Tier 2 / 维修通路的语境有区分。', en: 'Differentiate Tier 1, Tier 2, and aftermarket contexts.' },
    ],
  },
  'industrial-equipment': {
    deepDiveTitle: {
      zh: '工業設備頁要把導入成本講人話',
      cn: '工业设备页要把导入成本讲人话',
      en: 'Industrial equipment pages should explain integration cost in plain language',
    },
    deepDiveIntro: {
      zh: '這類頁面最容易被做成通用模板，但買家真正關心的是：能不能接進現場？多久能上線？需要多少配合？這些才是差異化來源。',
      cn: '这类页面最容易被做成通用模板，但买家真正关心的是：能不能接进现场？多久能上线？需要多少配合？这些才是差异化来源。',
      en: 'These pages are easy to turn into generic templates, but buyers care about site fit, time to deployment, and integration effort. That is where differentiation should come from.',
    },
    deepDiveCards: [
      {
        title: { zh: 'Use Case 包裝', cn: 'Use Case 包装', en: 'Use-case packaging' },
        body: {
          zh: '與其泛談設備能力，不如直接切成可理解的解決方案情境。',
          cn: '与其泛谈设备能力，不如直接切成可理解的解决方案情境。',
          en: 'Instead of talking broadly about equipment features, package the page around recognizable use cases.',
        },
      },
      {
        title: { zh: '整合條件', cn: '整合条件', en: 'Integration requirements' },
        body: {
          zh: '買家會想先知道資料格式、現場條件、安裝需求與切換成本。',
          cn: '买家会想先知道资料格式、现场条件、安装需求与切换成本。',
          en: 'Buyers want to know data format, site conditions, installation requirements, and switching cost first.',
        },
      },
      {
        title: { zh: '案例證據', cn: '案例证据', en: 'Case proof' },
        body: {
          zh: '一個清楚的導入案例，通常比一大段品牌文案更能帶動回覆。',
          cn: '一个清楚的导入案例，通常比一大段品牌文案更能带动回复。',
          en: 'A clear onboarding case often drives more response than a long block of brand copy.',
        },
      },
    ],
    checklistTitle: {
      zh: '工業設備頁檢查表',
      cn: '工业设备页检查表',
      en: 'Industrial equipment page checklist',
    },
    checklistItems: [
      { zh: '把頁面改寫成 use case，而不只是設備介紹。', cn: '把页面改写成 use case，而不只是设备介绍。', en: 'Structure the page by use cases rather than product description only.' },
      { zh: '補上整合條件與資料需求。', cn: '补上整合条件与资料需求。', en: 'Include integration requirements and input data needs.' },
      { zh: '說明上線節奏與導入成本。', cn: '说明上线节奏与导入成本。', en: 'Explain deployment timing and integration cost.' },
      { zh: '用案例、流程與規格三件套建立信任。', cn: '用案例、流程与规格三件套建立信任。', en: 'Use a trio of case, process, and specs to build trust.' },
    ],
  },
}

export function getSeoPageInsight(basePath: string, slug: string): PageInsight | null {
  if (basePath === 'markets') return marketInsights[slug] ?? null
  if (basePath === 'industries') return industryInsights[slug] ?? null
  return null
}
