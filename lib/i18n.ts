export type Lang = 'zh-Hant' | 'en'

const dict: Record<Lang, Record<string, string>> = {
  'zh-Hant': {
    // Header
    nav_home: '首頁',
    nav_solutions: '解決方案',
    nav_services: '服務',
    nav_product: '產品',
    nav_cases: '案例',
    nav_about: '關於我們',
    nav_contact: '聯絡我們',
    cta_inquiry: '立即諮詢',

    // General
    faq_title: '常見問題',
    popular_badge: '熱門',
    learn_more: '了解更多 →',
    article_not_found: '文章不存在',
    latest_articles: '最新文章',
    demo_title: 'AI 客戶匹配演示',
    demo_placeholder: '例如：electronics / germany / ai',
    demo_note: '演示數據僅為示意，實際平台會基於更完整的信號計算',

    // Case Study Navigation
    next_case: '下一個案例',
    back_to_cases: '回到案例列表',
    explore_solutions: '了解解決方案',
    book_consultation: '預約諮詢',
  },
  en: {
    // Header
    nav_home: 'Home',
    nav_solutions: 'Solutions',
    nav_services: 'Services',
    nav_product: 'Product',
    nav_cases: 'Cases',
    nav_about: 'About',
    nav_contact: 'Contact',
    cta_inquiry: 'Contact us',

    // General
    faq_title: 'FAQ',
    popular_badge: 'POPULAR',
    learn_more: 'Learn More →',
    article_not_found: 'Article Not Found',
    latest_articles: 'Latest Articles',
    demo_title: 'AI Client Matching Demo',
    demo_placeholder: 'e.g., electronics / germany / ai',
    demo_note: 'Demo data for illustration only; actual platform uses comprehensive signals.',

    // Case Study Navigation
    next_case: 'Next Case',
    back_to_cases: 'Back to Cases',
    explore_solutions: 'Explore Solutions',
    book_consultation: 'Book Consultation',
  },
}

export function t(lang: Lang, key: string): string {
  return dict[lang]?.[key] ?? dict['en'][key] ?? key
}
