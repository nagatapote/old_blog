<template>
    <div class="20200924" id="article2">
        <b-container class="justifiy-content-center">
<h1><a id="git_push_f_origin_master_0"></a>git push -f origin master</h1> <h2><a id="_2"></a>目的</h2> <p>リモートリポジトリ内を別のプロジェクトで上書きしたい<br /> （最新版のvue3.0でブログを作成したが色々問題があり、安定版のvue2.6をインストールし直してから再度プロジェクトを作成して上書きしたかった）</p> <h2><a id="_7"></a>問題</h2> <p>以下のようにpushしようとしたが、エラーが発生</p> <p><kbd>$ git push</kbd></p> <h2><a id="_13"></a>解決方法</h2> <p>これが正しいかはわかりませんが、以下のコマンドを実施</p> <p><kbd>$ git push -f origin master</kbd></p> <p>その後、通常通りpush可能になりました</p> <p>以上</p>
        </b-container>
    </div>
</template>

<!--

# git push -f origin master

## 目的

リモートリポジトリ内を別のプロジェクトで上書きしたい
（最新版のvue3.0でブログを作成したが色々問題があり、安定版のvue2.6をインストールし直してから再度プロジェクトを作成して上書きしたかった）

## 問題

以下のようにpushしようとしたが、エラーが発生

<kbd>$ git push</kbd>

## 解決方法

これが正しいかはわかりませんが、以下のコマンドを実施

<kbd>$ git push -f origin master</kbd>

その後、通常通りpush可能になりました

以上

-->
