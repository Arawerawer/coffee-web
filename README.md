# Coffee Brand

精選咖啡豆專賣網站，使用 Nuxt 3 + Tailwind CSS 打造的響應式單頁網站。

## 功能

- 響應式設計（支援手機與桌面版）
- 平滑滾動導航
- 產品展示卡片（含 Modal 彈窗）
- 咖啡品項橫向滾動列表
- SEO 優化（SSR + Meta Tags）

## 技術棧

- [Nuxt 3](https://nuxt.com/) - Vue 框架
- [Tailwind CSS](https://tailwindcss.com/) - CSS 框架
- [TypeScript](https://www.typescriptlang.org/) - 型別檢查

## 開始使用

### 安裝依賴

```bash
npm install
```

### 開發模式

```bash
npm run dev
```

開啟 http://localhost:3000 查看網站。

### 建置專案

```bash
npm run build
```

### 預覽建置結果

```bash
npm run preview
```

## 專案結構

```
coffee-web/
├── app/
│   ├── app.vue              # 主頁面
│   ├── assets/
│   │   └── css/
│   │       └── main.css     # 全域樣式
│   └── components/
│       ├── Navbar.vue       # 導航列
│       ├── Hero.vue         # 首頁區塊
│       ├── ProductSection.vue   # 精選商品區
│       ├── CoffeeSection.vue    # 精選咖啡區
│       ├── AboutSection.vue     # 關於我們區
│       ├── FooterSection.vue    # 頁尾
│       └── ui/
│           ├── ProductCard.vue  # 商品卡片
│           └── CoffeeCard.vue   # 咖啡卡片
├── public/
│   ├── images/              # 圖片資源
│   └── icon/                # 圖示資源
├── nuxt.config.ts           # Nuxt 設定
└── package.json
```

## 部署

此專案可部署至 Vercel等平台

1. 將程式碼推送至 GitHub
2. 在 Vercel 連結 GitHub repo
3. Vercel 會自動偵測 Nuxt 並部署
