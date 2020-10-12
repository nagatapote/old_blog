<template>
<div id='form'>
<form name="contact" method="POST" netlify>
  <p>
    <label>Your Name: <input type="text" name="name" /></label>
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
    <label>Your Role: <select name="role[]" multiple>
      <option value="leader">Leader</option>
      <option value="follower">Follower</option>
    </select></label>
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>
</div>
</template>

<script>
import axios from 'axios'

export default {
  name: '#form',
  data () {
    return {
      form: {
        askPerson: ''
      }
    }
  },
  methods: {
    Submit () {
      axios.post('/',
        this.encode({
          "form-name": "contact",
          ...this.form
        }),
        axiosConfig
        )
        .then(() => {
          this.$router.push('thanks')
        })
        .catch(() => {
          this.$router.push('404')
        })
    }
  }
}
</script>
