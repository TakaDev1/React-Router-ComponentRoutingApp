# 課題

### 問題文

ルーティング処理とナビゲーションを別々のコンポーネントに分けてください。

### 条件

以下の構成にする。

```text
src/
├── components/
│   └── Navigation.tsx
├── pages/
│   ├── Home.tsx
│   └── About.tsx
└── App.tsx
```

* `Navigation.tsx`に`Link`を記述
* `App.tsx`に`BrowserRouter`を記述
* `App.tsx`に`Routes`と`Route`を記述
* `/` → `Home`
* `/about` → `About`