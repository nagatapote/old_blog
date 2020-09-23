<template>
    <div class="20200922" id="article1">
        <b-container class="justifiy-content-center">
        <h2>vue.jsとnetlifyでblog作成</h2>
        <h3>■目的</h3>
        <p>技術ブログ作成し、やったことを残しておくため</p>
        <h3>■使ったもの</h3>
        <p>PC：MacBookPro 13インチ メモリ8GB</p>
        <p>エディタ：Visual Studio Code(ターミナルも使えて便利)</p>
        <h3>■やったこと</h3>
        <p>・vue.jsとgithubの連携</p>
        <p>・githubとnetlifyの連携</p>
        <h3>■vue.jsとgithubの連携</h3>
        <h4>▼githubの登録、リポジトリの作成</h4>
        <p>githubとググって、登録</p>
        <img id="img" src="../../assets/20200922/NewRepositories.png">
        <p>ログイン後、左上の「New」をクリック</p>
        <img id="img" src="../../assets/20200922/CreateRepositories.png">
        <p>「Repository name」に好きな名前を入れて、「Create repository」をクリックすれば完了です。</p>
        <h4>▼公開鍵・秘密鍵の作成</h4>
        <b>鍵を入れるフォルダへ移動</b>
        <p><kbd>$ cd ~/.ssh</kbd></p>
        <b>鍵を生成</b>
        <p><kbd>$ ssh-keygen -t rsa</kbd> (質問されるが、全てEnter)</p>
        <h4>▼公開鍵をGitHubにアップ</h4>
        <a href="https://github.com/settings/ssh">https://github.com/settings/ssh</a><br>
        <p>上記ページで公開鍵の設定が可能。（GitHubに登録してある必要があります。）</p>
        <img id="img" src="../../assets/20200922/SSHkey.png">
        <p>右上の「New SSH key」をクリック</p>
        <img id="img" src="../../assets/20200922/addnew.png">
        <p>「title」に自分の好きな名前</p>
        <p>「key」には以下のコマンドでコピーしたものを貼り付ける</p>
        <p><kbd>$ pbcopy &lt; ~/.ssh/id_rsa.pub</kbd></p>
        <b>接続確認</b>
        <p><kbd>$ ssh -T git@github.com</kbd></p>
        <p>以下のように表示されたら接続完了</p>
        <p>You've successfully authenticated, but GitHub does not provide shell access.</p>

        <h4>▼githubへpushする方法</h4>
        <b>作業ディレクトリをgithubで管理するためのコマンド</b>
        <p><kbd>$ git init</kbd></p>
        <b>作業ディレクトリ→ステージングエリア</b>
        <p><kbd>$ git add ファイル名</kbd></p>
        <p><kbd>$ git add -A</kbd> (作業ツリー内全て)</p>
        <b>ステージングエリア→ローカルリポジトリ</b>
        <p><kbd>$ git commit -m "コミットメッセージ"</kbd></p>
        <b>ローカルリポジトリ→リモートリポジトリ</b>
        <p><kbd>$ git push</kbd></p>
        <p>※初めてリモートリポジトリにpushする場合は、以下のコマンド</p>
        <p><kbd>$ git remote add origin git@github.com:[githubID]]/[リポジトリ名]</kbd></p>
        <p>以下の「Code」で確認可能</p>
        <img id="img" src="../../assets/20200922/githubCode.png">
        <p><kbd>$ git push -u origin master</kbd></p>
        <h3>■githubとnetlifyの連携</h3>
        <p>netlifyとググって、githubでログイン</p>
        <img id="img" src="../../assets/20200922/NewSiteFromGit.png">
        <p>右上の「New site from Git」をクリック</p>
        <img id="img" src="../../assets/20200922/CreateNewSite.png">
        <p>左下の「GitHub」をクリック</p>
        <p>連携したいリポジトリを選択</p>
        <img id="img" src="../../assets/20200922/DeploySite.png">
        <p>vue.jsの場合、上記画像のように入力し、「Deply site」をクリック</p>
        <p>あとは、githubにpushするだけで勝手にデプロイしてくれます</p>
        <p>初回はビルドに時間がかかります</p>
        <p>完了すると以下のようにURLが表示されますので、クリックするとサイトが表示されます</p>
        <img id="img" src="../../assets/20200922/Deploy.png">
        <p>※上記画像は、名前.comでドメインを取得し、設定済みです</p>
        <p>以上</p>
        </b-container>
    </div>
</template>

<style>

 #img {
    max-width: 100%;
    height: auto;
 }
</style>
