import { Lang } from '@/lib/i18n'

export type Article = {
  id: string
  title: string
  category: string
  date: string
  content: string[] // Array of paragraphs/sections
  sections?: { heading: string; content: string[] }[]
}

const articles: Record<string, Article[]> = {
  zh: [
    {
      id: 'german-hardware-2026',
      title: '2026 德國五金市場採購趨勢報告',
      category: '市場分析',
      date: '2026-02-15',
      content: [
        '德國一直是全球五金產品的重要進口市場之一。對於希望拓展歐洲市場的製造商來說，理解德國採購商的需求與決策流程，是成功進入市場的重要一步。',
        '本報告整理了近年德國五金市場的採購趨勢與買家行為變化，並分析潛在供應商應該如何調整外貿策略。'
      ],
      sections: [
        {
          heading: '德國市場需求持續穩定',
          content: [
            '德國在工業製造、建築與DIY市場方面長期保持穩定需求。五金產品主要應用於以下產業：',
            '• 建築工程',
            '• 工業設備',
            '• DIY零售市場',
            '• 汽車維修與配件',
            '近年來，德國進口商更重視供應商的穩定供貨能力與產品品質，而不再單純以價格作為唯一考量。'
          ]
        },
        {
          heading: '採購決策流程更專業化',
          content: [
            '德國企業的採購流程通常較為嚴謹，一般會經過以下幾個階段：',
            '1. 供應商初步篩選',
            '2. 技術與產品評估',
            '3. 價格與交期討論',
            '4. 小量測試訂單',
            '5. 長期合作評估',
            '因此，在開發德國市場時，建立專業且完整的公司資訊與產品資料非常重要。'
          ]
        },
        {
          heading: '採購商更重視長期合作',
          content: [
            '與部分市場不同，德國採購商通常傾向與穩定供應商建立長期合作關係。',
            '對供應商而言，這意味著：',
            '• 穩定的產品品質',
            '• 清楚的溝通流程',
            '• 可靠的交期',
            '• 長期合作能力',
            '這些因素往往比單次價格更重要。'
          ]
        },
        {
          heading: '外貿開發策略建議',
          content: [
            '如果企業希望進入德國五金市場，可以考慮以下策略：',
            '• 建立精準的買家名單',
            '• 針對目標產業開發客戶',
            '• 提供完整產品資料',
            '• 建立專業的外貿溝通流程',
            '透過系統化的客戶開發方式，企業可以更有效率地接觸潛在買家並建立商務關係。'
          ]
        }
      ]
    },
    {
      id: 'cold-email-structure',
      title: '開發信高回覆率的 5 個關鍵架構',
      category: '外貿開發指南',
      date: '2026-01-20',
      content: [
        '許多企業在進行外貿開發時，最常遇到的問題就是：開發信寄出去，但幾乎沒有回覆。',
        '實際上，大多數開發信沒有回覆，並不是因為產品不好，而是因為信件內容沒有抓住買家的注意力。',
        '以下是提升開發信回覆率的五個關鍵架構。'
      ],
      sections: [
        {
          heading: '1. 清楚的主旨',
          content: [
            '主旨是買家決定是否打開郵件的第一個因素。好的主旨通常具有以下特點：',
            '• 簡潔明確',
            '• 與買家需求相關',
            '• 避免過度銷售語氣',
            '例如：Hardware Supplier for EU Market 或 Precision CNC Parts Manufacturer'
          ]
        },
        {
          heading: '2. 簡短的公司介紹',
          content: [
            '在開發信開頭，用一兩句話說明公司背景即可。',
            '例如：我們是一家專注於五金工具製造的工廠，產品主要出口歐洲與北美市場。',
            '重點是讓買家快速理解你是做什麼的，而不是寫過長的公司歷史。'
          ]
        },
        {
          heading: '3. 清楚的產品定位',
          content: [
            '告訴買家你能提供什麼產品，以及產品的主要優勢。',
            '例如：產品類型、應用產業、生產能力。',
            '這可以幫助買家快速判斷是否與其需求相關。'
          ]
        },
        {
          heading: '4. 提供價值而不是只推銷',
          content: [
            '開發信不應該只是單純推銷產品，而是讓買家看到潛在合作價值。',
            '例如：穩定供應能力、品質控制流程、特定市場經驗。',
            '這些資訊可以增加買家的信任度。'
          ]
        },
        {
          heading: '5. 清楚的行動邀請',
          content: [
            '最後要讓買家知道下一步可以做什麼。',
            '例如：是否方便安排簡短介紹？是否需要產品資料？是否有相關需求？',
            '簡單明確的行動邀請，可以提高回覆機率。'
          ]
        }
      ]
    },
    {
      id: 'finding-buyers',
      title: '如何找到海外買家：5 種常見方法',
      category: '外貿開發指南',
      date: '2026-02-01',
      content: [
        '對於許多製造商與供應商來說，最大的挑戰往往不是產品本身，而是：如何找到真正有需求的海外買家。',
        '在 B2B 外貿市場中，客戶開發需要結合市場研究、資料分析與商務溝通策略。以下是企業常用的五種海外客戶開發方式。'
      ],
      sections: [
        {
          heading: '1. 產業展會與商務活動',
          content: [
            '參加國際展會是許多企業開發海外客戶的傳統方式。透過展會，企業可以直接接觸來自不同國家的採購商與代理商，並建立初步的商務關係。',
            '常見的優勢包括：',
            '• 能直接面對採購決策者',
            '• 可以展示產品實體',
            '• 有機會建立長期合作關係',
            '但展會的成本較高，也需要較長的準備時間。'
          ]
        },
        {
          heading: '2. B2B 平台',
          content: [
            '許多企業會透過 B2B 平台尋找潛在客戶，例如 Alibaba、Global Sources、Made-in-China。',
            '這些平台可以讓企業快速接觸到全球買家。然而，由於競爭激烈，企業通常需要投入較多時間在詢盤回覆與客戶篩選。'
          ]
        },
        {
          heading: '3. 買家資料庫與市場研究',
          content: [
            '另一種方式是透過進口數據與產業資料庫建立潛在買家名單。',
            '透過市場分析，企業可以識別主要進口商、採購決策者與潛在合作企業。',
            '這種方式可以更精準地鎖定目標客戶，並提升開發效率。'
          ]
        },
        {
          heading: '4. 主動客戶開發',
          content: [
            '主動客戶開發是許多 B2B 公司常用的方法。企業會透過 Email、LinkedIn 或其他商務管道，主動聯繫潛在買家並介紹產品。',
            '這種方式的優勢是：',
            '• 可以直接接觸目標企業',
            '• 可持續建立新的客戶來源',
            '• 成本相對較低',
            '但成功率通常取決於開發信的品質與客戶名單的精準度。'
          ]
        },
        {
          heading: '5. 外貿開發服務',
          content: [
            '部分企業會選擇與專業外貿團隊合作，透過外部服務來進行客戶開發。',
            '這種方式可以讓企業在沒有完整外貿團隊的情況下，也能持續拓展海外市場。',
            '常見服務包括：海外買家名單建立、客戶開發流程規劃、外貿開發信策略、商務溝通支援。',
            '透過專業團隊的協助，企業可以更快建立海外客戶來源。'
          ]
        }
      ]
    },
    {
      id: 'export-dev-guide-2026',
      title: '外貿客戶開發完整指南（2026）',
      category: '外貿開發指南',
      date: '2026-02-10',
      content: [
        '對許多製造商與供應商來說，外貿客戶開發並不是沒有機會，而是缺乏一套穩定且可執行的方法。',
        '很多企業遇到的問題包括：不知道去哪裡找海外買家、開發信寄了沒有回覆、沒有專職外貿團隊、市場做了很久詢盤還是不穩定。',
        '事實上，外貿客戶開發不是單一動作，而是一個完整流程。從市場選擇、買家名單建立，到客戶開發與詢盤跟進，每個環節都會影響最終成果。'
      ],
      sections: [
        {
          heading: '1. 先確認目標市場',
          content: [
            '外貿開發的第一步，不是急著寄信，而是先確認目標市場。',
            '企業需要先回答幾個問題：',
            '• 產品適合哪些國家或區域',
            '• 當地主要買家類型是什麼',
            '• 市場競爭程度如何',
            '• 價格與品質要求是否符合自身能力',
            '先把市場看清楚，後面的客戶開發效率才會高。'
          ]
        },
        {
          heading: '2. 建立精準買家名單',
          content: [
            '外貿開發最怕的不是沒有努力，而是名單不準。如果潛在客戶名單不精準，即使寄出再多開發信，也很難得到有效回覆。',
            '建立買家名單時，通常需要整理：公司名稱、國家與市場、採購類型、聯絡方式、決策角色。',
            '精準名單的目的，不是追求數量，而是提高後續開發的有效性。'
          ]
        },
        {
          heading: '3. 設計有效的開發方式',
          content: [
            '找到買家之後，下一步才是進行客戶開發。常見的開發方式包括：Email 開發、LinkedIn 開發、展會後續跟進、市場名單分批觸達。',
            '這一步的核心不是大量發送，而是針對不同買家採取適合的溝通方式。'
          ]
        },
        {
          heading: '4. 持續跟進詢盤與回覆',
          content: [
            '很多企業開發停在第一封信寄出後就沒有後續，這是很常見的問題。在 B2B 外貿中，買家通常不會因為一封開發信就立即下單。真正重要的是後續的跟進與商務對話。',
            '這包括：回覆買家問題、提供產品資料、追蹤回覆進度、安排下一步溝通。',
            '穩定的跟進流程，往往比第一次觸達更重要。'
          ]
        },
        {
          heading: '5. 建立可持續的開發系統',
          content: [
            '外貿客戶開發不能只靠一次性行動，而是要建立一套可以持續執行的流程。',
            '這套流程通常包括：市場分析、買家名單更新、開發信優化、回覆管理、詢盤紀錄、成果追蹤。',
            '當企業能把外貿開發流程系統化，就更容易持續累積海外買家資源。'
          ]
        },
        {
          heading: '結語',
          content: [
            '外貿客戶開發不是單靠運氣，而是靠方法。',
            '對企業而言，真正有價值的不是短期寄出多少開發信，而是能否建立一套穩定且可複製的外貿開發流程。',
            '只要市場選擇、買家名單、開發方式與跟進流程做得夠扎實，企業就能更有效率地拓展海外市場。'
          ]
        }
      ]
    }
  ],
  en: [
    {
      id: 'german-hardware-2026',
      title: '2026 German Hardware Market Trends',
      category: 'Market Analysis',
      date: '2026-02-15',
      content: [
        'Germany remains one of the most critical import markets for hardware products globally. For manufacturers aiming to expand into Europe, understanding the demands and decision-making processes of German buyers is a crucial first step.',
        'This report summarizes recent procurement trends and behavioral shifts in the German hardware market and analyzes how potential suppliers should adjust their export strategies.'
      ],
      sections: [
        {
          heading: 'Stable Market Demand',
          content: [
            'Germany maintains consistent demand in industrial manufacturing, construction, and DIY sectors. Key applications include:',
            '• Construction Engineering',
            '• Industrial Equipment',
            '• DIY Retail Market',
            '• Automotive Repair & Accessories',
            'In recent years, German importers have placed greater emphasis on stable supply capabilities and product quality, rather than price alone.'
          ]
        },
        {
          heading: 'Professional Procurement Process',
          content: [
            'The procurement process in German companies is typically rigorous, involving:',
            '1. Initial Supplier Screening',
            '2. Technical & Product Evaluation',
            '3. Price & Delivery Negotiation',
            '4. Small Test Orders',
            '5. Long-term Partnership Assessment',
            'Therefore, establishing professional and complete company and product information is vital when developing the German market.'
          ]
        },
        {
          heading: 'Focus on Long-term Partnership',
          content: [
            'Unlike some markets, German buyers prefer establishing long-term relationships with stable suppliers.',
            'For suppliers, this means focusing on:',
            '• Consistent Product Quality',
            '• Clear Communication Processes',
            '• Reliable Delivery',
            '• Long-term Cooperation Capability',
            'These factors are often more important than a one-time price advantage.'
          ]
        }
      ]
    },
    // Placeholder English versions for other articles if needed, using simplified content or mirroring structure.
    // For now, mirroring the IDs to avoid errors, but content can be expanded later.
    {
      id: 'cold-email-structure',
      title: '5 Key Structures for High-Response Cold Emails',
      category: 'Export Guide',
      date: '2026-01-20',
      content: ['Many companies face a common issue in export development: sending emails but getting no replies.', 'Here are 5 key structures to improve your cold email response rates.'],
      sections: [
        { heading: '1. Clear Subject Line', content: ['Concise, relevant, and non-salesy.'] },
        { heading: '2. Brief Intro', content: ['One or two sentences about what you do.'] },
        { heading: '3. Clear Positioning', content: ['What products and advantages do you offer?'] },
        { heading: '4. Provide Value', content: ['Focus on value, not just selling.'] },
        { heading: '5. Clear CTA', content: ['Tell them what to do next.'] }
      ]
    },
    {
      id: 'finding-buyers',
      title: '5 Common Ways to Find Overseas Buyers',
      category: 'Export Guide',
      date: '2026-02-01',
      content: ['For many manufacturers, the challenge isn\'t the product, but finding the right buyer.', 'Here are 5 common methods for B2B export development.'],
      sections: [
        { heading: '1. Trade Shows', content: ['Direct face-to-face interaction but high cost.'] },
        { heading: '2. B2B Platforms', content: ['Alibaba, etc. High traffic but high competition.'] },
        { heading: '3. Data & Research', content: ['Using customs data to find precise buyers.'] },
        { heading: '4. Active Outreach', content: ['Cold Email/LinkedIn. Low cost, scalable.'] },
        { heading: '5. Outsourcing Services', content: ['Partnering with expert teams like SunGene.'] }
      ]
    }
  ]
}

export function getArticles(lang: Lang) {
  const list = articles[lang] || articles['en']
  return list.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getArticle(lang: Lang, id: string) {
  const list = articles[lang] || articles['en']
  return list.find(a => a.id === id)
}
