# vue.js と netlify で blog 作成

## 目的

技術ブログ作成し、やったことを残しておくため

## 使ったもの

PC：MacBookPro 13 インチ メモリ 8GB

エディタ：Visual Studio Code(ターミナルも使えて便利)

## やったこと

**・vue.js と github の連携**

**・github と netlify の連携**

### vue.js と github の連携

#### github の登録、リポジトリの作成

github とググって、登録

<img src="./img/article001/NewRepositories.png" decoding="async">

ログイン後、左上の「New」をクリック

<img src="./img/article001/CreateRepositories.png" decoding="async">

「Repository name」に好きな名前を入れて、「Create repository」をクリックすれば完了

#### 公開鍵・秘密鍵の作成

**鍵を入れるフォルダへ移動**

```
$ cd ~/.ssh
```

**鍵を生成**

```
$ ssh-keygen -t rsa
/* 質問されるが、全てEnter */
```

#### 公開鍵を GitHub にアップ

<a href="https://github.com/settings/ssh" target="_blank">https://github.com/settings/ssh</a>

上記ページで公開鍵の設定が可能。（GitHub に登録してある必要あり）

<img src="./img/article001/SSHkey.png" decoding="async">

右上の「New SSH key」をクリック

<img src="./img/article001/addnew.png" decoding="async">

「title」に自分の好きな名前

「key」には以下のコマンドでコピーしたものを貼り付ける

```
$ pbcopy < ~/.ssh/id_rsa.pub
```

**接続確認**

```
$ ssh -T git@github.com
```

以下のように表示されたら接続完了

You've successfully authenticated, but GitHub does not provide shell access.

#### github へ push する方法

**作業ディレクトリを github で管理するためのコマンド**

```
$ git init
```

**作業ディレクトリ → ステージングエリア**

```
$ git add ファイル名
```

```
$ git add -A
/* 作業ツリー内全て */
```

**ステージングエリア → ローカルリポジトリ**

```
$ git commit -m "コミットメッセージ"
```

**ローカルリポジトリ → リモートリポジトリ**

```
$ git push
```

**※初めてリモートリポジトリに push する場合は、以下のコマンド**

```
$ git remote add origin git@github.com:[githubID]/[リポジトリ名]
```

以下の「Code」で確認可能

<img src="./img/article001/githubCode.png" decoding="async">

```
$ git push -u origin master
```

### github と netlify の連携

netlify とググって、github でログイン

<img src="./img/article001/NewSiteFromGit.png" decoding="async">

右上の「New site from Git」をクリック

<img src="./img/article001/CreateNewSite.png" decoding="async">

左下の「GitHub」をクリック

連携したいリポジトリを選択

<img src="./img/article001/DeploySite.png" decoding="async">

vue.js の場合、上記画像のように入力し、「Deploy site」をクリック

あとは、github に push するだけで勝手にデプロイしてくれます

初回はビルドに時間がかかります

完了すると以下のように URL が表示されます

URL をクリックするとサイトが表示されます

<img src="./img/article001/Deploy.png" decoding="async">

※上記画像は、名前.com でドメインを取得し、設定済み

ドメイン設定は、以下のサイトを参考にしました。

<a href="https://note.com/koushikagawa/n/n407cde93bdca" target="_blank">お名前.com で取得したドメインを、Netlify に設定する方法</a>

以上
