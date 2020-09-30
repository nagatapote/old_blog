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

以下の設定で解決しました。

babel.config.js

module.exports = {
presets: [ [ "@vue/app", { useBuiltIns: "entry" } ] ]
}

以上

<style>
img {
    border: 5px solid green;
    max-width: 100%;
}

h1 {
    padding: 0.3em;
    color: #333;
    background: #dae5f3;
    border-bottom: solid 3px #455586;
}

</style>