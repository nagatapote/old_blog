# react+typescript で css の import 方法

## 前提

npm v6.14.6

node.js v12.18.4

typescript v4.0.5

webpack v5.3.2

react v17.0.1

## 手順

style-loader と css-loader パッケージをインストールします。

```
$ npm install style-loader css-loader
```

webpack.config.js に以下を追記

```JSON
module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
      },
      //ここから
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      //ここまで
    ],
  },
```

上記のように書くことで、css-loader -> style-loader の順に処理されます。

css-loader で css ファイルを読み取り、style-loader で出力するイメージです。

css を準備したら、パスを指定して import すれば OK です。

```css
div.main {
  margin: 10px;
}
```

```javascript
import "../css/main.css";
```

以上
