<template>
  <div id="article_1">
    <h2>Article</h2><br/>

<v-btn to="/Article_1">1</v-btn>
<v-btn to="/Article_2">2</v-btn><br /><br />

<v-card class="mx-auto" max-width="400">
  <v-img class="white--text align-end" height="200px" src="../assets/article/article12.jpg">
    <v-card-title>vue.js</v-card-title>
  </v-img>
    <v-card-subtitle class="pb-0">2020/10/12</v-card-subtitle>
    <v-card-text class="text--primary">
      <div>vue.jsでじゃんけんゲームを作ってみた</div>
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" to="/article12">ReadMore</v-btn>
    </v-card-actions>
  </v-card>
  <br><br>

<v-card class="mx-auto" max-width="400">
  <v-img class="white--text align-end" height="200px" src="../assets/article/article11.jpg">
    <v-card-title>vue.js</v-card-title>
  </v-img>
    <v-card-subtitle class="pb-0">2020/10/10</v-card-subtitle>
    <v-card-text class="text--primary">
      <div>vue-markdown-highlightでシンタックスハイライトを実装した</div>
    </v-card-text>
    <v-card-actions>
      <v-btn color="primary" to="/article11">ReadMore</v-btn>
    </v-card-actions>
  </v-card>
  <br><br>

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

  <br/>
  <v-btn to="/Article_1">1</v-btn>
<v-btn to="/Article_2">2</v-btn><br /><br />
  </div>
</template>

<style>

#article_1 {
  text-align: center;
}

</style>
