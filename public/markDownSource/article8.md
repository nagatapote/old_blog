# vue.config.jsからページタイトルを設定する方法
## 前提
vue.js

## 目的
public/index.htmlの中身を変更せずにページタイトルを設定したかった

## 解決方法
vue.config.jsに以下を追記する。

```javascript
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
