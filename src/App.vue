<template>
<div>
<header>
<h1>pote's blog</h1>
<ul class="topnav">
  <li><router-link to="/">Home</router-link></li>
  <li><router-link to="/About">Profile</router-link></li>
  <li><router-link to="/Article_1">Article</router-link></li>
  <li><router-link to="/Form">Contact</router-link></li>
  <li><a target="_blank" href="https://twitter.com/pote_nagata">Twitter</a></li>
  <li><a target="_blank" href="https://github.com/nagatapote">Github</a></li>
</ul>
</header>
<router-view />
<footer>
&copy; 2020 pote's blog
</footer>
</div>
</template>

<style>
body{
  padding-top: 140px;
  padding-bottom: 75px
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
  background-color: #1b2538;
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
ul.topnav li a.active {
  background-color: #da3c41
}

</style>
