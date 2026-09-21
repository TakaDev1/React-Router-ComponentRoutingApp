# React Router Component Separation App

React Routerの**ナビゲーション処理**と**ルーティング処理**を別々のコンポーネントに分離する練習アプリです。

## 概要

`Navigation.tsx`にページ遷移用の`Link`をまとめ、`App.tsx`では`BrowserRouter`、`Routes`、`Route`を使ってルーティングを管理します。

## ルーティング

| URL      | ページ   |
| -------- | ----- |
| `/`      | Home  |
| `/about` | About |

## 学習内容

* コンポーネントの責務を分離する
* `Navigation`コンポーネントでナビゲーションを管理する
* `App`コンポーネントでルーティングを管理する
* `Link`によるページ遷移
* `BrowserRouter`、`Routes`、`Route`の役割

## ディレクトリ構成

```text
src/
├── components/
│   └── Navigation.tsx
├── pages/
│   ├── Home.tsx
│   └── About.tsx
└── App.tsx
```

## 実装条件

### Navigation.tsx

`Link`を記述します。

```tsx
import { Link } from "react-router";

const Navigation = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  );
};

export default Navigation;
```

### App.tsx

`BrowserRouter`、`Routes`、`Route`を記述します。

```tsx
import { BrowserRouter, Route, Routes } from "react-router";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";

function App() {
  return (
    <BrowserRouter>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

## コンポーネントの責務

### Navigation.tsx

ナビゲーションを担当します。

```text
Navigation
    ↓
Link
    ↓
ページ移動
```

### App.tsx

ルーティングを担当します。

```text
App
 ↓
BrowserRouter
 ↓
Routes
 ↓
Route
 ↓
ページ表示
```

## 実行

```bash
npm install
npm run dev
```

以下のURLにアクセスして動作を確認します。

```text
http://localhost:5173/
http://localhost:5173/about
```

`Navigation`のリンクから`Home`と`About`を相互に移動できれば完成です。

## 課題のポイント

この課題では、**ナビゲーションとルーティングの責務を分離すること**を目的とします。

```text
App.tsx
├── BrowserRouter
│
├── Navigation
│     └── Link
│
└── Routes
      ├── Route "/"      → Home
      └── Route "/about" → About
```

`Navigation.tsx`には`Link`、`App.tsx`にはルーティング処理を配置することで、それぞれの役割を明確にします。
