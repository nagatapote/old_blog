<template>
<div class="20200922" id="article1">
        <b-container class="justifiy-content-center">
<h1><a id="vuejsnetlifyblog_0"></a>vue.jsとnetlifyでblog作成</h1> <h2><a id="_2"></a>目的</h2> <p>技術ブログ作成し、やったことを残しておくため</p> <h2><a id="_6"></a>使ったもの</h2> <p>PC：MacBookPro 13インチ メモリ8GB</p> <p>エディタ：Visual Studio Code(ターミナルも使えて便利)</p> <h2><a id="_12"></a>やったこと</h2> <ul> <li> <p>vue.jsとgithubの連携</p> </li> <li> <p>githubとnetlifyの連携</p> </li> </ul> <h2><a id="vuejsgithub_18"></a>■vue.jsとgithubの連携</h2> <h3><a id="github_20"></a>▼githubの登録、リポジトリの作成</h3> <p>githubとググって、登録</p> <p><img src="../../assets/20200922/NewRepositories.png" alt="NewRepositories" /></p> <p>ログイン後、左上の「New」をクリック</p> <p><img src="../../assets/20200922/CreateRepositories.png" alt="CreateRepositories" /></p> <p>「Repository name」に好きな名前を入れて、「Create repository」をクリックすれば完了</p> <h3><a id="_32"></a>▼公開鍵・秘密鍵の作成</h3> <p><strong>鍵を入れるフォルダへ移動</strong></p> <p><kbd>$ cd ~/.ssh</kbd></p> <p><strong>鍵を生成</strong></p> <p><kbd>$ ssh-keygen -t rsa</kbd> (質問されるが、全てEnter)</p> <h3><a id="GitHub_42"></a>▼公開鍵をGitHubにアップ</h3> <p><a href="https://github.com/settings/ssh" target="_blank">https://github.com/settings/ssh</a></p> <p>上記ページで公開鍵の設定が可能。（GitHubに登録してある必要あり）</p> <p><img src="../../assets/20200922/SSHkey.png" alt="SSHkey" /></p> <p>右上の「New SSH key」をクリック</p> <p><img src="../../assets/20200922/addnew.png" alt="addnew" /></p> <p>「title」に自分の好きな名前</p> <p>「key」には以下のコマンドでコピーしたものを貼り付ける</p> <p><kbd>$ pbcopy &lt; ~/.ssh/id_rsa.pub</kbd></p> <p><strong>接続確認</strong></p> <p><kbd>$ ssh -T git@github.com</kbd></p> <p>以下のように表示されたら接続完了</p> <p>You’ve successfully authenticated, but GitHub does not provide shell access.</p> <h3><a id="githubpush_68"></a>▼githubへpushする方法</h3> <p><strong>作業ディレクトリをgithubで管理するためのコマンド</strong></p> <p><kbd>$ git init</kbd></p> <p><strong>作業ディレクトリ→ステージングエリア</strong></p> <p><kbd>$ git add ファイル名</kbd></p> <p><kbd>$ git add -A</kbd> (作業ツリー内全て)</p> <p><strong>ステージングエリア→ローカルリポジトリ</strong></p> <p><kbd>$ git commit -m “コミットメッセージ”</kbd></p> <p><strong>ローカルリポジトリ→リモートリポジトリ</strong></p> <p><kbd>$ git push</kbd></p> <p><strong>※初めてリモートリポジトリにpushする場合は、以下のコマンド</strong></p> <p><kbd>$ git remote add origin git@github.com:[githubID]]/[リポジトリ名]</kbd></p> <p>以下の「Code」で確認可能</p> <p><img src="../../assets/20200922/githubCode.png" alt="githubCode" /></p> <p><kbd>$ git push -u origin master</kbd></p> <h2><a id="githubnetlify_98"></a>■githubとnetlifyの連携</h2> <p>netlifyとググって、githubでログイン</p> <p><img src="../../assets/20200922/NewSiteFromGit.png" alt="NewSiteFromGit" /></p> <p>右上の「New site from Git」をクリック</p> <p><img src="../../assets/20200922/CreateNewSite.png" alt="CreateNewSite" /></p> <p>左下の「GitHub」をクリック</p> <p>連携したいリポジトリを選択</p> <p><img src="../../assets/20200922/DeploySite.png" alt="DeploySite" /></p> <p>vue.jsの場合、上記画像のように入力し、「Deply site」をクリック</p> <p>あとは、githubにpushするだけで勝手にデプロイしてくれます</p> <p>初回はビルドに時間がかかります</p> <p>完了すると以下のようにURLが表示されますので、クリックするとサイトが表示されます</p> <p><img src="../../assets/20200922/Deploy.png" alt="Deploy" /></p> <p>※上記画像は、名前.comでドメインを取得し、設定済み</p> <p>以上</p>
        </b-container>
    </div>
</template>

<style scoped>

img {
    max-width: 100%;
    border: 5px solid green;
}
</style>

<!--

# vue.jsとnetlifyでblog作成

## 目的

技術ブログ作成し、やったことを残しておくため

## 使ったもの

PC：MacBookPro 13インチ メモリ8GB

エディタ：Visual Studio Code(ターミナルも使えて便利)

## やったこと

- vue.jsとgithubの連携

- githubとnetlifyの連携

## ■vue.jsとgithubの連携

### ▼githubの登録、リポジトリの作成

githubとググって、登録

![NewRepositories](../../assets/20200922/NewRepositories.png)

ログイン後、左上の「New」をクリック

![CreateRepositories](../../assets/20200922/CreateRepositories.png)

「Repository name」に好きな名前を入れて、「Create repository」をクリックすれば完了

### ▼公開鍵・秘密鍵の作成

**鍵を入れるフォルダへ移動**

<kbd>$ cd ~/.ssh</kbd>

**鍵を生成**

<kbd>$ ssh-keygen -t rsa</kbd> (質問されるが、全てEnter)

### ▼公開鍵をGitHubにアップ

[https://github.com/settings/ssh](https://github.com/settings/ssh)

上記ページで公開鍵の設定が可能。（GitHubに登録してある必要あり）

![SSHkey](../../assets/20200922/SSHkey.png)

右上の「New SSH key」をクリック

![addnew](../../assets/20200922/addnew.png)

「title」に自分の好きな名前

「key」には以下のコマンドでコピーしたものを貼り付ける

<kbd>$ pbcopy &lt; ~/.ssh/id_rsa.pub</kbd>

**接続確認**

<kbd>$ ssh -T git@github.com</kbd>

以下のように表示されたら接続完了

You've successfully authenticated, but GitHub does not provide shell access.

### ▼githubへpushする方法

**作業ディレクトリをgithubで管理するためのコマンド**

<kbd>$ git init</kbd>

**作業ディレクトリ→ステージングエリア**

<kbd>$ git add ファイル名</kbd>

<kbd>$ git add -A</kbd> (作業ツリー内全て)

**ステージングエリア→ローカルリポジトリ**

<kbd>$ git commit -m "コミットメッセージ"</kbd>

**ローカルリポジトリ→リモートリポジトリ**

<kbd>$ git push</kbd>

※初めてリモートリポジトリにpushする場合は、以下のコマンド

<kbd>$ git remote add origin git@github.com:[githubID]]/[リポジトリ名]</kbd>

以下の「Code」で確認可能

![githubCode](../../assets/20200922/githubCode.png)

<kbd>$ git push -u origin master</kbd>

## ■githubとnetlifyの連携

netlifyとググって、githubでログイン

![NewSiteFromGit](../../assets/20200922/NewSiteFromGit.png)

右上の「New site from Git」をクリック

![CreateNewSite](../../assets/20200922/CreateNewSite.png)

左下の「GitHub」をクリック

連携したいリポジトリを選択

![DeploySite](../../assets/20200922/DeploySite.png)

vue.jsの場合、上記画像のように入力し、「Deply site」をクリック

あとは、githubにpushするだけで勝手にデプロイしてくれます

初回はビルドに時間がかかります

完了すると以下のようにURLが表示されますので、クリックするとサイトが表示されます

![Deploy](../../assets/20200922/Deploy.png)

※上記画像は、名前.comでドメインを取得し、設定済み

以上

-->
