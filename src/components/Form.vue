<template>
<div>
  <v-col
    v-text="title.toUpperCase()"
    cols="12"
    tag="h1"
  />
  <v-form
    ref="form"
    method="post"
    netlify
    lazy-validation
  >
  <v-text-field
    v-show="false"
    v-model="title"
    name="form-name"
  />
    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Name"
      name="name"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="E-mail"
      name="email"
      required
    ></v-text-field>

    <v-textarea
      v-model="message"
      label="message"
      name="message"
    />

    <v-btn
      type="submit"
      :disabled="valid"
      color="success"
      class="mr-4"
    >
      Submit
    </v-btn>
  </v-form>
  </div>
</template>

<script>
export default {
  data: () => ({
    title: 'contact',
    name: '',
    email: '',
    message: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters'
    ],
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
    ]
  }),
  computed: {
    valid () {
      if (
        this.name !== '' &&
        this.email !== '' &&
        this.message !== ''
      ) {
        return false
      } else {
        return true
      }
    }
  }
}
</script>
