# vue.config.js からページタイトルを設定する方法

## 前提

vue.js v2.6.12

vue cli v4.5.6

node v12.18.4

## 目的

public/index.html の中身を変更せずにページタイトルを設定したかった

## 解決方法

vue.config.js に以下を追記する。

```javascript
module.exports = {
  pages: {
    index: {
      entry: "src/main.js",
      title: "ページタイトル",
    },
  },
};
```

以上
