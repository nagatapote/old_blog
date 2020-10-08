<template>
  <v-app id="inspire" v-cloak>
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-item to="/">
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="/about">
          <v-list-item-action>
            <v-icon>mdi-account</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Profile</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="/Article">
          <v-list-item-action>
            <v-icon>mdi-book-open-variant</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Article</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item href="https://twitter.com/pote_nagata">
          <v-list-item-action>
            <v-icon>mdi-twitter</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Twitter</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item href="https://github.com/nagatapote">
          <v-list-item-action>
            <v-icon>mdi-github</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Github</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="indigo"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>pote's blog</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <v-container>
        </v-container>
        <v-row>
          </v-row>
          <transition>
      <router-view />
          </transition>
    </v-main>
    <v-footer
      color="indigo"
      app
    >
      <span class="white--text">&copy; 2020 pote's blog</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: null
  })
}

</script>

<style>
#inspire {
  margin-left: 20px;
  margin-right: 20px;
}

.v-enter {
  opacity: 0;
  transform: translateY(-20px);
}

.v-enter-active {
   transition: opacity 300ms ease-out, transform 300ms ease-out;
}
.v-leave-to {
  opacity: 0;
  transform: scale(0.97);
}
.v-leave-active {
  transition: opacity 270ms ease-out, transform 270ms ease-out;
}
</style>
