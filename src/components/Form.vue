<template>
  <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
    <input type="hidden" name="form-name" value="contact" />
    <label>Your Name: <input type="text" name="name" /></label>
    <label>Your Email: <input type="email" name="email" /></label>
    <label>Message: <textarea name="message"></textarea></label>
    <button @submit.prevent="handleSubmit">Send</button>
  </form>
</template>

<script>
import axios from 'axios'

export default {
  methods: {
    encode (data) {
      return Object.keys(data)
        .map(
          key => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join('&')
    },
    handleSubmit () {
      const axiosConfig = {
        header: { 'Content-Type': 'application/x-www-form-urlencoded' }
      }
      axios.post(
        '/',
        this.encode({
          'form-name': 'contact',
          ...this.form
        })
          .then(() => {
            this.$router.push('thanks')
          })
          .catch(() => {
            this.$router.push('404')
          }),
        axiosConfig
      )
    }
  }
}
</script>
