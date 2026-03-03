export type Lang = 'zh-Hant' | 'en'

type CaseSection = { heading: string; items?: string[]; paragraphs?: string[] }
export type CaseContent = {
  slug: string
  title: string
  industry: string
  cover?: string
  summary?: string
  result?: string
  sections: CaseSection[]
  highlights?: { num: string; label: string }[]
  before?: string[]
  after?: string[]
}

const baseCovers: Record<string, string> = {
  chemie: '/cases/chemie/cover.png',
  skyworth: '/cases/skyworth/cover.png',
  dzics: '/cases/dzics/cover.png',
  erkang: '/cases/erkang/cover.png',
}

const zh: Record<string, CaseContent> = {
  chemie: {
    slug: 'chemie',
    title: 'Chemie 熱載體科技',
    industry: '石油化工',
    cover: baseCovers.chemie,
    summary: '每週 10–20 詢盤、總詢盤額 3000 萬人民幣、3 天直達高層',
    result: '詢盤增長、決策鏈直達',
    highlights: [
      { num: '10–20', label: '每週詢盤' },
      { num: '¥3000萬+', label: '潛在金額' },
      { num: '3天', label: '直達決策層' },
    ],
    before: ['客戶名單分散', '展會轉化率低', '開發週期不可控'],
    after: ['AI 精準篩選', '每週穩定 20+ 詢盤', '3天直達決策層'],
    sections: [
      { heading: '背景', paragraphs: ['Chemie 為專注於高溫熱載體與工業流體解決方案的科技企業，產品主要應用於石油化工與高溫工業製程市場。企業具備技術優勢，但在海外市場拓展初期，缺乏穩定且精準的客戶開發機制。'] },
      { heading: '市場困境', items: ['高端工業客戶決策層級高，接觸門檻高', '傳統展會與平台流量轉化率低', '客戶名單分散，無法有效篩選潛在決策者', '開發週期長，成本不可控'] },
      { heading: '我們的策略', paragraphs: ['SunGene 導入 AI 名單分析與精準市場篩選系統，建立三層篩選機制：'], items: ['行業匹配與市場潛力分析', '決策層級識別與名單分級', '自動化開發節奏與跟進管理', '針對石油化工產業的專業溝通結構'] },
      { heading: '執行方式', items: ['建立目標國家與產業優先順序', 'AI 分析潛在合作企業並標記高匹配度名單', '自動化分批觸達 + 個性化內容生成', '追蹤回應數據並即時優化開發策略'] },
      { heading: '成果數據', items: ['每週穩定 10–20 筆高質量詢盤', '累計潛在詢盤金額超過 3000 萬人民幣', '3 天內成功直達阿聯酋石油化工企業高層', '成為該企業首個中國合作夥伴'] },
      { heading: '關鍵價值', items: ['縮短高端客戶觸達時間', '提升決策層溝通成功率', '建立可持續運行的客戶開發結構'] },
    ],
  },
  skyworth: {
    slug: 'skyworth',
    title: 'Skyworth 創維',
    industry: '消費電子',
    cover: baseCovers.skyworth,
    summary: '短時間找到 3000+ 潛在合作、兩週建立 30+ 初步合作',
    result: '通路擴張與市場精準度提升',
    highlights: [
      { num: '3000+', label: '潛在合作' },
      { num: '30+', label: '兩週初步合作' },
      { num: '3+', label: '重點區域' },
    ],
    before: ['市場資訊分散', '傳統調研效率低', '難觸達高端通路'],
    after: ['AI 自動化篩選', '兩週 30+ 合作', '精準匹配'],
    sections: [
      { heading: '背景', paragraphs: ['創維為全球領先消費電子品牌，擁有多個海外研發中心與製造基地，積極布局國際市場。'] },
      { heading: '市場困境', items: ['全球市場分散，目標客群複雜', '傳統市場調研效率低', '高端渠道拓展難度高'] },
      { heading: '我們的策略', paragraphs: ['SunGene 結合 AI 市場分析與國際通路數據模型：'], items: ['快速篩選全球潛在合作商', '分析區域市場滲透率', '建立高價值通路清單'] },
      { heading: '成果數據', items: ['搜尋超過 3000 家全球潛在合作企業', '合作啟動兩週內', '成功與法國、德國、美國等三十餘家高端通路商建立初步合作'] },
      { heading: '核心價值', items: ['加速國際通路拓展', '提升市場精準度', '降低拓展試錯成本'] },
    ],
  },
  dzics: {
    slug: 'dzics',
    title: 'DZICS 大正工業機器人',
    industry: '工業機器人',
    cover: baseCovers.dzics,
    summary: '1000+ 聯絡方式、每週 15 詢盤、數億人民幣潛在',
    result: '穩定詢盤與精準匹配',
    highlights: [
      { num: '1000+', label: '潛在聯絡' },
      { num: '15/週', label: '穩定詢盤' },
      { num: '數億+', label: '潛在金額' },
    ],
    before: ['市場資訊不透明', '難觸達高端客戶', '人工開發效率低'],
    after: ['AI 鎖定 1000+ 客戶', '每週穩定 15 詢盤', '數億潛在訂單'],
    sections: [
      { heading: '背景', paragraphs: ['大正為高端工業機器人與智能製造設備企業。'] },
      { heading: '市場困境', items: ['東亞與東南亞市場資訊不透明', '高端技術企業難以精準觸達潛在客戶'] },
      { heading: '策略與執行', items: ['AI 搜尋並篩選 1000+ 潛在企業聯絡方式', '每週穩定獲得 15 筆詢盤', '自動化開發 + 精準產業匹配'] },
      { heading: '成果', items: ['成功與日本電子製造與印尼汽車零件製造商建立深度聯繫', '潛在合作專案金額達數億人民幣'] },
    ],
  },
  erkang: {
    slug: 'erkang',
    title: 'ER‑KANG 爾康製藥',
    industry: '醫藥輔料',
    cover: baseCovers.erkang,
    summary: '1000+ 精準線索、兩週建立歐美合作、成本下降 40%',
    result: '成本下降與合作加速',
    highlights: [
      { num: '1000+', label: '精準線索' },
      { num: '2週', label: '建立合作' },
      { num: '40%', label: '成本下降' },
    ],
    before: ['醫藥監管嚴格', '開發週期過長', '參展成本高昂'],
    after: ['AI 自動預熱', '兩週歐美落地', '成本下降 40%'],
    sections: [
      { heading: '背景', paragraphs: ['爾康製藥為中國大型藥用輔料企業，積極拓展歐美市場。'] },
      { heading: '市場挑戰', items: ['醫藥市場監管嚴格', '客戶開發週期長', '參展成本高'] },
      { heading: '我們的方案', items: ['AI 精準客戶篩選', '展前預熱名單建立', '展後 24 小時自動化回應'] },
      { heading: '成果數據', items: ['提供近 1000 個精準客戶線索', '合作初期兩週內建立多家歐美合作', '節省 40% 獲客成本'] },
    ],
  },
}

const en: Record<string, CaseContent> = {
  chemie: {
    slug: 'chemie',
    title: 'Chemie — Heat Transfer Technology',
    industry: 'Petrochemical',
    cover: baseCovers.chemie,
    summary: '10–20 weekly inquiries; RMB 30M+ pipeline; executive access in 3 days',
    result: 'Scalable acquisition, executive reach',
    highlights: [
      { num: '10–20', label: 'weekly inquiries' },
      { num: '¥30M+', label: 'pipeline' },
      { num: '3 days', label: 'to executives' },
    ],
    before: ['Scattered lead data', 'Low exhibition ROI', 'Long sales cycles'],
    after: ['AI-filtered precision', 'Stable 20+ leads/wk', 'Executive access in 3 days'],
    sections: [
      { heading: 'Background', paragraphs: ['Chemie is a high‑temperature heat transfer fluid technology company serving the petrochemical and industrial processing markets. Despite strong technical capabilities, the company lacked a structured global client acquisition mechanism.'] },
      { heading: 'Market Challenges', items: ['Hard to reach decision makers', 'Low conversion from exhibitions/platforms', 'Scattered lists without filtering', 'Long cycles and high cost'] },
      { heading: 'Our Strategy', items: ['Industry & market‑potential filtering', 'Decision‑maker identification & ranking', 'Automated outreach rhythm with tracking'] },
      { heading: 'Execution', items: ['Target market prioritization', 'AI‑driven prospect identification', 'Automated yet personalized outreach', 'Optimization from engagement data'] },
      { heading: 'Results', items: ['10–20 qualified inquiries/week', 'RMB 30M+ pipeline', 'Reached senior executives in 3 days', 'First Chinese partner established'] },
      { heading: 'Value Created', items: ['Shortened executive access time', 'Higher high‑value response rate', 'Scalable acquisition structure'] },
    ],
  },
  skyworth: {
    slug: 'skyworth',
    title: 'Skyworth — Global Channel Expansion',
    industry: 'Consumer Electronics',
    cover: baseCovers.skyworth,
    summary: '3000+ prospects; 30+ distributors engaged in 2 weeks',
    result: 'Rapid multi‑region expansion',
    highlights: [
      { num: '3000+', label: 'prospects' },
      { num: '30+', label: 'in 2 weeks' },
      { num: 'Multi', label: 'regions' },
    ],
    before: ['Fragmented market data', 'Inefficient research', 'Low distributor access'],
    after: ['AI automated filtering', '30+ partners in 2 wks', 'Precision matching'],
    sections: [
      { heading: 'Background', paragraphs: ['Skyworth is a global consumer electronics brand expanding aggressively into overseas markets.'] },
      { heading: 'Challenges', items: ['Fragmented markets', 'Low efficiency in research', 'Difficult access to premium distributors'] },
      { heading: 'Strategy', items: ['Identify 3000+ potential partners', 'Rank distributors by value', 'Automate structured outreach'] },
      { heading: 'Results', items: ['3000+ prospects', '30+ premium distributors engaged in 2 weeks', 'Rapid multi‑region expansion'] },
    ],
  },
  dzics: {
    slug: 'dzics',
    title: 'DZICS — Industrial Robotics',
    industry: 'Industrial Robotics',
    cover: baseCovers.dzics,
    summary: '1000+ qualified contacts; 15 weekly inquiries; multi‑million RMB pipeline',
    result: 'Stable inquiries & precise matching',
    highlights: [
      { num: '1000+', label: 'contacts' },
      { num: '15/wk', label: 'inquiries' },
      { num: '¥Millions', label: 'pipeline' },
    ],
    before: ['Opaque market info', 'No access to high-end', 'Manual outreach limits'],
    after: ['AI locked 1000+ prospects', '15 weekly inquiries', 'Multi-million pipeline'],
    sections: [
      { heading: 'Background', paragraphs: ['High‑end industrial robotics and intelligent manufacturing.'] },
      { heading: 'Challenges', items: ['Opaque information in E/SE Asia', 'Hard to reach qualified prospects'] },
      { heading: 'Execution', items: ['Identified 1000+ qualified contacts', '15 weekly inquiries', 'Automated outreach + precise matching'] },
      { heading: 'Results', items: ['Engaged Japanese electronics & Indonesian auto‑parts manufacturers', 'Multi‑million RMB opportunities'] },
    ],
  },
  erkang: {
    slug: 'erkang',
    title: 'ER‑KANG — Pharma Excipients',
    industry: 'Pharma Excipients',
    cover: baseCovers.erkang,
    summary: '1000+ leads; EU/US partnerships in 2 weeks; 40% CAC reduction',
    result: 'Lower cost, faster partnerships',
    highlights: [
      { num: '1000+', label: 'leads' },
      { num: '2 weeks', label: 'to partnerships' },
      { num: '−40%', label: 'acquisition cost' },
    ],
    before: ['Strict regulations', 'Long sales cycles', 'High exhibition cost'],
    after: ['AI pre-warmup', 'EU/US entry in 2 wks', '40% cost reduction'],
    sections: [
      { heading: 'Background', paragraphs: ['A leading Chinese pharmaceutical excipient company expanding into US/EU.'] },
      { heading: 'Challenges', items: ['Strict regulation', 'Long cycles', 'High exhibition cost'] },
      { heading: 'Solution', items: ['AI‑qualified lead filtering', 'Pre‑event warm‑up', 'Automated 24‑hour follow‑ups'] },
      { heading: 'Results', items: ['~1000 qualified leads', 'Multiple EU/US partnerships in 2 weeks', '40% lower acquisition cost'] },
    ],
  },
}

export function getCases(lang: Lang): CaseContent[] {
  const d = lang === 'en' ? en : zh
  return Object.values(d)
}

export function getCase(lang: Lang, slug: string): CaseContent | undefined {
  const d = lang === 'en' ? en : zh
  return d[slug]
}
