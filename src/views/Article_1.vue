<template>
<center>
  <div id="article_1">
    <h1>Article</h1>

<router-link class="btn-square" to="/Article_1">1</router-link>&nbsp;
<router-link class="btn-square" to="/Article_2">2</router-link><br /><br />

<div class="card card-skin">
  <div class="card__imgframe12"></div>
  <div class="card__textbox">
    <div class="card__titletext">
      vue.jsでじゃんけんゲームを作ってみた
    </div>
    <div class="card__overviewtext">
      【vue.js】2020/10/12
    </div>
    <router-link class="btn-square" to="/article12">Read more</router-link>
  </div>
</div>
<br><br>

<div class="card card-skin">
  <div class="card__imgframe11"></div>
  <div class="card__textbox">
    <div class="card__titletext">
      vue-markdown-highlightでシンタックスハイライトを実装した
    </div>
    <div class="card__overviewtext">
      【vue.js】2020/10/10
    </div>
    <router-link class="btn-square" to="/article11">Read more</router-link>
  </div>
</div>
<br><br>

<div class="card card-skin">
  <div class="card__imgframe10"></div>
  <div class="card__textbox">
    <div class="card__titletext">
      Markdownファイルを１つのvueファイルからURLに応じて動的に読み込む
    </div>
    <div class="card__overviewtext">
      【vue.js】2020/10/09
    </div>
    <router-link class="btn-square" to="/article10">Read more</router-link>
  </div>
</div>
<br><br>

  <br/>
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
  width: 350px;
  height: auto;
}

.card__imgframe12{
  width: 100%;
  height: auto;
  padding-top: 56.25%;
  background: url(../assets/article/article12.jpg) no-repeat center;
  background-size: cover;
  box-sizing: border-box;
}

.card__imgframe11{
  width: 100%;
  height: auto;
  padding-top: 56.25%;
  background: url(../assets/article/article11.jpg) no-repeat center;
  background-size: cover;
  box-sizing: border-box;
}

.card__imgframe10{
  width: 100%;
  height: auto;
  padding-top: 56.25%;
  background: url(../assets/article/article10.jpg) no-repeat center;
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
