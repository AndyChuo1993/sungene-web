# SunGene Industrial IoT — v4 工作單（上線後第一次迭代）

> 文件日期：2026-06-08
> 對象：工程師
> 前置：站已 **LIVE on sungenelite.com**（MVP + Products(Controllers×3) + Applications + Industries 全部上線、能收信、密鑰已硬化）。
> 來源：owner 親自看實際頁面 + 兩位 AI 對線上站的評論。驗證師已逐項對線上實態核對。
> **核心結論：架構已成形，這一版不改架構。任務是「把網站從公司簡介變成生意」。**

---

## 0. 一句話

> 網站最大的任務不是展示完整產品線，而是**讓第一個 Distributor 願意回信**。
> 所以這版只做三件事：**(1) 給得出型錄、(2) Hero 講清楚「為何選你不選中國廠」、(3) 清掉 Google 殘留舊品牌**。

---

## 1. ⛔ 已完成、禁止重做（驗證師 2026-06-08 對線上實測確認）

兩個 AI 的評論有**一半是建議早就做好的東西**。工程師動工前先讀這張表，**不要重做**：

| 項目 | 線上實態（已驗證） |
|---|---|
| 定位統一 IoT、無 lead-gen 字樣 | ✅ 全站 IoT；舊定位字串為零 |
| Partners 三 program | ✅ 線上已有 Distributor Program / System Integrator Program / OEM·Private Label Program + Become a Partner + Why partner |
| Hero 雙 CTA + OEM 角度 | ✅ 已有「Request Product Catalog」(主) +「Become a Partner」(次)，文中已提 OEM |
| 去掉 "Smart" 前綴 | ✅ Water / Energy / Equipment Monitoring（無 Smart） |
| About 答「為何不直接找中國廠」 | ✅ About 已有 "Why Buy From SunGene"：China Supply Chain / OEM / Low MOQ / English / Export |
| Industries 五產業 | ✅ Water Utilities / Energy & Solar / Industrial Facilities / Agriculture / Telecom，全 live |
| Applications 長尾落地頁 | ✅ Tank Level / Pump / Solar Site / Remote Meter Reading / Equipment Alarm，全 live |
| 舊 lead-gen 頁 | ✅ `/services/*`、`/cn/*`、`/buyers-list`、`/market-entry-strategy` 等**全部回 410**；sitemap(48 條) + robots 乾淨，無舊網址 |
| MVP 先行、能收信 | ✅ 線上 POST `/api/inquiries` = 200，四種 type 齊全 |

> AI 說「舊外貿內容還活著」是**對著 Google 搜尋快取講的**，不是站本身——站早就 410 了。這是 §4 的 GSC 工作，不是程式 bug。

---

## 2. 兩個 AI 評論 → 濾出的「真缺口」（尚未做）

| 缺口 | 來源 | 為何重要 | 優先 |
|---|---|---|---|
| **沒有可下載的 Catalog PDF** | AI#1+#2 都列為最痛 | B2B 客戶看站 30 秒 → 下載型錄 → 內部討論 → 一週後回信。沒型錄就流失 | **P1** |
| Hero 沒明講「為何選你不選中國廠/通路導向」 | AI#2 核心 | 你贏不了 EBYTE/Dragino/RAK 的產品，只能贏 OEM/低 MOQ/英文/貿易服務——這要寫在 Hero | **P2** |
| 「Why SunGene」差異化只藏在 About | AI#2 | 每個訪客都會想「為何不直接找中國廠」，這答案該在首頁就出現，不只 About | **P2** |
| Google 仍索引舊外貿網址 | AI#1 | Google 目前仍認為你是「外貿顧問」，不是 IoT 公司 | **P3** |
| Products 不完整 | AI#1 想先補；AI#2 想先別碰 | 見 §3 P4——**採 AI#2：先別大做** | **P4** |

---

## 2.5 ⚑ 第二輪 AI 提的「P0：/en 首頁人格分裂」— 驗證師已查證：origin 端不存在

第二位 AI（實際開了線上站）說「直接開 `/en` 第一次抓到舊 lead-gen 首頁，title 還是 Export Lead Generation」。**驗證師 2026-06-08 已親查，結論：origin 端沒有這個 bug，工程師不要去獵 cache 問題。** 證據：
- `/en` 連抓 6 次 → **6/6 全新 IoT title**；cache-bust 也是新版。
- 回應標頭 `cache-control: private, no-cache, no-store` + `server: Google Frontend`，**無 CDN/LB 快取層**（無 via/x-cache/cf-ray/age）→ 沒有任何「發舊 HTML」的機制。
- `og:title`/`og:description` 也是新 IoT 版（社群分享不露舊牌）；裸 `/` → 301 → `/en`。
- 「Export Lead Generation / Distributor Development / 外銷客戶開發」字串**已不在當前原始碼、也不在部署的 commit**。
> 結論：那個舊 title **只活在 Google 的搜尋索引快取**（Google 還沒重爬舊站）。這不是部署/快取 bug，而是 §3 P3 的 GSC 工作。**但這證明 P3 有真實的對外影響**（客戶 google 你會看到舊標題），所以 P3 的「送 GSC 重爬」要**立即並行啟動**（owner，低成本，越早送 Google 越早重爬），雖然它不擋 Catalog 開工。

## 3. 工作單（按優先序）

### P1 — Catalog PDF + 下載/留資（最高 ROI，先做）
**目標：讓「Request Product Catalog」真的給得出一份 PDF，並換到 email。**

- [ ] **產一份 v1 Catalog PDF**：用現有素材自動生成即可，不必等 owner 完稿——封面(SunGene Industrial IoT 定位) + 三大 Solutions(Water/Energy/Equipment) + Applications 五場景 + 現有 3 個 Controller 產品 + Partners/OEM 一頁 + Contact。**先做出 70 分能寄的版本**，owner 日後可換精美版。
  - 放 `public/catalog/sungene-industrial-iot-catalog.pdf`（注意：不得夾任何供應商品牌/第三方商標的圖——沿用站上已裁乾淨的產品圖；產品圖務必**連螢幕/OLED 一起檢查**有無第三方品牌，見 VRF/大金教訓）。
- [ ] **下載機制**：兩選一，建議 (B)——
  - (A) 直接下載連結；或
  - (B) **留資後下載**（填 email → 觸發 `/api/inquiries` type=`Catalog Request` → 回信附下載連結）。B 能蒐集名單，B2B 標準作法。
- [ ] **接點**：Header、Hero、各 Product/Solution/Application 頁的「Request Product Catalog」全部指到這個流程（目前是指到 contact?type=catalog，改成真的能拿到 PDF）。
- [ ] （第二批再補 Datasheets / Company Profile；這版只做 Catalog 一份。）

### P2 — Home 通路導向強化（便宜、高槓桿，純文案/區塊）
**目標：Hero 一眼讓 Distributor 知道「你跟中國廠不一樣」。**

- [ ] **Hero 加一條通路副標/標籤**（在現有副標下）：`OEM & Private Label Ready — for Distributors and System Integrators`。
- [ ] **CTA 權重**：維持雙 CTA，但把「Become a Partner」做到與「Request Product Catalog」**同等視覺份量**（目前 Partner 是次按鈕）。理由：未來主力客戶是**通路**不是終端廠。
- [ ] **首頁加一條「Why SunGene」strip**（在三場景卡與 Partner 條之間）：Taiwan Team · China Manufacturing · OEM Ready · Low MOQ · English Support · Export Experience。內容直接複用 About 既有文案，不新增 About 以外的頁（避免選單膨脹，依 plan §3）。
- [ ] en/zh 兩語都要。

### P3 — 舊 SEO / Google 索引收尾（站已乾淨，剩 GSC 與保險信號）
> **緊急度上修（見 §2.5）**：兩位 AI 都因 Google 仍顯示舊「Export Lead Generation」標題而誤判成站壞了。這對外是真風險（寄開發信時客戶 google 你會看到舊牌）。**GSC 重爬請 owner 立即並行啟動**，不必等 Catalog——越早送、Google 越早把舊頁換成新頁。
站本身已 410 + sitemap/robots 乾淨。剩下：

- [ ] **工程端保險**：確認舊網址回 **410（不是 404）**——410 讓 Google 更快移除（已驗證為 410，保持即可，勿改成 404/301 到首頁）。
- [ ] **GSC（owner 為主，工程協助）**：提交新 sitemap、對舊外貿網址送 Removal、監看重爬。
- [ ] llms.txt / JSON-LD 再掃一次無舊定位字樣（MVP 已清，確認即可）。

### P4 — Products 維持輕量（**採 AI#2：先別大做**）
- [ ] **不要**建 50 個產品頁。現有 3 個 Controller 留著即可。
- [ ] Gateways / 水位·能源感測器 / 電錶分類：**等 owner 給非暖通供應商連結**再補（現供應商 67 SKU 全是暖通）。在那之前，這些品類用 **P1 的 Catalog + Request Quote** 承接，不開空殼頁。

---

## 4. ⛔ 明確不要做
- 不重做 Partners（三 program 已 live）、不重加 Smart 前綴的反向、不重寫 About 的 Why-buy-China（已有）。
- 不大量鋪產品頁（ROI 低）。
- 不改主選單架構、不改 i18n/middleware/部署機制。
- **不開 Cloud Build 自動觸發**（owner 決定維持手動部署控成本）。

---

## 5. 驗收標準（上線前）
- [ ] `tsc` + `next build` 通過。
- [ ] 「Request Product Catalog」實際拿得到 PDF（留資版：填 email → 收到附下載連結的信）。
- [ ] Catalog PDF 內**無任何供應商/第三方品牌**（含產品圖螢幕內容）。
- [ ] Home 有 OEM/Partner 副標 + Why SunGene strip + 同等 CTA，en/zh 皆是。
- [ ] 舊外貿網址仍 410；sitemap 乾淨。
- [ ] 線上 POST `/api/inquiries` 仍 200（沒被改壞）。
- [ ] 手動部署，部署後線上逐項實測（不採信本地綠）。

---

## 6. 評分與心態（owner 原話）
> 從「外貿顧問網站」轉型成「Industrial IoT 網站」：**85/100**。扣的 15 分＝Products 不完整 + Catalog 沒出來 + Partners 可更商業化 + Google 殘留舊品牌。
> 已跨過最難的階段——以前在吵「要不要轉型」，現在在吵「產品頁怎麼排、型錄怎麼做」。
> **下一步不是再改定位，是把第一份 Catalog 做出來，然後開始寄第一批開發信。**
