const fs = require('fs');
const path = require('path');

const filesToProcess = [
  'data/coreServices.ts',
  'data/cases.ts',
  'data/blog.ts',
  'data/seoIndustries.ts',
  'data/seoMarkets.ts'
];

const replacements = [
  // coreServices
  [/海外買家開發/g, '海外客戶開發'],
  [/海外买家开发/g, '海外客户开发'],
  [/海外買家名單/g, '海外採購與決策人資料'],
  [/海外买家名单/g, '海外采购与决策人资料'],
  [/可驗證買家名單/g, '海外目標客戶資料'],
  [/可验证买家名单/g, '海外目标客户资料'],
  [/合格詢盤交付/g, '有效商機整理與交接'],
  [/合格询盘交付/g, '有效商机整理与交接'],
  [/持續交付合格詢盤/g, '持續推進有效商機'],
  [/持续交付合格询盘/g, '持续推进有效商机'],
  [/交付詢盤摘要/g, '交付商機摘要'],
  [/交付询盘摘要/g, '交付商机摘要'],
  [/詢盤品質/g, '商機品質'],
  [/询盘质量/g, '商机质量'],
  [/sent list \+ opens list/g, '開發資料與回覆追蹤紀錄'],
  [/Build and verify buyer lists/g, 'Build and verify buyer-side decision-maker data for outreach'],
  [/Export lead generation is not about sending more emails/g, 'Export customer development is not about sending more emails'],
  [/How export enterprises find overseas buyers/g, 'How export companies develop overseas customers'],
  [/不擴編也能拿到詢盤的 7 種方法/g, '不擴編也能持續推進海外商機的 7 種方法'],
  [/不扩编也能拿到询盘的 7 种方法/g, '不扩编也能持续推进海外商机的 7 种方法'],

  // cases
  [/詢盤增長與市場拓展/g, '有效商機成長與市場拓展'],
  [/询盘增长与市场拓展/g, '有效商机成长与市场拓展'],
  [/有效詢盤/g, '有效商機'],
  [/有效询盘/g, '有效商机'],
  [/穩定詢盤來源/g, '穩定商機來源'],
  [/稳定询盘来源/g, '稳定商机来源'],
  [/詢盤節奏/g, '商機節奏'],
  [/询盘节奏/g, '商机节奏'],
  [/Built precise buyer lists and executed outreach/g, 'Built targeted buyer-side decision-maker data and created multiple sales opportunities'],
  [/Generated 50–60 qualified inquiries within 3 months/g, 'Generated 50–60 qualified opportunities within 3 months'],
  [/Generated qualified inquiries/g, 'Generated qualified opportunities'],

  // blog
  [/Can we start without a buyer list\?/g, 'Can we start without buyer and decision-maker data?'],
  [/Sent list \+ opens list/g, 'Outreach records + reply tracking'],
  
  // seoIndustries / seoMarkets
  [/想開發機械海外買家？/g, '想拓展機械產業海外客戶？'],
  [/想开发机械海外买家？/g, '想拓展机械产业海外客户？'],
  [/提升高质量询盘/g, '提升有效商机与合作机会'],
  [/提升高品質詢盤/g, '提升有效商機與合作機會'],
  [/询盘成长/g, '商机成长'],
  [/詢盤成長/g, '商機成長'],
  
  // generic
  [/找海外買家/g, '開發海外客戶與決策人'],
  [/找海外买家/g, '开发海外客户与决策人'],
  [/買資料函式庫就夠了嗎/g, '建立資料庫就夠了嗎'],
  [/买资料库就够了吗/g, '建立资料库就够了吗']
];

filesToProcess.forEach(file => {
  const filePath = path.join(__dirname, file);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // keep words
    const keepWords = [
      '如何找到海外買家', '如何找到海外买家',
      '用 LinkedIn 找海外買家', '用 LinkedIn 找海外买家',
      '用產業目錄找海外買家', '用产业目录找海外买家'
    ];

    keepWords.forEach((word, index) => {
      content = content.replace(new RegExp(word, 'g'), `__KEEP_WORD_${index}__`);
    });

    replacements.forEach(([regex, rep]) => {
      if (regex.test(content)) {
        content = content.replace(regex, rep);
        modified = true;
      }
    });

    keepWords.forEach((word, index) => {
      content = content.replace(new RegExp(`__KEEP_WORD_${index}__`, 'g'), word);
    });

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated: ${file}`);
    }
  }
});