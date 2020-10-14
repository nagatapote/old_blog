<template>
<center>
  <div id="article_2">
    <h2>Article</h2><br/>

<router-link class="btn-square" to="/Article_1">1</router-link>&nbsp;
<router-link class="btn-square" to="/Article_2">2</router-link><br /><br />

<div class="card card-skin">
  <div class="card__imgframe9"></div>
  <div class="card__textbox">
    <div class="card__titletext">
      VueRouterで画面遷移時のスクロール位置制御
    </div>
    <div class="card__overviewtext">
      【vue.js】2020/10/06
    </div>
    <router-link class="btn-square" to="/article9">Read more</router-link>
  </div>
</div>
<br><br>

<div class="card card-skin">
  <div class="card__imgframe8"></div>
  <div class="card__textbox">
    <div class="card__titletext">
      vue.config.jsからページタイトルを設定する方法
    </div>
    <div class="card__overviewtext">
      【vue.js】2020/10/05
    </div>
    <router-link class="btn-square" to="/article8">Read more</router-link>
  </div>
</div>
<br><br>

<div class="card card-skin">
  <div class="card__imgframe7"></div>
  <div class="card__textbox">
    <div class="card__titletext">
      nodebrewでnodeのバージョン管理
    </div>
    <div class="card__overviewtext">
      【node.js】2020/10/03
    </div>
    <router-link class="btn-square" to="/article7">Read more</router-link>
  </div>
</div>
<br><br>

<div class="card card-skin">
  <div class="card__imgframe6"></div>
  <div class="card__textbox">
    <div class="card__titletext">
      core-jsモジュールエラー
    </div>
    <div class="card__overviewtext">
      【vue.js】2020/09/30
    </div>
    <router-link class="btn-square" to="/article6">Read more</router-link>
  </div>
</div>
<br><br>

<div class="card card-skin">
  <div class="card__imgframe5"></div>
  <div class="card__textbox">
    <div class="card__titletext">
      Vuetifyの導入方法
    </div>
    <div class="card__overviewtext">
      【vue.js】2020/09/29
    </div>
    <router-link class="btn-square" to="/article5">Read more</router-link>
  </div>
</div>
<br><br>

<div class="card card-skin">
  <div class="card__imgframe4"></div>
  <div class="card__textbox">
    <div class="card__titletext">
      vue.jsとfirebaseで認証機能実装
    </div>
    <div class="card__overviewtext">
      【vue.js】2020/09/27
    </div>
    <router-link class="btn-square" to="/article4">Read more</router-link>
  </div>
</div>
<br><br>

<div class="card card-skin">
  <div class="card__imgframe3"></div>
  <div class="card__textbox">
    <div class="card__titletext">
      SPAの「/」以外でリロードすると404エラーになる
    </div>
    <div class="card__overviewtext">
      【vue.js】2020/09/27
    </div>
    <router-link class="btn-square" to="/article3">Read more</router-link>
  </div>
</div>
<br><br>

<div class="card card-skin">
  <div class="card__imgframe2"></div>
  <div class="card__textbox">
    <div class="card__titletext">
      リモートリポジトリ内を別のプロジェクトで上書き
    </div>
    <div class="card__overviewtext">
      【vue.js】2020/09/24
    </div>
    <router-link class="btn-square" to="/article2">Read more</router-link>
  </div>
</div>
<br><br>

<div class="card card-skin">
  <div class="card__imgframe1"></div>
  <div class="card__textbox">
    <div class="card__titletext">
      vue.jsとnetlifyでブログ作成
    </div>
    <div class="card__overviewtext">
      【vue.js】2020/09/22
    </div>
    <router-link class="btn-square" to="/article1">Read more</router-link>
  </div>
</div>
<br><br>

<router-link class="btn-square" to="/Article_1">1</router-link>&nbsp;
<router-link class="btn-square" to="/Article_2">2</router-link><br /><br />
  </div>
  </center>
</template>

<style>
.card-skin{
  box-shadow: 2px 2px 6px rgba(0,0,0,.4);
}

.card{
  width: 400px;
  height: auto;
}

.card__imgframe9{
  width: 100%;
  height: auto;
  padding-top: 56.25%;
  background: url(../assets/article/article9.jpg) no-repeat center;
  background-size: cover;
  box-sizing: border-box;
}

.card__imgframe8{
  width: 100%;
  height: auto;
  padding-top: 56.25%;
  background: url(../assets/article/article8.jpg) no-repeat center;
  background-size: cover;
  box-sizing: border-box;
}

.card__imgframe7{
  width: 100%;
  height: auto;
  padding-top: 56.25%;
  background: url(../assets/article/article7.jpg) no-repeat center;
  background-size: cover;
  box-sizing: border-box;
}

.card__imgframe6{
  width: 100%;
  height: auto;
  padding-top: 56.25%;
  background: url(../assets/article/article6.jpg) no-repeat center;
  background-size: cover;
  box-sizing: border-box;
}

.card__imgframe5{
  width: 100%;
  height: auto;
  padding-top: 56.25%;
  background: url(../assets/article/article5.jpg) no-repeat center;
  background-size: cover;
  box-sizing: border-box;
}

.card__imgframe4{
  width: 100%;
  height: auto;
  padding-top: 56.25%;
  background: url(../assets/article/article4.jpg) no-repeat center;
  background-size: cover;
  box-sizing: border-box;
}

.card__imgframe3{
  width: 100%;
  height: auto;
  padding-top: 56.25%;
  background: url(../assets/article/article3.jpg) no-repeat center;
  background-size: cover;
  box-sizing: border-box;
}

.card__imgframe2{
  width: 100%;
  height: auto;
  padding-top: 56.25%;
  background: url(../assets/article/article2.jpg) no-repeat center;
  background-size: cover;
  box-sizing: border-box;
}

.card__imgframe1{
  width: 100%;
  height: auto;
  padding-top: 56.25%;
  background: url(../assets/article/article1.jpg) no-repeat center;
  background-size: cover;
  box-sizing: border-box;
}

.card__textbox{
  width: 100%;
  height: auto;
  padding: 20px 18px;
  background: #ffffff;
  box-sizing: border-box;
}

.card__textbox > * + *{
  margin-top: 10px;
}

.card__titletext{
  font-size: 20px;
  font-weight: bold;
  line-height: 125%;
}

.card__overviewtext{
  font-size: 12px;
  line-height: 150%;
}

.btn-square {
  display: inline-block;
  padding: 0.5em 1em;
  text-decoration: none;
  background: #668ad8;/*ボタン色*/
  color: #FFF;
  border-bottom: solid 4px #627295;
  border-radius: 3px;
}
.btn-square:active {
  /*ボタンを押したとき*/
  -webkit-transform: translateY(4px);
  transform: translateY(4px);/*下に動く*/
  border-bottom: none;/*線を消す*/
}

</style>
