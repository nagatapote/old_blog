# react+webpack+ts-loader+typescript でプロジェクト作成の方法

## 前提

MacBookPro 13 インチ メモリ 8GB

Visual Studio Code

npm v6.14.6

node.js v12.18.4

## 手順

### モジュールのインストール

プロジェクトフォルダを作成します。

作成したプロジェクトフォルダ配下で以下コマンドを実行

package.json が作られます。

```
$ npm init -y
```

以下のコマンドで必要なパッケージをインストールします。

```
$ npm i -D webpack webpack-cli webpack-dev-server typescript ts-loader
```

下記状況が嫌でバージョン変更したい場合は、package.json でバージョンを変更して以下コマンドを実行(2020/11/02 時点)

・「webpack4」→ 5 はリリースされたばかり&webpack-dev-server でコード上書き時の自動リロードが効かない

・「webpack-cli3」 → 4 だと webpack-dev-server が使えない

```
$ npm install
```

以下コマンドで react の各モジュールをインストール

```
$ npm i react react-dom @types/react @types/react-dom
```

package.json は以下のような状態になります。

npm run build(start,watch)ができるように、scripts に追加します。

--watch は差分だけ build します。

```json
{
  "name": "my-app",
  "version": "1.0.0",
  "description": "",
  "scripts": {
    "build": "webpack",
    "start": "webpack serve",
    "watch": "webpack --watch"
  },
  "devDependencies": {
    "ts-loader": "^8.0.7",
    "typescript": "^4.0.5",
    "webpack": "^5.3.2",
    "webpack-cli": "^4.1.0",
    "webpack-dev-server": "^3.11.0"
  },
  "dependencies": {
    "@types/react": "^16.9.55",
    "@types/react-dom": "^16.9.9",
    "react": "^17.0.1",
    "react-dom": "^17.0.1"
  },
  "private": true
}
```

### tsconfig.json の作成

次に tsconfig.json をプロジェクトルートに作成します。(TypeScript の設定ファイル)

```JSON
{
  "compilerOptions": {
    "sourceMap": true,
    // TSはECMAScript 5に変換
    "target": "es5",
    // TSのモジュールはES Modulesとして出力
    "module": "es2015",
    // JSXの書式を有効に設定
    "jsx": "react",
    "moduleResolution": "node",
    "lib": ["es2020", "dom"]
  }
}
```

### webpack.config.js の作成

次に webpack.config.js をプロジェクトルートに作成します。(webpack の設定ファイル)

```javascript
module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: "development",
  // ローカル開発用環境を立ち上げる
  // 実行時にブラウザが自動的に localhost を開く
  devServer: {
    contentBase: "dist",
    open: true,
  },
  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: `./src/main.tsx`,
  // ファイルの出力設定
  output: {
    //  出力ファイルのディレクトリ名
    path: `${__dirname}/dist`,
    // 出力ファイル名
    filename: "main.js",
  },
  module: {
    rules: [
      {
        // 拡張子 .ts もしくは .tsx の場合
        test: /\.tsx?$/,
        // TypeScript をコンパイルする
        use: "ts-loader",
      },
    ],
  },
  // import 文で .ts や .tsx ファイルを解決するため
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx", ".json"],
  },
  // ES5(IE11等)向けの指定（webpack 5以上で必要）
  target: ["web", "es5"],
};
```

### モジュールの作成と build

プロジェクトルートに src フォルダを作成し、その中に main.tsx ファイルを作成します。

以下のように記述します。

```javascript
import * as React from "react";
import * as ReactDOM from "react-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello React!</h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#app"));
```

以下のコマンドで build します。

```
$ npm run build
```

src フォルダに配置した tsx ファイルがコンパイルされて、dist フォルダに main.js ファイルが出力されます。

dist フォルダ内に、index.html を作成します。

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
  </head>
  <body>
    <div id="app"></div>
    <script src="main.js"></script>
  </body>
</html>
```

以下のコマンドを実行することにより、ブラウザに「Hello React!」が表示されます。

```
$ npm run start
```

以上
