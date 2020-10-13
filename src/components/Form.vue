<template>
<div>
  <v-col
    v-text="title.toUpperCase()"
    cols="12"
    tag="h1"
  />
  <v-form
    ref="form"
    name="contact"
    method="post"
    netlify
    data-netlify="true"
    v-model="valid"
    lazy-validation
  >
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
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
      Submit
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Reset Form
    </v-btn>
  </v-form>
  </div>
</template>

<script>
export default {
  data: () => ({
    title: 'contact',
    valid: true,
    name: '',
    nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters'
    ],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
    ]
  }),
  methods: {
    validate () {
      this.$refs.form.validate()
    },
    reset () {
      this.$refs.form.reset()
    }
  }
}
</script>
