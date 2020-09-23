<template>
    <div class="20200922">
        <h1>vue.jsとnetlifyでblog作成</h1>
        <h2>■目的</h2>
        <p>技術ブログ作成し、やったことを残しておくため</p>
        <h2>■使ったもの</h2>
        <p>PC：MacBookPro 13インチ メモリ8GB</p>
        <p>エディタ：Visual Studio Code(ターミナルも使えて便利)</p>
        <h2>■やったこと</h2>
        <p>・vue.jsとgithubの連携</p>
        <p>・githubとnetlifyの連携</p>
        <h2>■vue.jsとgithubの連携</h2>
        <h3>▼githubの登録、リポジトリの作成</h3>
        <p>githubとググって、登録</p>
        <img src="../../assets/20200922/NewRepositories.png" width="400">
        <p>ログイン後、左上の「New」をクリック</p>
        <img src="../../assets/20200922/CreateRepositories.png" width="500">
        <p>「Repository name」に好きな名前を入れて、「Create repository」をクリックすれば完了です。</p>
        <h3>▼公開鍵・秘密鍵の作成</h3>
        <b>鍵を入れるフォルダへ移動</b>
        <p>$ cd ~/.ssh</p>
        <b>鍵を生成</b>
        <p>$ ssh-keygen -t rsa (質問されるが、全てEnter)</p>
        <h3>▼公開鍵をGitHubにアップ</h3>
        <a href="https://github.com/settings/ssh">https://github.com/settings/ssh</a><br>
        <p>上記ページで公開鍵の設定が可能。（GitHubに登録してある必要があります。）</p>
        <img src="../../assets/20200922/SSHkey.png" width="400">
        <p>右上の「New SSH key」をクリック</p>
        <img src="../../assets/20200922/addnew.png" width="400">
        <p>「title」に自分の好きな名前</p>
        <p>「key」には以下のコマンドでコピーしたものを貼り付ける</p>
        <p>$ pbcopy &lt; ~/.ssh/id_rsa.pub</p>
        <b>接続確認</b>
        <p>$ ssh -T git@github.com</p>
        <p>以下のように表示されたら接続完了</p>
        <p>You've successfully authenticated, but GitHub does not provide shell access.</p>

        <h3>▼githubへpushする方法</h3>
        <b>作業ディレクトリをgithubで管理するためのコマンド</b>
        <p>$ git init</p>
        <b>作業ディレクトリ→ステージングエリア</b>
        <p>$ git add ファイル名</p>
        <p>$ git add -A (作業ツリー内全て)</p>
        <b>ステージングエリア→ローカルリポジトリ</b>
        <p>$ git commit -m "コミットメッセージ"</p>
        <b>ローカルリポジトリ→リモートリポジトリ</b>
        <p>$ git push</p>
        <p>※初めてリモートリポジトリにpushする場合は、以下のコマンド</p>
        <p>$ git remote add origin git@github.com:[githubID]]/[リポジトリ名]</p>
        <p>以下の「Code」で確認可能</p>
        <img src="../../assets/20200922/githubCode.png" width="400">
        <p>$ git push -u origin master</p>
        <h2>■githubとnetlifyの連携</h2>
        <p>netlifyとググって、githubでログイン</p>
        <img src="../../assets/20200922/NewSiteFromGit.png" width="400">
        <p>右上の「New site from Git」をクリック</p>
        <img src="../../assets/20200922/CreateNewSite.png" width="400">
        <p>左下の「GitHub」をクリック</p>
        <p>連携したいリポジトリを選択</p>
        <img src="../../assets/20200922/DeploySite.png" width="500">
        <p>vue.jsの場合、上記画像のように入力し、「Deply site」をクリック</p>
        <p>あとは、githubにpushするだけで勝手にデプロイしてくれます</p>
        <p>初回はビルドに時間がかかります</p>
        <p>完了すると以下のようにURLが表示されますので、クリックするとサイトが表示されます</p>
        <img src="../../assets/20200922/Deploy.png" width="400">
        <p>※上記画像は、名前.comでドメインを取得し、設定済みです</p>
        <p>以上</p>
    </div>
</template>
