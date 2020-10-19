<template>
<div>
<header>
<ul class="topnav">
  <li><router-link to="/">Home</router-link></li>
  <li><router-link to="/About">Profile</router-link></li>
  <li><router-link to="/Article_1">Article</router-link></li>
</ul>
</header>
<div id="left">
  <div id="adu">
<Adsense data-ad-client="ca-pub-3401994941764286" data-ad-slot="1710928227"></Adsense>
  </div>
<router-view />
</div>
<center>
<div id="right">
<div class="profile-card">
  <div class="profile-card__inner">
  <div class="profile-thumb">
    <img src="./assets/profile.png" alt="アイコン">
  </div>
  <div class="profile-content">
        <span class="profile-name">永田浩晃(Hiroaki Nagata)</span>
    <span class="profile-intro">ITエンジニア<br />ミニマリスト</span>
  </div>
  <div class="profile-sns">
    <span>FOLLOW ME</span>
    <a target="_blank" href="https://twitter.com/pote_nagata"><img src="./assets/twitter.png" width="30px" height="30px"></a>
    <a target="_blank" href="https://github.com/nagatapote"><img src="./assets/GitHub.png" width="30px" height="30px"></a>
    <router-link to="/Form"><img src="./assets/mail.png" width="30px" height="30px"></router-link>
  </div>
</div>
</div>
<div id="adr">
<Adsense data-ad-client="ca-pub-3401994941764286" data-ad-slot="7553735009"></Adsense>
</div>
  </div>
  </center>
<footer>
&copy; 2020 pote's blog
</footer>
</div>
</template>

<style>
body{
  padding-top: 40px;
}
header{
  padding: 5px;
  position: fixed;
  width: 100%;
  top: 0;
  background-color: #1b2538;
  color: white
}
footer{
  margin-top: 20px;
  padding: 15px;
  background-color: #1b2538;
  color:white;
  position: fixed;
  width: 100%;
  bottom: 0
}
ul.topnav {
  overflow: hidden;
  margin: 0;
  padding: 0;
  list-style-type: none;
  background-color: #1b2538
}
#adu{
  width: 80%;
  margin: 25px
}
#adr{
  width: 80%;
  margin: 25px
}
#left{
  float: left;
  width: 72%;
  padding-bottom: 75px
}

#right{
  float: right;
  width: 28%;
  right: 0;
  margin-top: 25px;
  position: fixed;
  padding-bottom: 75px
}
@media screen and (max-width: 480px) {
  #right{
    float: none;
    width: 100%;
    right: none;
    position: relative;
  }
  #left{
    float: none;
    width: 100%
  }
}
ul.topnav li {
  float: left
}
ul.topnav li a {
  display: block;
  padding: 10px 10px;
  text-align: center;
  text-decoration: none;
  color: white
}
ul.topnav li a:hover:not(.active) {
  background-color: #a9bce2
}
.profile-card{
  width: 80%;
  max-width: 300px;
  position: relative;
  background: #fff;
  box-shadow: 0px 1px 3px rgba(0,0,0,.18);
  overflow: hidden;
  margin: 25px
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
 background: white;
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
    width: 120px;
    height: 120px;
    border: #fff 3px solid;
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
  margin: 0 0 5px;
  padding: 0px
}
.profile-content span{
  display: block
}
.profile-name{
  margin-bottom: 3px;
  font-weight: bold;
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
  color: black;
  font-size: 15px
}
.profile-sns a {
  font-size: 30px;
    margin: 0 5px;
    color: #fff
}
</style>
