<template>
  <div class="home" id="home">
    <h2>Article</h2><br>

<v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://cdn.pixabay.com/photo/2016/08/11/23/48/italy-1587287_960_720.jpg"
    >
    </v-img>

    <v-card-subtitle class="pb-0">2020/09/27</v-card-subtitle>

    <v-card-text class="text--primary">
      <div>SPAの「/」以外でリロードすると404エラーになる</div>
    </v-card-text>
    <v-card-actions>
      <v-btn
        color="orange"
        text
        to="/article3"
      >
        ReadMore
      </v-btn>
    </v-card-actions>
  </v-card>
  <br><br>

<v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://cdn.pixabay.com/photo/2019/05/19/15/02/sea-4214277_960_720.jpg"
    >
    </v-img>

    <v-card-subtitle class="pb-0">2020/09/24</v-card-subtitle>

    <v-card-text class="text--primary">
      <div>リモートリポジトリ内を別のプロジェクトで上書き</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange"
        text
        to="/article2"
      >
        ReadMore
      </v-btn>
    </v-card-actions>
  </v-card>
  <br><br>

  <v-card
    class="mx-auto"
    max-width="400"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
    </v-img>

    <v-card-subtitle class="pb-0">2020/09/22</v-card-subtitle>

    <v-card-text class="text--primary">
      <div>vue.jsとnetlifyでブログ作成</div>
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
  <br><br>
  </div>
</template>

<style>

#home {
  text-align: center;
}

</style>
