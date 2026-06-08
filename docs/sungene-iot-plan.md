# SunGene Industrial IoT — 官網重做完整方案

> 整合自兩位 AI 顧問的建議 + 現有 codebase 現況盤點
> 對象網域：**sungenelite.com**（完全重做）
> 文件日期：2026-06-08

---

## 0. 一句話定位

> **SunGene Industrial IoT — Remote Monitoring & Data Acquisition**
> Helping distributors, system integrators and industrial customers deploy reliable
> monitoring systems using LoRa, NB-IoT, RS485 and wireless technologies.

兩位 AI 完全一致的結論，這份方案直接採用，不再討論「要不要轉型」。

---

## 1. 三品牌分工（先講清楚，避免再亂）

| 品牌 / 網域 | 定位 | 動作 |
|---|---|---|
| **sungene.net** | SunGene Sourcing — 包裝 / OEM / 一般貿易 / 舊客戶 | **不動**，維持現狀（已是 Phase 2 trading-company 站） |
| **sungenelite.com** | **SunGene Industrial IoT** — 遠端監控與數據採集 | **完全重做**（本方案範圍） |
| ~~第三品牌~~ | — | 不再維護，收斂成上面兩個 |

> 重點：sungenelite 現在的問題不是設計醜，而是 **「它在替一個已經不存在的商業模式（出口顧問 / 名單開發）發聲」**。所以是換骨，不是換皮。

---

## 2. 兩位 AI 的共識 vs 分歧（整合結論）

### 共識（直接採用）
1. 改名 **SunGene Industrial IoT**，不要用「SunGene IoT」（IoT 太大、會被聯想到智慧手錶/智慧家庭/GPS）。
2. 網站收斂到 **6 個主選單**。
3. **Solutions 先賣場景故事，不要先賣產品**（Water / Energy / Equipment 三大場景）。
4. **Products 控制在 20 個 SKU 以內**，分 4 類。
5. 必須有 **Industries（產業應用）** 頁 — 很多客戶是用「產業」而不是「產品」找供應商。
6. 主力客戶是 **Distributor / System Integrator / EPC / Automation Company**，不是終端消費者。
7. About 改寫成 **Taiwan-Based Industrial IoT Solution Partner**，主打「國際開發能力 + 中國供應鏈」，不要再寫 Taiwan Trading Company。
8. SEO 做 **長尾詞**，不碰「Industrial IoT」這種頭部詞。
9. **絕對不做** 的頁面：Smart Home / AI / SaaS / Cloud Platform / Digital Twin / Predictive Maintenance（目前做不到，不要寫）。
10. 三套首批「方案故事 / Kit」：Remote Water / Remote Energy / Remote Equipment。
11. Alibaba 分類 **照解決方案分，不照產品分**。
12. **保留 SunGene 品牌**（有現成網域 / 公司 / Alibaba，不重建信任）。
13. 2026 年底目標 **設成市場驗證指標，不是營收**。

### 分歧（我的整合裁決）
| 議題 | AI #1 | AI #2 | 整合裁決 |
|---|---|---|---|
| 第 6 個主選單 | About | Partners | **定案（2026-06-08 owner）：Partners 獨立成主選單頁** → 主選單變 7 項。代理/SI 招募是主軸。About 仍承載公司信任。 |
| 首頁 Technologies 區 | 放後面 | 首頁放 LoRaWAN/NB-IoT/Modbus/RS485/MQTT | **首頁放一條 Technologies logo/標籤帶**，但放在場景三卡之後，當「技術背書」而非主賣點。 |
| Industries 清單 | Water / Energy / Industrial / Agriculture | 多加 Telecom Infrastructure | **採 5 項**：Water Utilities / Energy & Solar / Industrial Facilities / Agriculture / Telecom Infrastructure（Agriculture 與 Telecom 先放不主打）。 |
| 主 CTA | Request Product Catalog | Explore Solutions + Become a Partner | **雙 CTA**：主按鈕 `Request Product Catalog`（蒐集名單），次按鈕 `Become a Partner`。 |

---

## 3. 網站架構（v3 — 主選單收斂）

**正式主選單 6 項**（v3：8 → 6，避免「什麼都做」的觀感）：

```
Home | Solutions | Products | Partners | Resources | Contact
```
- **Industries** 不進主選單 → 收進 Solutions 內（每個 Solution 頁列出適用產業）。
- **About** 不進主選單 → 放 footer。
- **MVP 主選單只放 4 項**：`Home | Solutions | Partners | Contact`（Products / Resources 等有內容後再掛上）。

三層搜尋結構（兩 AI 都強調「客戶搜問題，不搜品牌」）：

```
Solutions（場景）      Water / Energy / Equipment Monitoring
   ↓
Applications（搜尋意圖） Tank Level / Pump / Solar Site / Remote Meter Reading / Equipment Alarm
   ↓
Products（SKU）         Gateways / Sensors / Meters / Controllers
```
> **Applications** 不進主選單（避免 9 項過載），但每個都是獨立 SEO 落地頁，掛在 Solutions 下並互連 Products。這是 AI#1 的核心建議：Application 詞比 Industry 詞更接近成交搜尋。

### Home（首頁）
- **Hero（改成客戶角度，非公司角度 — 兩 AI 最強調的修改）**
  - Headline：`Remote Monitoring Solutions for Water, Energy and Industrial Equipment`
  - Subline：`Powered by Industrial IoT technologies including LoRaWAN, NB-IoT and RS485.`
  - CTA：`Request Product Catalog`（主，串 Resources 下載/留資） + `Become a Partner`（次）
- **三大場景卡**：**Water Monitoring / Energy Monitoring / Equipment Monitoring**（拿掉 "Smart" 前綴 — 兩 AI 一致）
- **Technologies 標籤帶**：`LoRaWAN · NB-IoT · RS485 · Modbus · 4G LTE`（AI#2：拿掉 MQTT（協議客戶不在乎），加 4G LTE（中東/非洲/東南亞常直接搜））
- **Partner 招募條（放大、明顯）**：`Looking for an Industrial IoT Partner? Become a Distributor or System Integrator Partner.` → Partners

### Solutions（賣場景，不賣產品；命名去 "Smart"）
1. **Water Monitoring** — Tank Level / Water Leak / Pump Monitoring
2. **Energy Monitoring** — Smart Meter / Energy Data Collection / Solar Monitoring
3. **Equipment Monitoring** — Temperature / RS485 Data Acquisition / Alarm Notification

每個 Solution 頁：問題場景 → 怎麼解 → 對應 Applications → 用到哪些產品 → 哪些產業會用 → CTA。

### Applications（SEO 落地頁，掛 Solutions 下）
Tank Level Monitoring / Pump Monitoring / Solar Site Monitoring / Remote Meter Reading / Equipment Alarm Notification
→ 每頁針對一個長尾搜尋意圖，連到對應 Solution + Products + `Request Quote`。

### Products（v3：避免變成「產品資料庫公司」）
- **第一版只展示 10–12 個**：Gateways 2–3 · Sensors 4–5 · Meters 2–3 · Controllers 2–3
- **90 天內最多擴到 ~20 個；等有詢價數據再擴 SKU**。
- 資料模型**支援擴充**即可（每個產品=獨立 SEO 落地頁，日後攻 `LoRa Water Sensor`、`RS485 Gateway`、`Modbus Data Logger`），但**不要一開始就鋪 50–100 個、別陷入「一直整理產品、沒在開發客戶」**。
- 每個產品：型號 + 圖 + 規格摘要（LoRa/NB-IoT/RS485/4G）+ Datasheet 下載 + `Request Quote`。

### Industries
Water Utilities / Energy & Solar / Industrial Facilities / Agriculture / Telecom Infrastructure（後二者先放不主打）。每產業：痛點 + 對應 Solution + 對應產品。

### Partners（全站最重要頁 — 兩 AI 都認為比 Products 重要）
三個入口 program：
- **Distributor Program** — Become a Distributor
- **System Integrator Program** — Become an SI Partner
- **OEM / Private Label Program**
- **Why Partner with SunGene**：OEM Support / Low MOQ / Export Experience / Fast Response / Flexible Product Portfolio
- 主 CTA：表單（串 `/api/inquiries`，`type=partner`）

### Resources（Download Center）
- **第一版只做 `Download Catalog`**：一份 PDF Catalog + 留資表單（email → 名單）。
- Datasheets / Application Notes / Company Profile **等資料齊了再補**（現在硬做會很空）。
- MVP 階段先不上主選單，只在首頁/產品頁用 `Request Product Catalog` 表單承接；等有正式 catalog 再把 Resources 掛進主選單。
> B2B 客戶看完產品第一句常是「Send me catalog」。能直接下載 → 轉換率高很多。

### About（移除 Alibaba 當主角 — AI#1）
- 標題：**Taiwan-Based Industrial IoT Partner**
- 能力：ODM/OEM Network · China Supply Chain · International Business Experience
- **Why Buy From SunGene（AI#2 新增，必答「為什麼不直接找中國工廠？」）**：
  Taiwan-based service · China manufacturing network · Fast OEM support · Low MOQ · English communication · Export experience
> Alibaba 是工具不是信任來源，不放 About。（也不引用 sungene.net 的 Alibaba/年資/QC 等既有資產——本站為獨立 IoT 品牌。）

### Contact
Email · WhatsApp · LinkedIn（IoT 專屬通路若有再放，否則略）。簡單即可，串現有 `/api/inquiries`。

---

## 4. 首批內容：三套「方案故事 / Kit」（第一批要先做出來的東西）

| Kit | 包含 | 對應 Solution |
|---|---|---|
| **Remote Water Monitoring Kit** | Water Level Sensor + Gateway + Leak Sensor | Water |
| **Remote Energy Monitoring Kit** | Smart Meter + CT + Gateway | Energy |
| **Remote Equipment Monitoring Kit** | RS485 Collector + Temp Sensor + Gateway | Equipment |

Alibaba 同步用同樣三組分類上架。

---

## 5. SEO 策略（長尾優先，不碰頭部詞）

主攻長尾關鍵字（每個各做一個落地段落 / 頁）：
- Remote Water Monitoring
- Tank Level Monitoring
- LoRa Water Level Sensor
- Solar Monitoring Solution
- Remote Pump Monitoring
- Industrial Data Acquisition

> **不做** `Industrial IoT` 這種頭部詞（太難、ROI 差）。
> 現有 repo 已有一套 SEO 落地頁產生器（`components/SeoLandingPage.tsx` + `data/seo*.ts`），重做時改餵新關鍵字即可，不用重寫機制。

---

## 6. 技術執行方案（怎麼動這個 codebase）

**策略：保留技術底盤，內容/路由全換。** 不重建專案，省掉部署、i18n、表單、SEO 機制的重寫。

### 保留（不動底層）
- Next.js 16 + Tailwind + framer-motion 骨架
- Cloud Run 部署管線（`cloudbuild.yaml`、`Dockerfile`）
- 聯絡表單後端 `/api/inquiries`（Supabase + nodemailer）— 只改收件設定與欄位文案
- i18n 機制 `lib/i18n.ts`（字典換內容）
- SEO 落地頁機制 `components/SeoLandingPage.tsx`

### 砍掉 / 重寫（舊 lead-gen 殘骸）
全部移除並設 410/301：
```
services/{distributor-development, export-lead-generation, export-sales-outsourcing}
buyers-list, buyer-database-building, overseas-buyer-lists, distributor-list,
distributor-network, cold-email-outreach, export-market-analysis,
export-marketing, market-entry-strategy, free-market-analysis,
qualified-b2b-leads, linkedin-prospecting, pricing
```
- `middleware.ts` 既有 410 Gone 機制可沿用，把上述舊路由加進 gonePatterns。
- 新建路由：`solutions/[water|energy|equipment]`、`applications/[slug]`、`products/[category]`、`industries/[slug]`、`partners`、`resources`、`about`、`contact`。
- `components/home/*`（Hero/Services/Process/WhyUs/CasePreview/CTA）改寫成 IoT 版本。
- 表單 `type` 擴充：`partner`（Partners 頁）、`catalog`（Resources 下載留資）、`quote`（產品詢價）。

### 語系決策（定案 2026-06-08）
**en（主）+ zh（繁中）兩語**。移除 cn（簡中）路由與字典，設 301 → en 或 zh。
- `lib/i18n.ts`：`SUPPORTED_LANGS = ['en', 'zh']`，預設 `en`。
- 清掉 cn 字典與 cn 專屬處理（`lib/cnText.ts`、middleware 的 `/zh/cn` 正規化）。

---

## 7. 執行排程 — MVP 先行（兩 AI 最強烈的共同提醒）

> 兩位 AI 都警告：**最大風險不是網站不完整，而是 3 個月後還沒上線、0 個詢價。** 第一版做到 70 分就上線，先能寄信、先能收詢價。真正要驗證的是「有沒有 Distributor / SI / EPC 因為這網站回你第一封信」。

### MVP（第一版，目標 ≤30 天上線 — 嚴格只做這 4 頁）
1. **Home**（新 Hero 客戶角度 + 三場景 + Technologies + 放大的 Partner 條 + `Request Product Catalog` 表單）
2. **Solutions**（Water / Energy / Equipment Monitoring 三場景，Industries 列在頁內）
3. **Partners**（三 program + Become a Partner 表單）
4. **Contact**（串 `/api/inquiries`，確認真的能收信）
   - 同步基礎工程：砍 lead-gen 舊路由設 410/301、i18n 改 en/zh、主選單先 4 項、About 移 footer
   - **Products / Industries / Applications / Resources 全部第二批，不阻擋上線。**

### 第二批（上線後補，不阻擋上線）
| 批次 | 工作 |
|---|---|
| W2–3 | Products（先 10–12 個）+ 各產品 Datasheet |
| W3–4 | Industries 頁 + Applications SEO 落地頁（Tank/Pump/Solar/Meter/Alarm） |
| W4+ | Resources 下載中心（Catalog PDF / Datasheets / App Notes / Company Profile） |
| 並行 | SEO 長尾、Google Search Console 重新收錄、開始導流（Email / LinkedIn / Alibaba） |

---

## 8. 2026 年底目標（市場驗證，非營收）

- 3 家核心 ODM 供應關係
- 20 個樣品詢問
- 5 個有效代理商洽談
- 1 個正式試單

> 真正要驗證的是市場，不是網站。網站只是讓第一個願意相信 SunGene Industrial IoT 的海外客戶「更容易相信你」。

---

## 9. 已拍板決策

1. **語系**：en（主）+ zh（繁中），移除 cn。
2. **重做方式**：原地換骨（沿用此 repo + Cloud Run 部署）。
3. **Partners**：獨立主選單頁。
4. **正式主選單（v3，6 項）**：Home / Solutions / Products / Partners / Resources / Contact（Industries 收進 Solutions、About 移 footer）。
5. **MVP 嚴格 4 頁**：Home / Solutions / Partners / Contact，≤30 天上線先能收詢價；其餘全第二批。
6. **Products 不鋪 50–100**：第一版 10–12、90 天內最多 ~20。
7. **Resources 第一版只做 Download Catalog**（PDF + 留資），暫不進主選單。

→ 工程開工項見 **§11 工程工作單**。

---

## 10. 兩份 review 整合對照（v1 → v2 變更）

| # | review 建議 | 來源 | v2 處理 |
|---|---|---|---|
| 1 | 去掉 "Smart" → Water/Energy/Equipment Monitoring | AI#1+#2 | ✅ Solutions 與首頁卡全部去 Smart |
| 2 | Hero 改客戶角度（Remote Monitoring for Water/Energy/Equipment） | AI#1 | ✅ 新 Hero + 技術放副標 |
| 3 | Technologies 拿掉 MQTT、加 4G LTE | AI#2 | ✅ LoRaWAN·NB-IoT·RS485·Modbus·4G LTE |
| 4 | Products 首版壓到 10–12；但後台規劃 50–100 當 SEO 武器 | AI#1（少）+AI#2（SEO 多） | ✅ 展示少、資料模型支援多、逐步補 |
| 5 | About 拿掉 Alibaba 當主角；加 "Why Buy From SunGene" | AI#1+#2 | ✅ 改寫 About，回答「為何不直接找中國廠」 |
| 6 | Partners 比 Products 重要，三 program（Distributor/SI/OEM） | AI#1+#2 | ✅ Partners 三入口 + 首頁放大招募條 |
| 7 | 新增 Applications 層（Tank/Pump/Solar/Meter/Alarm） | AI#1 | ✅ SEO 落地頁掛 Solutions 下 |
| 8 | 新增 Resources / Download Center | AI#2 | ✅ 主選單第 6 項 |
| 9 | MVP 先行、70 分就上線、別追求一次到位 | AI#1+#2 | ✅ 改寫第 7 節為 MVP 先行 |

> 兩 AI 評分：戰略 9.5、架構 9、SEO 9、執行順序 8 → v2 主要補強的就是「執行順序（MVP 先行）」這一項。

---

## 11. 工程工作單（MVP — 給工程師直接開工）

> 範圍：**只做 Home / Solutions / Partners / Contact 四頁能上線、能收詢價**。其餘任務一律標記「第二批」，不得阻擋 MVP 上線。原地換骨本 repo，沿用 Cloud Run 部署。

### T0 — 基礎工程（地基，先做）
- [ ] **i18n 改 en/zh**：`lib/i18n.ts` → `SUPPORTED_LANGS = ['en','zh']`、`defaultLocale='en'`；移除整段 cn 字典；刪 `lib/cnText.ts` 引用；middleware 移除 `/zh/cn` 正規化；cn 路由 301 → en。
- [ ] **砍 lead-gen 舊路由**：刪除 `app/[lang]/{services,buyers-list,buyer-database-building,overseas-buyer-lists,distributor-list,distributor-network,cold-email-outreach,export-market-analysis,export-marketing,market-entry-strategy,free-market-analysis,qualified-b2b-leads,linkedin-prospecting,pricing}`；於 `middleware.ts` gonePatterns 加入這些路徑回 410（或 301 到最相近新頁）。
- [ ] **主選單先 4 項**：`Header.tsx` → Home / Solutions / Partners / Contact；About 移到 `Footer.tsx`。
- [ ] **品牌字串**：站名/標題/JSON-LD/llms.txt 改為 `SunGene Industrial IoT — Remote Monitoring & Data Acquisition`。

### T1 — Home
- [ ] Hero：H1 `Remote Monitoring Solutions for Water, Energy and Industrial Equipment`；副標 `Powered by Industrial IoT technologies including LoRaWAN, NB-IoT and RS485.`；CTA `Request Product Catalog`(主) + `Become a Partner`(次)。
- [ ] 三場景卡：Water / Energy / Equipment Monitoring（去 "Smart"）→ 連 Solutions。
- [ ] Technologies 標籤帶：`LoRaWAN · NB-IoT · RS485 · Modbus · 4G LTE`。
- [ ] Partner 招募條（放大）：`Looking for an Industrial IoT Partner? Become a Distributor or System Integrator Partner.` → Partners。
- [ ] 改寫 `components/home/*`（移除舊 lead-gen 文案）。

### T2 — Solutions
- [ ] 路由 `app/[lang]/solutions/[slug]`（water / energy / equipment）。
- [ ] 每頁：問題場景 → 解法 → 用到產品（先文字，產品頁第二批）→ 適用產業（Industries 內容收這裡）→ CTA。

### T3 — Partners
- [ ] 路由 `app/[lang]/partners`。
- [ ] 三 program：Distributor / System Integrator / OEM-Private Label。
- [ ] Why Partner with SunGene：OEM Support / Low MOQ / Export Experience / Fast Response / Flexible Portfolio。
- [ ] 表單串 `/api/inquiries`，新增 `type=partner`。

### T4 — Contact + 表單
- [ ] 路由 `app/[lang]/contact`：Email / WhatsApp / LinkedIn + 表單。
- [ ] `/api/inquiries` 擴 `type`：`partner | catalog | quote | contact`；確認收件 email 設定正確、寄信成功（端到端測一封）。
- [ ] `Request Product Catalog` 暫接表單（catalog PDF 第二批；先收 email）。

### T5 — 上線前驗收
- [ ] `npm run typecheck` + `npm run lint` 通過。
- [ ] en/zh 兩語每頁 200；舊 lead-gen 路由回 410/301。
- [ ] 4 頁 RWD（手機）正常；表單 4 種 type 各送一封測試信收得到。
- [ ] sitemap/robots/canonical 只含新站結構；Google Search Console 重新提交。

### 第二批（上線後，不阻擋 MVP）
Products(10–12) + 各 Datasheet → Industries 獨立頁 → Applications SEO 落地頁(Tank/Pump/Solar/Meter/Alarm) → Resources(Download Catalog PDF) → 主選單補回 Products/Resources(→6 項)。
