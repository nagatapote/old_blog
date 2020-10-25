# VSCode の拡張機能「Prettier」が便利なので導入してみた

## 前提

MacBookPro 13 インチ メモリ 8GB

VSCode インストール済み

## Prettier とは

保存したときにコードを自動整形してくれる非常に便利なツールです。

## 導入方法

VSCode の拡張機能検索で、「prettier」と入れ、インストールします。

<img src="./img/article018/prettier1.png" decoding="async">

command + , (カンマ)で設定画面を出したら、ワークスペースタブを押し、「onsave」と入力し、Format On Save にチェックを入れます。

<img src="./img/article018/prettier2.png" decoding="async">

次に、「formatter」と検索し、Default Formatter から「esbenp.prettier-vscode」を選択します。

<img src="./img/article018/prettier3.png" decoding="async">

VSCode を再起動したら完了です。

試しに適当にスペースを入れたり、セミコロンを取ったりして保存してみてください。

自動的に修正してくれます。

## vue.js で build 時にエラーが出る場合

### 前提

vue.js v2.6.12

vue cli v4.5.6

node v12.18.4

### 解決方法

自分の場合は、以下が原因でした。

VueCli プロジェクト作成時に、eslint-standard を選んでいた。(最初に prettier を選んでいればよかった。)

package.json に eslint-plugin-standard が記述されていたので、それを削除。

あとは、以下のコマンドで prettier を導入しました。

```
npm i -D babel-eslint eslint-config-prettier eslint-plugin-prettier eslint eslint-plugin-vue prettier prettier-eslint vue-eslint-parser
```

npm の-D は package.json に書き込むということ。

以上
