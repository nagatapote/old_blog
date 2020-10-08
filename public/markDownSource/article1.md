# vue.jsとnetlifyでblog作成
　

## 目的
***
　

技術ブログ作成し、やったことを残しておくため

## 使ったもの
***
　

PC：MacBookPro 13インチ メモリ8GB

エディタ：Visual Studio Code(ターミナルも使えて便利)

## やったこと
***
　

**・vue.jsとgithubの連携**

**・githubとnetlifyの連携**

## ■vue.jsとgithubの連携
***
　

### ▼githubの登録、リポジトリの作成
***
　

githubとググって、登録

![NewRepositories](./img/article1/NewRepositories.png)

ログイン後、左上の「New」をクリック

![CreateRepositories](./img/article1/CreateRepositories.png)

「Repository name」に好きな名前を入れて、「Create repository」をクリックすれば完了

### ▼公開鍵・秘密鍵の作成
***
　

**鍵を入れるフォルダへ移動**

<kbd>$ cd ~/.ssh</kbd>

**鍵を生成**

<kbd>$ ssh-keygen -t rsa</kbd> (質問されるが、全てEnter)

### ▼公開鍵をGitHubにアップ
***
　

[https://github.com/settings/ssh](https://github.com/settings/ssh)

上記ページで公開鍵の設定が可能。（GitHubに登録してある必要あり）

![SSHkey](./img/article1/SSHkey.png)

右上の「New SSH key」をクリック

![addnew](./img/article1/addnew.png)

「title」に自分の好きな名前

「key」には以下のコマンドでコピーしたものを貼り付ける

<kbd>$ pbcopy &lt; ~/.ssh/id_rsa.pub</kbd>

**接続確認**

<kbd>$ ssh -T `git@github.com`</kbd>

以下のように表示されたら接続完了

You've successfully authenticated, but GitHub does not provide shell access.

### ▼githubへpushする方法
***
　

**作業ディレクトリをgithubで管理するためのコマンド**

<kbd>$ git init</kbd>

**作業ディレクトリ→ステージングエリア**

<kbd>$ git add ファイル名</kbd>

<kbd>$ git add -A</kbd> (作業ツリー内全て)

**ステージングエリア→ローカルリポジトリ**

<kbd>$ git commit -m "コミットメッセージ"</kbd>

**ローカルリポジトリ→リモートリポジトリ**

<kbd>$ git push</kbd>

**※初めてリモートリポジトリにpushする場合は、以下のコマンド**

<kbd>$ git remote add origin `git@github.com`:[githubID]]/[リポジトリ名]</kbd>

以下の「Code」で確認可能

![githubCode](./img/article1/githubCode.png)

<kbd>$ git push -u origin master</kbd>

## ■githubとnetlifyの連携
***
　

netlifyとググって、githubでログイン

![NewSiteFromGit](./img/article1/NewSiteFromGit.png)

右上の「New site from Git」をクリック

![CreateNewSite](./img/article1/CreateNewSite.png)

左下の「GitHub」をクリック

連携したいリポジトリを選択

![DeploySite](./img/article1/DeploySite.png)

vue.jsの場合、上記画像のように入力し、「Deploy site」をクリック

あとは、githubにpushするだけで勝手にデプロイしてくれます

初回はビルドに時間がかかります

完了すると以下のようにURLが表示されます

URLをクリックするとサイトが表示されます

![Deploy](./img/article1/Deploy.png)

※上記画像は、名前.comでドメインを取得し、設定済み

[お名前.comで取得したドメインを、Netlify に設定する方法](https://note.com/koushikagawa/n/n407cde93bdca)

以上

<style>
img {
    border: 5px solid green;
    max-width: 100%;
}
</style>
