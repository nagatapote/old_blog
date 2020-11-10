<template>
  <center>
    <div id="article_3">
      <h1>Article</h1>

      <router-link class="btn-square" to="/Article_1">1</router-link>&nbsp;
      <router-link class="btn-square" to="/Article_2">2</router-link
      >&nbsp;<router-link class="btn-square" to="/Article_3">3</router-link
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

      <router-link class="btn-square" to="/Article_1">1</router-link>&nbsp;
      <router-link class="btn-square" to="/Article_2">2</router-link
      >&nbsp;<router-link class="btn-square" to="/Article_3">3</router-link
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
          img: "./article/article010.jpg",
          genre: "Vue",
          datetime: "2020-10-09",
          title:
            "Markdownファイルを１つのvueファイルからURLに応じて動的に読み込む",
          link: "/article010",
        },
        {
          img: "./article/article009.jpg",
          genre: "Vue",
          datetime: "2020-10-06",
          title: "VueRouterで画面遷移時のスクロール位置制御",
          link: "/article009",
        },
        {
          img: "./article/article008.jpg",
          genre: "Vue",
          datetime: "2020-10-05",
          title: "vue.config.jsからページタイトルを設定する方法",
          link: "/article008",
        },
        {
          img: "./article/article007.jpg",
          genre: "Node",
          datetime: "2020-10-03",
          title: "nodebrewでnode.jsのインストール＆バージョン管理",
          link: "/article007",
        },
        {
          img: "./article/article006.jpg",
          genre: "Vue",
          datetime: "2020-09-30",
          title: "core-jsモジュールエラー",
          link: "/article006",
        },
        {
          img: "./article/article005.jpg",
          genre: "Vue",
          datetime: "2020-09-29",
          title: "Vuetifyの導入方法",
          link: "/article005",
        },
        {
          img: "./article/article004.jpg",
          genre: "Vue",
          datetime: "2020-09-27",
          title: "vue.jsとfirebaseで認証機能実装",
          link: "/article004",
        },
        {
          img: "./article/article003.jpg",
          genre: "Vue",
          datetime: "2020-09-27",
          title: "SPAの「/」以外でリロードすると404エラーになる",
          link: "/article003",
        },
        {
          img: "./article/article002.jpg",
          genre: "Vue",
          datetime: "2020-09-24",
          title: "リモートリポジトリ内を別のプロジェクトで上書き",
          link: "/article002",
        },
        {
          img: "./article/article001.jpg",
          genre: "Vue",
          datetime: "2020-09-22",
          title: "vue.jsとnetlifyでブログ作成",
          link: "/article001",
        },
      ],
    };
  },
};
</script>
