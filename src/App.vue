<template>
<div>
<header>
  <h1>pote's blog</h1>
<input type="checkbox" id="cp_navimenuid">
<label class="menu" for="cp_navimenuid">
<div class="menubar">
Menu
</div>

<ul>
  <li><router-link to="/">Home</router-link></li>
  <li><router-link to="/About">Profile</router-link></li>
  <li><router-link to="/Article_1">Article</router-link></li>
  <li><router-link to="/Form">Contact</router-link></li>
  <li><a target="_blank" href="https://twitter.com/pote_nagata">Twitter</a></li>
  <li><a target="_blank" href="https://github.com/nagatapote">Github</a></li>
</ul>
</label>
</header>
<router-view />
<footer>
&copy; 2020 pote's blog
</footer>
</div>
</template>

<style>
body{
  padding-top: 160px;
  padding-bottom: 75px
}
header{
  padding: 10px;
  position: fixed;
  width: 100%;
  top: 0;
  background-color: white
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
*, *:before, *:after {
  -webkit-box-sizing: border-box;
          box-sizing: border-box
}
.menu {
  display: block;
  overflow: hidden;
  width: 150px;
  height: 30px;
  margin: 0px auto;
  cursor: pointer;
  -webkit-transition: all 0.5s ease-in-out;
          transition: all 0.5s ease-in-out;
  border: 3px solid transparent;
  background-color: #1b2538;
}
.menubar{
  color: white;
  text-align: center
}
.menu ul {
  display: none;
  margin: 0;
  padding: 0;
  -webkit-transition: all 0.5s ease;
          transition: all 0.5s ease;
  text-align: center;
  opacity: 0
}
.menu ul li {
  display: inline-block
}
.menu ul li a {
  display: inline-block;
  padding: 0.7em 0.5em;
  -webkit-transition: all 0.3s ease-in;
          transition: all 0.3s ease-in;
  text-decoration: none;
  color: #1b2538;
  border-bottom: 4px solid transparent;
  height: 56px;
  line-height: 2em
}
.menu ul li a:hover {
  color: #ffffff;
  background-color: #1b2538
}
.menu ul li a:target {
  border-bottom-color: #1b2538
}
/* クリックした時の動き */
#cp_navimenuid {
  display: none
}
#cp_navimenuid:checked ~ .menu {
  width: 100%;
  height: 60px;
  border: 3px solid #1b2538;
  border-radius: 5px;
  background-color: transparent
}
#cp_navimenuid:checked ~ .menu > ul {
  display: block;
  opacity: 1
}
#cp_navimenuid:checked ~ .menu > .menubar {
  display: none
}

</style>
