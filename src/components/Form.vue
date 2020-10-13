<template>
  <v-container tag="section">
    <v-row>
      <v-col
        v-text="title.toUpperCase()"
        cols="12"
        tag="h1"
      />
    </v-row>
    <v-form name="contact" method="post" netlify data-netlify="true">
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
      message: ''
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
