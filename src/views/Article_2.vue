<template>
<center>
  <div id="article_2">
    <h1>Article</h1>

<router-link class="btn-square" to="/Article_1">1</router-link>&nbsp;
<router-link class="btn-square" to="/Article_2">2</router-link><br /><br />

<article class="card">
  <img class="card__img" src="../assets/article/article9.jpg" decoding="async">
  <div class="card__meta">
    <p class="card__cat">vue.js</p>
    <time class="card__time" datetime="2020-10-06">2020.10.06</time>
  </div>
  <h2 class="card__ttl">VueRouterで画面遷移時のスクロール位置制御</h2>
  <p class="card__desc">
  <router-link class="btn-square" to="/article9">Read more</router-link>
  </p>
</article>
<br />

<article class="card">
  <img class="card__img" src="../assets/article/article8.jpg" decoding="async">
  <div class="card__meta">
    <p class="card__cat">vue.js</p>
    <time class="card__time" datetime="2020-10-05">2020.10.05</time>
  </div>
  <h2 class="card__ttl">vue.config.jsからページタイトルを設定する方法</h2>
  <p class="card__desc">
  <router-link class="btn-square" to="/article8">Read more</router-link>
  </p>
</article>
<br />

<article class="card">
  <img class="card__img" src="../assets/article/article7.jpg" decoding="async">
  <div class="card__meta">
    <p class="card__cat">node.js</p>
    <time class="card__time" datetime="2020-10-03">2020.10.03</time>
  </div>
  <h2 class="card__ttl">nodebrewでnodeのバージョン管理</h2>
  <p class="card__desc">
  <router-link class="btn-square" to="/article7">Read more</router-link>
  </p>
</article>
<br />

<article class="card">
  <img class="card__img" src="../assets/article/article6.jpg" decoding="async">
  <div class="card__meta">
    <p class="card__cat">vue.js</p>
    <time class="card__time" datetime="2020-09-30">2020.09.30</time>
  </div>
  <h2 class="card__ttl">core-jsモジュールエラー</h2>
  <p class="card__desc">
  <router-link class="btn-square" to="/article6">Read more</router-link>
  </p>
</article>
<br />

<article class="card">
  <img class="card__img" src="../assets/article/article5.jpg" decoding="async">
  <div class="card__meta">
    <p class="card__cat">vue.js</p>
    <time class="card__time" datetime="2020-09-29">2020.09.29</time>
  </div>
  <h2 class="card__ttl">Vuetifyの導入方法</h2>
  <p class="card__desc">
  <router-link class="btn-square" to="/article5">Read more</router-link>
  </p>
</article>
<br />

<article class="card">
  <img class="card__img" src="../assets/article/article4.jpg" decoding="async">
  <div class="card__meta">
    <p class="card__cat">vue.js</p>
    <time class="card__time" datetime="2020-09-27">2020.09.27</time>
  </div>
  <h2 class="card__ttl">vue.jsとfirebaseで認証機能実装</h2>
  <p class="card__desc">
  <router-link class="btn-square" to="/article4">Read more</router-link>
  </p>
</article>
<br />

<article class="card">
  <img class="card__img" src="../assets/article/article3.jpg" decoding="async">
  <div class="card__meta">
    <p class="card__cat">vue.js</p>
    <time class="card__time" datetime="2020-09-27">2020.09.27</time>
  </div>
  <h2 class="card__ttl">SPAの「/」以外でリロードすると404エラーになる</h2>
  <p class="card__desc">
  <router-link class="btn-square" to="/article3">Read more</router-link>
  </p>
</article>
<br />

<article class="card">
  <img class="card__img" src="../assets/article/article2.jpg" decoding="async">
  <div class="card__meta">
    <p class="card__cat">vue.js</p>
    <time class="card__time" datetime="2020-09-24">2020.09.24</time>
  </div>
  <h2 class="card__ttl">リモートリポジトリ内を別のプロジェクトで上書き</h2>
  <p class="card__desc">
  <router-link class="btn-square" to="/article2">Read more</router-link>
  </p>
</article>
<br />

<article class="card">
  <img class="card__img" src="../assets/article/article1.jpg" decoding="async">
  <div class="card__meta">
    <p class="card__cat">vue.js</p>
    <time class="card__time" datetime="2020-09-22">2020.09.22</time>
  </div>
  <h2 class="card__ttl">vue.jsとnetlifyでブログ作成</h2>
  <p class="card__desc">
  <router-link class="btn-square" to="/article1">Read more</router-link>
  </p>
</article>
<br />

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
