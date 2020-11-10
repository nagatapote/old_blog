<template>
  <center>
    <div id="article_1">
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
          img: "./article/article009.jpg",
          genre: "Vue",
          datetime: "2020-11-11",
          title: "VueとNetlifyで問い合わせフォームを作成する方法",
          link: "/article021",
        },
      ],
    };
  },
};
</script>
