# nodebrewでnodeのバージョン管理
　

## 前提
***
MacBook Pro (13-inch, 2017, Two Thunderbolt 3 ports)

## やったこと
***

<b>・homebrewをインストール</b>

<b>・nodebrewをインストール</b>

### ■homebrewをインストール
***

以下の公式サイトへアクセス

[https://brew.sh/index_ja](https://brew.sh/index_ja)

以下のコマンドでインストール

![homebrew](./img/article7/homebrew.png)

### ■nodebrewをインストール
***

<b>インストールコマンド</b>

<kbd>$ brew install nodebrew</kbd>

#### ▼nodebrew各種コマンド
***

<b>利用可能なバージョン確認</b>

<kbd>$ nodebrew ls-remote</kbd>

<b>特定のバージョンのインストール</b>

<kbd>$ nodebrew install-binary [バージョン]</kbd>

<b>利用可能なバージョン</b>

<kbd>nodebrew ls</kbd>

※「current: [バージョン]」が現在利用しているバージョン

<b>バージョンの切り替え</b>

<kbd>$ nodebrew use [バージョン]</kbd>

<b>バージョン確認</b>

<kbd>$ node -v</kbd>

#### ▼「current」と「node -v」のバージョンが一致しない場合
***

<b>PATHが通っていない可能性があるので、下記方法でPATHを追記</b>

<kbd>$ vi ~/.zshrc</kbd>

```
export PATH=$HOME/.nodebrew/current/bin:$PATH
```

<kbd>$ source ~/.zshrc</kbd>

以上

<style>
img {
    border: 5px solid green;
    max-width: 100%;
}
</style>
