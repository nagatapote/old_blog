# core-jsモジュールエラー
　

## 前提
***

vue.js

## エラー内容
***

Netlifyにデプロイ時、以下のエラーが発生
（長過ぎるため、全部は表示していません）

![core-js_error](./img/article6/core-js_error.png)

## 解決方法
***

babel.config.jsを以下の内容に変更し、解決しました。

```
module.exports = {
presets: [ [ "@vue/app", { useBuiltIns: "entry" } ] ]
}
```

以上

<style>
img {
    border: 5px solid green;
    max-width: 100%;
}
</style>
