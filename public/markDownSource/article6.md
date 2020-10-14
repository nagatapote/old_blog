# core-jsモジュールエラー
## 前提
vue.js

## エラー内容
Netlifyにデプロイ時、以下のエラーが発生
（長過ぎるため、全部は表示していません）

<img src="./img/article6/core-js_error.png" decoding="async">

## 解決方法
babel.config.jsを以下の内容に変更し、解決しました。

```javascript
module.exports = {
presets: [ [ "@vue/app", { useBuiltIns: "entry" } ] ]
}
```

以上
