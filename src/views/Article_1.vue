<template>
<center>
  <div id="article_1">
    <h1>Article</h1>

<router-link class="btn-square" to="/Article_1">1</router-link>&nbsp;
<router-link class="btn-square" to="/Article_2">2</router-link><br /><br />

<article class="card">
  <img class="card__img" src="../assets/article/article002.jpg" decoding="async">
  <div class="card__meta">
    <p class="card__cat">vue.js</p>
    <time class="card__time" datetime="2020-10-20">2020.10.20</time>
  </div>
  <h2 class="card__ttl">vueのSPAサイトで表示速度の改善</h2>
  <p class="card__desc">
  <router-link class="btn-square" to="/article014">Read more</router-link>
  </p>
</article>
<br />

<article class="card">
  <img class="card__img" src="../assets/article/article001.jpg" decoding="async">
  <div class="card__meta">
    <p class="card__cat">vue.js</p>
    <time class="card__time" datetime="2020-10-18">2020.10.18</time>
  </div>
  <h2 class="card__ttl">vue routerの動的ルートマッチングで遷移しない問題</h2>
  <p class="card__desc">
  <router-link class="btn-square" to="/article013">Read more</router-link>
  </p>
</article>
<br />

<article class="card">
  <img class="card__img" src="../assets/article/article012.jpg" decoding="async">
  <div class="card__meta">
    <p class="card__cat">vue.js</p>
    <time class="card__time" datetime="2020-10-12">2020.10.12</time>
  </div>
  <h2 class="card__ttl">vue.jsでじゃんけんゲームを作ってみた</h2>
  <p class="card__desc">
  <router-link class="btn-square" to="/article012">Read more</router-link>
  </p>
</article>
<br />

<article class="card">
  <img class="card__img" src="../assets/article/article011.jpg" decoding="async">
  <div class="card__meta">
    <p class="card__cat">vue.js</p>
    <time class="card__time" datetime="2020-10-10">2020.10.10</time>
  </div>
  <h2 class="card__ttl">vue-markdown-highlightでシンタックスハイライトを実装した</h2>
  <p class="card__desc">
  <router-link class="btn-square" to="/article011">Read more</router-link>
  </p>
</article>
<br />

<article class="card">
  <img class="card__img" src="../assets/article/article010.jpg" decoding="async">
  <div class="card__meta">
    <p class="card__cat">vue.js</p>
    <time class="card__time" datetime="2020-10-09">2020.10.09</time>
  </div>
  <h2 class="card__ttl">Markdownファイルを１つのvueファイルからURLに応じて動的に読み込む</h2>
  <p class="card__desc">
  <router-link class="btn-square" to="/article010">Read more</router-link>
  </p>
</article>
<br />

  <br/>
<router-link class="btn-square" to="/Article_1">1</router-link>&nbsp;
<router-link class="btn-square" to="/Article_2">2</router-link><br /><br />
  </div>
  </center>
</template>

<style>
.card {
  width: 350px;
  margin: 0 auto;
  padding: 12px;
  border: 1px solid #ccc;
  background: #fff
}
.card__img {
  width: 100%;
  height: 200px
}
.card__meta {
  display: flex;
  align-items: center
}
.card__cat {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px 12px;
  background: #ffb300;
  color: #fff;
  font-weight: bold;
  letter-spacing: 1px;
  font-size: 14px
}
.card__time {
  margin: 0 0 0 auto;
  font-size: 12px;
  color: #666
}
.card__ttl {
  font-size: 20px;
  margin: 0
}
.card__desc {
  font-size: 16px
}

.btn-square {
  display: inline-block;
  padding: 0.5em 1em;
  text-decoration: none;
  background: #668ad8;
  color: #FFF;
  border-bottom: solid 4px #627295;
  border-radius: 3px
}
.btn-square:active {
  -webkit-transform: translateY(4px);
  transform: translateY(4px);
  border-bottom: none
}
</style>
