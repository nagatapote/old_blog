# nodebrewでnode.jsのインストール＆バージョン管理
## 前提
MacBook Pro (13-inch, 2017, Two Thunderbolt 3 ports)

## やったこと
**・homebrewをインストール**

**・nodebrewをインストール**

### homebrewをインストール
以下の公式サイトへアクセス

<a href="https://brew.sh/index_ja" target="_blank">https://brew.sh/index_ja</a>

公式サイト記載のコマンドでインストール

<img src="./img/article007/homebrew.png" decoding="async">

### nodebrewをインストール
**インストールコマンド**

```
$ brew install nodebrew
```

#### nodebrew各種コマンド

**利用可能なバージョン確認**

```
$ nodebrew ls-remote
```

**インストールする場合以下のコマンドが必要**

```
$ nodebrew setup
```

**特定のバージョンのインストール**

```
$ nodebrew install-binary [バージョン]
```

※npmもインストールされます。($ npm -v でバージョン確認。)

**利用可能なバージョン**

```
$ nodebrew ls
```

※「current: [バージョン]」が現在利用しているバージョン

**バージョンの切り替え**

```
$ nodebrew use [バージョン]
```

**バージョン確認**

```
$ node -v
```

#### 「current」と「node -v」のバージョンが一致しない場合またはnodeコマンドが使えない場合

**PATHが通っていない可能性があるので、下記方法でPATHを追記**

**zshの場合**

```
$ vi ~/.zshrc
```

```
export PATH=$HOME/.nodebrew/current/bin:$PATH
```

```
$ source ~/.zshrc
```

**bashの場合**

```
$ vi ~/.bash_profile
```

```
export PATH=$HOME/.nodebrew/current/bin:$PATH
```

```
$ source ~/.bash_profile
```

以上
