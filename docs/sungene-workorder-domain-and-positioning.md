# 工程工作單 — 域名搬遷 sungeneiot.com + 定位更新

> 日期：2026-06-12 ｜ 對象：工程師 ｜ 來源：owner 決策 + 驗證師現場盤點
> 兩大塊:**A. 把主站搬到 sungeneiot.com(sungenelite 轉址)** ｜ **B. 定位/話術更新**
> ⚠️ 安全原則貫穿全程:**絕不動 sungeneiot.com 的 email DNS 記錄(MX/SPF/DKIM/DMARC)**;搬遷對 sungenelite 必須「平順轉址、不斷線」。

---

## 現場已確認的事實(驗證師 2026-06-12 親查,不要重查)
- **網域**:sungeneiot.com 在 owner 的 **Squarespace** 帳號(Andy CHOU / sungene1993@gmail.com),Active、已鎖定、自動續約到 2029。
- **所有權驗證**:sungeneiot.com **已在該 Google 帳號的「已驗證網域」清單**(連同 sungenelite.com、sungene.net 等)→ Cloud Run 自訂網域**免再驗證**。
- **Email**:sungeneiot.com 的 **Google Workspace 已接好** —— Squarespace DNS 已有 MX(aspmx.l.google.com 全套)+ SPF + DKIM(google._domainkey)+ DMARC。**這些是 email 命脈,任何步驟都不准刪改。**
- **網站**:sungeneiot.com **尚未指向任何網頁伺服器**(apex 不服務、www 是 Squarespace 停車頁)。
- **部署**:GCP 專案 `ai-trade-prod`、Cloud Run 服務 `ai-trade-web`、region `asia-east1`,目前服務 sungenelite.com。
- **工具限制**:dev 機的 gcloud(562.0.0)**`beta` 元件裝不起來**(目錄權限),GA 版 `run domain-mappings` 不收 `--region` → **Cloud Run 自訂網域要走 Cloud Console UI**(或在有 beta 的機器上做)。
- **程式碼**:全站 **10 個檔**含 `sungenelite`(多數是顯示用 email)。清單見 B 區下方。

---

## A. 域名搬遷工作項(按順序,順序=安全)

### A1. Cloud Run 加自訂網域(先做,非破壞性)
- [ ] 在 **Cloud Console → Cloud Run → ai-trade-web(asia-east1)→ 管理自訂網域 / Custom Domains**,新增 `sungeneiot.com` 與 `www.sungeneiot.com`,對應到 ai-trade-web。
- [ ] 記下 Google 產生的 **DNS 記錄**(apex 通常是 4×A + 4×AAAA;www 通常是 CNAME `ghs.googlehosted.com`)。
- 註:此步不影響現有 sungenelite 線上站。

### A2. Squarespace DNS 只「新增」網站記錄(非破壞性)
- [ ] 在 Squarespace → sungeneiot.com → DNS → **Custom records**,**只新增** A1 給的 A/AAAA(apex `@`)+ www 的 CNAME。
- [ ] **嚴禁**碰現有 MX / `v=spf1...` / `google._domainkey`(DKIM)/ `_dmarc` —— 動到就斷信。
- [ ] 等 DNS 傳播 + Google 自動發 SSL 憑證(可能 15 分鐘~數小時)。完成後 sungeneiot.com 會與 sungenelite 服務「同一個站」(暫時兩域名都通,正常)。

### A3. 程式碼:切換主域名 + 加轉址(我=工程師做;**deploy 時機見 A4 註**)
- [ ] `lib/seo.ts`:`DEFAULT_SITE_URL` → `https://sungeneiot.com`(canonical/hreflang/OG/sitemap 全靠這個)。
- [ ] `middleware.ts`:`primaryHost` → `sungeneiot.com`;**新增**:當 `host === 'sungenelite.com'`(或 www)→ **301 到 `https://sungeneiot.com` + 同 path**。
- [ ] 聯絡信箱 `contact@sungenelite.com` → `contact@sungeneiot.com`,共 10 檔(見 B 區清單),含 `app/api/inquiries/route.ts` 的 `contactEmail`、`INQUIRY_TO` 預設、`catalogUrl`、`app/[lang]/layout.tsx` 的 JSON-LD email、`app/llms.txt/route.ts`。
- [ ] catalog/PDF 連結網域同步換。

### A4. Cloud Run 環境變數 + 部署(這步=真正切換,可逆)
- [ ] 在 `cloudbuild.yaml` 的 `--update-env-vars` 補/改:`NEXT_PUBLIC_SITE_URL=https://sungeneiot.com`、`INQUIRY_TO=contact@sungeneiot.com`(SMTP 密鑰維持不動)。
- [ ] **部署時機**:**務必等 A1+A2 完成、sungeneiot.com 確認能服務本站之後再部署 A3**。否則 A3 的 301 會把現在 live 的 sungenelite 導去還沒接好的 sungeneiot = 全站斷。
- [ ] 手動部署(維持 owner 的「不開自動觸發」決定):`gcloud builds triggers run sungene-web --branch=main --region=asia-east1`。

### A5. Email 收尾(owner 為主)
- [ ] 確認 `contact@sungeneiot.com` 信箱/別名在 Workspace 存在且收得到(那個「驗證電子郵件」分頁收尾)。
- [ ] **sungenelite 信箱暫時保留**別關,過渡期兩邊都收。
- [ ] 端到端:部署後線上 POST `/api/inquiries` 應 200,且信寄到 sungeneiot 信箱。

### A6. SEO 搬家(owner 為主,我可協助點)
- [ ] GSC 新增/確認 `sungeneiot.com` 資源(已驗證,應可直接加)、提交 `https://sungeneiot.com/sitemap.xml`。
- [ ] 在 **sungenelite 的 GSC → 設定 → 變更網址(Change of Address)** → 指向 sungeneiot.com(需 301 已生效)。
- [ ] 對 sungeneiot 首頁 `/en`、`/zh`「要求建立索引」。

### A7. 上線後驗收(逐項實測,不採信本地綠)
- [ ] `https://sungeneiot.com/en` `/zh` = 200、是 IoT 站、canonical/OG/JSON-LD 都顯示 sungeneiot。
- [ ] `https://sungenelite.com/...` → 301 → sungeneiot 同 path。
- [ ] sitemap/robots/llms.txt 全部 sungeneiot;舊 lead-gen 仍 410。
- [ ] 線上寄信 200、收到。
- [ ] sungeneiot email(MX 等)未受影響(寄一封進 contact@sungeneiot.com 測)。

---

## B. 定位 / 話術更新(三層,守住「不過度宣稱」紅線)

> 採用 owner 提供的定位。**對市場用「解決方案供應商」,對公司用「品牌與國際通路營運商」,對通路用「ODM/OEM/貼牌夥伴」。**
> ⛔ 硬規則不變:**不得宣稱自研硬體 / 自有雲平台 / 自有 App / SaaS / 大型系統整合** —— 「品牌+通路營運商」就是天花板。

### B1. 對市場層(首頁 / metadata / llms.txt / Alibaba)
- [ ] 確保有這句一級定位(放 hero 副標或 meta description):
  - EN: `SunGene provides Industrial IoT remote monitoring solutions for water, energy and equipment applications.`
  - ZH: `SunGene 提供工業物聯網遠端監測解決方案，應用於水務、能源與設備監控。`
- [ ] 現有 hero 標題「Remote Monitoring Solutions for Water, Energy and Industrial Equipment」保留即可,只補上述一句定位。

### B2. 公司層(About / footer blurb / layout metadata description / Organization JSON-LD description)
- [ ] About 開頭/公司簡介加入公司級定位:
  - EN: `SunGene is an Industrial IoT brand and international channel operator, building ODM/OEM and private-label solutions through global distributor and system-integrator networks.`
  - ZH: `SunGene 是工業物聯網品牌與國際通路營運商，透過 ODM/OEM、品牌貼牌、經銷商與系統整合商網路，提供遠端監測與資料採集解決方案。`
- [ ] `app/[lang]/layout.tsx` 的 metadata description、footer blurb、llms.txt 公司描述同步成此調性。

### B3. 通路/銷售層(Partners 頁 / 開發信範本)
- [ ] Partners 頁 intro 補一句:
  - EN: `We help distributors and system integrators expand their Industrial IoT remote monitoring product lines through ODM/OEM and private-label solutions.`
  - ZH: `我們協助經銷商與系統整合商建立工業物聯網遠端監測產品線，並提供 ODM/OEM 與品牌貼牌合作方案。`

### sungenelite 含 sungenelite 的 10 檔(B 區順手一起改網域與調性)
`app/api/inquiries/route.ts`(×3:to 預設 / contactEmail / catalogUrl)、`app/llms.txt/route.ts`(×3)、`app/[lang]/contact/page.tsx`、`app/[lang]/layout.tsx`、`app/[lang]/products/[slug]/datasheet/page.tsx`、`lib/i18n.ts`(×2)、`lib/seo.ts`、`components/CatalogDownload.tsx`(×2)、`components/Footer.tsx`、`middleware.ts`(×2)。

---

## 驗收 / 交付
- [ ] A + B 改完:`tsc` + `next build` 過。
- [ ] 按 A1→A2→(等)→A3/A4→A5→A6 順序,**手動部署**,逐項線上實測(A7)。
- [ ] 回報附:sungeneiot 線上 200 截圖、sungenelite→sungeneiot 301 實測、寄信 200 證據。
- [ ] **完成前不要再對 sungenelite 投入新 SEO**(會白做,它要變轉址)。
