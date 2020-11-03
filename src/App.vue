<template>
  <div>
    <header>
      <ul class="topnav">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/About">Profile</router-link></li>
        <li><router-link to="/Article_1">Article</router-link></li>
      </ul>
    </header>
    <div class="left">
      <router-view />
    </div>
    <center>
      <div class="right">
        <div class="profile-card">
          <div class="profile-card__inner">
            <div class="profile-thumb">
              <img src="./assets/profile.png" alt="アイコン" />
            </div>
            <div class="profile-content">
              <span class="profile-name">永田浩晃(Hiroaki Nagata)</span>
              <span class="profile-intro">ITエンジニア<br />ミニマリスト</span>
            </div>
            <div class="profile-sns">
              <span>FOLLOW ME</span>
              <a target="_blank" href="https://twitter.com/pote_nagata"
                ><img src="./assets/twitter.png" width="30px" height="30px"
              /></a>
              <a target="_blank" href="https://github.com/nagatapote"
                ><img src="./assets/GitHub.png" width="30px" height="30px"
              /></a>
              <router-link to="/Form"
                ><img src="./assets/mail.png" width="30px" height="30px"
              /></router-link>
            </div>
          </div>
        </div>
        <div class="adr">
          <Adsense
            data-ad-client="ca-pub-3401994941764286"
            data-ad-slot="7553735009"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></Adsense>
        </div>
      </div>
    </center>
    <footer>&copy; 2020 pote's blog</footer>
  </div>
</template>

<script>
import "./css/App.css";
export default {
  name: "App",
};
</script>
