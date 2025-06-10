# PitaCSS 低水準Class（ユーティリティクラス）

## 概要
PitaCSSの低水準Classは、HTMLタグのClasslessスタイルに加えて細かい調整を行うためのユーティリティクラスです。直感的な命名規則で、必要な箇所にピンポイントで適用できます。

## 🎯 余白の命名規則の特徴
- 短縮形: `margin-top` → `mT` (被らないようにtopの`T`などが大文字になっています)
- 数値指定: `10px`, `20px`, `40px`, `60px` の4段階
- 方向指定: 全方向(`m10等`), `T`(Top), `B`(Bottom), `L`(Left), `R`(Right), `X`(水平), `Y`(垂直)
- 重要度: すべて `!important` 付きで確実に適用

## 📏 マージン

### 全方向マージン
```html
<div class="m10">全方向10px</div>
<div class="m20">全方向20px</div>
<div class="m40">全方向40px</div>
<div class="m60">全方向60px</div>
```

### 方向別マージン
```html
<!-- 上方向 -->
<div class="mT10">上10px</div>
<div class="mT20">上20px</div>
<div class="mT40">上40px</div>
<div class="mT60">上60px</div>

<!-- 右方向 -->
<div class="mR10">右10px</div>
<div class="mR20">右20px</div>
<div class="mR40">右40px</div>
<div class="mR60">右60px</div>

<!-- 下方向 -->
<div class="mB10">下10px</div>
<div class="mB20">下20px</div>
<div class="mB40">下40px</div>
<div class="mB60">下60px</div>

<!-- 左方向 -->
<div class="mL10">左10px</div>
<div class="mL20">左20px</div>
<div class="mL40">左40px</div>
<div class="mL60">左60px</div>
```

### 軸別マージン
```html
<!-- 水平方向（左右） -->
<div class="mX10">左右10px</div>
<div class="mX20">左右20px</div>
<div class="mX40">左右40px</div>
<div class="mX60">左右60px</div>

<!-- 垂直方向（上下） -->
<div class="mY10">上下10px</div>
<div class="mY20">上下20px</div>
<div class="mY40">上下40px</div>
<div class="mY60">上下60px</div>
```

## 📦 パディング

### 全方向パディング
```html
<div class="p10">全方向10px</div>
<div class="p20">全方向20px</div>
<div class="p40">全方向40px</div>
<div class="p60">全方向60px</div>
```

### 方向別パディング
```html
<!-- 上方向 -->
<div class="pT10">上10px</div>
<div class="pT20">上20px</div>
<div class="pT40">上40px</div>
<div class="pT60">上60px</div>

<!-- 右方向 -->
<div class="pR10">右10px</div>
<div class="pR20">右20px</div>
<div class="pR40">右40px</div>
<div class="pR60">右60px</div>

<!-- 下方向 -->
<div class="pB10">下10px</div>
<div class="pB20">下20px</div>
<div class="pB40">下40px</div>
<div class="pB60">下60px</div>

<!-- 左方向 -->
<div class="pL10">左10px</div>
<div class="pL20">左20px</div>
<div class="pL40">左40px</div>
<div class="pL60">左60px</div>
```

### 軸別パディング
```html
<!-- 水平方向（左右） -->
<div class="pX10">左右10px</div>
<div class="pX20">左右20px</div>
<div class="pX40">左右40px</div>
<div class="pX60">左右60px</div>

<!-- 垂直方向（上下） -->
<div class="pY10">上下10px</div>
<div class="pY20">上下20px</div>
<div class="pY40">上下40px</div>
<div class="pY60">上下60px</div>
```

## 📐 幅・レスポンシブ

### 基本の幅
```html
<div class="w100">幅100%</div>
<div class="w50">幅50%</div>
<div class="fit-content">コンテンツに合わせた幅</div>
```

### 最大幅（中央揃え）
```html
<div class="w-max768">最大幅768px（中央揃え）</div>
<div class="w-max1250">最大幅1250px（中央揃え）</div>
```

### レスポンシブ表示切替
```html
<!-- 768px以下で非表示 -->
<div class="hide-max768">スマホで非表示</div>

<!-- 1250px以下で非表示 -->
<div class="hide-max1250">タブレット以下で非表示</div>

<!-- 768px以上で非表示 -->
<div class="hide-min768">PC・タブレットで非表示</div>

<!-- 1250px以上で非表示 -->
<div class="hide-min1250">大画面PCで非表示</div>
```

## 🎨 フォントサイズ

```html
<span class="text-xs">最小（13px）</span>
<span class="text-sm">小（15px）</span>
<span class="text-base">標準（clamp: 16-18px）</span>
<span class="text-lg">大（clamp: 20-25px）</span>
<span class="text-xl">特大（clamp: 23-30px）</span>
<span class="text-2xl">最大（clamp: 30-40px）</span>
```

## 📍 配置・整列

### コンテンツ配置 (こちらを推奨)
```html
<div class="content-left">左寄せ</div>
<div class="content-center">中央寄せ</div>
<div class="content-right">右寄せ</div>
```

### テキスト配置
```html
<div class="text-left">テキスト左寄せ</div>
<div class="text-center">テキスト中央寄せ</div>
<div class="text-right">テキスト右寄せ</div>
```

## 🔗 リンク

```html
<!-- 親要素の色を継承するリンク -->
<a href="#" class="inherit-link">色を継承するリンク</a>
```

## 💡 使用例

```html
<h1 class="mB20">マージンボトム20px</h1>
```

これらの低水準Classを段階的に使うことで、効率よくPitaCSSを使用できます。