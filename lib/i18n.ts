export type Lang = 'en' | 'zh'

/** 站點支援語系的唯一來源（middleware / sitemap / 路由均應從這裡取得） */
export const SUPPORTED_LANGS: Lang[] = ['en', 'zh']
export const defaultLocale: Lang = 'en'

const en = {
    // Brand
    brand: 'SunGene Industrial IoT',
    brand_tagline: 'Remote Monitoring & Data Acquisition',

    // Navigation (MVP: 4 items + About in footer)
    nav_home: 'Home',
    nav_solutions: 'Solutions',
    nav_products: 'Products',
    nav_kits: 'Kits',
    nav_partners: 'Partners',
    nav_resources: 'Resources',
    nav_about: 'About',
    nav_contact: 'Contact',

    // CTAs
    cta_catalog: 'Request Product Catalog',
    cta_partner: 'Become a Partner',
    cta_quote: 'Request a Quote',
    cta_contact: 'Contact Us',
    menu: 'Menu',
    skip: 'Skip to content',

    // Footer
    footer_rights: 'All rights reserved.',
    footer_about: 'About',
    footer_solutions: 'Solutions',
    footer_contact: 'Contact',

    // Form (InquiryForm fallbacks)
    form_submitting: 'Submitting...',
    form_success_title: 'Request Received',
    form_success_desc: 'Thank you. Our team will get back to you shortly.',
    form_error_title: 'Submission Failed',
    form_error_desc: 'Please try again later or email contact@sungeneiot.com.',
}

export type Dictionary = typeof en

const zh: Dictionary = {
    brand: 'SunGene 工業物聯網',
    brand_tagline: '遠端監控與數據採集',

    nav_home: '首頁',
    nav_solutions: '解決方案',
    nav_products: '產品',
    nav_kits: '監控套件',
    nav_partners: '合作夥伴',
    nav_resources: '資源',
    nav_about: '關於我們',
    nav_contact: '聯絡我們',

    cta_catalog: '索取產品型錄',
    cta_partner: '成為合作夥伴',
    cta_quote: '索取報價',
    cta_contact: '聯絡我們',
    menu: '選單',
    skip: '跳到主要內容',

    footer_rights: '版權所有。',
    footer_about: '關於我們',
    footer_solutions: '解決方案',
    footer_contact: '聯絡我們',

    form_submitting: '提交中...',
    form_success_title: '已收到您的需求',
    form_success_desc: '感謝您，我們的團隊將盡快與您聯繫。',
    form_error_title: '提交失敗',
    form_error_desc: '請稍後再試，或來信 contact@sungeneiot.com。',
}

const dict: Record<Lang, Dictionary> = { en, zh }

export function t(lang: Lang, key: string): string {
  // @ts-ignore - runtime key lookup with en fallback
  return dict[lang]?.[key] ?? dict.en[key] ?? key
}

export const getDictionary = async (lang: Lang): Promise<Dictionary> => dict[lang]
