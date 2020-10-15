import markdownIt from 'markdown-it'

export default {
  md: markdownIt(),
  template: '<div><slot></slot></div>',
  data () {
    return {
      sourceData: this.source
    }
  },
  props: {
    watches: {
      type: Array,
      default: () => ['source', 'show']
    },
    source: {
      type: String,
      default: ''
    },
    show: {
      type: Boolean,
      default: true
    },
    html: {
      type: Boolean,
      default: true
    },
    prerender: {
      type: Function,
      default: (sourceData) => { return sourceData }
    },
    postrender: {
      type: Function,
      default: (htmlData) => { return htmlData }
    }
  },
  render (createElement) {
    this.md = markdownIt()
    this.md.set({
      html: this.html
    })
    this.md.renderer.rules.table_open = () => `<table class="${this.tableClass}">\n`
    const defaultLinkRenderer = this.md.renderer.rules.link_open ||
      function (tokens, idx, options, env, self) {
        return self.renderToken(tokens, idx, options)
      }
    this.md.renderer.rules.link_open = (tokens, idx, options, env, self) => {
      Object.keys(this.anchorAttributes).map((attribute) => {
        const aIndex = tokens[idx].attrIndex(attribute)
        const value = this.anchorAttributes[attribute]
        if (aIndex < 0) {
          tokens[idx].attrPush([attribute, value]) // add new attribute
        } else {
          tokens[idx].attrs[aIndex][1] = value
        }
      })
      return defaultLinkRenderer(tokens, idx, options, env, self)
    }
    let outHtml = this.show
      ? this.md.render(
        this.prerender(this.sourceData)
      ) : ''
    outHtml = this.postrender(outHtml)
    this.$emit('rendered', outHtml)
    return createElement(
      'div', {
        domProps: {
          innerHTML: outHtml
        }
      }
    )
  },
  beforeMount () {
    if (this.$slots.default) {
      this.sourceData = ''
      for (const slot of this.$slots.default) {
        this.sourceData += slot.text
      }
    }
    this.$watch('source', () => {
      this.sourceData = this.prerender(this.source)
      this.$forceUpdate()
    })
  }
}
