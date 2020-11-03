<template>
  <div class="md" v-highlight>
    <vue-markdown :source="source"></vue-markdown>
  </div>
</template>

<script>
import Vue from "vue";
import "../css/Markdown.css";
import VueMarkdown from "../plugins/vuemarkdown.js";
import Hljs from "highlight.js/lib/core.js";
import javascript from "highlight.js/lib/languages/javascript";
import html from "highlight.js/lib/languages/xml.js";
import css from "highlight.js/lib/languages/css.js";
import json from "highlight.js/lib/languages/json.js";

Hljs.registerLanguage("javascript", javascript);
Hljs.registerLanguage("html", html);
Hljs.registerLanguage("css", css);
Hljs.registerLanguage("json", json);

const Highlight = {};
Highlight.install = function (Vue, options) {
  Vue.directive("highlight", function (el) {
    const blocks = el.querySelectorAll("pre code");
    blocks.forEach((block) => {
      Hljs.highlightBlock(block);
    });
  });
};

Vue.use(Highlight);

export default {
  el: "md",
  components: {
    VueMarkdown,
  },
  data() {
    return {
      source: "",
    };
  },
  created() {
    /* publicフォルダに置いたmdファイルを取得する */
    this.$axios
      .get(`./markDownSource/${this.$route.params.id}.md`)
      .then((response) => (this.source = response.data));
  },
  watch: {
    $route() {
      this.$axios
        .get(`./markDownSource/${this.$route.params.id}.md`)
        .then((response) => (this.source = response.data));
    },
  },
};
</script>
