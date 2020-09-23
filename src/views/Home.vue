<template>
  <div class="home" id="home">
    <h2>記事一覧</h2>
  <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
      <v-card-title>vue.jsとnetlifyでブログ作成</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">2020/09/22</v-card-subtitle>

    <v-card-text class="text--primary">
      <div>vue.jsとgithubの連携</div>

      <div>githubとnetlifyの連携</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange"
        text
        to="/article1"
      >
        ReadMore
      </v-btn>
    </v-card-actions>
  </v-card>
  </div>
</template>

<style>

#home {
  text-align: center;
}

</style>
