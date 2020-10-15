# vue.config.jsからページタイトルを設定する方法
## 前提
vue.js 2.9.6

vue cli 2.6.12

node  v12.18.4

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
