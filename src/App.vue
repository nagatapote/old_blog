<template>
<div id="all">
<link href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" rel="stylesheet">
  <div id="nav">
<h1>pote's blog</h1>
    <a><router-link to="/">TOP</router-link></a> |
    <a><router-link to="/about">PROFILE</router-link></a> |
    <a href="https://github.com/nagatapote"><i class="fab fa-github"></i></a> |
    <a href="https://twitter.com/pote_nagata"><i class="fab fa-twitter"></i></a>
  </div>
    <router-view/>
  <footer>
   <div id="nav_c">
    </div>
    <div id="nav_u">
      <p>© 2020 pote's blog</p>
    </div>
    </footer>
</div>
</template>

<style>
#all {
    text-align: center;
    margin-left:20px;
    margin-right:20px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
}

#nav {
  padding: 10px;
  border-bottom: 5px solid #ccc;
  text-align: left;
}

#nav h1 {
  background-color: #2c3e50;
  color: #FFFFFF;
  line-height: 3;
  text-align: center;
}

#nav_u p {
  background-color: #2c3e50;
  color: #FFFFFF;
  line-height: 3;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
