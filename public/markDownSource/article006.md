# core-js モジュールエラー

## 前提

vue.js v2.6.12

vue cli v4.5.6

node v12.18.4

## エラー内容

Netlify にデプロイ時、以下のエラーが発生
（長過ぎるため、全部は表示していません）

<img src="./img/article006/core-js_error.png" decoding="async">

## 解決方法

babel.config.js を以下の内容に変更し、解決しました。

```javascript
module.exports = {
  presets: [["@vue/app", { useBuiltIns: "entry" }]],
};
```

以上
