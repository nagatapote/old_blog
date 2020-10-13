<template>
  <v-app id="inspire">
    <v-navigation-drawer
      v-model="drawer"
      app
    >

      <v-list dense>
        <v-list-item to="/">
          <v-list-item-action>
            <v-icon>{{ mdiHome }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="/about">
          <v-list-item-action>
            <v-icon>{{ mdiAccount }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Profile</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="/Article_1">
          <v-list-item-action>
            <v-icon>{{ mdiBookOpenVariant }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Article</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item to="/Form">
          <v-list-item-action>
            <v-icon>{{ mdiEmail }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item href="https://twitter.com/pote_nagata">
          <v-list-item-action>
            <v-icon>{{ mdiTwitter }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Twitter</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

        <v-list-item href="https://github.com/nagatapote">
          <v-list-item-action>
            <v-icon>{{ mdiGithub }}</v-icon>
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
          <router-view />
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
import { mdiHome, mdiAccount, mdiBookOpenVariant, mdiEmail, mdiTwitter, mdiGithub } from '@mdi/js'

export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
    mdiHome: mdiHome,
    mdiAccount: mdiAccount,
    mdiBookOpenVariant: mdiBookOpenVariant,
    mdiEmail: mdiEmail,
    mdiTwitter: mdiTwitter,
    mdiGithub: mdiGithub
  })
}

</script>

<style>
#inspire {
  margin-left: 20px;
  margin-right: 20px;
}

</style>
