# リモートリポジトリ内を別のプロジェクトで上書き
　

## 目的
***

リモートリポジトリ内を別のプロジェクトで上書きしたい
（最新版のvue3.0でブログを作成したが色々問題があり、安定版のvue2.6をインストールし直してから再度プロジェクトを作成して上書きしたかった）

## 問題
***

以下のようにpushしようとしたが、エラーが発生

<kbd>$ git push</kbd>

## 解決方法
***

以下のコマンドを実施

<kbd>$ git push -f origin master</kbd>

その後、通常通りpush可能になりました

以上

<style>

h1 {
    padding: 0.3em;
    color: #333;
    background: #dae5f3;
    border-bottom: solid 3px #455586;
}

</style>
