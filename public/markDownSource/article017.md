# Docker環境のReactプロジェクトをAWS ECS Fargateで稼働させてみた

## 前提
MacBookPro 13インチ メモリ8GB

Visual Studio Code

AWSのアカウント登録済み

npm v6.14.6

yarn v1.19.2

node.js v12.18.4

## 完成品
<img src="./img/article017/AWS_ECS_Fargate.png" decoding="async">

## 参考サイト
・Docker、ECR、ECS、Fargateなどの概念

<a href="https://qiita.com/nyandora/items/0fa064f8a4402939673b" target="_blank">https://qiita.com/nyandora/items/0fa064f8a4402939673b</a>

・全体の流れを把握する

<a href="https://qiita.com/IgnorantCoder/items/d4f16b1aadd1c03c0e26" target="_blank">https://qiita.com/IgnorantCoder/items/d4f16b1aadd1c03c0e26</a>

・Dockerに関して

<a href="https://blog.web.nifty.com/engineer/2714" target="_blank">https://blog.web.nifty.com/engineer/2714</a>

・AWS Fargateとロードバランサーに関して

<a href="https://qiita.com/NaokiIshimura/items/bf4c21500a5f542dff9a" target="_blank">https://qiita.com/NaokiIshimura/items/bf4c21500a5f542dff9a</a>

<a href="https://casualdevelopers.com/tech-tips/how-to-deploy-dockerized-react-application-to-aws-with-ecr-and-ecs-fargate/" target="_blank">https://casualdevelopers.com/tech-tips/how-to-deploy-dockerized-react-application-to-aws-with-ecr-and-ecs-fargate/</a>

## 自分の認識
Docker（簡単に環境構築できるコンテナ型のサーバ）

ECR (Dockerコンテナレジストリ)　(= DockerHub)

ECS（コンテナの管理をする場所） →　Fargate（実際にコンテナが稼働する場所）

## やったこと
**・Dockerのインストール、コンテナ(images)の作成**

**・AWS ECR リポジトリにpush**

**・AWS ECS Fargateでコンテナを稼働させる**

### Dockerのインストール、コンテナ(images)の作成
まず、Dockerって何？というところから始まりましたが、上記参考サイトからなんとなく理解することができました。

#### Dockerのインストール
以下の公式サイトの「Download for Mac」からDockerをダウンロードし、インストールします。

<a href="https://www.docker.com/products/docker-desktop" target="_blank">https://www.docker.com/products/docker-desktop</a>

Dockerに関しては、以下のサイトを参考に色々弄ってみました。

<a href="https://qiita.com/irico/items/4677334879da859a7c24" target="_blank">https://qiita.com/irico/items/4677334879da859a7c24</a>

#### コンテナ(images)の作成

Reactプロジェクトを作成

```
$ npx create-react-app my-app
```

my-appディレクトリ内に「Dockerfile」を作成

```
$ cd my-app
$ touch Dockerfile
```

Dockerfileに以下を記載。(Node.jsでmongoDB等を使う場合は、docker-compose.ymlファイルを作成する必要がある認識)

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

buildでimagesを作ります。

```
$ docker image build -t my-app:latest .
```

以下のコマンドで起動し、「<a href="http://localhost:80/" target="_blank">http://localhost:80/</a>」にアクセスできたらOKです。

```
$ docker container run --rm -p 80:80 my-app:latest
```

### AWS ECR リポジトリにpush
AWS ECR リポジトリっていうのは、DockerHubのAWS版のような感じらしいです。

以下のURLからAWSにアクセス。「Elastic Container Registry」と検索し、リポジトリの作成を行います。

<a href="https://aws.amazon.com/jp/" target="_blank">https://aws.amazon.com/jp/</a>

右上の「リポジトリを作成」を押し、好きな名前を入れて作成しましょう。

<img src="./img/article017/aws_ecs.png" decoding="async">

リポジトリを作成したら、リポジトリ名をクリックし、右上の「プッシュコマンドの表示」を押してましょう。

このコマンドをCUIで使用するためには、AWS CLIをインストールする必要があります。

インストール方法は以下を参考にしました。

・AWS CLIのインストール方法

<a href="https://qiita.com/NorihitoYamamoto/items/badd32785078bc944089" target="_blank">https://qiita.com/NorihitoYamamoto/items/badd32785078bc944089</a>

※ちなみに、先にAWSの以下の場所から「新しいアクセスキーの作成」を行う必要があります。

<img src="./img/article017/access_key.png" decoding="async">

プッシュコマンドを実施したら、リポジトリへのPUSHは完了です。

### AWS ECS Fargateでコンテナを稼働させる
流れとしては、以下です。

1.VPC作成

2.ロードバランサー作成

3.ECSクラスター作成

4.ECSタスク定義作成

5.ECSサービス作成

#### AWSでVPCの作成。（サブネット、セキュリティグループ、インターネットゲートウェイ）

以下サイトを参考に作成しました。

・VPCの作成方法

<a href="https://qiita.com/hiroshik1985/items/9de2dd02c9c2f6911f3b" target="_blank">https://qiita.com/hiroshik1985/items/9de2dd02c9c2f6911f3b</a>

AWS ECS Fargateはインスタンス不要なので、EC2は作成しなくて良いです。

#### AWSでロードバランサーを作成。
AWS　EC2のロードバランサーから「ロードバランサーの作成」を行います。

<img src="./img/article017/LB1.png" decoding="async">

Application Load Balancerを使います。

<img src="./img/article017/LB2.png" decoding="async">

基本的に流れに沿って作成していけば良いのですが、注意すべき点は以下です。

・手順１のアベイラビリティーゾーンのために、VPC作成時に、サブネットを２つ作成し、どちらもインターネットゲートウェイと紐付いている（ルートテーブルの関連付け）必要があります。

・手順4のターゲットの種類はIPを選択し、ターゲット登録でのIPは空で良いです。

#### ECSクラスターの作成
AWSで「Elastic Container Service」と検索し、クラスターの作成をします。

<img src="./img/article017/ecs1.png" decoding="async">

「ネットワーキングのみ」を選択し、クラスター名を決めて作成でOKです。

<img src="./img/article017/ecs2.png" decoding="async">

#### ECSタスク定義の作成
タスクの定義から「新しいタスク定義の作成」を行います。

<img src="./img/article017/task1.png" decoding="async">

FARGATEを選択します。

<img src="./img/article017/task2.png" decoding="async">

タスク定義名をつけたら、タスクサイズを決めて、「コンテナの追加」を押します。

<img src="./img/article017/task3.png" decoding="async">

入力して、追加を押します。

「コンテナ名」と「イメージ」は、ECRリポジトリで確認できます。

<img src="./img/article017/task4.png" decoding="async">

作成を押したら完了です。

タスク定義は作成したら、削除できないようです。(INACTIVEに移動する。)

※タスク定義の内容(CPU等)変更は、「新しいリビジョンの作成」から可能です。

#### ECSサービスの作成

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

※「RUNNING」にならない場合（PENDING等）は、タスクから詳細ログでエラーコード等が確認できるので、それでググって調べましょう。

#### ロードバランサーのDNSからアクセス
あとは、EC2のロードバランサーのDNS名を確認し、アクセスしてプロジェクトが表示されたらOKです。

稼働させてると、お金がかかります。気になる方は、削除しましょう。

<img src="./img/article017/DNS.png" decoding="async">

アプリケーションを公開する場合の残りのタスクとしては以下です。

・Route53でドメインを取得してDNS登録。

・AWS Certificate Managerで証明書の設定。

以上
