<template>
  <div id="md" v-highlight>
    <vue-markdown :source="source"></vue-markdown>
  </div>
</template>

<script>
import VueMarkdown from 'vue-markdown'

export default {
  el: '#md',
  components: {
    VueMarkdown
  },
  data () {
    return {
      source: ''
    }
  },
  created () {
    /* publicフォルダに置いたmdファイルを取得する */
    this.$axios
      .get(`./markDownSource/${this.$route.params.id}.md`)
      .then(response => (this.source = response.data))
  }
}
</script>

<style link rel=preload>
#md {
  margin: 20px;
}

#md img {
    border: 5px solid green;
    max-width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
}

pre {
    margin: 1em 0; /* ブロック前後の余白 */
    padding: 1em; /* ブロック内の余白 */
    border-radius: 5px; /* 角丸 */
    background: #25292f; /* 背景色 */
    color: #fff;
}

#md h1 {
    padding: 1rem 2rem;
    border-left: 4px solid #000;
    margin-bottom: 5px;
    background: #f4f4f4;
  }

#md h2 {
    border-bottom: 3px solid #000;
    margin-top: 10px;
    margin-bottom: 10px;
  }

#md h3 {
    border-bottom: 6px double #000;
    margin-top: 10px;
    margin-bottom: 10px;
  }

#md h4 {
    border-bottom: 2px solid #000;
    margin-top: 10px;
    margin-bottom: 10px;
  }

/*

Style with support for rainbow parens

*/

.hljs {
  display: block;
  overflow-x: auto;
  padding: 0.5em;
  background: #25292f;
  color: #d1d9e1;
}

.hljs-comment,
.hljs-quote {
  color: #969896;
  font-style: italic;
}

.hljs-keyword,
.hljs-selector-tag,
.hljs-literal,
.hljs-type,
.hljs-addition {
  color: #cc99cc;
}

.hljs-number,
.hljs-selector-attr,
.hljs-selector-pseudo {
  color: #f99157;
}

.hljs-string,
.hljs-doctag,
.hljs-regexp {
  color: #8abeb7;
}

.hljs-title,
.hljs-name,
.hljs-section,
.hljs-built_in {
  color: #b5bd68;
}

.hljs-variable,
.hljs-template-variable,
.hljs-selector-id,
.hljs-class .hljs-title {
   color: #ffcc66;
}

.hljs-section,
.hljs-name,
.hljs-strong {
  font-weight: bold;
}

.hljs-symbol,
.hljs-bullet,
.hljs-subst,
.hljs-meta,
.hljs-link {
  color: #f99157;
}

.hljs-deletion {
  color: #dc322f;
}

.hljs-formula {
  background: #eee8d5;
}

.hljs-attr,
.hljs-attribute {
  color: #81a2be;
}

.hljs-emphasis {
  font-style: italic;
}

</style>
