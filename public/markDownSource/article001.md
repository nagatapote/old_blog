# vue.jsとnetlifyでblog作成
## 目的
技術ブログ作成し、やったことを残しておくため

## 使ったもの
PC：MacBookPro 13インチ メモリ8GB

エディタ：Visual Studio Code(ターミナルも使えて便利)

## やったこと
**・vue.jsとgithubの連携**

**・githubとnetlifyの連携**

### vue.jsとgithubの連携
#### githubの登録、リポジトリの作成
githubとググって、登録

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

#### 公開鍵をGitHubにアップ
<a href="https://github.com/settings/ssh" target="_blank">https://github.com/settings/ssh</a>

上記ページで公開鍵の設定が可能。（GitHubに登録してある必要あり）

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

#### githubへpushする方法
**作業ディレクトリをgithubで管理するためのコマンド**

```
$ git init
```

**作業ディレクトリ→ステージングエリア**

```
$ git add ファイル名
```

```
$ git add -A
/* 作業ツリー内全て */
```

**ステージングエリア→ローカルリポジトリ**

```
$ git commit -m "コミットメッセージ"
```

**ローカルリポジトリ→リモートリポジトリ**

```
$ git push
```

**※初めてリモートリポジトリにpushする場合は、以下のコマンド**

```
$ git remote add origin git@github.com:[githubID]/[リポジトリ名]
```

以下の「Code」で確認可能

<img src="./img/article001/githubCode.png" decoding="async">

```
$ git push -u origin master
```

### githubとnetlifyの連携
netlifyとググって、githubでログイン

<img src="./img/article001/NewSiteFromGit.png" decoding="async">

右上の「New site from Git」をクリック

<img src="./img/article001/CreateNewSite.png" decoding="async">

左下の「GitHub」をクリック

連携したいリポジトリを選択

<img src="./img/article001/DeploySite.png" decoding="async">

vue.jsの場合、上記画像のように入力し、「Deploy site」をクリック

あとは、githubにpushするだけで勝手にデプロイしてくれます

初回はビルドに時間がかかります

完了すると以下のようにURLが表示されます

URLをクリックするとサイトが表示されます

<img src="./img/article001/Deploy.png" decoding="async">

※上記画像は、名前.comでドメインを取得し、設定済み

<a href="https://note.com/koushikagawa/n/n407cde93bdca" target="_blank">お名前.comで取得したドメインを、Netlify に設定する方法</a>

以上
