<template>
  <div>
    <form @submit.prevent="handle_login(credentials)">
      <input v-model="credentials.email" type="text" placeholder="email">
      <input v-model="credentials.password" type="password" placeholder="password">
      <button>Login</button>
    </form>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data () {
      return {
        credentials: {
          email: '',
          password: ''
        }
      }
    },

    methods: {
      handle_login (credentials) {
        this.$store.dispatch('login', {credentials, axios: this.$axios})
          .then(res => {
            this.$router.push('/dashboard')
          })
      }
    }
  }
</script>
