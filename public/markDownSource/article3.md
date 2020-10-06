# SPAの「/」以外でリロードすると404エラーになる
　

## 前提
***

vue.js

netlify

## 目的
***

vue.jsでSPAのブログを構築したが、「/」以外（例えば、/about）等でブラウザのリロードをすると404エラーになったため、それを解決する

## 原因
***

サーバから取得するコンテンツがindex.htmlしかないため。（例：about.htmlは存在しない）

## 解決方法
***

/index.htmlにリダイレクトさせるようにすればよい。

publicディレクトリに、「_redirects」というファイルを作成する。

ファイル内に以下の内容を記述

<kbd>/* /index.html 200</kbd>

以上

<style>
img {
    border: 5px solid green;
    max-width: 100%;
}
</style>
