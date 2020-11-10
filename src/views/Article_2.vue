<template>
  <center>
    <div id="article_2">
      <h1>Article</h1>

      <router-link class="btn-square" to="/Article_1">1</router-link>&nbsp;
      <router-link class="btn-square" to="/Article_2">2</router-link>&nbsp;
      <router-link class="btn-square" to="/Article_3">3</router-link
      ><br /><br />

      <li
        v-for="(item, index) in items"
        :key="index"
        style="list-style-type: none"
      >
        <article class="card">
          <img class="card__img" :src="item.img" decoding="async" />
          <div class="card__meta">
            <p class="card__cat">{{ item.genre }}</p>
            <time class="card__time" :datetime="item.datetime">{{
              item.datetime
            }}</time>
          </div>
          <h2 class="card__ttl">
            {{ item.title }}
          </h2>
          <p class="card__desc">
            <router-link class="btn-square" :to="item.link"
              >Read more</router-link
            >
          </p>
        </article>
        <br />
      </li>

      <br />
      <router-link class="btn-square" to="/Article_1">1</router-link>&nbsp;
      <router-link class="btn-square" to="/Article_2">2</router-link>&nbsp;
      <router-link class="btn-square" to="/Article_3">3</router-link
      ><br /><br />
    </div>
  </center>
</template>

<script>
import "../css/Article.css";
export default {
  name: "Article",
  data() {
    return {
      items: [
        {
          img: "./article/article008.jpg",
          genre: "React",
          datetime: "2020-11-11",
          title: "react+typescriptでcssのimport方法",
          link: "/article020",
        },
        {
          img: "./article/article007.jpg",
          genre: "React",
          datetime: "2020-11-02",
          title: "react+webpack+ts-loader+typescriptでプロジェクト作成の方法",
          link: "/article019",
        },
        {
          img: "./article/article006.jpg",
          genre: "VSCode",
          datetime: "2020-10-26",
          title: "VSCode の拡張機能「Prettier」が便利なので導入してみた",
          link: "/article018",
        },
        {
          img: "./article/article005.jpg",
          genre: "AWS",
          datetime: "2020-10-25",
          title:
            "Docker環境のReactプロジェクトをAWS ECS Fargateで稼働させてみた",
          link: "/article017",
        },
        {
          img: "./article/article004.jpg",
          genre: "Vue",
          datetime: "2020-10-25",
          title:
            "vue.jsで作成したSPAサイトにgoogleAdsenseとgoogleAnalyticsを導入",
          link: "/article016",
        },
        {
          img: "./article/article003.jpg",
          genre: "Vue",
          datetime: "2020-10-21",
          title: "vue.jsをPWA化してオフラインでアクセスできるようにする方法",
          link: "/article015",
        },
        {
          img: "./article/article002.jpg",
          genre: "Vue",
          datetime: "2020-10-20",
          title: "vue.jsのSPAサイトで表示速度の改善",
          link: "/article014",
        },
        {
          img: "./article/article001.jpg",
          genre: "Vue",
          datetime: "2020-10-18",
          title: "vue routerの動的ルートマッチングで遷移しない問題",
          link: "/article013",
        },
        {
          img: "./article/article012.jpg",
          genre: "Vue",
          datetime: "2020-10-12",
          title: "vue.jsでじゃんけんゲームを作ってみた",
          link: "/article012",
        },
        {
          img: "./article/article011.jpg",
          genre: "Vue",
          datetime: "2020-10-10",
          title: "vue-markdown-highlightでシンタックスハイライトを実装した",
          link: "/article011",
        },
      ],
    };
  },
};
</script>
