# Vuetifyの導入方法
　

## 目的
***

ブログのデザインをいい感じにしたかった

## 解決方法
***

Vuetifyを導入することで、簡単にいい感じのデザインにすることができる

## やったこと
***

・Vuetifyの導入

・公式サイトからソースをコピペまたは参考にする

### ■Vuetifyの導入
***

<b>vueのプロジェクトを作成</b>

<kbd>$ vue create project</kbd>

<b>Vuetifyをインストール</b>

作成したprojectのフォルダに移動し、以下コマンド

<kbd>$ vue add vuerify</kbd>

以下コマンドで確認すると、以下画像のような画面になります。

<kbd>$ npm run serve</kbd>

![Vuetify](./img/article5/Vuetify.png)

### ■公式サイトからソースをコピペまたは参考にする
***

以下の公式サイトにアクセスします。

[https://vuetifyjs.com/en/](https://vuetifyjs.com/en/)

左側のメニューや検索で実装したいコンポーネントを探し、右上の＜＞ボタンからコードを確認、コピペすることができます。

![Vuetify](./img/article5/Vuetify01.png)

私のブログもVuetifyでデザイン等を実装しています。

![Vuetify](./img/article5/Vuetify02.png)

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