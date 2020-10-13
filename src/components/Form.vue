<template>
  <v-container tag="section">
    <v-row>
      <v-col
        v-text="title.toUpperCase()"
        cols="12"
        tag="h1"
      />
    </v-row>
    <v-form method="post" netlify>
      <v-text-field
        v-show="false"
        v-model="title"
        name="form-name"
      />
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="name"
            label="name"
            name="name"
            autofocus
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            name="email"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-textarea
            v-model="message"
            label="message"
            name="message"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-btn
            :disabled="isEmpty"
            type="submit"
          >
            submit
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      title: 'contact',
      name: '',
      email: '',
      message: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
      ]
    }
  },
  computed: {
    isEmpty () {
      if (
        this.name !== '' &&
        this.email !== '' &&
        this.message !== ''
      ) {
        return false
      }
      return true
    }
  }
}
</script>
