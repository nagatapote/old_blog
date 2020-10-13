<template>
  <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
    <input type="hidden" name="form-name" value="contact" />
    <label>Your Name: <input type="text" name="name" /></label>
    <label>Your Email: <input type="email" name="email" /></label>
    <label>Message: <textarea name="message"></textarea></label>
    <button v-on:click="submit">Send</button>
  </form>
</template>

<script>
export default {
  methods: {
    submit: function () {
      this.$router.push('thanks')
    }
  }
}
</script>
