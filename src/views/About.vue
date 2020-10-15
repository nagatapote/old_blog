<template>
<div id="about">
<center>
    <h1>Profile</h1>
<div class="profile-card">
  <div class="profile-card__inner">
  <div class="profile-thumb">
    <img src="../assets/profile.png" alt="アイコン">
  </div>
  <div class="profile-content">
        <span class="profile-name">永田浩晃(Hiroaki Nagata)</span>
    <span class="profile-job">ITエンジニア</span>
    <span class="profile-intro">あだ名は"ぽて(pote)"<br />愛知県名古屋市在住<br />vue.jsを使ったフロントエンド開発の内容を書いています。<br />趣味はウクレレとよさこいです。<br />運動でウーバーイーツ配達員やってます。</span>
  </div>
  <div class="profile-sns">
    <span>FOLLOW ME</span>
    <a target="_blank" href="https://twitter.com/pote_nagata"><img src="../assets/twitter.png" width="30px" height="30px"></a>
    <a target="_blank" href="https://github.com/nagatapote"><img src="../assets/GitHub.png" width="30px" height="30px"></a>
    <router-link to="/Form"><img src="../assets/mail.png" width="30px" height="30px"></router-link>
  </div>
</div>
</div>
</center>
</div>
</template>

<style>
.profile-card{
  width: 100%;
  max-width:400px;
  position: relative;
  background: #fff;
  box-shadow: 0px 1px 3px rgba(0,0,0,.18);
  overflow: hidden
}
.profile-card:before{
 width:120%;
 height:130px;
 content:"";
 transform:skew(15deg,10deg);
 background: green;
 position:  absolute;
 top:-15%;
 left:-10%;
 z-index: 0
}
.profile-card:after{
 width:120%;
 height:140px;
 content:"";
 transform:skew(15deg,10deg);
 background: green;
 position:  absolute;
 bottom:-15%;
 left:-10%;
 z-index: 0
}
.profile-card__inner{
 position: relative;
  z-index: 1
}
.profile-thumb{
    overflow: hidden;
    width: 110px;
    height: 110px;
    border: #fff 3px solid;
    border-radius: 55px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 20px;
    background: #fff
}
.profile-thumb img{
  display: block;
    width: 100%;
    height: auto
}
.profile-content{
  margin: 0 0 49px;
  padding: 15px
}
.profile-content span{
  display: block
}
.profile-name{
  margin-bottom: 3px;
  font-weight: bold;
  text-align: center
}
.profile-job{
  margin-bottom: 10px;
  color: #ccc;
  font-size: 10px;
  text-align: center
}
.profile-intro{
  font-size: 12px
}
.profile-sns {
    padding: 5px 0;
    text-align: center;
    color: #fff
}
.profile-sns span{
  display: block;
  font-size: 10px
}
.profile-sns a {
  font-size: 30px;
    margin: 0 5px;
    color: #fff
}
</style>
