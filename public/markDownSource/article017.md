# Docker 環境の React プロジェクトを AWS ECS Fargate で稼働させてみた

## 前提

MacBookPro 13 インチ メモリ 8GB

Visual Studio Code

AWS のアカウント登録済み

npm v6.14.6

yarn v1.19.2

node.js v12.18.4

## 完成品

<img src="./img/article017/AWS_ECS_Fargate.png" decoding="async">

## 参考サイト

・Docker、ECR、ECS、Fargate などの概念

<a href="https://qiita.com/nyandora/items/0fa064f8a4402939673b" target="_blank">https://qiita.com/nyandora/items/0fa064f8a4402939673b</a>

・全体の流れを把握する

<a href="https://qiita.com/IgnorantCoder/items/d4f16b1aadd1c03c0e26" target="_blank">https://qiita.com/IgnorantCoder/items/d4f16b1aadd1c03c0e26</a>

・Docker に関して

<a href="https://blog.web.nifty.com/engineer/2714" target="_blank">https://blog.web.nifty.com/engineer/2714</a>

・AWS Fargate とロードバランサーに関して

<a href="https://qiita.com/NaokiIshimura/items/bf4c21500a5f542dff9a" target="_blank">https://qiita.com/NaokiIshimura/items/bf4c21500a5f542dff9a</a>

<a href="https://casualdevelopers.com/tech-tips/how-to-deploy-dockerized-react-application-to-aws-with-ecr-and-ecs-fargate/" target="_blank">https://casualdevelopers.com/tech-tips/how-to-deploy-dockerized-react-application-to-aws-with-ecr-and-ecs-fargate/</a>

## 自分の認識

Docker（簡単に環境構築できるコンテナ型のサーバ）

ECR (Docker コンテナレジストリ)　(= DockerHub)

ECS（コンテナの管理をする場所） → 　 Fargate（実際にコンテナが稼働する場所）

## やったこと

**・Docker のインストール、コンテナ(images)の作成**

**・AWS ECR リポジトリに push**

**・AWS ECS Fargate でコンテナを稼働させる**

### Docker のインストール、コンテナ(images)の作成

まず、Docker って何？というところから始まりましたが、上記参考サイトからなんとなく理解することができました。

#### Docker のインストール

以下の公式サイトの「Download for Mac」から Docker をダウンロードし、インストールします。

<a href="https://www.docker.com/products/docker-desktop" target="_blank">https://www.docker.com/products/docker-desktop</a>

Docker に関しては、以下のサイトを参考に色々弄ってみました。

<a href="https://qiita.com/irico/items/4677334879da859a7c24" target="_blank">https://qiita.com/irico/items/4677334879da859a7c24</a>

#### コンテナ(images)の作成

React プロジェクトを作成

```
$ npx create-react-app my-app
```

my-app ディレクトリ内に「Dockerfile」を作成

```
$ cd my-app
$ touch Dockerfile
```

Dockerfile に以下を記載。

```
FROM node:11-alpine as builder
WORKDIR /app
COPY package.json .
COPY yarn.lock .
RUN yarn install
COPY . .
RUN yarn build

FROM nginx:1.15-alpine
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
```

build で images を作ります。

```
$ docker image build -t my-app:latest .
```

以下のコマンドで起動し、「<a href="http://localhost:80/" target="_blank">http://localhost:80/</a>」にアクセスできたら OK です。

```
$ docker container run --rm -p 80:80 my-app:latest
```

### AWS ECR リポジトリに push

AWS ECR リポジトリっていうのは、DockerHub の AWS 版のような感じらしいです。

以下の URL から AWS にアクセス。「Elastic Container Registry」と検索し、リポジトリの作成を行います。

<a href="https://aws.amazon.com/jp/" target="_blank">https://aws.amazon.com/jp/</a>

右上の「リポジトリを作成」を押し、好きな名前を入れて作成しましょう。

<img src="./img/article017/aws_ecs.png" decoding="async">

リポジトリを作成したら、リポジトリ名をクリックし、右上の「プッシュコマンドの表示」を押してましょう。

このコマンドを CUI で使用するためには、AWS CLI をインストールする必要があります。

インストール方法は以下を参考にしました。

・AWS CLI のインストール方法

<a href="https://qiita.com/NorihitoYamamoto/items/badd32785078bc944089" target="_blank">https://qiita.com/NorihitoYamamoto/items/badd32785078bc944089</a>

※ちなみに、先に AWS の以下の場所から「新しいアクセスキーの作成」を行う必要があります。

<img src="./img/article017/access_key.png" decoding="async">

プッシュコマンドを実施したら、リポジトリへの PUSH は完了です。

### AWS ECS Fargate でコンテナを稼働させる

流れとしては、以下です。

1.VPC 作成

2.ロードバランサー作成

3.ECS クラスター作成

4.ECS タスク定義作成

5.ECS サービス作成

#### AWS で VPC の作成。（サブネット、セキュリティグループ、インターネットゲートウェイ）

以下サイトを参考に作成しました。

・VPC の作成方法

<a href="https://qiita.com/hiroshik1985/items/9de2dd02c9c2f6911f3b" target="_blank">https://qiita.com/hiroshik1985/items/9de2dd02c9c2f6911f3b</a>

AWS ECS Fargate はインスタンス不要なので、EC2 は作成しなくて良いです。

#### AWS でロードバランサーを作成。

AWS 　 EC2 のロードバランサーから「ロードバランサーの作成」を行います。

<img src="./img/article017/LB1.png" decoding="async">

Application Load Balancer を使います。

<img src="./img/article017/LB2.png" decoding="async">

基本的に流れに沿って作成していけば良いのですが、注意すべき点は以下です。

・手順１のアベイラビリティーゾーンのために、VPC 作成時に、サブネットを２つ作成し、どちらもインターネットゲートウェイと紐付いている（ルートテーブルの関連付け）必要があります。

・手順 4 のターゲットの種類は IP を選択し、ターゲット登録での IP は空で良いです。

#### ECS クラスターの作成

AWS で「Elastic Container Service」と検索し、クラスターの作成をします。

<img src="./img/article017/ecs1.png" decoding="async">

「ネットワーキングのみ」を選択し、クラスター名を決めて作成で OK です。

<img src="./img/article017/ecs2.png" decoding="async">

#### ECS タスク定義の作成

タスクの定義から「新しいタスク定義の作成」を行います。

<img src="./img/article017/task1.png" decoding="async">

FARGATE を選択します。

<img src="./img/article017/task2.png" decoding="async">

タスク定義名をつけたら、タスクサイズを決めて、「コンテナの追加」を押します。

<img src="./img/article017/task3.png" decoding="async">

入力して、追加を押します。

「コンテナ名」と「イメージ」は、ECR リポジトリで確認できます。

<img src="./img/article017/task4.png" decoding="async">

作成を押したら完了です。

タスク定義は作成したら、削除できないようです。(INACTIVE に移動する。)

※タスク定義の内容(CPU 等)変更は、「新しいリビジョンの作成」から可能です。

#### ECS サービスの作成

<img src="./img/article017/Service1.png" decoding="async">

ここからサービスの作成をします。

<img src="./img/article017/Service2.png" decoding="async">

サービスの設定ですが、以下のようにしました。

・起動タイプ：FARGATE

・タスクの数：2

ロードバランシングは以下の通り。

<img src="./img/article017/Service3.png" decoding="async">

<img src="./img/article017/Service4.png" decoding="async">

そして、次のステップへ進んでいき、作成をしたら完了です。

タスクのステータスが「RUNNING」になっていることを確認しましょう。

※「RUNNING」にならない場合（PENDING 等）は、タスクから詳細ログでエラーコード等が確認できるので、それでググって調べましょう。

#### ロードバランサーの DNS からアクセス

あとは、EC2 のロードバランサーの DNS 名を確認し、アクセスしてプロジェクトが表示されたら OK です。

稼働させてると、お金がかかります。気になる方は、削除しましょう。

<img src="./img/article017/DNS.png" decoding="async">

アプリケーションを公開する場合の残りのタスクとしては以下です。

・Route53 でドメインを取得して DNS 登録。

・AWS Certificate Manager で証明書の設定。

以上
