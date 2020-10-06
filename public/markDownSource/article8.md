# vue.config.jsからページタイトルを設定する方法
　

## 前提
***

vue.js

## 目的
***

public/index.htmlの中身を変更せずにページタイトルを設定したかった

## 解決方法
***

vue.config.jsに以下を追記する。

```
module.exports = {
  pages: {
    index: {
      entry: 'src/main.js',
      title: 'ページタイトル',
    }
  }
}
```

以上

<style>
img {
    border: 5px solid green;
    max-width: 100%;
}
</style>
