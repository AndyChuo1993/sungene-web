import { ServiceSeo } from '@/components/ServiceSeoPage'

export const coreServices = {
  exportLeadGeneration: {
    slug: 'export-lead-generation',
    path: '/services/export-lead-generation',
    title: {
      zh: '外銷客戶開發服務｜海外買家開發（製造業）',
      en: 'Export Lead Generation Service for Manufacturers | Find Overseas Buyers',
    },
    description: {
      zh: '我們協助製造業識別海外買家、建立可直接使用的名單，並用系統化開發節奏交付合格詢盤。',
      en: 'We help manufacturers identify overseas buyers and generate qualified B2B export leads worldwide.',
    },
    heroSubtitle: {
      zh: '我們協助製造業識別海外買家、建立精準名單，並交付可跟進的外銷詢盤。',
      en: 'We help manufacturers identify overseas buyers, build targeted prospect lists, and generate qualified export leads.',
    },
    h1: { zh: '外銷客戶開發（製造業）', en: 'Export Lead Generation for Manufacturers' },
    whoFor: {
      zh: ['製造業', 'OEM/ODM 工廠', '工業品公司', '以外銷為主的企業'],
      en: ['Manufacturers', 'OEM factories', 'Industrial companies', 'Export-oriented businesses'],
    },
    problem: {
      zh: ['靠展會與平台被動等詢盤，品質不穩定、價格競爭激烈。', '名單品質差：找不到決策人、Email 無效、或根本不是適合的買家角色。', '寄信一次就停，沒有節奏式跟進與回覆分類，導致大量商機流失。'],
      en: ['Inbound from fairs and platforms is unstable and often price-driven.', 'Poor lists: wrong roles, invalid emails, and weak buyer fit.', 'One-and-done outreach without cadence or reply triage causes lead leakage.'],
    },
    solution: {
      zh: ['我們把外貿開發做成一套可複製的系統：ICP → 名單 → 訊息 → 跟進 → 轉化，並以「合格詢盤」作為可交付成果。', '你會得到可直接使用的名單（寄信名單 + 開信名單 Excel）、可追蹤的開發節奏，以及可交付的詢盤整理。'],
      en: ['We make export outreach repeatable with ICP → list → message → follow-up → conversion, and deliver qualified inquiries as outcomes.', 'You receive ready-to-use lists (sent list + opens list), a trackable cadence, and organized inquiry hand-offs.'],
    },
    whatIs: {
      zh: ['外貿客戶開發（Export Lead Generation）是針對特定市場與買家角色，建立可驗證的海外買家名單，並透過多觸點開發節奏獲取詢盤。'],
      en: ['Export lead generation builds verified overseas prospect lists for specific markets and buyer roles, then runs multi-touch outreach to generate inquiries.'],
    },
    howWorks: {
      zh: ['製造業要找到海外買家，核心不是寄更多信，而是先把買家畫像（ICP）與買家角色（Importer/Distributor/Brand/Factory）定義清楚，再用名單驗證與節奏式跟進提高回覆率。'],
      en: ['Manufacturers win overseas buyers by clarifying ICP and buyer roles first, then using verified lists and structured follow-ups to improve reply rates.'],
    },
    process: {
      zh: ['定義 ICP：市場、產業、通路角色、規模與採購方式。', '建立名單：多來源蒐集 + 人工/系統驗證（公司、職位、Email）。', '訊息框架：一封信只講一個痛點 + 一個證據 + 一個 CTA。', '跟進節奏：4–6 次節奏式跟進，逐步加證據（案例/規格/應用）。', '回覆分類：合格/待培育/不匹配，並交付詢盤摘要與對話紀錄。'],
      en: ['Define ICP: market, industry, channel role, size, and buying style.', 'Build lists: multi-source collection with human + system validation.', 'Messaging: one pain point + one proof + one CTA per email.', 'Cadence: 4–6 structured follow-ups with different proof points.', 'Reply triage: qualified / nurture / no-fit, delivered with summaries and logs.'],
    },
    tools: {
      zh: ['名單來源：Google、LinkedIn、產業協會/目錄、展會名單、進出口資料（依市場）。', 'Email 驗證與寄送規範：降低跳退並維持網域信譽。', '追蹤與管理：表格或 CRM（已寄/已回/待跟進/已交付）。'],
      en: ['Sourcing: Google, LinkedIn, directories/associations, trade fairs, import data (where applicable).', 'Deliverability: validation + sending discipline to reduce bounces and protect domain reputation.', 'Tracking: spreadsheet or CRM (sent/replied/follow-up/hand-off).'],
    },
    checklist: {
      zh: ['定義 ICP（市場/產業/角色/規模）。', '建立 100–300 家候選清單並驗證 Email。', '準備 1 頁產品摘要（規格/差異點/交期/MOQ）。', '設計 4–6 次跟進節奏與回覆分類規則。'],
      en: ['Define ICP (market, industry, role, size).', 'Build and validate a list of 100–300 prospects.', 'Prepare a one-page product brief (specs, proof, lead time, MOQ).', 'Create a 4–6 follow-up cadence and reply triage rules.'],
    },
    results: {
      zh: [
        { label: '名單交付', value: 'Excel', desc: '寄信名單 + 開信名單，可直接用於業務開發。' },
        { label: '詢盤交付', value: '可追蹤', desc: '每個詢盤包含公司、聯絡方式、需求資訊與對話紀錄。' },
        { label: '流程資產', value: '可複製', desc: '把「一次性開發」變成可持續的海外開發系統。' },
      ],
      en: [
        { label: 'Buyer lists delivered', value: 'Excel', desc: 'Sent list + opens list ready for your team to use.' },
        { label: 'Qualified inquiries', value: 'Trackable', desc: 'Each inquiry includes company, contact, needs, and conversation logs.' },
        { label: 'Process assets', value: 'Repeatable', desc: 'Turn one-off outreach into a sustainable export growth system.' },
      ],
    },
    funnel: {
      zh: [
        { label: '目標公司', value: '5000' },
        { label: '候選名單', value: '500' },
        { label: '有效回覆', value: '100' },
        { label: '合格詢盤', value: '20' },
        { label: '會議/下一步', value: '10' },
      ],
      en: [
        { label: 'Target companies', value: '5000' },
        { label: 'Prospects', value: '500' },
        { label: 'Replies', value: '100' },
        { label: 'Qualified', value: '20' },
        { label: 'Meetings', value: '10' },
      ],
    },
    workflow: {
      zh: ['市場研究', '目標買家清單', '線索資格審核', '主動開發', '會議'],
      en: ['Market Research', 'Target Buyer List', 'Lead Qualification', 'Cold Outreach', 'Meetings'],
    },
    marketMap: {
      zh: ['美國', '德國', '日本', '中東', '東南亞'],
      en: ['USA', 'Germany', 'Japan', 'Middle East', 'Southeast Asia'],
    },
    industries: {
      zh: ['機械設備', '電子零組件', '五金工具', '包材/材料', '工業設備'],
      en: ['Machinery', 'Electronics', 'Hardware Tools', 'Packaging/Materials', 'Industrial Equipment'],
    },
    caseStudy: {
      title: { zh: '五金工具製造商：3 個月累計 50–60 個有效詢盤', en: 'Hardware manufacturer: 50–60 qualified inquiries in 3 months' },
      desc: { zh: '建立 500+ 目標名單並優化開信率至 40%+，超過 10 個潛在客戶進入樣品與報價階段。', en: 'Built 500+ targets, improved open rates to 40%+, and moved 10+ prospects into sampling and quoting.' },
      link: '/case-studies/hardware',
    },
    caseStudyStats: {
      zh: [
        { label: '研究公司', value: '2000' },
        { label: '驗證名單', value: '500' },
        { label: '有效回覆', value: '60' },
        { label: '會議/樣品', value: '10+' },
      ],
      en: [
        { label: 'Companies researched', value: '2000' },
        { label: 'Verified prospects', value: '500' },
        { label: 'Qualified replies', value: '60' },
        { label: 'Meetings / samples', value: '10+' },
      ],
    },
    caseStudySections: [
      {
        title: { zh: 'Client background', en: 'Client background' },
        content: {
          zh: ['客戶為五金工具製造商，過去主要依賴展會與平台詢盤，海外開發高度不穩定。'],
          en: ['A hardware tools manufacturer previously relied on fairs and platform inquiries, resulting in unstable inbound volume and quality.'],
        },
      },
      {
        title: { zh: 'Challenge', en: 'Challenge' },
        content: {
          zh: ['名單不精準（買家角色與職位錯誤）、開發節奏不連續、回覆缺乏分類與摘要，導致商機大量流失。'],
          en: ['Unverified lists, inconsistent follow-ups, and no reply triage caused lead leakage and low meeting conversion.'],
        },
      },
      {
        title: { zh: 'Strategy & execution', en: 'Strategy & execution' },
        content: {
          zh: ['定義 ICP 與買家角色（Importer/Distributor/Brand），建置 500+ 驗證名單並規劃 4–6 次跟進節奏；以案例與規格作為證據點，逐步推進會議/樣品。'],
          en: ['We clarified ICP and buyer roles, built 500+ verified prospects, and ran a 4–6 touch cadence with proof points (cases, specs, applications) to drive meetings and samples.'],
        },
      },
      {
        title: { zh: 'Results', en: 'Results' },
        content: {
          zh: ['3 個月累計 50–60 個有效詢盤，超過 10 個潛在客戶進入樣品與報價階段，開發流程沉澱為可複製 SOP。'],
          en: ['Within 3 months, the client received 50–60 qualified inquiries, with 10+ prospects progressing to sampling and quoting, supported by a repeatable SOP.'],
        },
      },
    ],
    faq: [
      {
        q: { zh: '你們交付什麼？', en: 'What do you deliver?' },
        a: {
          zh: '主要交付包含：寄信名單與開信名單（Excel）、詢盤整理（公司/聯絡方式/需求/對話紀錄），以及可追蹤的跟進節奏建議。',
          en: 'Deliverables include: sent list + opens list (Excel), organized inquiries (company/contact/needs/logs), and a trackable follow-up cadence.',
        },
      },
      {
        q: { zh: '多久會看到結果？', en: 'How soon will we see results?' },
        a: {
          zh: '通常前 2–4 週完成 ICP、名單與訊息測試；第 4–8 週開始穩定累積回覆與詢盤（視產業/市場而定）。',
          en: 'Typically 2–4 weeks for ICP, lists, and message testing; weeks 4–8 to see consistent replies and inquiries depending on market/industry.',
        },
      },
      {
        q: { zh: '如何避免寄信進垃圾信？', en: 'How do you avoid spam filters?' },
        a: {
          zh: '以名單驗證與寄送規範降低跳退，避免一次大量寄送；內容聚焦且真實，並以節奏式跟進取代爆量寄信。',
          en: 'We validate lists, avoid bulk blasting, keep messages specific and real, and use cadence-based follow-ups instead of volume.',
        },
      },
    ],
    ctaTitle: { zh: '取得你的出口市場分析', en: 'Get Your Export Market Analysis' },
    ctaDesc: { zh: '提交產品與目標市場，我們回覆市場切入、買家角色與可行的開發策略。', en: 'Submit your product and markets. We’ll reply with entry approach, buyer roles, and a feasible lead-gen strategy.' },
    ctaButtons: {
      primary: { label: { zh: '取得100家潛在買家名單', en: 'Get 100 Potential Buyers List' }, href: '/buyers-list' },
      secondary: { label: { zh: '預約諮詢', en: 'Book Consultation' }, href: '/contact' },
      tertiary: { label: { zh: '免費出口市場分析', en: 'Free Export Market Analysis' }, href: '/export-market-analysis' },
    },
    seoSections: [
      {
        id: 'what-is-export-lead-generation',
        title: { zh: 'What is Export Lead Generation（什麼是外銷客戶開發）', en: 'What is export lead generation?' },
        content: {
          zh: [
            '外銷客戶開發（Export Lead Generation）不是「寄更多信」，而是一套可驗證、可追蹤、可持續的流程：先把目標市場、買家角色與理想客戶條件（ICP）定義清楚，再建立可用名單，最後用節奏式開發把回覆轉成可交付詢盤。',
            '對製造業而言，出口開發最大的風險通常不是沒有需求，而是買家分散、採購鏈複雜、聯絡窗口不透明。你需要把「市場研究 → 目標買家清單 → 線索資格審核 → 主動開發 → 會議」做成系統，才能避免每次都重新從零開始。',
          ],
          en: [
            'Export lead generation is not about sending more emails. It is a measurable system: define markets, buyer roles, and ICP first; build a verified prospect list; then run cadence-based outreach that turns replies into qualified inquiries you can hand off to sales.',
            'For manufacturers, export growth usually fails due to fragmented buyers, complex procurement chains, and unclear decision-makers. A systemized flow—market research → target buyer list → lead qualification → cold outreach → meetings—reduces randomness and increases predictability.',
          ],
        },
      },
      {
        id: 'how-manufacturers-find-overseas-buyers',
        title: { zh: 'How Manufacturers Find Overseas Buyers（製造業如何找到海外買家）', en: 'How manufacturers find overseas buyers' },
        content: {
          zh: [
            '製造業找海外買家，通常會同時存在多種買家類型：進口商（Importer）、經銷商（Distributor）、品牌商（Brand）、OEM/ODM 買家、系統整合商（Integrator）等。不同角色的關注點不同：有人重視交期與穩定供應，有人重視認證與規格，有人重視價格與 MOQ。',
            '有效的做法是先用產品線與市場分層，把「最可能成交」的買家角色放在第一順位，並在名單建置時就把角色標籤與驗證條件加進去，降低無效開發。',
          ],
          en: [
            'Manufacturers often face multiple buyer types: importers, distributors, brands, OEM buyers, and industrial partners/integrators. Each role values different things—lead time, certification, pricing tiers, MOQ, service capability, or exclusivity terms.',
            'A practical approach is to segment by product line and market tier first, prioritize the most likely buyer roles, and tag prospects during list building so you reduce wasted outreach from the start.',
          ],
        },
        bullets: {
          zh: ['Distributors：擁有當地客戶關係與通路覆蓋。', 'Importers：擅長進口與供應鏈，通常需要穩定交付。', 'OEM buyers：更重視規格一致性與供應能力。', 'Industrial partners：重視應用與售後支援。'],
          en: ['Distributors: local coverage and customer relationships.', 'Importers: supply chain and reliable fulfillment.', 'OEM buyers: consistency, specs, and capacity.', 'Industrial partners: application fit and service support.'],
        },
      },
      {
        id: 'our-lead-generation-process',
        title: { zh: 'Our Lead Generation Process（我們的開發流程）', en: 'Our lead generation process' },
        content: {
          zh: [
            '我們把流程固定為 5 個步驟，並在每一步都有明確輸出物：Market Research → Target Buyer List → Lead Qualification → Cold Outreach → Meetings。',
            '這個流程的重點不是華麗的文案，而是「可追蹤」。你可以看到每週名單新增量、寄送量、開信/回覆、以及被判定為合格詢盤的數量，讓你知道下一步該優化名單、訊息，還是跟進節奏。',
            '如果回覆率偏低，我們會優先檢查「名單角色是否正確」與「證據點是否足夠」。如果開信率偏低，則會回到主旨、寄送規範與名單品質。每個指標都有對應的優化方法，而不是憑感覺改文案。',
          ],
          en: [
            'We run a fixed 5-step process with clear deliverables at each step: Market Research → Target Buyer List → Lead Qualification → Cold Outreach → Meetings.',
            'The key is not fancy copywriting—it is trackability. You can measure list growth, sends, opens/replies, and qualified inquiries weekly, so you know whether to optimize targeting, messaging, or cadence.',
            'If replies are low, we first validate role targeting and proof assets. If opens are low, we revisit subject lines, sending practices, and list quality. Every metric has a corresponding optimization path—no guesswork.',
          ],
        },
      },
      {
        id: 'tools-we-use',
        title: { zh: 'Tools We Use（我們常用的工具與資料來源）', en: 'Tools we use (sources and workflow)' },
        content: {
          zh: [
            '我們會依產業與市場選擇最合適的資料來源與驗證方式，並把資料整理成你可以直接使用的格式（Excel/Sheet）。重點不是工具名稱，而是「可追蹤」與「可交付」。',
            '常見來源包含：產業目錄、展會名單、協會名錄、公司網站與新聞、以及可交叉驗證的商業資料庫。',
          ],
          en: [
            'We choose sources based on industry and market, validate data, and deliver it in a ready-to-use format (Excel/Sheet). The goal is trackability and deliverability—not tool hype.',
            'Common sources include directories, trade shows, associations, company websites/news, and cross-verifiable business databases.',
          ],
        },
        bullets: {
          zh: ['資料來源分群（你知道名單從哪來）', '去重與清洗（避免無效寄送）', '角色標籤（Importer/Distributor/Brand/OEM）', '回覆結果回饋到資料庫（越跑越準）'],
          en: ['Source segmentation (you know where lists come from)', 'Dedup and cleaning (reduce waste)', 'Role tagging (importer/distributor/brand/OEM)', 'Feedback loop from replies (compounding accuracy)'],
        },
      },
    ],
    geoSections: [
      {
        id: '7-ways',
        title: { zh: '7 Ways Manufacturers Find Overseas Buyers（7 種找海外買家的方法）', en: '7 ways manufacturers find overseas buyers' },
        note: {
          zh: '這份清單適合拿來做內部 checklist，也適合 AI 搜尋引用。',
          en: 'A practical checklist that is easy to implement and easy for AI search engines to cite.',
        },
        items: {
          zh: ['B2B databases（B2B 資料庫）', 'LinkedIn（決策鏈觸達）', 'Trade directories（產業目錄）', 'Industry associations（產業協會）', 'Trade shows（展會名單）', 'Cold outreach（Email/LinkedIn 節奏式開發）', 'Distributor search（通路/經銷開發）'],
          en: ['B2B databases', 'LinkedIn (decision-chain access)', 'Trade directories', 'Industry associations', 'Trade shows', 'Cold outreach (email/LinkedIn cadence)', 'Distributor search'],
        },
      },
    ],
    relatedLinks: [
      { label: { zh: '經銷商開發（核心服務）', en: 'Distributor Development (Core)' }, href: '/services/distributor-development' },
      { label: { zh: '外貿業務外包（核心服務）', en: 'Export Sales Outsourcing (Core)' }, href: '/services/export-sales-outsourcing' },
      { label: { zh: '方法：Buyer Database Building', en: 'Method: Buyer Database Building' }, href: '/buyer-database-building' },
      { label: { zh: '指南：How to find overseas buyers', en: 'Guide: How to find overseas buyers' }, href: '/blog/how-to-find-overseas-buyers' },
    ],
  } satisfies ServiceSeo,
  distributorDevelopment: {
    slug: 'distributor-development',
    path: '/services/distributor-development',
    title: { zh: '經銷商開發服務｜建立海外通路網路', en: 'Distributor Development | Build Overseas Channels' },
    description: { zh: '用市場分層與通路策略，開發海外經銷/代理與批發通路，建立更可預期的出貨與覆蓋。', en: 'Develop distributors and agents with market segmentation and channel strategy to build predictable coverage and revenue.' },
    h1: { zh: '經銷商開發服務', en: 'Distributor Development for Manufacturers' },
    whoFor: {
      zh: ['已有穩定產品線的製造業', '想拓展海外通路的 OEM/ODM', '需要找代理/經銷合作夥伴的企業', '想降低海外市場試錯成本的公司'],
      en: ['Manufacturers with stable product lines', 'OEM/ODM exporters expanding overseas channels', 'Businesses recruiting distributors/agents', 'Teams reducing market-entry trial-and-error'],
    },
    problem: {
      zh: ['海外市場有需求，但找不到可靠的通路夥伴與對口人。', '不清楚通路角色（Importer/Distributor/Agent/Integrator）差異，合作條件談不攏。', '經銷開發靠亂槍打鳥，沒有可追蹤 pipeline，結果不可預期。'],
      en: ['You see demand overseas but can’t find reliable channel partners.', 'Partner roles differ (importer/distributor/agent/integrator) and terms get stuck.', 'Outreach is random without a trackable pipeline, so results are unpredictable.'],
    },
    solution: {
      zh: ['我們用「市場分層 + 通路地圖 + 合作 Offer 設計 + 多觸點跟進」把經銷開發做成系統，讓合作條件可被評估、可被推進。', '你會得到一份可追蹤的經銷名單、清晰的合作條款框架，以及可複製的跟進節奏。'],
      en: ['We systemize channel development with market tiers, channel mapping, partnership offer design, and multi-touch follow-ups.', 'You get a trackable shortlist, clear term frameworks, and a repeatable cadence to drive agreements.'],
    },
    whatIs: {
      zh: ['經銷商開發是以「市場－通路－合作模式」為骨架，找到具備銷售能力的通路夥伴，並用可落地的合作方案推進簽約。'],
      en: ['Distributor development finds capable channel partners and moves them toward agreement with a practical partnership offer.'],
    },
    howWorks: {
      zh: ['我們先定義適合通路合作的產品線與市場，再建立候選經銷名單、設計合作話術與條件，最後以多觸點跟進推進合作。'],
      en: ['We define products and markets suitable for channels, build a shortlist, design partnership messaging and terms, then drive multi-touch follow-ups.'],
    },
    process: {
      zh: ['市場分層：優先市場/次要市場與切入策略。', '通路地圖：Importer/Distributor/Agent/Integrator 角色拆解。', '名單建立：依產品線與地區建立可追蹤清單。', '合作 Offer 設計：MOQ、區域保護、價格層級與支援條件。', '跟進節奏：Email + LinkedIn + 會議邀約，推進簽約與試單。'],
      en: ['Market prioritization with entry tactics.', 'Channel mapping by role type.', 'Trackable distributor list building by product and region.', 'Partnership offer design: MOQ, territory, pricing tiers, support.', 'Multi-touch cadence to drive agreements and trial orders.'],
    },
    tools: {
      zh: ['通路來源：產業協會/展會名單/經銷目錄/Google 搜尋/LinkedIn。', '名單驗證：公司網站/通路範圍/產品線互補性/決策人職位。', '追蹤推進：以表格或 CRM 記錄分層（有機會/需培育/不匹配）。'],
      en: ['Sourcing: associations, trade fairs, distributor directories, Google, LinkedIn.', 'Verification: websites, territory scope, product-line fit, decision-maker roles.', 'Tracking: spreadsheet or CRM segmentation (fit/nurture/no-fit).'],
    },
    checklist: {
      zh: ['完成市場分層與切入假設。', '定義合作條件草案（MOQ/區域/價格層級/支援）。', '建立 50–150 家候選經銷清單並驗證。', '安排 4–6 次節奏式跟進與會議邀約。'],
      en: ['Finish market tiers and entry hypotheses.', 'Draft partnership terms (MOQ, territory, tiers, support).', 'Build and verify a shortlist of 50–150 partners.', 'Run a 4–6 touch follow-up cadence and meeting invites.'],
    },
    results: {
      zh: [
        { label: '通路名單交付', value: '可追蹤', desc: '依市場/角色分層，讓開發不再亂槍打鳥。' },
        { label: '合作條件框架', value: '可談判', desc: '用可計算的 Offer 讓對方能算出利潤與風險。' },
        { label: '會議與試單推進', value: '可預期', desc: '以多觸點節奏推進會議，縮短信任建立時間。' },
      ],
      en: [
        { label: 'Trackable partner shortlist', value: 'Structured', desc: 'Tiered by market and role so outreach is not random.' },
        { label: 'Negotiable terms', value: 'Clear', desc: 'A calculable offer helps partners evaluate profit and risk.' },
        { label: 'Meetings and trials', value: 'Predictable', desc: 'Multi-touch cadence drives calls and trial orders faster.' },
      ],
    },
    funnel: {
      zh: [
        { label: '候選通路', value: '500' },
        { label: '驗證名單', value: '150' },
        { label: '有效回覆', value: '40' },
        { label: '商務會議', value: '15' },
        { label: '簽約/試單', value: '3' },
      ],
      en: [
        { label: 'Candidates', value: '500' },
        { label: 'Verified', value: '150' },
        { label: 'Replies', value: '40' },
        { label: 'Meetings', value: '15' },
        { label: 'Signed/Trials', value: '3' },
      ],
    },
    workflow: {
      zh: ['市場研究', '通路地圖', '夥伴名單', '合作條件', '簽約/試單'],
      en: ['Market Research', 'Channel Mapping', 'Partner Shortlist', 'Offer & Terms', 'Signed/Trials'],
    },
    marketMap: {
      zh: ['歐洲（EU）', '美國', '德國', '日本', '中東', '東南亞'],
      en: ['Europe (EU)', 'USA', 'Germany', 'Japan', 'Middle East', 'Southeast Asia'],
    },
    industries: { zh: ['工業設備', '五金工具', '電子零組件', '包材/材料', '醫療耗材'], en: ['Industrial Equipment', 'Hardware Tools', 'Electronics', 'Packaging/Materials', 'Medical Consumables'] },
    caseStudy: {
      title: { zh: '機械設備：協助在歐洲找到 23 家經銷商候選', en: 'How We Helped a Machinery Manufacturer Find 23 Distributors in Europe' },
      desc: { zh: '用市場分層、通路地圖與合作條件設計，建立可推進的經銷 pipeline，並安排關鍵會議。', en: 'We combined market tiers, channel mapping, and offer design to build a progressable distributor pipeline and schedule key meetings.' },
      link: '/case-studies/machinery',
    },
    caseStudyStats: {
      zh: [
        { label: '研究公司', value: '2000' },
        { label: '候選名單', value: '350' },
        { label: '有效回覆', value: '27' },
        { label: '商務會議', value: '9' },
      ],
      en: [
        { label: 'Companies researched', value: '2000' },
        { label: 'Prospects', value: '350' },
        { label: 'Replies', value: '27' },
        { label: 'Meetings', value: '9' },
      ],
    },
    caseStudySections: [
      {
        title: { zh: 'Client background', en: 'Client background' },
        content: {
          zh: ['客戶為機械設備製造商，具備成熟產品線與海外出貨能力，目標是建立歐洲經銷體系。'],
          en: ['A machinery manufacturer with a mature product line and export capability wanted to build a distributor network across Europe.'],
        },
      },
      {
        title: { zh: 'Challenge', en: 'Challenge' },
        content: {
          zh: ['市場分散、通路角色多（Importer/Distributor/Integrator），且合作條件不清晰導致開發推進緩慢。'],
          en: ['Fragmented markets and varied channel roles slowed progress, and unclear partnership terms reduced response and meeting conversion.'],
        },
      },
      {
        title: { zh: 'Strategy', en: 'Strategy' },
        content: {
          zh: ['先完成市場分層（優先國家/次要國家）與通路地圖，再用合作 Offer（MOQ、區域、支援）把價值與條件講清楚，讓對方能計算利潤。'],
          en: ['We prioritized markets, mapped channel roles, then packaged a partnership offer (MOQ, territory, support) so partners could evaluate economics quickly.'],
        },
      },
      {
        title: { zh: 'Execution', en: 'Execution' },
        content: {
          zh: ['研究 2000 家公司，篩出 350 家候選並完成資料驗證；以 Email + LinkedIn 多觸點推進，完成回覆分類與會議邀約，並沉澱為可複製 SOP。'],
          en: ['We researched 2000 companies, built and validated 350 prospects, then ran multi-touch outreach (email + LinkedIn) with reply triage and meeting invites, documented as repeatable SOP.'],
        },
      },
      {
        title: { zh: 'Results', en: 'Results' },
        content: {
          zh: ['建立 23 家高匹配度經銷商候選清單，拿到 27 個有效回覆並安排 9 場商務會議，讓客戶能推進試單與區域合作談判。'],
          en: ['We identified 23 high-fit distributor candidates, generated 27 meaningful replies, and scheduled 9 meetings, enabling negotiations for trials and territory partnerships.'],
        },
      },
    ],
    faq: [
      { q: { zh: '經銷商會排斥新的供應商嗎？', en: 'Do distributors reject new suppliers?' }, a: { zh: '不一定。關鍵在於你能提供差異化、穩定交付與清晰合作條件，讓他們算得出利潤與風險。', en: 'Not always. Differentiation, stable delivery, and clear terms help them evaluate profit and risk.' } },
      { q: { zh: '要先給獨家嗎？', en: 'Should we offer exclusivity upfront?' }, a: { zh: '通常不建議。可以用階段性條件（達成量/覆蓋/推廣）來換取區域保護，降低風險。', en: 'Usually no. Use milestone-based terms to earn territory protection and reduce risk.' } },
    ],
    ctaTitle: { zh: '建立你的海外通路網路', en: 'Build your overseas channel network' },
    ctaDesc: { zh: '我們協助你用市場分層＋合作條件設計，把經銷開發做成可持續的系統。', en: 'We combine market segmentation and partnership terms to make channel development repeatable.' },
    ctaButtons: {
      primary: { label: { zh: '取得100家潛在經銷商名單', en: 'Get 100 Potential Distributors List' }, href: '/distributor-list' },
      secondary: { label: { zh: '預約諮詢', en: 'Book Consultation' }, href: '/contact' },
      tertiary: { label: { zh: '免費出口市場分析', en: 'Free Export Market Analysis' }, href: '/export-market-analysis' },
    },
    seoSections: [
      {
        id: 'what-is-distributor-development',
        title: { zh: 'What is Distributor Development（什麼是經銷商開發）', en: 'What is distributor development?' },
        content: {
          zh: [
            '經銷商開發的核心不是「找更多名單」，而是把通路角色、合作條件與推進節奏設計清楚，讓合作可以被評估、被推進、被簽約。對製造業而言，經銷商往往是最快進入市場的槓桿。',
            '我們把流程固定為：市場分層 → 通路地圖 → 夥伴名單 → 合作 Offer → 跟進節奏 → 會議/試單，並確保每一步都有可交付成果。',
          ],
          en: [
            'Distributor development is not about collecting more contacts. It is about designing channel roles, partnership economics, and a cadence that moves deals forward—so agreements and trial orders become predictable.',
            'We run a fixed flow: market tiers → channel mapping → partner shortlist → offer & terms → cadence → meetings/trials, with deliverables at each step.',
          ],
        },
      },
      {
        id: 'how-to-find-distributors',
        title: { zh: 'How to Find Distributors（如何找到經銷商）', en: 'How to find distributors' },
        content: {
          zh: [
            '找經銷商不是把名單丟進去寄信就會成交。你需要先定義：你要的是區域覆蓋還是專案型推進？你的產品線是否適合通路（可標準化、可庫存、售後可控）？',
            '我們通常會先做通路地圖，把市場中的 Importer/Distributor/Agent/Integrator 角色分清楚，再以合作條款框架（MOQ、區域、價格層級、支援）讓對方能計算利潤，推進會議與試單。',
          ],
          en: [
            'Finding distributors is not about blasting a list. You must define whether you need regional coverage or project-driven selling, and whether your products fit channel distribution (standardizable, stockable, serviceable).',
            'We map channel roles (importer/distributor/agent/integrator) and use a terms framework (MOQ, territory, tiers, support) so partners can evaluate economics and move to meetings and trials.',
          ],
        },
        bullets: {
          zh: ['通路地圖：先分清角色再做名單。', '條款框架：讓合作可被評估。', '節奏推進：多觸點跟進到會議。', '里程碑交換：以達成量換取區域保護。'],
          en: ['Channel mapping before list building.', 'Terms framework for evaluability.', 'Multi-touch cadence to meetings.', 'Milestones to earn territory protection.'],
        },
      },
    ],
    geoSections: [
      {
        id: 'framework',
        title: { zh: 'Framework：市場分層 → 通路角色 → Offer → 節奏', en: 'Framework: tiers → roles → offer → cadence' },
        items: {
          zh: ['優先市場 vs 次要市場（資源先放哪）', 'Importer/Distributor/Agent/Integrator 角色拆解', 'MOQ、區域、價格層級、支援條件（讓對方算得出利潤）', 'Email + LinkedIn 多觸點推進與會議邀約'],
          en: ['Prioritize markets (where to focus)', 'Map roles (importer/distributor/agent/integrator)', 'Define terms (MOQ, territory, tiers, support) so partners can evaluate profit', 'Run multi-touch cadence and meeting invites'],
        },
      },
    ],
    relatedLinks: [
      { label: { zh: '外貿客戶開發（核心服務）', en: 'Export Lead Generation (Core)' }, href: '/services/export-lead-generation' },
      { label: { zh: '外貿業務外包（核心服務）', en: 'Export Sales Outsourcing (Core)' }, href: '/services/export-sales-outsourcing' },
      { label: { zh: '免費出口市場分析（CTA）', en: 'Free Export Market Analysis' }, href: '/export-market-analysis' },
      { label: { zh: '如何找到海外經銷商（指南）', en: 'How to find international distributors (Guide)' }, href: '/blog/how-to-find-international-distributors' },
    ],
  } satisfies ServiceSeo,
  exportSalesOutsourcing: {
    slug: 'export-sales-outsourcing',
    path: '/services/export-sales-outsourcing',
    title: { zh: '外貿業務外包服務｜企業只需報價與出貨', en: 'Export Sales Outsourcing | You Quote & Ship, We Do the Rest' },
    description: { zh: '我們承接除「報價與出貨」以外的外貿業務行為：名單、開發、跟進、回覆分類與詢盤交付，讓外貿開發變成可複製的系統。', en: 'We run export sales operations except quotation and shipping: lists, outreach, follow-ups, reply triage, and qualified inquiry delivery.' },
    h1: { zh: '外貿業務外包服務', en: 'Export Sales Outsourcing for Manufacturers' },
    whoFor: {
      zh: ['外貿人手不足的製造業', '想拓展海外但不想先擴編', '需要標準化開發與跟進 SOP 的企業', '希望把詢盤交付做成可追蹤流程的團隊'],
      en: ['Manufacturers short on export sales capacity', 'Teams scaling overseas without hiring first', 'Businesses needing standardized outreach and follow-up SOP', 'Companies wanting trackable inquiry delivery'],
    },
    problem: {
      zh: ['外貿人手不足，業務被開發與跟進拖垮，無法專注成交。', '詢盤與名單沒有系統，跟進節奏靠個人記憶，容易流失。', '想拓展海外，但招募/培訓一個可上手的外貿團隊成本太高、週期太長。'],
      en: ['Your sales team is overloaded, so follow-ups slip and deals stall.', 'Lists and inquiries are not tracked systematically, causing lead leakage.', 'Hiring and training an export team is expensive and slow.'],
    },
    solution: {
      zh: ['我們用「流程 + 名單 + 節奏 + 回覆分類」把外貿開發做成可交付的系統，讓企業只需專注：報價與出貨。', '你會獲得可追蹤的 pipeline 與可複製的 SOP，降低對個人能力的依賴。'],
      en: ['We turn outbound into a deliverable system (process, lists, cadence, reply triage) so you only focus on quoting and shipping.', 'You get a trackable pipeline and repeatable SOP instead of relying on individual heroics.'],
    },
    whatIs: {
      zh: ['外貿業務外包是由專業團隊承接海外客戶開發與跟進，把外貿流程標準化並持續交付合格詢盤，讓企業不用先擴編也能做海外增長。'],
      en: ['Export sales outsourcing is a managed workflow that standardizes outreach and follow-up to continuously deliver qualified export inquiries without hiring a full team.'],
    },
    howWorks: {
      zh: ['製造業要找到海外買家，關鍵不是「寄更多信」，而是：先把 ICP 與市場優先序定清楚，再用可驗證的名單、訊息框架與跟進節奏，建立一條可追蹤的 pipeline。'],
      en: ['Manufacturers win overseas buyers by clarifying ICP and market priorities first, then building a verified list and running a repeatable message + follow-up cadence that creates a trackable pipeline.'],
    },
    process: {
      zh: ['建立買家畫像與市場優先順序。', '建置買家名單與資料驗證。', '撰寫開發信與多觸點節奏（Email/LinkedIn）。', '回覆分類與初步需求確認。', '將合格詢盤交付給你的團隊推進成交。'],
      en: ['Define ICP and market priorities.', 'Build and verify buyer lists.', 'Write outreach and multi-touch cadence.', 'Qualify replies and confirm requirements.', 'Hand off qualified inquiries for closing.'],
    },
    tools: {
      zh: ['買家資料：Google/LinkedIn/產業目錄/展會名單/進出口資料（依市場適用）。', 'Email 驗證與投遞：名單驗證與寄送規範，降低跳退與垃圾信風險。', '追蹤：用表格或 CRM 記錄狀態（已寄/已回/待跟進/已交付）。'],
      en: ['Data sourcing: Google, LinkedIn, directories, trade fairs, import data (where applicable).', 'Deliverability: email validation and sending discipline to reduce bounces.', 'Tracking: spreadsheet or CRM status tracking (sent/replied/follow-up/hand-off).'],
    },
    checklist: {
      zh: ['定義 ICP（產業/角色/國家/規模）。', '準備 1 頁產品摘要（規格/差異點/交期/MOQ）。', '建立 100–300 家候選名單並驗證聯絡方式。', '設計 4–6 次跟進節奏與回覆分類規則。'],
      en: ['Define ICP (industry, role, country, size).', 'Prepare a one-page product brief (specs, proof, lead time, MOQ).', 'Build and validate a list of 100–300 prospects.', 'Create a 4–6 follow-up cadence and reply triage rules.'],
    },
    results: {
      zh: [
        { label: '合格詢盤交付', value: '持續交付', desc: '回覆分類與下一步標準化，讓團隊可以穩定跟進。' },
        { label: '流程標準化', value: 'SOP 化', desc: '把開發與跟進做成系統，而不是靠運氣或個人。' },
        { label: '不擴編也能做', value: '降低成本', desc: '不用先招募完整外貿團隊，也能啟動海外開發。' },
      ],
      en: [
        { label: 'Qualified inquiry delivery', value: 'Ongoing', desc: 'Standardized triage and next steps for consistent follow-ups.' },
        { label: 'Repeatable operations', value: 'SOP', desc: 'Make outreach a system, not a gamble or a person-dependent task.' },
        { label: 'Scale without hiring', value: 'Lean', desc: 'Start export development without building a full in-house team first.' },
      ],
    },
    funnel: {
      zh: [
        { label: '目標公司', value: '5000' },
        { label: '候選名單', value: '500' },
        { label: '有效回覆', value: '100' },
        { label: '合格詢盤', value: '20' },
        { label: '會議/下一步', value: '10' },
      ],
      en: [
        { label: 'Target companies', value: '5000' },
        { label: 'Prospects', value: '500' },
        { label: 'Replies', value: '100' },
        { label: 'Qualified', value: '20' },
        { label: 'Meetings', value: '10' },
      ],
    },
    workflow: {
      zh: ['ICP 與市場', '名單建立', '開發節奏', '跟進與資格審核', '詢盤交付'],
      en: ['ICP & Markets', 'List Building', 'Outreach Cadence', 'Follow-up & Qualify', 'Inquiry Hand-off'],
    },
    marketMap: {
      zh: ['美國', '歐洲', '德國', '日本', '中東', '東南亞'],
      en: ['USA', 'Europe', 'Germany', 'Japan', 'Middle East', 'Southeast Asia'],
    },
    industries: { zh: ['機械設備', '電子零組件', '塑膠/材料', '工業設備'], en: ['Machinery', 'Electronics', 'Plastics/Materials', 'Industrial Equipment'] },
    caseStudy: {
      title: { zh: '工業零組件：不擴編也能穩定交付詢盤', en: 'Industrial components: consistent inquiries without hiring' },
      desc: { zh: '用名單＋節奏＋回覆分類，把外貿開發變成可追蹤 pipeline，讓企業只需專注報價與出貨。', en: 'We ran lists, cadence, and reply triage to deliver a trackable pipeline so the client focused on quoting and shipping.' },
      link: '/case-studies/components',
    },
    caseStudyStats: {
      zh: [
        { label: '研究公司', value: '1500' },
        { label: '寄送', value: '600' },
        { label: '有效回覆', value: '35' },
        { label: '合格詢盤', value: '12' },
      ],
      en: [
        { label: 'Companies researched', value: '1500' },
        { label: 'Sent', value: '600' },
        { label: 'Replies', value: '35' },
        { label: 'Qualified', value: '12' },
      ],
    },
    caseStudySections: [
      {
        title: { zh: 'Client background', en: 'Client background' },
        content: {
          zh: ['客戶為工業零組件製造商，產品力不錯但外貿人力不足，導致跟進斷點與詢盤流失。'],
          en: ['An industrial components manufacturer had strong products but insufficient export sales capacity, leading to follow-up gaps and lost inquiries.'],
        },
      },
      {
        title: { zh: 'Challenge', en: 'Challenge' },
        content: {
          zh: ['招募與培訓週期長，短期內無法補齊外貿團隊；同時需要把名單與跟進做成可追蹤流程。'],
          en: ['Hiring and onboarding would take months, but the business needed a trackable pipeline immediately.'],
        },
      },
      {
        title: { zh: 'Execution', en: 'Execution' },
        content: {
          zh: ['建置驗證名單、撰寫訊息框架、執行 4–6 次跟進節奏；回覆分類與初步需求確認後交付合格詢盤。'],
          en: ['We built verified lists, wrote messaging, ran a 4–6 touch cadence, triaged replies, confirmed initial requirements, and delivered qualified inquiries.'],
        },
      },
      {
        title: { zh: 'Results', en: 'Results' },
        content: {
          zh: ['在不擴編前提下建立可追蹤 pipeline，並持續交付合格詢盤，讓內部團隊集中在報價與成交。'],
          en: ['The client gained a trackable pipeline and consistent qualified inquiries without hiring, allowing the internal team to focus on quoting and closing.'],
        },
      },
    ],
    faq: [
      { q: { zh: '你們會幫忙回覆客戶嗎？', en: 'Do you reply to buyers for us?' }, a: { zh: '可以依合作模式調整：可做初步需求確認與篩選，也可只交付回覆由你們自行跟進。', en: 'Yes, depending on engagement: we can do initial qualification or simply deliver replies for your team to follow up.' } },
      { q: { zh: '如何確保詢盤品質？', en: 'How do you ensure lead quality?' }, a: { zh: '透過名單篩選規則、訊息框架與回覆分類流程，把不匹配的詢盤在前段就過濾掉。', en: 'Through list qualification rules, messaging frameworks, and reply triage to filter poor fits early.' } },
    ],
    ctaTitle: { zh: '想建立可複製的海外開發能力？', en: 'Want repeatable export sales growth?' },
    ctaDesc: { zh: '用流程＋內容＋節奏，把一次性開發變成穩定的增長系統。', en: 'Turn one-off outreach into a stable growth system with process, content, and cadence.' },
    ctaButtons: {
      primary: { label: { zh: '免費出口市場分析', en: 'Free Export Market Analysis' }, href: '/export-market-analysis' },
      secondary: { label: { zh: '預約諮詢', en: 'Book Consultation' }, href: '/contact' },
      tertiary: { label: { zh: '取得100家潛在買家名單', en: 'Get 100 Potential Buyers List' }, href: '/buyers-list' },
    },
    seoSections: [
      {
        id: 'what-is-export-sales-outsourcing',
        title: { zh: 'What is Export Sales Outsourcing（什麼是外貿業務外包）', en: 'What is export sales outsourcing?' },
        content: {
          zh: [
            '外貿業務外包不是把「成交」外包，而是把可以標準化的前段工作外包：名單、開發、跟進、回覆分類與詢盤交付，讓企業把最稀缺的時間花在報價、談判與出貨。',
            '關鍵是流程可追蹤。你必須能看到每週名單新增、寄送與回覆狀態，並且把合格詢盤以一致格式交付，才會真正降低跟進成本。',
          ],
          en: [
            'Export sales outsourcing is not outsourcing the close. It outsources the standardizable front-end work: list building, outreach, follow-ups, reply triage, and inquiry delivery—so your team spends time on quoting, negotiation, and shipping.',
            'The key is trackability. Weekly you should see list growth, outreach metrics, reply status, and standardized inquiry hand-offs that reduce follow-up cost.',
          ],
        },
      },
      {
        id: 'deliverables-and-boundaries',
        title: { zh: 'Deliverables & Boundaries（交付內容與合作邊界）', en: 'Deliverables and boundaries' },
        content: {
          zh: [
            '為了讓外包「可管理」，必須先把包含/不包含講清楚。我們通常承接：名單建置、開發與跟進、回覆分類、初步需求確認與詢盤交付；你方承接：報價、談判、收款與出貨。',
            '我們會把每週工作變成可追蹤報表：寄送量、開信/回覆、詢盤分類、以及下一步建議。這樣你可以清楚知道 pipeline 在哪裡卡住，並快速調整名單、訊息或節奏。',
          ],
          en: [
            'To make outsourcing manageable, scope must be explicit. We typically handle list building, outreach and follow-ups, reply triage, initial requirement confirmation, and inquiry delivery. You handle quoting, negotiation, payment, and shipping.',
            'Weekly, we deliver trackable reporting: sends, opens/replies, inquiry categories, and recommended next steps—so you know where the pipeline is stuck and what to optimize next.',
          ],
        },
        bullets: {
          zh: ['包含：名單/開發/跟進/回覆分類/詢盤交付', '不包含：報價/談判/收款/出貨', '每週交付：數據 + 清單 + 詢盤摘要'],
          en: ['Included: lists, outreach, follow-ups, triage, inquiry delivery', 'Excluded: quoting, negotiation, payment, shipping', 'Weekly delivery: metrics + lists + inquiry summaries'],
        },
      },
    ],
    geoSections: [
      {
        id: 'checklist',
        title: { zh: 'Checklist：你只需要準備哪些資料？', en: 'Checklist: what you need to prepare' },
        items: {
          zh: ['產品一頁式摘要（規格/差異點/交期/MOQ）', '目標市場優先序（先做哪 1–2 個市場）', '可接受的合作條件（價格層級、樣品政策、區域）', '你方的成交流程（報價/樣品/會議/付款條件）'],
          en: ['One-page product brief (specs, proof, lead time, MOQ)', 'Market priorities (start with 1–2 markets)', 'Acceptable terms (tiers, samples, territories)', 'Your closing workflow (quote, sample, meeting, payment terms)'],
        },
      },
    ],
    relatedLinks: [
      { label: { zh: '外貿客戶開發（核心服務）', en: 'Export Lead Generation (Core)' }, href: '/services/export-lead-generation' },
      { label: { zh: '經銷商開發（核心服務）', en: 'Distributor Development (Core)' }, href: '/services/distributor-development' },
      { label: { zh: '免費出口市場分析（CTA）', en: 'Free Export Market Analysis' }, href: '/export-market-analysis' },
      { label: { zh: '成功案例（證據）', en: 'Case Studies (Proof)' }, href: '/case-studies' },
    ],
  } satisfies ServiceSeo,
} as const
