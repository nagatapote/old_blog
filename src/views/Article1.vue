<template>
  <div id="article1">
    <h2>Article</h2><br/>

<v-btn to="/Article1">1</v-btn>
<v-btn to="/Article2">2</v-btn><br /><br />

<v-card class="mx-auto" max-width="400">
  <v-img class="white--text align-end" height="200px" src="../assets/article/article10.jpg">
    <v-card-title>vue.js</v-card-title>
  </v-img>
    <v-card-subtitle class="pb-0">2020/10/09</v-card-subtitle>
    <v-card-text class="text--primary">
      <div>Markdownファイルを１つのvueファイルからURLに応じて動的に読み込む</div>
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" to="/article10">ReadMore</v-btn>
    </v-card-actions>
  </v-card>
  <br><br>
  <br/>
  <v-btn to="/Article1">1</v-btn>
<v-btn to="/Article2">2</v-btn><br /><br />
  </div>
</template>

<style>

#article1 {
  text-align: center;
}

</style>
